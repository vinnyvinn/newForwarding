<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\JobWorkflowProcess;

class JobWorkflowProcessApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/job_workflow_processes', $jobWorkflowProcess
        );

        $this->assertApiResponse($jobWorkflowProcess);
    }

    /**
     * @test
     */
    public function test_read_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/job_workflow_processes/'.$jobWorkflowProcess->id
        );

        $this->assertApiResponse($jobWorkflowProcess->toArray());
    }

    /**
     * @test
     */
    public function test_update_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->create();
        $editedJobWorkflowProcess = factory(JobWorkflowProcess::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/job_workflow_processes/'.$jobWorkflowProcess->id,
            $editedJobWorkflowProcess
        );

        $this->assertApiResponse($editedJobWorkflowProcess);
    }

    /**
     * @test
     */
    public function test_delete_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/job_workflow_processes/'.$jobWorkflowProcess->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/job_workflow_processes/'.$jobWorkflowProcess->id
        );

        $this->response->assertStatus(404);
    }
}
