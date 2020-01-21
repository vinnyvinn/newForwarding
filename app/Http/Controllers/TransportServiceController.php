<?php

namespace App\Http\Controllers;

use App\Cargo;
use App\Models\Shipment;
use App\Quotation;
use App\QuotationService;
use App\Repositories\JobWorkflowTransportDocsRepository;
use App\Transformers\TransportServiceTransformer;
use App\TransportDoc;
use App\TransportService;
use Carbon\Carbon;
use Esl\helpers\Constants;
use Esl\Repository\InvNumRepo;
use Esl\Repository\StkItemRepo;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class TransportServiceController extends Controller
{
    use TablePresentableTrait;

    protected $workflowTransportDocsRepository;

    public function __construct(JobWorkflowTransportDocsRepository $workflowTransportDocsRepository)
    {
        $this->workflowTransportDocsRepository = $workflowTransportDocsRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            $with = [];

            $model = app(TransportService::class);

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new TransportServiceTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('transport.services.index')
            ->withServices(TransportService::simplePaginate(25));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('transport.services.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['type'] = $request->type;
        $StockLink = StkItemRepo::init()->insertService($data);
        $data['StockLink'] = $StockLink;
//        dd($StockLink);
        TransportService::create($data);
        return redirect('/services');
    }

    /**
     * Display the specified resource.
     *
     * @param TransportService $transportService
     * @return Response
     */
    public function show(TransportService $transportService)
    {
        dd($transportService);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param TransportService $transportService
     * @return Response
     */
    public function edit($transportService)
    {
        return view('transport.services.edit')
            ->withService(TransportService::findOrFail($transportService));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param TransportService $transportService
     * @return Response
     */
    public function update(Request $request, $transportService)
    {
        TransportService::findOrFail($transportService)->update($request->all());
        return redirect('/services');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param TransportService $transportService
     * @return Response
     */
    public function destroy(Request $request, $transportService)
    {
        TransportService::findOrFail($transportService)->delete();

        if ($request->expectsJson()) {
            return response(['message' => 'User deleted successfully'], 200);
        }


        return redirect('/services');
    }

    /**
     * @param $quotationId
     * @return ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function getQuotationDocs($quotationId)
    {
        $quotation = Quotation::findOrFail($quotationId)->doc_ids;

        return response(["data" => json_decode($quotation)]);
    }

    public function getRequiredDocsDropDown($quotationId)
    {
        $allDocs = TransportDoc::all()->sortBy('name');

        $addedDocs = collect(json_decode(Quotation::findOrFail($quotationId)->doc_ids, true))->pluck('doc_id');

        return $allDocs->filter(function ($doc) use ($addedDocs) {
            return $doc->whereNotIn('id', $addedDocs);
        })->toArray();
    }

    public function addQuotationDocs(Request $request)
    {
        $quotation = Quotation::findOrFail($request->quotation['id']);

        $quotationDocs = [];

        if (!empty($quotation->doc_ids)) {
            $quotationDocs = json_decode($quotation->doc_ids, true);
        }

        $addedDoc = is_array($request->selected_doc) ? $request->selected_doc : [];

        $data = [
            "id" => count($quotationDocs) + 1,
            "doc_id" => $addedDoc['id'],
            "name" => $addedDoc['name'],
            "description" => $addedDoc['description']
        ];

        $updateDocs = collect($quotationDocs)->filter(function ($query) use ($addedDoc) {
            return ($addedDoc['id'] == $query['doc_id']);
        })->isNotEmpty();

        if ($updateDocs) {
            return response(['message' => 'Record not saved']);
        }

        $uniqueDocs = array_merge($quotationDocs, [$data]);

        $docsInfo = json_encode(collect($uniqueDocs)->unique());

        $response = tap(Quotation::find($request->quotation['id']))->update([
            'doc_ids' => $docsInfo
        ])->doc_ids;


        if ($response) {
            return response(['data' => json_decode($response), 'message' => 'Record saved successfully']);
        }

        return response(['message' => 'Record not saved']);

    }


    public function deleteQuotationDoc(Request $request, $id)
    {
        $quotation = Quotation::findOrFail($id);

        if (empty($quotation->doc_ids)) {
            return response(['data' => 'Quotation does not exist']);
        }

        $quotationDocs = json_decode($quotation->doc_ids, true);

        $docToDelete = $request->doc;

        $updateDocs = collect($quotationDocs)->filter(function ($query) use ($docToDelete) {
            return ($docToDelete['doc_id'] != $query['doc_id']);
        });

        $docsInfo = json_encode($updateDocs);

        $response = tap(Quotation::find($id))->update([
            'doc_ids' => $docsInfo
        ])->doc_ids;

        if ($response) {
            return response(['data' => json_decode($response), 'message' => 'Record saved successfully']);
        }

        return response(['message' => 'Record not saved']);

    }

    public function addServiceToExistingQuotation(Request $request)
    {
        $quotation = Quotation::findOrFail($request->quotation_id);

        $service = $request->service;

        $stockLing = isset($service['service']['stock_link']) ?
            $service['service']['stock_link'] : $service['service']['StockLink'];

        $data = [
            'quotation_id' => $quotation->id,
            'service_id' => $service['id'],
            'name' => $service['name'],
            'rate' => $service['rate'],
            'stock_link' => $stockLing,
            'selling_price' => round((float)$service['selling_price'], 2),
            'tax_code' => $service['tax_code'],
            'tax_description' => $service['tax_description'],
            'tax_id' => $service['tax_id'],
            'tax' => round((float)$service['tax'], 2),
            'type' => $service['type'],
            'unit' => round((float)$service['unit'], 2),
            'total_units' => round((float)$service['total_units'], 2),
            'total' => round((float)$service['totalInclTax'], 2)
        ];

        if ($request->service_id) {
            $response = QuotationService::find($request->service_id)->update($data);

            if ($response) {
                return response()->json(['success' => 'Service updated'], 200);
            }
        }

        return QuotationService::create($data);
    }

    public function addService(Request $request)
    {
        $year_now = new Carbon(Carbon::now());
        $quote_count = Quotation::whereYear('created_at', $year_now->year)->count() + 1;

        //add required docs
        $requiredDocsIds = $this->workflowTransportDocsRepository->with(['doc'])->findWhere([
            'shipment_types_id' => $request->shipment_type['id'],
            'shipment_sub_types_id' => $request->shipment_sub_type['id']
        ])->pluck('doc')->map(function ($doc, $key) {
            return [
                "id" => $key + 1,
                "doc_id" => $doc->id,
                "name" => $doc->name,
                "description" => $doc->description
            ];
        });

        $quoteData = [
            'user_id' => Auth::user()->id,
            'DCLink' => $request->DCLink,
            'inputCur' => $request->inputCur,
            'type' => $request->type,
            'doc_ids' => json_encode($requiredDocsIds),
            'status' => Constants::TRANSPORT_QUOTATION_PENDING,
            'quote_id' => $quote_count
        ];

        $quotation = $request->has('quotation_id') ? Quotation::findOrFail($request->quotation_id) : Quotation::create($quoteData);
        $quotation->status = ucwords(Constants::LEAD_QUOTATION_PENDING);

        $cargo_details = $request->cargo_details;
        $cargo_details['quotation_id'] = $quotation->id;
        $cargo_details['shipments_id'] = Shipment::findBySlug($request->type)->id;
        $cargo_details['shipment_type'] = $request->shipment_type['name'];
        $cargo_details['shipment_types_id'] = $request->shipment_type['id'];
        $cargo_details['shipment_sub_type'] = $request->shipment_sub_type['name'];
        $cargo_details['shipment_sub_types_id'] = $request->shipment_sub_type['id'];

        if ($request->has('cargo_details')) {

            Cargo::create($cargo_details);
        }

        $serviceData = array_map(function ($service) use ($quotation) {

            $stockLing = isset($service['service']['stock_link']) ?
                $service['service']['stock_link'] : $service['service']['StockLink'];

            return [
                'quotation_id' => $quotation->id,
                'service_id' => $service['service_id'],
                'name' => $service['name'],
                'rate' => $service['rate'],
                'stock_link' => $stockLing,
                'selling_price' => round((float)$service['selling_price'], 2),
                'tax_code' => $service['tax_code'],
                'tax_description' => $service['tax_description'],
                'tax_id' => $service['tax_id'],
                'tax' => round((float)$service['tax'], 2),
                'type' => $service['type'],
                'unit' => round((float)$service['unit'], 2),
                'total_units' => round((float)$service['total_units'], 2),
                'total' => round((float)$service['totalInclTax'], 2)
            ];
        }, $request->services);

        QuotationService::insert($serviceData);

        return Response(['quotation_id' => $quotation->id, 'data' => 1,]);
    }

    public function updateService(Request $request)
    {

        $data = $request->all();

        $service = QuotationService::findOrFail($request->service_id);

        $qt = Quotation::findOrFail($service->quotation_id);
        $qt->status = ucwords(Constants::LEAD_QUOTATION_PENDING);
        $qt->save();

        $data['tax'] = ($request->taxx);
        $data['selling_price'] = ($request->rate);
//        dd($data);
        $service->update($data);

        return Response(['success' => 'done']);

    }

    public function deleteQuotationService(Request $request)
    {
        $service = QuotationService::findOrFail($request->service_id);

        $qt = Quotation::findOrFail($service->quotation_id);
        $qt->status = ucwords(Constants::LEAD_QUOTATION_PENDING);
        $qt->save();

        $service->delete();

        return Response(['success' => 'success']);
    }
}
