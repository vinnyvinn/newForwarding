<?php

namespace App\Http\Controllers\API;

use App\Criteria\CustomRequestCriteria;
use App\Http\Requests\API\CreateCountryAPIRequest;
use App\Http\Requests\API\UpdateCountryAPIRequest;
use App\Models\Country;
use App\Repositories\CountryRepository;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use Prettus\Validator\Exceptions\ValidatorException;


/**
 * Class CountryController
 * @package App\Http\Controllers\API
 */
class CountryAPIController extends AppBaseController
{
    use TablePresentableTrait;

    /** @var  CountryRepository */
    private $countryRepository;

    public function __construct(CountryRepository $countryRepo)
    {
        $this->countryRepository = $countryRepo;
    }

    /**
     * Display a listing of the Country.
     * GET|HEAD /countries
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $with = [];

        $country = app(Country::class);

        return $this->present($country, $request->all(), $with);
    }

    /**
     * Store a newly created Country in storage.
     * POST /countries
     *
     * @param CreateCountryAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateCountryAPIRequest $request)
    {
        $input = $request->all();

        $country = $this->countryRepository->create($input);

        return $this->sendResponse($country->toArray(), 'Country saved successfully');
    }

    /**
     * Display the specified Country.
     * GET|HEAD /countries/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Country $country */
        $country = $this->countryRepository->findWithoutFail($id);

        if (empty($country)) {
            return $this->sendError('Country not found');
        }

        return $this->sendResponse($country->toArray(), 'Country retrieved successfully');
    }

    /**
     * Update the specified Country in storage.
     * PUT/PATCH /countries/{id}
     *
     * @param int $id
     * @param UpdateCountryAPIRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateCountryAPIRequest $request)
    {
        $input = $request->all();

        /** @var Country $country */
        $country = $this->countryRepository->findWithoutFail($id);

        if (empty($country)) {
            return $this->sendError('Country not found');
        }

        $country = $this->countryRepository->update($input, $id);

        return $this->sendResponse($country->toArray(), 'Country updated successfully');
    }

    /**
     * Remove the specified Country from storage.
     * DELETE /countries/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Country $country */
        $country = $this->countryRepository->findWithoutFail($id);

        if (empty($country)) {
            return $this->sendError('Country not found');
        }

        $country->delete();

        return $this->sendResponse($id, 'Country deleted successfully');
    }
}
