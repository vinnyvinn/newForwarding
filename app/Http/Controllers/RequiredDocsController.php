<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRequiredDocsRequest;
use App\Http\Requests\UpdateRequiredDocsRequest;
use App\Repositories\RequiredDocsRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Response;

class RequiredDocsController extends AppBaseController
{
    /** @var  RequiredDocsRepository */
    private $requiredDocsRepository;

    public function __construct(RequiredDocsRepository $requiredDocsRepo)
    {
        $this->requiredDocsRepository = $requiredDocsRepo;
    }

    /**
     * Display a listing of the RequiredDocs.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $this->requiredDocsRepository->pushCriteria(new RequestCriteria($request));
        $requiredDocs = $this->requiredDocsRepository->all();

        return view('required_docs.index')
            ->with('requiredDocs', $requiredDocs);
    }

    /**
     * Show the form for creating a new RequiredDocs.
     *
     * @return Response
     */
    public function create()
    {
        return view('required_docs.create');
    }

    /**
     * Store a newly created RequiredDocs in storage.
     *
     * @param CreateRequiredDocsRequest $request
     *
     * @return Response
     */
    public function store(CreateRequiredDocsRequest $request)
    {
        $input = $request->all();

        $requiredDocs = $this->requiredDocsRepository->create($input);

        Flash::success('Required Docs saved successfully.');

        return redirect(route('requiredDocs.index'));
    }

    /**
     * Display the specified RequiredDocs.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            Flash::error('Required Docs not found');

            return redirect(route('requiredDocs.index'));
        }

        return view('required_docs.show')->with('requiredDocs', $requiredDocs);
    }

    /**
     * Show the form for editing the specified RequiredDocs.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            Flash::error('Required Docs not found');

            return redirect(route('requiredDocs.index'));
        }

        return view('required_docs.edit')->with('requiredDocs', $requiredDocs);
    }

    /**
     * Update the specified RequiredDocs in storage.
     *
     * @param  int              $id
     * @param UpdateRequiredDocsRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateRequiredDocsRequest $request)
    {
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            Flash::error('Required Docs not found');

            return redirect(route('requiredDocs.index'));
        }

        $requiredDocs = $this->requiredDocsRepository->update($request->all(), $id);

        Flash::success('Required Docs updated successfully.');

        return redirect(route('requiredDocs.index'));
    }

    /**
     * Remove the specified RequiredDocs from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $requiredDocs = $this->requiredDocsRepository->findWithoutFail($id);

        if (empty($requiredDocs)) {
            Flash::error('Required Docs not found');

            return redirect(route('requiredDocs.index'));
        }

        $this->requiredDocsRepository->delete($id);

        Flash::success('Required Docs deleted successfully.');

        return redirect(route('requiredDocs.index'));
    }
}
