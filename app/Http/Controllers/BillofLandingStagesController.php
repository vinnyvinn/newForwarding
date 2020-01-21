<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBillofLandingStagesRequest;
use App\Http\Requests\UpdateBillofLandingStagesRequest;
use App\Repositories\BillofLandingStagesRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class BillofLandingStagesController extends AppBaseController
{
    /** @var  BillofLandingStagesRepository */
    private $billofLandingStagesRepository;

    public function __construct(BillofLandingStagesRepository $billofLandingStagesRepo)
    {
        $this->billofLandingStagesRepository = $billofLandingStagesRepo;
    }

    /**
     * Display a listing of the BillofLandingStages.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->billofLandingStagesRepository->pushCriteria(new RequestCriteria($request));
        $billofLandingStages = $this->billofLandingStagesRepository->all();

        return view('billof_landing_stages.index')
            ->with('billofLandingStages', $billofLandingStages);
    }

    /**
     * Show the form for creating a new BillofLandingStages.
     *
     * @return Response
     */
    public function create()
    {
        return view('billof_landing_stages.create');
    }

    /**
     * Store a newly created BillofLandingStages in storage.
     *
     * @param CreateBillofLandingStagesRequest $request
     *
     * @return Response
     */
    public function store(CreateBillofLandingStagesRequest $request)
    {
        $input = $request->all();

        $billofLandingStages = $this->billofLandingStagesRepository->create($input);

        Flash::success('Billof Landing Stages saved successfully.');

        return redirect(route('billofLandingStages.index'));
    }

    /**
     * Display the specified BillofLandingStages.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            Flash::error('Billof Landing Stages not found');

            return redirect(route('billofLandingStages.index'));
        }

        return view('billof_landing_stages.show')->with('billofLandingStages', $billofLandingStages);
    }

    /**
     * Show the form for editing the specified BillofLandingStages.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            Flash::error('Billof Landing Stages not found');

            return redirect(route('billofLandingStages.index'));
        }

        return view('billof_landing_stages.edit')->with('billofLandingStages', $billofLandingStages);
    }

    /**
     * Update the specified BillofLandingStages in storage.
     *
     * @param  int              $id
     * @param UpdateBillofLandingStagesRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateBillofLandingStagesRequest $request)
    {
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            Flash::error('Billof Landing Stages not found');

            return redirect(route('billofLandingStages.index'));
        }

        $billofLandingStages = $this->billofLandingStagesRepository->update($request->all(), $id);

        Flash::success('Billof Landing Stages updated successfully.');

        return redirect(route('billofLandingStages.index'));
    }

    /**
     * Remove the specified BillofLandingStages from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $billofLandingStages = $this->billofLandingStagesRepository->findWithoutFail($id);

        if (empty($billofLandingStages)) {
            Flash::error('Billof Landing Stages not found');

            return redirect(route('billofLandingStages.index'));
        }

        $this->billofLandingStagesRepository->delete($id);

        Flash::success('Billof Landing Stages deleted successfully.');

        return redirect(route('billofLandingStages.index'));
    }
}
