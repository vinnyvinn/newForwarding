<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\Customer;
use App\Event;
use App\GoodType;
use App\Http\Resources\EventTransformer;
use App\Mail\ApprovalRequest;
use App\Mail\ProjectInvoice;
use App\Mail\RequestQuotation;
use App\Quotation;
use App\QuotationService;
use App\Repositories\BillofLandingStageComponentRepository;
use App\Repositories\BillofLandingStagesRepository;
use App\Repositories\JobWorkflowProcessRepository;
use App\ServiceTax;
use App\Tariff;
use App\Transformers\QuotationTransformer;
use App\TransportDoc;
use App\TransportService;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Esl\helpers\Constants;
use Esl\Repository\CurrencyRepo;
use Esl\Repository\CustomersRepo;
use Esl\Repository\InvNumRepo;
use Esl\Repository\NotificationRepo;
use Esl\Repository\QuotationRepo;
use Esl\Repository\RemarkRepo;
use Esl\Repository\UploadFileRepo;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class QuotationController extends Controller
{
    use TablePresentableTrait;
    protected $jobWorkflowProcessRepository;
    protected $billofLandingStagesRepository;
    protected $billofLandingStageComponentRepository;

    public function __construct(
        JobWorkflowProcessRepository $jobWorkflowProcessRepo,
        BillofLandingStagesRepository $billofLandingStagesRepository,
        BillofLandingStageComponentRepository $billofLandingStageComponentRepository
    )
    {
        $this->jobWorkflowProcessRepository = $jobWorkflowProcessRepo;
        $this->billofLandingStagesRepository = $billofLandingStagesRepository;
        $this->billofLandingStageComponentRepository = $billofLandingStageComponentRepository;
    }

    public function showQuotation($id)
    {
        $quote = Quotation::with(['customer', 'services.taxDetails', 'cargo', 'remarks.user'])->findOrFail($id);
        $currency = '';
        if ($quote->customer != null) {
            $currency = CustomersRepo::customerInit()->getCustomerCurrency($quote->customer->DCLink);
        } else {
            $currency = 'KSHS';
        }

        return view('transport.quotation.show')
            ->withQuotation($quote)
            ->withServices(TransportService::getSortBy('name'))
            ->withExrate(CurrencyRepo::init()->exchangeRate())
            ->withTaxs(ServiceTax::getSortBy('Description'))
            ->withCurrency($currency)
            ->withDocs(TransportDoc::getSortBy('name'));
    }

    public function updateQuote()
    {
        dd(request()->all());
    }

    public function requestQuotation($id)
    {

        Quotation::findOrFail($id)->update(['status' => Constants::LEAD_QUOTATION_REQUEST]);

        NotificationRepo::create()->notification(Constants::Q_APPROVAL_TITLE, 'New Approval Request',
            '/quotation/preview/' . $id, 0, 'Logistics');

        Mail::to(['email' => 'accounts@esl-eastafrica.com'])
            ->cc(Constants::EMAILS_CC)
            ->send(new ProjectInvoice(['message' => 'Kindly review this quotation ( ' . ' ' . url('/quotation/preview/' . $id) . ' ' . ' ) and advice Head of Sovereign Logistics in case the project is making loss otherwise ignore'], 'Account ~ FWL Client Quotation Review'));

        Mail::to(['email' => 'washington.mwamburi@freightwell.com'])
            ->cc(Constants::EMAILS_CC)
            ->send(new ApprovalRequest([
                'user' => Auth::user()->name,
                'url' => '/quotation/view/' . $id], 'Check Quotation'));

        alert()->success('Approval Request', 'Request sent successfully');

        return redirect()->back();
    }

    public function allQuotations(Request $request)
    {
        if ($request->expectsJson()) {

            $with = [];

            $events = app(Quotation::class);

            $collection = $this->presentWithoutPagination($events, $request->all(), $with);

            $transformedResult = new Collection($collection, new QuotationTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);

        }

        $quotations = Quotation::orderBy('created_at', 'desc')->get();

        return view('transport.quotation.all', compact('quotations'));
    }

    public function viewQuotation($id)
    {
        $quote = Quotation::with(['customer', 'services', 'remarks.user'])->findOrFail($id);

        return view('transport.quotation.view')
            ->withQuotation($quote)
            ->withCurrency(CustomersRepo::customerInit()->getCustomerCurrency($quote->customer->DCLink))
            ->withServices(TransportService::all()->sortBy('name'))
            ->withDocs(TransportDoc::all()->sortBy('name'));
    }

    public function previewQuotation($id)
    {
        $quote = Quotation::with(['customer', 'checkedBy', 'approvedBy', 'services.taxDetails', 'cargo'])->findOrFail($id);

        return view('transport.quotation.preview')
            ->withQuotation($quote)
            ->withCurrency(CustomersRepo::customerInit()->getCustomerCurrency($quote->customer->DCLink))
            ->withServices(TransportService::all()->sortBy('name'));
    }

    public function sendToCustomer(Request $request)
    {
        $quote = Quotation::with(['customer'])->findOrFail($request->quotation_id);
        $customer = $quote->customer;

        $customer->EMail = $request->email;
        $customer->Name = $request->name;
        $customer->Contact_Person = $request->customer_person;
        $customer->Telephone = $request->phone;

        $customer->save();

        QuotationRepo::make()->changeStatus($request->quotation_id,
            Constants::LEAD_QUOTATION_WAITING);

        Mail::to(['email' => $request->email])
            ->cc(Constants::EMAILS_CC)
            ->send(new \App\Mail\Quotation([
                'message' => $request->message,
                'user' => Auth::user()->name,
                'url' => '/quotation/preview/' . $request->quotation_id,
                'download' => '/quotation/download/' . $request->quotation_id], $request->subject));
//                'url'=>'/quotation/preview/'.$request->quotation_id],$request->subject,['address'=>$user->email]));

        alert()->success('Success', 'Quotation sent to client successfully');
        return redirect()->back();

    }

    public function pdfQuotation($id)
    {
        $quotation = Quotation::with(['lead', 'cargos.goodType', 'vessel', 'services.tariff'])->findOrFail($id);

        $pdf = PDF::loadView('quotation.pdf', compact('quotation'));
        return $pdf->download('pda.pdf');


    }

    public function customerAccept(Request $request)
    {

        QuotationRepo::make()->changeStatus($request->quotation_id,
            Constants::LEAD_QUOTATION_ACCEPTED);

        $quote = Quotation::with(['customer'])->findOrFail($request->quotation_id);

        if ($request->remarks) {
            RemarkRepo::make()->remark([
                'user_id' => Auth::guest() ? 0 : Auth::user()->id,
                'remark_to' => $quote->user->id,
                'quotation_id' => $request->quotation_id,
                'remark' => $request->remarks
            ]);

        }

        if ($quote->customer->EMail != null) {
            Mail::to($quote->customer->EMail)
                ->cc(Constants::EMAILS_CC)
                ->send(new RequestQuotation([
                    'message' => 'Quotation was successfully accepted',
                    'user' => 'Sovereign Logistics',
                    'url' => '/quotation/preview/' . $request->quotation_id,
                    'download' => '/quotation/download/' . $request->quotation_id], 'Quotation Accepted'));
        }

        alert()->success('Quotation accepted successfully', 'Success');

        return redirect()->back();
    }

    public function pdaStatus($status)
    {
        if ($status == Constants::LEAD_QUOTATION_PENDING) {
            $dms = Quotation::with(['lead', 'vessel', 'cargos'])->where('status',
                Constants::LEAD_QUOTATION_PENDING)->simplePaginate(25);
        }

        if ($status == Constants::LEAD_QUOTATION_REQUEST) {
            $dms = Quotation::with(['lead', 'vessel', 'cargos'])->where('status',
                Constants::LEAD_QUOTATION_REQUEST)->simplePaginate(25);
        }

        if ($status == Constants::LEAD_QUOTATION_APPROVED) {
            $dms = Quotation::with(['lead', 'vessel', 'cargos'])->where('status',
                Constants::LEAD_QUOTATION_APPROVED)->simplePaginate(25);
        }

        return view('pdas.index')
            ->withDms($dms)
            ->withStatus($status);

    }

    public function customerDecline(Request $request)
    {
        QuotationRepo::make()->changeStatus($request->quotation_id,
            Constants::LEAD_QUOTATION_DECLINED_CUSTOMER);

        $quote = Quotation::with(['customer'])->findOrFail($request->quotation_id);

        if ($request->remarks) {
            RemarkRepo::make()->remark([
                'user_id' => Auth::guest() ? 0 : Auth::user()->id,
                'remark_to' => $quote->user->id,
                'quotation_id' => $request->quotation_id,
                'remark' => $request->remarks
            ]);

        }
        if ($quote->customer->EMail != null) {
            Mail::to(['email' => $quote->customer->EMail])
                ->cc(Constants::EMAILS_CC)
                ->send(new \App\Mail\Quotation([
                    'message' => 'Quotation was declined',
                    'user' => 'Sovereign Logistics',
                    'url' => '/quotation/preview/' . $request->quotation_id,
                    'download' => '/quotation/download/' . $request->quotation_id], 'Quotation Declined'));
        }
        alert()->success('Quotation accepted successfully', 'Success');
        return redirect()->back();
    }


    public function convertCustomer(Request $request, $id)
    {
        $quotation = Quotation::with(['cargo'])->find($id);

        $quotation->status = Constants::LEAD_QUOTATION_CONVERTED;

        $quotation->save();

        $bl = BillOfLanding::updateOrCreate([
            'quote_id' => $quotation->id,
            'Client_id' => $quotation->DCLink,
        ], [
            'quote_id' => $quotation->id,
            'Client_id' => $quotation->DCLink,
            'cargo_id' => 0,
            'destination_country' => 'test',
            'stage' => 'Pre-arrival docs',
            'status' => 0,
            'bl_number' => 0
        ]);

        $billOfLangingStageRepo = $this->billofLandingStagesRepository;

        $stageChecklistRepo = $this->billofLandingStageComponentRepository;

//        adding bill of landing job processsing stages
        $this->jobWorkflowProcessRepository
            ->with([
                'stages.components'
            ])->findWhere([
                'shipment_types_id' => $quotation->cargo->shipment_types_id,
                'shipment_sub_types_id' => $quotation->cargo->shipment_sub_types_id
            ])->map(function ($stage, $key) use ($billOfLangingStageRepo, $stageChecklistRepo, $bl) {
                $data = [
                    'stages_id' => $stage->stages_id,
                    'bill_of_landings_id' => $bl->id,
                    'stage_name' => $stage->stages->name,
                    'stage_description' => $stage->stages->description,
                    'weight' => $key + 1
                ];
                $billofLandingStage = $billOfLangingStageRepo->updateOrCreate([
                    'stages_id' => $stage->stages_id,
                    'bill_of_landings_id' => $bl->id,
                ], $data);

                //attach checklist to stage

                $stage->stages->components->map(function ($checklist) use ($stageChecklistRepo, $billofLandingStage) {

                    $data = [
                        "bill_of_landing_stages_id" => $billofLandingStage->id,
                        "stages_id" => $checklist->stage_id,
                        "stage_components_id" => $checklist->id,
                        "name" => $checklist->name,
                        "type" => $checklist->type,
                        "required" => $checklist->required,
                        "notification" => $checklist->notification,
                        "timing" => $checklist->timing,
                        "description" => $checklist->description,
                        "components" => $checklist->components,

                    ];

//                    dd($checklist->toArray(),$billofLandingStage->toArray());

                    $stageChecklistRepo->updateOrCreate([
                        "bill_of_landing_stages_id" => $billofLandingStage->id,
                        "stages_id" => $checklist->stage_id,
                        "stage_components_id" => $checklist->id
                    ], $data);

                });
            });

        return redirect('/dms/edit/' . $bl->id);
    }

    public function updateDsrdetails($id)
    {
        $quote = Quotation::with(['customer', 'checkedBy', 'approvedBy', 'services'])->findOrFail($id);

        return view('transport.quotation.edit')
            ->withQuotation($quote)
            ->withCurrency(CustomersRepo::customerInit()->getCustomerCurrency($quote->customer->DCLink))
            ->withServices(TransportService::all()->sortBy('name'));
    }

    public function serviceCost(Request $request)
    {
        $filepath = ' ';
        if ($request->has('file')) {
            $filepath = UploadFileRepo::init()->upload($request->file);
        }

        $service = QuotationService::find($request->service_id);
        $service->buying_price = $request->buying_price;
        $service->purchase_desc = $request->description;
        $service->doc_path = $filepath;
        $service->save();

        return response()->json(['data'=>'Service cost added successfully'],200);
    }
}
