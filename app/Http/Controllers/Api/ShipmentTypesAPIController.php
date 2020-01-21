<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\API\CreateshipmentTypesAPIRequest;
use App\Http\Requests\API\UpdateshipmentTypesAPIRequest;
use App\Models\ShipmentType;
use App\Repositories\shipmentTypesRepository;
use App\Transformers\ShipmentTypesTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class shipmentTypesController
 * @package App\Http\Controllers\API
 */
class ShipmentTypesAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  shipmentTypesRepository */
    private $shipmentTypesRepository;

    public function __construct(shipmentTypesRepository $shipmentTypesRepo)
    {
        $this->shipmentTypesRepository = $shipmentTypesRepo;
    }

    /**
     * Display a listing of the shipmentTypes.
     * GET|HEAD /shipmentTypes
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = ['shipment'];

        $model = app(ShipmentType::class)->ByType($request);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new ShipmentTypesTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];


        if ($request->has('all')) {
            return json_encode($data);
        }

        return $this->paginate($data);
    }

    /**
     * Store a newly created shipmentTypes in storage.
     * POST /shipmentTypes
     *
     * @param CreateshipmentTypesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateshipmentTypesAPIRequest $request)
    {
        $input = $request->all();

        $shipmentTypes = $this->shipmentTypesRepository->create($input);

        return $this->sendResponse($shipmentTypes->toArray(), 'Shipment Types saved successfully');
    }

    /**
     * Display the specified shipmentTypes.
     * GET|HEAD /shipmentTypes/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var shipmentType $shipmentTypes */
        $shipmentTypes = $this->shipmentTypesRepository->findWithoutFail($id);

        if (empty($shipmentTypes)) {
            return $this->sendError('Shipment Types not found');
        }

        return $this->sendResponse($shipmentTypes->toArray(), 'Shipment Types retrieved successfully');
    }

    /**
     * Update the specified shipmentTypes in storage.
     * PUT/PATCH /shipmentTypes/{id}
     *
     * @param int $id
     * @param UpdateshipmentTypesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateshipmentTypesAPIRequest $request)
    {
        $input = $request->all();

        /** @var shipmentType $shipmentTypes */
        $shipmentTypes = $this->shipmentTypesRepository->findWithoutFail($id);

        if (empty($shipmentTypes)) {
            return $this->sendError('Shipment Types not found');
        }

        $shipmentTypes = $this->shipmentTypesRepository->update($input, $id);

        return $this->sendResponse($shipmentTypes->toArray(), 'shipmentTypes updated successfully');
    }

    /**
     * Remove the specified shipmentTypes from storage.
     * DELETE /shipmentTypes/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var shipmentType $shipmentTypes */
        $shipmentTypes = $this->shipmentTypesRepository->findWithoutFail($id);

        if (empty($shipmentTypes)) {
            return $this->sendError('Shipment Types not found');
        }

        $shipmentTypes->delete();

        return $this->sendResponse($id, 'Shipment Types deleted successfully');
    }
}
