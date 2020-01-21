<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\Lead;
use App\PurchaseOrder;
use App\Transformers\BillOfLandingTransformer;
use App\Transformers\LeadTransformer;
use App\Transformers\PurchaseOrderTransformer;
use Carbon\Carbon;
use Esl\Repository\ReportsRepo;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade as PDF;

class ReportsController extends Controller
{
    use TablePresentableTrait;
    /**
     * @param Request $request
     * @return mixed
     */
    public function jobs(Request $request)
    {
        $from = $request->get('from')?Carbon::parse($request->get('from')):Carbon::now()->subDays(30);

        $to = $request->get('to')?Carbon::parse($request->get('to')):Carbon::now();

        $status = $request->get('status');

        $with = ['quote.services','customer'];

        $bl = app(BillOfLanding::class)->whereCreatedDateBetween($from,$to)->byStatus($status);

        $collection = $this->presentWithoutPagination($bl, $request->all(), $with);

        $transformedResult = new Collection($collection, new BillOfLandingTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];

        return $this->paginate($data);
    }


    public function create()
    {
        return view('reports.jobs.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function store(Request $request)
    {
        $from = $request->get('from')?Carbon::parse($request->get('from')):Carbon::now()->subDays(30);

        $to = $request->get('to')?Carbon::parse($request->get('to')):Carbon::now();

        $status = $request->get('status');

        $jobs =   $bl = app(BillOfLanding::class)->whereCreatedDateBetween($from,$to)->byStatus($status);


        return view('reports.jobs.index')->with('jobs', $jobs)->with('from', $from)->with('to', $to)->with('status', $status);
    }

    public function exportPDF($from, $to, $status, $type)

    {
        $jobs =  app(BillOfLanding::class)->whereCreatedDateBetween($from,$to)->byStatus($status)->get();

        if ($type != 'pdf') {
            return $this->downloadJob($from, $to, $status, $type);
        }

        $pdf = PDF::loadView('reports.jobs.generate-pdf', compact('jobs'));
        return $pdf->download('jobs.pdf');

    }

    private function downloadJob($date_from, $date_to, $status, $type)
    {

        $data = ReportsRepo::init()->getJobs($date_from, $date_to, $status);
        return Excel::create('jobs', function ($excel) use ($data) {

            $excel->sheet('mySheet', function ($sheet) use ($data) {

                $sheet->fromArray($data);

            });

        })->download($type);
    }

    public function posReport(Request $request)
    {
        if($request->expectsJson()){
            $from = $request->get('from')?Carbon::parse($request->get('from')):Carbon::now()->subDays(30);

            $to = $request->get('to')?Carbon::parse($request->get('to')):Carbon::now();

            $status = $request->get('status');

            $with = ['supplier','user'];

            $notification = app(PurchaseOrder::class)->whereCreatedDateBetween($from,$to)->byStatus($status);


            $collection = $this->presentWithoutPagination($notification, $request->all(), $with);

            $transformedResult = new Collection($collection, new PurchaseOrderTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('reports.pos.create');
    }

    public function getPos()
    {
        $status = request()->get('status');
        $pos = '';
        if ($status == 'requested') {
            $pos = PurchaseOrder::where('status', 'requested')->whereBetween('created_at', [request()->get('from'), request()->get('to')])->get();
        } elseif ($status == 'approved') {
            $pos = PurchaseOrder::where('status', 'approved')->whereBetween('created_at', [request()->get('from'), request()->get('to')])->get();
        }

        $from = date('d-m-Y', strtotime(request()->get('from')));
        $to = date('d-m-Y', strtotime(request()->get('to')));
        PurchaseOrder::where('status', 'requested')->whereBetween('created_at', [$from, $to])->get();

        return view('reports.pos.index')->with('pos', $pos)->with('from', $from)->with('to', $to)->with('status', $status);
    }

    public function exportPo($from, $to, $status, $type)
    {

        $from = $from?Carbon::parse($from):Carbon::now()->subDays(30);

        $to = $to?Carbon::parse($to):Carbon::now();

        $pos = app(PurchaseOrder::class)->whereCreatedDateBetween($from,$to)->byStatus($status)->get();

        if ($type != 'pdf') {
            return $this->downloadPo($from, $to, $status, $type);
        }

        $pdf = PDF::loadView('reports.pos.generate-pdf', compact('pos'));
        return $pdf->download('pos.pdf');
    }

    private function downloadPo($date_from, $date_to, $status, $type)
    {

        $data = ReportsRepo::init()->getPos($date_from, $date_to, $status);
        return Excel::create('pos', function ($excel) use ($data) {

            $excel->sheet('mySheet', function ($sheet) use ($data) {

                $sheet->fromArray($data);

            });

        })->download($type);
    }

    public function mypos()
    {
        $data = ReportsRepo::init()->oldPos();
        return Excel::create('Updated_Project_Codes', function ($excel) use ($data) {

            $excel->sheet('mySheet', function ($sheet) use ($data) {

                $sheet->fromArray($data);

            });

        })->download('xls');
    }

    public function leadsReport(Request $request)
    {
        if($request->expectsJson()){
            $from = $request->get('from')?Carbon::parse($request->get('from')):Carbon::now()->subDays(30);

            $to = $request->get('to')?Carbon::parse($request->get('to')):Carbon::now();

            $with = ['supplier','user'];

            $notification = app(Lead::class)->whereCreatedDateBetween($from,$to);


            $collection = $this->presentWithoutPagination($notification, $request->all(), $with);

            $transformedResult = new Collection($collection, new LeadTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('reports.leads.create');
    }

    public function getLeads()
    {
        $leads = Lead::whereBetween('created_at', [request()->get('from'), request()->get('to')])->get();
        $from = date('d-m-Y', strtotime(request()->get('from')));
        $to = date('d-m-Y', strtotime(request()->get('to')));
        return view('reports.leads.index')->with('leads', $leads)->with('from', $from)->with('to', $to);
    }

    public function exportLead($from, $to, $type)
    {
        $date_from = date('m/d/Y', strtotime($from));
        $date_to = date('m/d/Y', strtotime($to));

        if ($type != 'pdf') {
            return $this->downloadLeads($date_from, $date_to, $type);
        }
        $leads = Lead::whereBetween('created_at', [$date_from, $date_to])->get();
        $pdf = PDF::loadView('reports.leads.generate-pdf', compact('leads'));
        return $pdf->download('leads.pdf');
    }

    private function downloadLeads($date_from, $date_to, $type)
    {
        $data = ReportsRepo::init()->getLeads($date_from, $date_to);
        return Excel::create('leads', function ($excel) use ($data) {

            $excel->sheet('mySheet', function ($sheet) use ($data) {

                $sheet->fromArray($data);

            });

        })->download($type);
    }
}
