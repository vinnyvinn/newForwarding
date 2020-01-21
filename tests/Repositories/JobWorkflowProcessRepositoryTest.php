<?php namespace Tests\Repositories;

use App\Models\JobWorkflowProcess;
use App\Repositories\JobWorkflowProcessRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class JobWorkflowProcessRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var JobWorkflowProcessRepository
     */
    protected $jobWorkflowProcessRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->jobWorkflowProcessRepo = \App::make(JobWorkflowProcessRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->make()->toArray();

        $createdJobWorkflowProcess = $this->jobWorkflowProcessRepo->create($jobWorkflowProcess);

        $createdJobWorkflowProcess = $createdJobWorkflowProcess->toArray();
        $this->assertArrayHasKey('id', $createdJobWorkflowProcess);
        $this->assertNotNull($createdJobWorkflowProcess['id'], 'Created JobWorkflowProcess must have id specified');
        $this->assertNotNull(JobWorkflowProcess::find($createdJobWorkflowProcess['id']), 'JobWorkflowProcess with given id must be in DB');
        $this->assertModelData($jobWorkflowProcess, $createdJobWorkflowProcess);
    }

    /**
     * @test read
     */
    public function test_read_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->create();

        $dbJobWorkflowProcess = $this->jobWorkflowProcessRepo->find($jobWorkflowProcess->id);

        $dbJobWorkflowProcess = $dbJobWorkflowProcess->toArray();
        $this->assertModelData($jobWorkflowProcess->toArray(), $dbJobWorkflowProcess);
    }

    /**
     * @test update
     */
    public function test_update_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->create();
        $fakeJobWorkflowProcess = factory(JobWorkflowProcess::class)->make()->toArray();

        $updatedJobWorkflowProcess = $this->jobWorkflowProcessRepo->update($fakeJobWorkflowProcess, $jobWorkflowProcess->id);

        $this->assertModelData($fakeJobWorkflowProcess, $updatedJobWorkflowProcess->toArray());
        $dbJobWorkflowProcess = $this->jobWorkflowProcessRepo->find($jobWorkflowProcess->id);
        $this->assertModelData($fakeJobWorkflowProcess, $dbJobWorkflowProcess->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_job_workflow_process()
    {
        $jobWorkflowProcess = factory(JobWorkflowProcess::class)->create();

        $resp = $this->jobWorkflowProcessRepo->delete($jobWorkflowProcess->id);

        $this->assertTrue($resp);
        $this->assertNull(JobWorkflowProcess::find($jobWorkflowProcess->id), 'JobWorkflowProcess should not exist in DB');
    }
}
