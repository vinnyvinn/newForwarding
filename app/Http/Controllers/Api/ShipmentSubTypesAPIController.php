<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\API\CreateShipmentSubTypesAPIRequest;
use App\Http\Requests\API\UpdateShipmentSubTypesAPIRequest;
use App\Models\ShipmentSubType;
use App\Repositories\ShipmentSubTypesRepository;
use App\Transformers\ShipmentSubTypeTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Prettus\Validator\Exceptions\ValidatorException;


/**
 * Class ShipmentSubTypesController
 * @package App\Http\Controllers\API
 */

class ShipmentSubTypesAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  ShipmentSubTypesRepository */
    private $shipmentSubTypesRepository;

    public function __construct(ShipmentSubTypesRepository $shipmentSubTypesRepo)
    {
        $this->shipmentSubTypesRepository = $shipmentSubTypesRepo;
    }

    /**
     * Display a listing of the ShipmentSubTypes.
     * GET|HEAD /shipmentSubTypes
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = [];

        $model = app(ShipmentSubType::class);

        $collection = $this->presentWithoutPagination($model, $request->all(), $with);

        $transformedResult = new Collection($collection, new ShipmentSubTypeTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];


        if ($request->has('all')) {
            return $data;
        }

        return $this->paginate($data);
    }

    /**
     * Store a newly created ShipmentSubTypes in storage.
     * POST /shipmentSubTypes
     *
     * @param CreateShipmentSubTypesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateShipmentSubTypesAPIRequest $request)
    {
        $input = $request->all();

        $shipmentSubTypes = $this->shipmentSubTypesRepository->create($input);

        return $this->sendResponse($shipmentSubTypes->toArray(), 'Shipment Sub Types saved successfully');
    }

    /**
     * Display the specified ShipmentSubTypes.
     * GET|HEAD /shipmentSubTypes/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var ShipmentSubType $shipmentSubTypes */
        $shipmentSubTypes = $this->shipmentSubTypesRepository->findWithoutFail($id);

        if (empty($shipmentSubTypes)) {
            return $this->sendError('Shipment Sub Types not found');
        }

        return $this->sendResponse($shipmentSubTypes->toArray(), 'Shipment Sub Types retrieved successfully');
    }

    /**
     * Update the specified ShipmentSubTypes in storage.
     * PUT/PATCH /shipmentSubTypes/{id}
     *
     * @param int $id
     * @param UpdateShipmentSubTypesAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateShipmentSubTypesAPIRequest $request)
    {
        $input = $request->all();

        /** @var ShipmentSubType $shipmentSubTypes */
        $shipmentSubTypes = $this->shipmentSubTypesRepository->findWithoutFail($id);

        if (empty($shipmentSubTypes)) {
            return $this->sendError('Shipment Sub Types not found');
        }

        $shipmentSubTypes = $this->shipmentSubTypesRepository->update($input, $id);

        return $this->sendResponse($shipmentSubTypes->toArray(), 'ShipmentSubTypes updated successfully');
    }

    /**
     * Remove the specified ShipmentSubTypes from storage.
     * DELETE /shipmentSubTypes/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var ShipmentSubType $shipmentSubTypes */
        $shipmentSubTypes = $this->shipmentSubTypesRepository->findWithoutFail($id);

        if (empty($shipmentSubTypes)) {
            return $this->sendError('Shipment Sub Types not found');
        }

        $shipmentSubTypes->delete();

        return $this->sendResponse($id, 'Shipment Sub Types deleted successfully');
    }
}
