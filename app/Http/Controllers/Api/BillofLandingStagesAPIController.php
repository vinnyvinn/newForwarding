<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateBillofLandingStagesAPIRequest;
use App\Http\Requests\API\UpdateBillofLandingStagesAPIRequest;
use App\Models\BillofLandingStages;
use App\Repositories\BillofLandingStageComponentRepository;
use App\Repositories\BillofLandingStagesRepository;
use App\Stage;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class BillofLandingStagesController
 * @package App\Http\Controllers\API
 */
class BillofLandingStagesAPIController extends AppBaseController
{
    /** @var  BillofLandingStagesRepository */
    private $billofLandingStagesRepository;
    private $billofLandingStageComponentRepository;

    public function __construct(
        BillofLandingStagesRepository $billofLandingStagesRepo,
        BillofLandingStageComponentRepository $billofLandingStageComponentRepository
    )
    {
        $this->billofLandingStagesRepository = $billofLandingStagesRepo;
        $this->billofLandingStageComponentRepository = $billofLandingStageComponentRepository;
    }

    /**
     * Display a listing of the BillofLandingStages.
     * GET|HEAD /billofLandingStages
     *
     * @param Request $request
     * @return Response
     * @throws RepositoryException
     */
    public function index(Request $request)
    {
        $this->billofLandingStagesRepository->pushCriteria(new RequestCriteria($request));
        $this->billofLandingStagesRepository->pushCriteria(new LimitOffsetCriteria($request));
        $billofLandingStages = $this->billofLandingStagesRepository->all();

        return $this->sendResponse($billofLandingStages->toArray(), 'Billof Landing Stages retrieved successfully');
    }

    /**
     * Store a newly created BillofLandingStages in storage.
     * POST /billofLandingStages
     *
     * @param CreateBillofLandingStagesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateBillofLandingStagesAPIRequest $request)
    {
        $input = $request->all();

        $billofLandingStage = $this->billofLandingStagesRepository->updateOrCreate([
            'bill_of_landings_id' => $input['bill_of_landings_id'],
            'stages_id' => $input['stages_id'],
        ], $input);

        //attach checklist to stage

        $stageChecklistRepo = $this->billofLandingStageComponentRepository;

        $stageDetails = Stage::with(['components'])->find($input['stages_id']);

        $stageDetails->components->map(function ($checklist) use ($stageChecklistRepo, $billofLandingStage) {

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

            $stageChecklistRepo->updateOrCreate([
                "bill_of_landing_stages_id" => $billofLandingStage->id,
                "stages_id" => $checklist->stage_id,
                "stage_components_id" => $checklist->id,
            ], $data);

        });

        return $this->sendResponse($billofLandingStage->toArray(), 'Billof Landing Stages saved successfully');
    }

    /**
     * Display the specified BillofLandingStages.
     * GET|HEAD /billofLandingStages/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var BillofLandingStages $billofLandingStages */
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            return $this->sendError('Billof Landing Stages not found');
        }

        return $this->sendResponse($billofLandingStages->toArray(), 'Billof Landing Stages retrieved successfully');
    }

    /**
     * Update the specified BillofLandingStages in storage.
     * PUT/PATCH /billofLandingStages/{id}
     *
     * @param int $id
     * @param UpdateBillofLandingStagesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateBillofLandingStagesAPIRequest $request)
    {
        $input = $request->all();

        /** @var BillofLandingStages $billofLandingStages */
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            return $this->sendError('Billof Landing Stages not found');
        }

        $billofLandingStages = $this->billofLandingStagesRepository->update($input, $id);

        return $this->sendResponse($billofLandingStages->toArray(), 'BillofLandingStages updated successfully');
    }

    /**
     * Remove the specified BillofLandingStages from storage.
     * DELETE /billofLandingStages/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var BillofLandingStages $billofLandingStages */
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            return $this->sendError('Billof Landing Stages not found');
        }

        $billofLandingStages->delete();

        return $this->sendResponse($id, 'Billof Landing Stages deleted successfully');
    }
}
