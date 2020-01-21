<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBldmsComponentRequest;
use App\Http\Requests\UpdateBldmsComponentRequest;
use App\Repositories\BldmsComponentRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class BldmsComponentController extends AppBaseController
{
    /** @var  BldmsComponentRepository */
    private $bldmsComponentRepository;

    public function __construct(BldmsComponentRepository $bldmsComponentRepo)
    {
        $this->bldmsComponentRepository = $bldmsComponentRepo;
    }

    /**
     * Display a listing of the BldmsComponent.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->bldmsComponentRepository->pushCriteria(new RequestCriteria($request));
        $bldmsComponents = $this->bldmsComponentRepository->all();

        return view('bldms_components.index')
            ->with('bldmsComponents', $bldmsComponents);
    }

    /**
     * Show the form for creating a new BldmsComponent.
     *
     * @return Response
     */
    public function create()
    {
        return view('bldms_components.create');
    }

    /**
     * Store a newly created BldmsComponent in storage.
     *
     * @param CreateBldmsComponentRequest $request
     *
     * @return Response
     */
    public function store(CreateBldmsComponentRequest $request)
    {
        $input = $request->all();

        $bldmsComponent = $this->bldmsComponentRepository->create($input);

        Flash::success('Bldms Component saved successfully.');

        return redirect(route('bldmsComponents.index'));
    }

    /**
     * Display the specified BldmsComponent.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            Flash::error('Bldms Component not found');

            return redirect(route('bldmsComponents.index'));
        }

        return view('bldms_components.show')->with('bldmsComponent', $bldmsComponent);
    }

    /**
     * Show the form for editing the specified BldmsComponent.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            Flash::error('Bldms Component not found');

            return redirect(route('bldmsComponents.index'));
        }

        return view('bldms_components.edit')->with('bldmsComponent', $bldmsComponent);
    }

    /**
     * Update the specified BldmsComponent in storage.
     *
     * @param  int              $id
     * @param UpdateBldmsComponentRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateBldmsComponentRequest $request)
    {
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            Flash::error('Bldms Component not found');

            return redirect(route('bldmsComponents.index'));
        }

        $bldmsComponent = $this->bldmsComponentRepository->update($request->all(), $id);

        Flash::success('Bldms Component updated successfully.');

        return redirect(route('bldmsComponents.index'));
    }

    /**
     * Remove the specified BldmsComponent from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $bldmsComponent = $this->bldmsComponentRepository->findWithoutFail($id);

        if (empty($bldmsComponent)) {
            Flash::error('Bldms Component not found');

            return redirect(route('bldmsComponents.index'));
        }

        $this->bldmsComponentRepository->delete($id);

        Flash::success('Bldms Component deleted successfully.');

        return redirect(route('bldmsComponents.index'));
    }
}
