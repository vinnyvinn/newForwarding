<?php

namespace WizPack\Workflow\Http\Controllers\API;

use App\Transformers\StageTransformer;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Prettus\Validator\Exceptions\ValidatorException;
use WizPack\Workflow\Http\Requests\API\CreateWorkflowStageAPIRequest;
use WizPack\Workflow\Http\Requests\API\UpdateWorkflowStageAPIRequest;
use WizPack\Workflow\Models\WorkflowStage;
use WizPack\Workflow\Repositories\API\WorkflowStageRepository;
use Illuminate\Http\Request;
use WizPack\Workflow\Http\Controllers\AppBaseController;
use WizPack\Workflow\Repositories\API\WorkflowStepRepository;
use WizPack\Workflow\Traits\TablePresentableTrait;
use WizPack\Workflow\Transformers\ApprovalStageTransformer;

/**
 * Class WorkflowStageController
 * @package App\Http\Controllers\API
 */
class WorkflowStageAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  WorkflowStageRepository */
    private $workflowStageRepository;
    private $workflowStepRepo;

    public function __construct(
        WorkflowStageRepository $workflowStageRepo,
        WorkflowStepRepository $workflowStepRepo
    )
    {
        $this->workflowStageRepository = $workflowStageRepo;
        $this->workflowStepRepo = $workflowStepRepo;
    }

    /**
     * @param Request $request
     * @return LengthAwarePaginator
     *
     * @SWG\Get(
     *      path="/workflowStages",
     *      summary="Get a listing of the WorkflowStages.",
     *      tags={"WorkflowStage"},
     *      description="Get all WorkflowStages",
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
     *                  @SWG\Items(ref="#/definitions/WorkflowStage")
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
        $with = ['workflowStageType', 'workflowType'];

        $model = app(WorkflowStage::class);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new ApprovalStageTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];


        if ($request->has('all')) {
            return response()->json(["data" => $data]);
        }

        return $this->paginate($data);
    }

    /**
     * @param CreateWorkflowStageAPIRequest $request
     * @return Response
     *
     * @throws ValidatorException
     * @SWG\Post(
     *      path="/workflowStages",
     *      summary="Store a newly created WorkflowStage in storage",
     *      tags={"WorkflowStage"},
     *      description="Store WorkflowStage",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="body",
     *          in="body",
     *          description="WorkflowStage that should be stored",
     *          required=false,
     *          @SWG\Schema(ref="#/definitions/WorkflowStage")
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
     *                  ref="#/definitions/WorkflowStage"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function store(CreateWorkflowStageAPIRequest $request)
    {
        $input = $request->all();

        $workflowStage = $this->workflowStageRepository->create($input);

        return $this->sendResponse($workflowStage->toArray(), 'Workflow Stage saved successfully');
    }

    /**
     * @param int $id
     * @return Response
     *
     * @SWG\Get(
     *      path="/workflowStages/{id}",
     *      summary="Display the specified WorkflowStage",
     *      tags={"WorkflowStage"},
     *      description="Get WorkflowStage",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of WorkflowStage",
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
     *                  ref="#/definitions/WorkflowStage"
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
        /** @var WorkflowStage $workflowStage */
        $workflowStage = $this->workflowStageRepository->find($id);

        if (empty($workflowStage)) {
            return $this->sendError('Workflow Stage not found');
        }

        return $this->sendResponse($workflowStage->toArray(), 'Workflow Stage retrieved successfully');
    }

    /**
     * @param int $id
     * @param UpdateWorkflowStageAPIRequest $request
     * @return Response
     *
     * @throws ValidatorException
     * @SWG\Put(
     *      path="/workflowStages/{id}",
     *      summary="Update the specified WorkflowStage in storage",
     *      tags={"WorkflowStage"},
     *      description="Update WorkflowStage",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of WorkflowStage",
     *          type="integer",
     *          required=true,
     *          in="path"
     *      ),
     *      @SWG\Parameter(
     *          name="body",
     *          in="body",
     *          description="WorkflowStage that should be updated",
     *          required=false,
     *          @SWG\Schema(ref="#/definitions/WorkflowStage")
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
     *                  ref="#/definitions/WorkflowStage"
     *              ),
     *              @SWG\Property(
     *                  property="message",
     *                  type="string"
     *              )
     *          )
     *      )
     * )
     */
    public function update($id, UpdateWorkflowStageAPIRequest $request)
    {
        $input = $request->all();

        /** @var WorkflowStage $workflowStage */
        $workflowStage = $this->workflowStageRepository->find($id);

        if (empty($workflowStage)) {
            return $this->sendError('Workflow Stage not found');
        }

        $workflowStage = $this->workflowStageRepository->update($input, $id);

        return $this->sendResponse($workflowStage->toArray(), 'WorkflowStage updated successfully');
    }

    /**
     * @param int $id
     * @return Response
     *
     * @throws Exception
     * @SWG\Delete(
     *      path="/workflowStages/{id}",
     *      summary="Remove the specified WorkflowStage from storage",
     *      tags={"WorkflowStage"},
     *      description="Delete WorkflowStage",
     *      produces={"application/json"},
     *      @SWG\Parameter(
     *          name="id",
     *          description="id of WorkflowStage",
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
        /** @var WorkflowStage $workflowStage */
        $workflowStage = $this->workflowStageRepository->find($id);

        if (empty($workflowStage)) {
            return $this->sendError('Workflow Stage not found');
        }

        //check if approval stage is attached to this  approval
        $check = $this->workflowStepRepo->findWhere(['workflow_stage_id' => $id]);

        if (!$check->isEmpty()) {
            return $this->sendError('Approvals cannot be deleted');
        }

        $workflowStage->delete();

        return $this->sendSuccess('Workflow Stage deleted successfully');
    }
}
