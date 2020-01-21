<?php namespace Tests\Repositories;

use App\Models\JobStages--skip=views,inde,edit,show,update;
use App\Repositories\JobStages--skip=views,inde,edit,show,updateRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class JobStages--skip=views,inde,edit,show,updateRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var JobStages--skip=views,inde,edit,show,updateRepository
     */
    protected $jobStagesSkip=views,inde,edit,show,updateRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->jobStagesSkip=views,inde,edit,show,updateRepo = \App::make(JobStages--skip=views,inde,edit,show,updateRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->make()->toArray();

        $createdJobStages--skip=views,inde,edit,show,update = $this->jobStagesSkip=views,inde,edit,show,updateRepo->create($jobStagesSkip=views,inde,edit,show,update);

        $createdJobStages--skip=views,inde,edit,show,update = $createdJobStages--skip=views,inde,edit,show,update->toArray();
        $this->assertArrayHasKey('id', $createdJobStages--skip=views,inde,edit,show,update);
        $this->assertNotNull($createdJobStages--skip=views,inde,edit,show,update['id'], 'Created JobStages--skip=views,inde,edit,show,update must have id specified');
        $this->assertNotNull(JobStages--skip=views,inde,edit,show,update::find($createdJobStages--skip=views,inde,edit,show,update['id']), 'JobStages--skip=views,inde,edit,show,update with given id must be in DB');
        $this->assertModelData($jobStagesSkip=views,inde,edit,show,update, $createdJobStages--skip=views,inde,edit,show,update);
    }

    /**
     * @test read
     */
    public function test_read_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->create();

        $dbJobStages--skip=views,inde,edit,show,update = $this->jobStagesSkip=views,inde,edit,show,updateRepo->find($jobStagesSkip=views,inde,edit,show,update->id);

        $dbJobStages--skip=views,inde,edit,show,update = $dbJobStages--skip=views,inde,edit,show,update->toArray();
        $this->assertModelData($jobStagesSkip=views,inde,edit,show,update->toArray(), $dbJobStages--skip=views,inde,edit,show,update);
    }

    /**
     * @test update
     */
    public function test_update_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->create();
        $fakeJobStages--skip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->make()->toArray();

        $updatedJobStages--skip=views,inde,edit,show,update = $this->jobStagesSkip=views,inde,edit,show,updateRepo->update($fakeJobStages--skip=views,inde,edit,show,update, $jobStagesSkip=views,inde,edit,show,update->id);

        $this->assertModelData($fakeJobStages--skip=views,inde,edit,show,update, $updatedJobStages--skip=views,inde,edit,show,update->toArray());
        $dbJobStages--skip=views,inde,edit,show,update = $this->jobStagesSkip=views,inde,edit,show,updateRepo->find($jobStagesSkip=views,inde,edit,show,update->id);
        $this->assertModelData($fakeJobStages--skip=views,inde,edit,show,update, $dbJobStages--skip=views,inde,edit,show,update->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_job_stages--skip=views,inde,edit,show,update()
    {
        $jobStagesSkip=views,inde,edit,show,update = factory(JobStages--skip=views,inde,edit,show,update::class)->create();

        $resp = $this->jobStagesSkip=views,inde,edit,show,updateRepo->delete($jobStagesSkip=views,inde,edit,show,update->id);

        $this->assertTrue($resp);
        $this->assertNull(JobStages--skip=views,inde,edit,show,update::find($jobStagesSkip=views,inde,edit,show,update->id), 'JobStages--skip=views,inde,edit,show,update should not exist in DB');
    }
}
