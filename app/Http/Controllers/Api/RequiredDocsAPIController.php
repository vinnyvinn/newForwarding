<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateRequiredDocsAPIRequest;
use App\Http\Requests\API\UpdateRequiredDocsAPIRequest;
use App\Models\RequiredDocs;
use App\Repositories\RequiredDocsRepository;
use App\Transformers\RequiredDocsTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class RequiredDocsController
 * @package App\Http\Controllers\API
 */
class RequiredDocsAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  RequiredDocsRepository */
    private $requiredDocsRepository;

    public function __construct(RequiredDocsRepository $requiredDocsRepo)
    {
        $this->requiredDocsRepository = $requiredDocsRepo;
    }

    /**
     * Display a listing of the RequiredDocs.
     * GET|HEAD /requiredDocs
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = [];

        $model = app(RequiredDocs::class);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new RequiredDocsTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];


        if ($request->has('all')) {
            return $data;
        }

        return $this->paginate($data);
    }

    /**
     * Store a newly created RequiredDocs in storage.
     * POST /requiredDocs
     *
     * @param CreateRequiredDocsAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateRequiredDocsAPIRequest $request)
    {
        $input = $request->all();

        $requiredDocs = $this->requiredDocsRepository->create($input);

        return $this->sendResponse($requiredDocs->toArray(), 'Required Docs saved successfully');
    }

    /**
     * Display the specified RequiredDocs.
     * GET|HEAD /requiredDocs/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var RequiredDocs $requiredDocs */
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            return $this->sendError('Required Docs not found');
        }

        return $this->sendResponse($requiredDocs->toArray(), 'Required Docs retrieved successfully');
    }

    /**
     * Update the specified RequiredDocs in storage.
     * PUT/PATCH /requiredDocs/{id}
     *
     * @param int $id
     * @param UpdateRequiredDocsAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateRequiredDocsAPIRequest $request)
    {
        $input = $request->all();

        /** @var RequiredDocs $requiredDocs */
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            return $this->sendError('Required Docs not found');
        }

        $requiredDocs = $this->requiredDocsRepository->update($input, $id);

        return $this->sendResponse($requiredDocs->toArray(), 'RequiredDocs updated successfully');
    }

    /**
     * Remove the specified RequiredDocs from storage.
     * DELETE /requiredDocs/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var RequiredDocs $requiredDocs */
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            return $this->sendError('Required Docs not found');
        }

        $requiredDocs->delete();

        return $this->sendResponse($id, 'Required Docs deleted successfully');
    }
}
