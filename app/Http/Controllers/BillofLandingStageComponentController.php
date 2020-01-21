<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBillofLandingStageComponentRequest;
use App\Http\Requests\UpdateBillofLandingStageComponentRequest;
use App\Repositories\BillofLandingStageComponentRepository;
use Illuminate\Http\Request;
use Flash;
use Illuminate\Http\Response;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Exceptions\ValidatorException;

class BillofLandingStageComponentController extends AppBaseController
{
    /** @var  BillofLandingStageComponentRepository */
    private $billofLandingStageComponentRepository;

    public function __construct(BillofLandingStageComponentRepository $billofLandingStageComponentRepo)
    {
        $this->billofLandingStageComponentRepository = $billofLandingStageComponentRepo;
    }

    /**
     * Display a listing of the BillofLandingStageComponent.
     *
     * @param Request $request
     * @return Response
     * @throws RepositoryException
     */
    public function index(Request $request)
    {
        $this->billofLandingStageComponentRepository->pushCriteria(new RequestCriteria($request));
        $billofLandingStageComponents = $this->billofLandingStageComponentRepository->all();

        return view('billof_landing_stage_components.index')
            ->with('billofLandingStageComponents', $billofLandingStageComponents);
    }

    /**
     * Show the form for creating a new BillofLandingStageComponent.
     *
     * @return Response
     */
    public function create()
    {
        return view('billof_landing_stage_components.create');
    }

    /**
     * Store a newly created BillofLandingStageComponent in storage.
     *
     * @param CreateBillofLandingStageComponentRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateBillofLandingStageComponentRequest $request)
    {
        $input = $request->all();

        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->create($input);

        Flash::success('Billof Landing Stage Component saved successfully.');

        return redirect(route('billofLandingStageComponents.index'));
    }

    /**
     * Display the specified BillofLandingStageComponent.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            Flash::error('Billof Landing Stage Component not found');

            return redirect(route('billofLandingStageComponents.index'));
        }

        return view('billof_landing_stage_components.show')->with('billofLandingStageComponent', $billofLandingStageComponent);
    }

    /**
     * Show the form for editing the specified BillofLandingStageComponent.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            Flash::error('Billof Landing Stage Component not found');

            return redirect(route('billofLandingStageComponents.index'));
        }

        return view('billof_landing_stage_components.edit')->with('billofLandingStageComponent', $billofLandingStageComponent);
    }

    /**
     * Update the specified BillofLandingStageComponent in storage.
     *
     * @param int $id
     * @param UpdateBillofLandingStageComponentRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateBillofLandingStageComponentRequest $request)
    {
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            Flash::error('Billof Landing Stage Component not found');

            return redirect(route('billofLandingStageComponents.index'));
        }

        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->update($request->all(), $id);

        Flash::success('Billof Landing Stage Component updated successfully.');

        return redirect(route('billofLandingStageComponents.index'));
    }

    /**
     * Remove the specified BillofLandingStageComponent from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $billofLandingStageComponent = $this->billofLandingStageComponentRepository->findWithoutFail($id);

        if (empty($billofLandingStageComponent)) {
            Flash::error('Billof Landing Stage Component not found');

            return redirect(route('billofLandingStageComponents.index'));
        }

        $this->billofLandingStageComponentRepository->delete($id);

        Flash::success('Billof Landing Stage Component deleted successfully.');

        return redirect(route('billofLandingStageComponents.index'));
    }
}
