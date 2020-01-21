<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateJobStagesAPIRequest;
use App\Http\Requests\API\UpdateJobStagesAPIRequest;
use App\Models\JobStages;
use App\Repositories\JobStagesRepository;
use App\Stage;
use App\Transformers\StageTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class JobStagesController
 * @package App\Http\Controllers\API
 */
class JobStagesAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  JobStagesRepository */
    private $jobStagesRepository;

    public function __construct(JobStagesRepository $jobStagesRepo)
    {
        $this->jobStagesRepository = $jobStagesRepo;
    }

    /**
     * Display a listing of the JobStages.
     * GET|HEAD /jobStages
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = [];

        $model = app(Stage::class);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new StageTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];


        if ($request->has('all')) {
            return $data;
        }

        return $this->paginate($data);
    }

    /**
     * Store a newly created JobStages in storage.
     * POST /jobStages
     *
     * @param CreateJobStagesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateJobStagesAPIRequest $request)
    {
        $input = $request->all();

        $jobStages = $this->jobStagesRepository->create($input);

        return $this->sendResponse($jobStages->toArray(), 'Job Stages saved successfully');
    }

    /**
     * Display the specified JobStages.
     * GET|HEAD /jobStages/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var JobStages $jobStages */
        $jobStages = $this->jobStagesRepository->findWithoutFail($id);

        if (empty($jobStages)) {
            return $this->sendError('Job Stages not found');
        }

        return $this->sendResponse($jobStages->toArray(), 'Job Stages retrieved successfully');
    }

    /**
     * Update the specified JobStages in storage.
     * PUT/PATCH /jobStages/{id}
     *
     * @param int $id
     * @param UpdateJobStagesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateJobStagesAPIRequest $request)
    {
        $input = $request->all();

        /** @var JobStages $jobStages */
        $jobStages = $this->jobStagesRepository->findWithoutFail($id);

        if (empty($jobStages)) {
            return $this->sendError('Job Stages not found');
        }

        $jobStages = $this->jobStagesRepository->update($input, $id);

        return $this->sendResponse($jobStages->toArray(), 'JobStages updated successfully');
    }

    /**
     * Remove the specified JobStages from storage.
     * DELETE /jobStages/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var JobStages $jobStages */
        $jobStages = $this->jobStagesRepository->findWithoutFail($id);

        if (empty($jobStages)) {
            return $this->sendError('Job Stages not found');
        }

        $jobStages->delete();

        return $this->sendResponse($id, 'Job Stages deleted successfully');
    }
}
