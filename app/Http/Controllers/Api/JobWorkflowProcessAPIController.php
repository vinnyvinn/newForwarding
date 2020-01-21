<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateJobWorkflowProcessAPIRequest;
use App\Http\Requests\API\CreateJobWorkflowTransportDocsAPIRequest;
use App\Http\Requests\API\UpdateJobWorkflowProcessAPIRequest;
use App\Models\JobWorkflowProcess;
use App\Repositories\JobWorkflowProcessRepository;
use App\Repositories\JobWorkflowTransportDocsRepository;
use App\Transformers\JobWorkflowProcessTransformer;
use App\TransportDoc;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class JobWorkflowProcessController
 * @package App\Http\Controllers\API
 */
class JobWorkflowProcessAPIController extends AppBaseController
{
    use TablePresentableTrait;
    /** @var  JobWorkflowProcessRepository */
    private $jobWorkflowProcessRepository;
    private $workflowTransportDocsRepository;

    public function __construct(
        JobWorkflowProcessRepository $jobWorkflowProcessRepo,
        JobWorkflowTransportDocsRepository $workflowTransportDocsRepository
    )
    {
        $this->jobWorkflowProcessRepository = $jobWorkflowProcessRepo;
        $this->workflowTransportDocsRepository = $workflowTransportDocsRepository;
    }

    /**
     * Display a listing of the JobWorkflowProcess.
     * GET|HEAD /jobWorkflowProcesses
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = ['shipmentSubTypes', 'stages', 'shipmentTypes'];

        $model = app(JobWorkflowProcess::class)->groupBy('stages_shipment_sub_types.shipment_sub_types_id', 'stages_shipment_sub_types.shipment_types_id');

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new JobWorkflowProcessTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];

        return $this->paginate($data);

    }

    /**
     * Store a newly created JobWorkflowProcess in storage.
     * POST /jobWorkflowProcesses
     *
     * @param CreateJobWorkflowProcessAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateJobWorkflowProcessAPIRequest $request)
    {
        $workflowModel = $this->jobWorkflowProcessRepository;

        $jobWorkflowProcess = collect($request->stages_id)->each(function ($stage_id) use ($request, $workflowModel) {
            $data = [
                'stages_id' => $stage_id,
                'shipment_types_id' => $request->shipment_types_id,
                'shipment_sub_types_id' => $request->shipment_sub_types_id,
            ];

            $workflowModel->updateOrCreate($data, $data);
        });

        $transportWorkflowModel = $this->workflowTransportDocsRepository;

        collect($request->docs_id)->each(function ($transport_doc_id) use ($request, $transportWorkflowModel) {
            $data = [
                'transport_doc_id' => $transport_doc_id,
                'shipment_types_id' => $request->shipment_types_id,
                'shipment_sub_types_id' => $request->shipment_sub_types_id,
            ];
            $transportWorkflowModel->updateOrCreate($data, $data);
        });

        return $this->sendResponse($jobWorkflowProcess->toArray(), 'Job Workflow Process saved successfully');
    }

    /**
     * Display the specified JobWorkflowProcess.
     * GET|HEAD /jobWorkflowProcesses/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var JobWorkflowProcess $jobWorkflowProcess */
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            return $this->sendError('Job Workflow Process not found');
        }

        return $this->sendResponse($jobWorkflowProcess->toArray(), 'Job Workflow Process retrieved successfully');
    }

    /**
     * Update the specified JobWorkflowProcess in storage.
     * PUT/PATCH /jobWorkflowProcesses/{id}
     *
     * @param int $id
     * @param UpdateJobWorkflowProcessAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateJobWorkflowProcessAPIRequest $request)
    {
        $input = $request->all();

        /** @var JobWorkflowProcess $jobWorkflowProcess */
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            return $this->sendError('Job Workflow Process not found');
        }

        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->update($input, $id);

        return $this->sendResponse($jobWorkflowProcess->toArray(), 'JobWorkflowProcess updated successfully');
    }

    /**
     * Remove the specified JobWorkflowProcess from storage.
     * DELETE /jobWorkflowProcesses/{id}
     *
     * @param int $id
     *
     * @return Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var JobWorkflowProcess $jobWorkflowProcess */
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            return $this->sendError('Job Workflow Process not found');
        }

        $jobWorkflowProcess->delete();

        return $this->sendResponse($id, 'Job Workflow Process deleted successfully');
    }

    public function getStages($typeId, $subTypeId)
    {
        return $this->jobWorkflowProcessRepository->findWhere([
            'shipment_types_id' => $typeId,
            'shipment_sub_types_id' => $subTypeId
        ])->pluck('stages_id');
    }

    public function editStages(CreateJobWorkflowProcessAPIRequest $request, $typeId, $subTypeId)
    {
        $response = $this->jobWorkflowProcessRepository->deleteWhere([
            'shipment_types_id' => $typeId,
            'shipment_sub_types_id' => $subTypeId
        ]);

        if ($response) {

            $workflowModel = $this->jobWorkflowProcessRepository;

            $jobWorkflowProcess = collect($request->stages_id)->each(function ($stage_id) use ($typeId, $subTypeId, $workflowModel) {
                $data = [
                    'stages_id' => $stage_id,
                    'shipment_types_id' => $typeId,
                    'shipment_sub_types_id' => $subTypeId,
                ];

                $workflowModel->updateOrCreate($data, $data);
            });
        }

        return $this->sendResponse($jobWorkflowProcess->toArray(), 'Job Workflow Process saved successfully');
    }

    public function requiredDocumentList()
    {
        return TransportDoc::all();
    }

    public function getTransportDocs($typeId, $subTypeId)
    {
        return $this->workflowTransportDocsRepository->findWhere([
            'shipment_types_id' => $typeId,
            'shipment_sub_types_id' => $subTypeId
        ])->pluck('transport_doc_id');

    }


    public function editTransportDocs(CreateJobWorkflowTransportDocsAPIRequest $request, $typeId, $subTypeId)
    {
        $this->workflowTransportDocsRepository->deleteWhere([
            'shipment_types_id' => $typeId,
            'shipment_sub_types_id' => $subTypeId
        ]);

        $workflowModel = $this->workflowTransportDocsRepository;

        $jobWorkflowDocs = collect($request->transport_ids)->each(function ($transport_doc_id) use ($typeId, $subTypeId, $workflowModel) {
            $data = [
                'transport_doc_id' => $transport_doc_id,
                'shipment_types_id' => $typeId,
                'shipment_sub_types_id' => $subTypeId,
            ];
            $workflowModel->updateOrCreate($data, $data);
        });

        return $this->sendResponse($jobWorkflowDocs->toArray(), 'Job Workflow Documents saved successfully');
    }

}
