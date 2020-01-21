<?php namespace Tests\Repositories;

use App\Models\JobStages;
use App\Repositories\JobStagesRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class JobStagesRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var JobStagesRepository
     */
    protected $jobStagesRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->jobStagesRepo = \App::make(JobStagesRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_job_stages()
    {
        $jobStages = factory(JobStages::class)->make()->toArray();

        $createdJobStages = $this->jobStagesRepo->create($jobStages);

        $createdJobStages = $createdJobStages->toArray();
        $this->assertArrayHasKey('id', $createdJobStages);
        $this->assertNotNull($createdJobStages['id'], 'Created JobStages must have id specified');
        $this->assertNotNull(JobStages::find($createdJobStages['id']), 'JobStages with given id must be in DB');
        $this->assertModelData($jobStages, $createdJobStages);
    }

    /**
     * @test read
     */
    public function test_read_job_stages()
    {
        $jobStages = factory(JobStages::class)->create();

        $dbJobStages = $this->jobStagesRepo->find($jobStages->id);

        $dbJobStages = $dbJobStages->toArray();
        $this->assertModelData($jobStages->toArray(), $dbJobStages);
    }

    /**
     * @test update
     */
    public function test_update_job_stages()
    {
        $jobStages = factory(JobStages::class)->create();
        $fakeJobStages = factory(JobStages::class)->make()->toArray();

        $updatedJobStages = $this->jobStagesRepo->update($fakeJobStages, $jobStages->id);

        $this->assertModelData($fakeJobStages, $updatedJobStages->toArray());
        $dbJobStages = $this->jobStagesRepo->find($jobStages->id);
        $this->assertModelData($fakeJobStages, $dbJobStages->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_job_stages()
    {
        $jobStages = factory(JobStages::class)->create();

        $resp = $this->jobStagesRepo->delete($jobStages->id);

        $this->assertTrue($resp);
        $this->assertNull(JobStages::find($jobStages->id), 'JobStages should not exist in DB');
    }
}
