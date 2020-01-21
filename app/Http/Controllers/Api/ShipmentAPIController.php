<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\API\CreateShipmentAPIRequest;
use App\Http\Requests\API\UpdateShipmentAPIRequest;
use App\Models\Shipment;
use App\Repositories\ShipmentRepository;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use InfyOm\Generator\Criteria\LimitOffsetCriteria;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Exceptions\ValidatorException;

/**
 * Class ShipmentController
 * @package App\Http\Controllers\API
 */

class ShipmentAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  ShipmentRepository */
    private $shipmentRepository;

    public function __construct(ShipmentRepository $shipmentRepo)
    {
        $this->shipmentRepository = $shipmentRepo;
    }

    /**
     * Display a listing of the Shipment.
     * GET|HEAD /shipments
     *
     * @param Request $request
     * @return Response|LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = [];

        $shipment = app(Shipment::class);

        if($request->has('all')){
            return $shipment->all();
        }

        return $this->present($shipment, $request->all(), $with);

    }

    /**
     * Store a newly created Shipment in storage.
     * POST /shipments
     *
     * @param CreateShipmentAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateShipmentAPIRequest $request)
    {
        $input = $request->all();

        $shipment = $this->shipmentRepository->create($input);

        return $this->sendResponse($shipment->toArray(), 'Shipment saved successfully');
    }

    /**
     * Display the specified Shipment.
     * GET|HEAD /shipments/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Shipment $shipment */
        $shipment = $this->shipmentRepository->findWithoutFail($id);

        if (empty($shipment)) {
            return $this->sendError('Shipment not found');
        }

        return $this->sendResponse($shipment->toArray(), 'Shipment retrieved successfully');
    }

    /**
     * Update the specified Shipment in storage.
     * PUT/PATCH /shipments/{id}
     *
     * @param int $id
     * @param UpdateShipmentAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateShipmentAPIRequest $request)
    {
        $input = $request->all();

        /** @var Shipment $shipment */
        $shipment = $this->shipmentRepository->findWithoutFail($id);

        if (empty($shipment)) {
            return $this->sendError('Shipment not found');
        }

        $shipment = $this->shipmentRepository->update($input, $id);

        return $this->sendResponse($shipment->toArray(), 'Shipment updated successfully');
    }

    /**
     * Remove the specified Shipment from storage.
     * DELETE /shipments/{id}
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Shipment $shipment */
        $shipment = $this->shipmentRepository->findWithoutFail($id);

        if (empty($shipment)) {
            return $this->sendError('Shipment not found');
        }

        $shipment->delete();

        return $this->sendResponse($id, 'Shipment deleted successfully');
    }
}
