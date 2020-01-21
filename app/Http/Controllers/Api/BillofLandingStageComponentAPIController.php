<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateBillofLandingStageComponentAPIRequest;
use App\Http\Requests\API\UpdateBillofLandingStageComponentAPIRequest;
use App\Models\BillofLandingStageComponent;
use App\Repositories\BillofLandingStageComponentRepository;
use App\Stage;
use App\StageComponent;
use App\Transformers\BillofLandingStageComponentTransformer;
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
 * Class BillofLandingStageComponentController
 * @package App\Http\Controllers\API
 */

class BillofLandingStageComponentAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  BillofLandingStageComponentRepository */
    private $billofLandingStageComponentRepository;

    public function __construct(BillofLandingStageComponentRepository $billofLandingStageComponentRepo)
    {
        $this->billofLandingStageComponentRepository = $billofLandingStageComponentRepo;
    }

    /**
     * Display a listing of the BillofLandingStageComponent.
     * GET|HEAD /billofLandingStageComponents
     *
     * @param Request $request
     * @param $billofLandingStageId
     * @return LengthAwarePaginator
     */
    public function index(Request $request, $billofLandingStageId)
    {
        $with = ['dmsComponents'];

        $model = app(BillofLandingStageComponent::class)->byBLStageId($billofLandingStageId);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new BillofLandingStageComponentTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];

        return $this->paginate($data);
    }

    /**
     * Store a newly created BillofLandingStageComponent in storage.
     * POST /billofLandingStageComponents
     *
     * @param CreateBillofLandingStageComponentAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateBillofLandingStageComponentAPIRequest $request)
    {
        $input = $request->all();

        $input['required'] = $request->required['value'] == 'true' ? true : false;
        $input['notification'] = $request->required['value'] == 'true' ? true : false;
        $input['type'] = $request->type['value'];

        $jsondata = $request->components != null ? explode(',',$request->components) : null;

        $input['components'] = ($jsondata == null ? null : json_encode($jsondata));

        $stage = StageComponent::create($input);

        $input['stage_components_id'] = $stage->id;

        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->create($input);

        return $this->sendResponse($billofLandingStageComponent->toArray(), 'Billof Landing Stage Component saved successfully');
    }

    /**
     * Display the specified BillofLandingStageComponent.
     * GET|HEAD /billofLandingStageComponents/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var BillofLandingStageComponent $billofLandingStageComponent */
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            return $this->sendError('Billof Landing Stage Component not found');
        }

        return $this->sendResponse($billofLandingStageComponent->toArray(), 'Billof Landing Stage Component retrieved successfully');
    }

    /**
     * Update the specified BillofLandingStageComponent in storage.
     * PUT/PATCH /billofLandingStageComponents/{id}
     *
     * @param int $id
     * @param UpdateBillofLandingStageComponentAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateBillofLandingStageComponentAPIRequest $request)
    {
        $input = $request->all();

        /** @var BillofLandingStageComponent $billofLandingStageComponent */
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            return $this->sendError('Billof Landing Stage Component not found');
        }

        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->update($input, $id);

        return $this->sendResponse($billofLandingStageComponent->toArray(), 'BillofLandingStageComponent updated successfully');
    }

    /**
     * Remove the specified BillofLandingStageComponent from storage.
     * DELETE /billofLandingStageComponents/{id}
     *
     * @param int $id
     *
     * @return Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var BillofLandingStageComponent $billofLandingStageComponent */
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            return $this->sendError('Billof Landing Stage Component not found');
        }

        $billofLandingStageComponent->delete();

        return $this->sendResponse($id, 'Billof Landing Stage Component deleted successfully');
    }
}
