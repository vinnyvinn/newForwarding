<?php

namespace WizPack\Workflow\Http\Controllers\API;

use Exception;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use WizPack\Workflow\Http\Requests\API\CreateWorkflowTypeAPIRequest;
use WizPack\Workflow\Http\Requests\API\UpdateWorkflowTypeAPIRequest;
use WizPack\Workflow\Models\WorkflowType;
use WizPack\Workflow\Repositories\API\WorkflowStageRepository;
use WizPack\Workflow\Repositories\API\WorkflowTypeRepository;
use Illuminate\Http\Request;
use WizPack\Workflow\Http\Controllers\AppBaseController;
use WizPack\Workflow\Traits\TablePresentableTrait;
use WizPack\Workflow\Transformers\WorkflowTypeTransformer;

/**
 * Class WorkflowTypeController
 * @package WizPack\Workflow\Http\Controllers\API
 */
class WorkflowTypeAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  WorkflowTypeRepository */
    private $workflowTypeRepository;
    private $workflowStageRepo;

    public function __construct(
        WorkflowTypeRepository $workflowTypeRepo,
        WorkflowStageRepository $workflowStageRepo
    )
    {
        $this->workflowTypeRepository = $workflowTypeRepo;
        $this->workflowStageRepo = $workflowStageRepo;
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     *
     * @SWG\Get(
     *      path="/workflowTypes",
     *      summary="Get a listing of the WorkflowTypes.",
     *      tags={"WorkflowType"},
     *      description="Get all WorkflowTypes",
     *      produces={"application/json"},
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  type="array",
     *                  @SWG\Items(ref="#/definitions/WorkflowType")
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function index(Request $request)
    {

        $with = [];

        $model = app(WorkflowType::class);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new WorkflowTypeTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];


        if ($request->has('all')) {
            return response()->json(["data" => $data]);
        }

        return $this->paginate($data);

    }

    /**
     * @param CreateWorkflowTypeAPIRequest $request
     * @return Response
     *
     * @SWG\Post(
     *      path="/workflowTypes",
     *      summary="Store a newly created WorkflowType in storage",
     *      tags={"WorkflowType"},
     *      description="Store WorkflowType",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="body",
     *          in="body",
     *          description="WorkflowType that should be stored",
     *          required=false,
     *          @SWG\Schema(ref="#/definitions/WorkflowType")
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  ref="#/definitions/WorkflowType"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function store(CreateWorkflowTypeAPIRequest $request)
    {
        $input = $request->all();

        $workflowType = $this->workflowTypeRepository->create($input);

        return $this->sendResponse($workflowType->toArray(), 'Workflow Type saved successfully');
    }

    /**
     * @param int $id
     * @return Response
     *
     * @SWG\Get(
     *      path="/workflowTypes/{id}",
     *      summary="Display the specified WorkflowType",
     *      tags={"WorkflowType"},
     *      description="Get WorkflowType",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of WorkflowType",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  ref="#/definitions/WorkflowType"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function show($id)
    {
        /** @var WorkflowType $workflowType */
        $workflowType = $this->workflowTypeRepository->find($id);

        if (empty($workflowType)) {
            return $this->sendError('Workflow Type not found');
        }

        return $this->sendResponse($workflowType->toArray(), 'Workflow Type retrieved successfully');
    }

    /**
     * @param int $id
     * @param UpdateWorkflowTypeAPIRequest $request
     * @return Response
     *
     * @SWG\Put(
     *      path="/workflowTypes/{id}",
     *      summary="Update the specified WorkflowType in storage",
     *      tags={"WorkflowType"},
     *      description="Update WorkflowType",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of WorkflowType",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Parameter(
     *          name="body",
     *          in="body",
     *          description="WorkflowType that should be updated",
     *          required=false,
     *          @SWG\Schema(ref="#/definitions/WorkflowType")
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  ref="#/definitions/WorkflowType"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function update($id, UpdateWorkflowTypeAPIRequest $request)
    {
        $input = $request->all();

        /** @var WorkflowType $workflowType */
        $workflowType = $this->workflowTypeRepository->find($id);

        if (empty($workflowType)) {
            return $this->sendError('Workflow Type not found');
        }

        $workflowType = $this->workflowTypeRepository->update($input, $id);

        return $this->sendResponse($workflowType->toArray(), 'WorkflowType updated successfully');
    }

    /**
     * @param int $id
     * @return Response
     *
     * @throws Exception
     * @SWG\Delete(
     *      path="/workflowTypes/{id}",
     *      summary="Remove the specified WorkflowType from storage",
     *      tags={"WorkflowType"},
     *      description="Delete WorkflowType",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of WorkflowType",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Response(
     *          response=200,
     *          description="successful operation",
     *          @SWG\Schema(
     *              type="object",
     *              @SWG\Property(
     *                  property="success",
     *                  type="boolean"
     *              ),
     *              @SWG\Property(
     *                  property="data",
     *                  type="string"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function destroy($id)
    {
        /** @var WorkflowType $workflowType */
        $workflowType = $this->workflowTypeRepository->find($id);

        if (empty($workflowType)) {
            return $this->sendError('Workflow Type not found');
        }

        //check if approval stage is attached to this  approval
        $check = $this->workflowStageRepo->findWhere(['workflow_type_id' => $id]);

        if (!$check->isEmpty()) {
            return $this->sendError('Approvals cannot be deleted');
        }

        $workflowType->delete();

        return $this->sendSuccess('Workflow Type deleted successfully');
    }
}
