<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\JobStages--skip=views,inde,edit,show,update;

class JobStages--skip=views,inde,edit,show,updateApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/job_stages--skip=views,inde,edit,show,updates', $jobStagesSkip=views,inde,edit,show,update
        );

        $this->assertApiResponse($jobStagesSkip=views,inde,edit,show,update);
    }

    /**
     * @test
     */
    public function test_read_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/job_stages--skip=views,inde,edit,show,updates/'.$jobStagesSkip=views,inde,edit,show,update->id
        );

        $this->assertApiResponse($jobStagesSkip=views,inde,edit,show,update->toArray());
    }

    /**
     * @test
     */
    public function test_update_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->create();
        $editedJobStages--skip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/job_stages--skip=views,inde,edit,show,updates/'.$jobStagesSkip=views,inde,edit,show,update->id,
            $editedJobStages--skip=views,inde,edit,show,update
        );

        $this->assertApiResponse($editedJobStages--skip=views,inde,edit,show,update);
    }

    /**
     * @test
     */
    public function test_delete_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/job_stages--skip=views,inde,edit,show,updates/'.$jobStagesSkip=views,inde,edit,show,update->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/job_stages--skip=views,inde,edit,show,updates/'.$jobStagesSkip=views,inde,edit,show,update->id
        );

        $this->response->assertStatus(404);
    }
}
