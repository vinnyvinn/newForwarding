<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\JobStages;

class JobStagesApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_job_stages()
    {
        $jobStages = factory(JobStages::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/job_stages', $jobStages
        );

        $this->assertApiResponse($jobStages);
    }

    /**
     * @test
     */
    public function test_read_job_stages()
    {
        $jobStages = factory(JobStages::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/job_stages/'.$jobStages->id
        );

        $this->assertApiResponse($jobStages->toArray());
    }

    /**
     * @test
     */
    public function test_update_job_stages()
    {
        $jobStages = factory(JobStages::class)->create();
        $editedJobStages = factory(JobStages::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/job_stages/'.$jobStages->id,
            $editedJobStages
        );

        $this->assertApiResponse($editedJobStages);
    }

    /**
     * @test
     */
    public function test_delete_job_stages()
    {
        $jobStages = factory(JobStages::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/job_stages/'.$jobStages->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/job_stages/'.$jobStages->id
        );

        $this->response->assertStatus(404);
    }
}
