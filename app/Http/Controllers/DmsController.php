<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\Customer;
use App\DeliveryNote;
use App\DmsComponent;
use App\Models\BillofLandingStageComponent;
use App\Models\BillofLandingStages;
use App\Quotation;
use App\Sof;
use App\Stage;

;

use App\Transformers\BillOfLandingTransformer;
use App\Voucher;
use Carbon\Carbon;
use Barryvdh\DomPDF\Facade as PDF;
use DateTime;
use Esl\Repository\InvNumRepo;
use Esl\Repository\ProjectRepo;
use Esl\Repository\UploadFileRepo;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class DmsController extends Controller
{
    use TablePresentableTrait;

    public function index(Request $request)
    {
        if ($request->expectsJson()) {

            $with = ['quote.services', 'customer'];

            $bl = app(BillOfLanding::class)->byStatus($request->get('status'));

            $collection = $this->presentWithoutPagination($bl, $request->all(), $with);

            $transformedResult = new Collection($collection, new BillOfLandingTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        $bl = BillOfLanding::with(['quote.services', 'customer'])->get();

        return view('dms.index')
            ->withDms($bl);
    }

//get sage customer DCLink
    public function customer($DCLink)
    {

        $bl = BillOfLanding::with(['quote.services', 'customer' => function ($query) use ($DCLink) {
            $query->where('DCLink', $DCLink);
        }])->get();


        return view('dms.customer')
            ->withCustomer(Customer::find($DCLink))
            ->withDms($bl);

    }

    public function edit($id)
    {
        $dms = BillOfLanding::with(['quote.services', 'quote.pettyCash.user', 'quote.cargo', 'deliverynotes', 'transports', 'images',
            'contracts', 'remarks', 'quote.docs', 'customer'])->findOrFail($id);

        $update = false;
        if ($dms->start == null || $dms->file_number == null || $dms->bl_number == null) {
            $update = true;
        }

        $vouchertype = Voucher::where('fk_iVoucherMaster', 1)->get();

        return view('dms.edit', compact('vouchertype'))
            ->withDms($dms)
            ->withUpdate($update)
            ->withStages(Stage::with(['components'])->get());
    }

    public function dsrStageStepDetails($id)
    {
        $dmsComponents = BillofLandingStages::where('bill_of_landings_id', $id)
            ->with(['sComponents.dmsComponents', 'sComponent.dmsComponents', 'billOfLandings'])
            ->get()
            ->reject(null);

        return $dmsComponents->filter(function ($value) {
            return !empty($value->sComponent->dmsComponents);
        })->map(function ($value,$key) {
            return [
                'no' => $key+1,
                'title' => $value->stage_name,
                'checklist_data' => $this->getChecklist($value)
            ];
        });
    }

    public function getChecklist($components)
    {
        return $components->sComponents->map(function ($value) use ($components) {
            return [
                'name' => $value->name,
                'type' => $value->type,
                'notification' => $value->notification,
                'timing' => $value->timing,
                'data_value' => $this->checklistData($value),
                'sub_checklist' => $value->subchecklist,
                'time_taken' => Carbon::parse($components->billOfLandings->created_at)->diffInMinutes(Carbon::parse($value->dmsComponents['created_at'])),
                'created_at' => formatToDate($value->dmsComponents['created_at'])
            ];
        });

    }

    public function checklistData($value)
    {
        $data = null;

        if ($value->type == 'text' || $value->type == 'checkbox') {
            $data = str_replace('"', "",ucfirst($value->dmsComponents['text']));
        }

        if ($value->type == 'checkbox') {
            $data = str_replace('"', "",ucfirst($value->dmsComponents['subchecklist']));
        }

        if ($value->type == 'file' && !empty($value->dmsComponents['doc_links'])) {
            $data = '/'.$value->dmsComponents['doc_links'];
        }

        if(empty($data)){
            $data = null;
        }

        return $data;
    }

    public function reportTransportRevenue()
    {
        $dms = BillOfLanding::with(['transports',
            'contracts', 'remarks', 'quote.docs', 'customer'])->get();

        return view('reports.transport-revenue')
            ->withDmss($dms);

    }

    public function downloadReport(Request $request)
    {
        $data = BillOfLanding::with(['transports',
            'contracts', 'remarks', 'quote.docs', 'customer'])
            ->whereBetween('created_at', [Carbon::parse($request->date1), Carbon::parse($request->date2)])->get();

        return view('reports.download-transport-revenue')
            ->withDmss($data);
    }

    public function store(Request $request)
    {
        $data = [];

        if ($request->has('checklist')) {

            foreach ($request->checklist as $key => $check) {
                $checklist = [];
                foreach ($check as $inner_key => $item) {
                    array_push($checklist, $inner_key);
                }
                array_push($data, [$key => ['components' => json_encode($checklist)]]);
            }

        }

        if ($request->has('text_value')) {

            foreach ($request->text_value as $key => $item) {
                array_push($data, [$key => ['text' => $item[0]]]);
            }
        }

        if ($request->has('remark')) {

            foreach ($request->remark as $key => $item) {
                array_push($data, [$key => ['remark' => $item[0]]]);
            }
        }

        if ($request->has('doc_links')) {
            foreach ($request->doc_links as $key => $doc_link) {
                $doc_array = [];
                foreach ($doc_link as $doc) {
                    $image = $doc;
                    $name = time() . '.' . $image->getClientOriginalExtension();
                    $filepath = 'documents/uploads/';

                    $image->move(public_path('documents/uploads/'), $name);
                    array_push($doc_array, $filepath . $name);
                }

                array_push($data, [$key => ['doc_links' => json_encode($doc_array)]]);

            }
        }

        $keys = [];

        $insertData = [];
        $now = Carbon::now();
        foreach ($data as $key => $datum) {
            foreach ($datum as $data_key => $value) {
                foreach ($value as $xkey => $inner) {
                    if (!array_key_exists($data_key, $keys)) {
                        array_push($insertData, [
                            'bill_of_landing_id' => $request->dms_id,
                            'stage_component_id' => $data_key,
                            'doc_links' => $xkey == "doc_links" ? $inner : null,
                            'text' => $xkey == "text" ? $inner : null,
                            'remark' => $xkey == "remark" ? $inner : null,
                            'subchecklist' => $xkey == "components" ? $inner : null,
                            'created_at' => $now,
                            'updated_at' => $now
                        ]);
                        $keys[$data_key] = $data_key;
                    } else {
                        foreach ($insertData as $skey => $test) {
                            array_push($insertData, [
                                'bill_of_landing_id' => $request->dms_id,
                                'stage_component_id' => $data_key,
                                'doc_links' => ($xkey == "doc_links" && $test['doc_links'] == null) ? $inner : $test['doc_links'],
                                'text' => ($xkey == "text" && $test['text'] == null) ? $inner : $test['text'],
                                'remark' => ($xkey == "remark" && $test['remark'] == null) ? $inner : $test['remark'],
                                'subchecklist' => ($test['subchecklist'] == null && $xkey == "components") ? $inner : $test['subchecklist'],
                                'created_at' => $now,
                                'updated_at' => $now
                            ]);

                            unset($insertData[$skey]);
                            break;
                        }
                    }

                }
            }
        }

        DmsComponent::insert($insertData);

        return redirect()->back();
    }

    public function addSof(Request $request)
    {
        $data = $request->all();
        $data['from'] = Carbon::parse($request->from);
        $data['to'] = Carbon::parse($request->to);


        $sof = Sof::create($data);

        return Response(['success' => '<tr>' .
            '<td>' . $sof->created_at . '</td>' .
            '<td>' . Carbon::parse($sof->from)->format('H:i') . 'HRS</td>' .
            '<td>' . Carbon::parse($sof->to)->format('H:i') . 'HRS</td>' .
            '<td>' . $sof->crane_working . '</td>' .
            '<td>' . ucfirst($sof->remarks) . '</td>' .
            '</tr>']);
    }

    public function updateDms(Request $request)
    {
        $data = $request;


        $dms = BillOfLanding::with(['quote'])->findOrFail($request->dms_id);

        $dms->update([
            'client_notification' => $data['client_notification'],
            'start' => $data['location'],
            'destination' => $data['destination'],
            'cargo_weight' => $data['cargo_weight'],
            'desc' => $data['cargo_name'],
            'remarks' => $data['remarks'],
            'shipper' => $data['shipper'],
            'shipping_line' => $data['shipping_line'],
            'eta' => $data['eta'],
            'taxes_paid' => $data['taxes_paid'],
            'custom_approval' => $data['custom_approval'],
            'shipment_availability' => $data['shipment_availability'],
            'verification' => $data['verification'],
            'stakeholder_release' => $data['stakeholder_release'],
            'loading' => $data['loading'],
            'levis_paid' => $data['levis_paid'],
            'stuffing_date' => $data['stuffing_date'],
            'container_pick_date' => $data['container_pick_date'],
            'get_in_date' => $data['get_in_date'],
            'hold_removal' => $data['hold_removal'],
            'handing_over' => $data['handing_over'],
            'bl_number' => $data['bl_no']
        ]);

        $jobs = BillOfLanding::whereYear('updated_at', date('Y'))->count() + 1;
        $file_no = $request->job_type . '/' . $jobs . '/' . Carbon::now()->format('y') . strtoupper($request->branch);
        $ctm_ref = $request->ctm_ref == null ? $file_no : $request->ctm_ref;
        $dms->update(['ctm_ref' => $ctm_ref, 'code_name' => $file_no, 'file_number' => $file_no]);

        $quote = Quotation::findOrFail($dms->quote_id);

        $quote->project_int = ProjectRepo::init()->makeProject($file_no);
        $quote->save();


        alert()->success('Update', 'Project updated successfully and email sent to finance');

        return redirect()->back();
    }

    public function updateDSR(Request $request)
    {

        BillOfLanding::find(request()->get('id'))->update([
            'file_number' => $request->get('file_number'),
            'ctm_ref' => $request->get('ctm_ref'),
            'bl_number' => $request->get('bl_number'),
            'cargo_weight' => $request->get('cargo_weight'),
            'shipper' => $request->get('shipper'),
            'shipping_line' => $request->get('shipping_line'),
            'distance' => $request->get('distance'),
            'start' => $request->get('start'),
            'destination' => $request->get('destination'),
            'desc' => $request->get('desc')

        ]);

        alert()->success('Update', 'Project updated successfully and email sent to finance');

        return redirect()->back();
    }

    public function deliveryNote(Request $request)
    {
        $data = $request->all();

        $data['user_id'] = Auth::user()->id;

        $data['doc_path'] = UploadFileRepo::init()->upload($request->file, 'documents');

        DeliveryNote::create($data);

        return response()->json(['data' => 'delivery note added successfully'], 200);
    }

    public function getAllDeliveryNotes($bol)
    {
        return DeliveryNote::where(['bol_id' => $bol])->get();
    }

    public function generateLayTime($id)
    {
        $dms = BillOfLanding::with(['sof', 'cargo', 'images', 'vessel', 'customer', 'quote.voyage'])->findOrFail($id);

        $port_stay = ceil($dms->vessel->grt / $dms->discharge_rate);

        $laytime = [];
        $lowerpart['timeallowed'] = $this->getTimeDeatils(($port_stay * 24 * 60 * 60));;

        foreach ($dms->sof->sortByDesc('created_at') as $sof) {
            array_push($laytime, [
                'day' => Carbon::parse($sof->created_at)->format('l'),
                'date' => Carbon::parse($sof->created_at)->format('d-M-y'),
                'period' => Carbon::parse($sof->from)->format('H:i') . ' HRS - ' . Carbon::parse($sof->to)->format('H:i') . ' HRS',
                'time_to_count' => ($sof->crane_working * 100) / $dms->number_of_crane,
                'days' => $this->getTimeDeatils(strtotime(Carbon::parse($sof->to)) - strtotime(Carbon::parse($sof->from))),
                'remarks' => $sof->remarks,
                'secs' => abs(strtotime(Carbon::parse($sof->to)) - strtotime(Carbon::parse($sof->from)))
            ]);
        }

        $lowerpart['laytimeused'] = $this->getTimeDeatils(collect($laytime)->sum('secs'));
        $lowerpart['timesave'] = $this->getTimeDeatils(($port_stay * 24 * 60 * 60) - collect($laytime)->sum('secs'));
        $data = [
            $lowerpart,
            $laytime,
            [
                'vesselname' => $dms->vessel->name,
                'bl' => $dms->bl_number,
                'supplier' => $dms->cargo->first()->shipper,
                'arrive' => Carbon::parse($dms->quote->voyage->vessel_arrived)->format('d-M-y'),
                'weight' => $dms->vessel->grt,
                'rate' => $dms->discharge_rate,
                'time' => $dms->time_allowed,
                'ltime' => $dms->laytime_start,
            ]

        ];

        $pdf = PDF::loadView('pdf.laytime', compact('data'));
        return $pdf->download('laytime.pdf');

        return view('pdf.laytime')
            ->withData($data);
    }

    public function getTimeDeatils($sec)
    {
        $dt1 = new DateTime("@0");
        $dt2 = new DateTime("@$sec");
        return $dt1->diff($dt2)->format('%a, %h, %i');
    }

    public function complete($id)
    {
        $ctm = BillOfLanding::findOrFail($id);
        $ctm->update(['status' => 1]);
//        dd($ctm->quote_id);

        $quotation = Quotation::with(['user', 'customer', 'cargo', 'dms', 'checkedBy', 'approvedBy', 'services.service'])->findOrFail($ctm->quote_id);

        $message = 'Update the cost of ';
        $costUpdate = true;

        foreach ($quotation->services as $service) {

            if ($service->buying_price == null || $service->buying_price == 0) {
                $message = $message . ' ' . $service->service->name . " \n";
                $costUpdate = false;
            }
        }

        if (!$costUpdate) {
            alert()->error('Error', $message);

            return redirect()->back();
        }

        InvNumRepo::init()->makeInvoice($quotation, $ctm);

        return redirect('/dsr');

    }

    public function getServiceCostDropDown($id)
    {
        $dms = BillOfLanding::with(['quote.services'])->findOrFail($id);

      return collect($dms->quote->services)->filter(function ($service){
            return $service->buying_price == null || $service->buying_price == 0;
        });
    }

    public function getProjectStatement($id)
    {
        $dms = BillOfLanding::with(['quote.services'])->findOrFail($id);

        return $dms->quote->services->map(function ($value){
            return[
                'name'=>$value->name,
                'receipt'=>$value->doc_path == null ? '' : url(asset($value->doc_path)),
                'selling_price'=>$value->selling_price,
                'cost'=>$value->buying_price == null ? 'Add Service Cost' : $value->buying_price,
                'profit'=>$value->buying_price == null ? 'Add Service Cost' : ($value->selling_price - $value->buying_price),
            ];
        });
    }

}
