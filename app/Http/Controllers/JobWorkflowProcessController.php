<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateJobWorkflowProcessRequest;
use App\Http\Requests\UpdateJobWorkflowProcessRequest;
use App\Repositories\JobWorkflowProcessRepository;
use App\Http\Controllers\AppBaseController;
use Illuminate\Http\Request;
use Flash;
use Prettus\Repository\Criteria\RequestCriteria;
use Prettus\Repository\Exceptions\RepositoryException;
use Prettus\Validator\Exceptions\ValidatorException;
use Response;

class JobWorkflowProcessController extends AppBaseController
{
    /** @var  JobWorkflowProcessRepository */
    private $jobWorkflowProcessRepository;

    public function __construct(JobWorkflowProcessRepository $jobWorkflowProcessRepo)
    {
        $this->jobWorkflowProcessRepository = $jobWorkflowProcessRepo;
    }

    /**
     * Display a listing of the JobWorkflowProcess.
     *
     * @param Request $request
     * @return Response
     * @throws RepositoryException
     */
    public function index(Request $request)
    {
        $this->jobWorkflowProcessRepository->pushCriteria(new RequestCriteria($request));
        $jobWorkflowProcesses = $this->jobWorkflowProcessRepository->all();

        return view('job_workflow_processes.index')
            ->with('jobWorkflowProcesses', $jobWorkflowProcesses);
    }

    /**
     * Show the form for creating a new JobWorkflowProcess.
     *
     * @return Response
     */
    public function create()
    {
        return view('job_workflow_processes.create');
    }

    /**
     * Store a newly created JobWorkflowProcess in storage.
     *
     * @param CreateJobWorkflowProcessRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function store(CreateJobWorkflowProcessRequest $request)
    {
        $input = $request->all();

        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->create($input);

        Flash::success('Job Workflow Process saved successfully.');

        return redirect(route('jobWorkflowProcesses.index'));
    }

    /**
     * Display the specified JobWorkflowProcess.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            Flash::error('Job Workflow Process not found');

            return redirect(route('jobWorkflowProcesses.index'));
        }

        return view('job_workflow_processes.show')->with('jobWorkflowProcess', $jobWorkflowProcess);
    }

    /**
     * Show the form for editing the specified JobWorkflowProcess.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            Flash::error('Job Workflow Process not found');

            return redirect(route('jobWorkflowProcesses.index'));
        }

        return view('job_workflow_processes.edit')->with('jobWorkflowProcess', $jobWorkflowProcess);
    }

    /**
     * Update the specified JobWorkflowProcess in storage.
     *
     * @param int $id
     * @param UpdateJobWorkflowProcessRequest $request
     *
     * @return Response
     * @throws ValidatorException
     */
    public function update($id, UpdateJobWorkflowProcessRequest $request)
    {
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            Flash::error('Job Workflow Process not found');

            return redirect(route('jobWorkflowProcesses.index'));
        }

        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->update($request->all(), $id);

        Flash::success('Job Workflow Process updated successfully.');

        return redirect(route('jobWorkflowProcesses.index'));
    }

    /**
     * Remove the specified JobWorkflowProcess from storage.
     *
     * @param  int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        $jobWorkflowProcess = $this->jobWorkflowProcessRepository->findWithoutFail($id);

        if (empty($jobWorkflowProcess)) {
            Flash::error('Job Workflow Process not found');

            return redirect(route('jobWorkflowProcesses.index'));
        }

        $this->jobWorkflowProcessRepository->delete($id);

        Flash::success('Job Workflow Process deleted successfully.');

        return redirect(route('jobWorkflowProcesses.index'));
    }
}
