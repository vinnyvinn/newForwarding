<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateBldmsComponentAPIRequest;
use App\Http\Requests\API\UpdateBldmsComponentAPIRequest;
use App\Models\BldmsComponent;
use App\Repositories\BldmsComponentRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class BldmsComponentController
 * @package App\Http\Controllers\API
 */
class BldmsComponentAPIController extends AppBaseController
{
    /** @var  BldmsComponentRepository */
    private $bldmsComponentRepository;

    public function __construct(BldmsComponentRepository $bldmsComponentRepo)
    {
        $this->bldmsComponentRepository = $bldmsComponentRepo;
    }

    /**
     * Display a listing of the BldmsComponent.
     * GET|HEAD /bldmsComponents
     *
     * @param Request $request
     * @return Response
     * @throws RepositoryException
     */
    public function index(Request $request)
    {
        $this->bldmsComponentRepository->pushCriteria(new RequestCriteria($request));
        $this->bldmsComponentRepository->pushCriteria(new LimitOffsetCriteria($request));
        $bldmsComponents = $this->bldmsComponentRepository->all();

        return $this->sendResponse($bldmsComponents->toArray(), 'Bldms Components retrieved successfully');
    }

    /**
     * Store a newly created BldmsComponent in storage.
     * POST /bldmsComponents
     *
     * @param CreateBldmsComponentAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateBldmsComponentAPIRequest $request)
    {
        $input = $request->all();


        if ($request->has('subchecklist')) {
            $input['subchecklist'] = json_encode($input['subchecklist']);
        }

        if(!empty($input['completion_date'])){
            $input['completion_date'] = Carbon::parse($input['completion_date']);
        }


        if (!empty($request->hasFile('file'))) {
            $image = $request->file;
            $name = time() . '.' . $image->getClientOriginalExtension();
            $filepath = 'documents/uploads/';

            $image->move(public_path('documents/uploads/'), $name);
            $input['doc_links'] = $filepath . $name;
        }

        $bldmsComponent = $this->bldmsComponentRepository->updateOrCreate(
            ['bill_of_landing_stage_components_id' => $input['bill_of_landing_stage_components_id']],
            $input);

        return $this->sendResponse($bldmsComponent->toArray(), 'Bldms Component saved successfully');
    }

    /**
     * Display the specified BldmsComponent.
     * GET|HEAD /bldmsComponents/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var BldmsComponent $bldmsComponent */
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            return $this->sendError('Bldms Component not found');
        }

        return $this->sendResponse($bldmsComponent->toArray(), 'Bldms Component retrieved successfully');
    }

    /**
     * Update the specified BldmsComponent in storage.
     * PUT/PATCH /bldmsComponents/{id}
     *
     * @param int $id
     * @param UpdateBldmsComponentAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateBldmsComponentAPIRequest $request)
    {
        $input = $request->all();

        /** @var BldmsComponent $bldmsComponent */
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            return $this->sendError('Bldms Component not found');
        }

        $bldmsComponent = $this->bldmsComponentRepository->update($input, $id);

        return $this->sendResponse($bldmsComponent->toArray(), 'BldmsComponent updated successfully');
    }

    /**
     * Remove the specified BldmsComponent from storage.
     * DELETE /bldmsComponents/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var BldmsComponent $bldmsComponent */
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            return $this->sendError('Bldms Component not found');
        }

        $bldmsComponent->delete();

        return $this->sendResponse($id, 'Bldms Component deleted successfully');
    }
}
