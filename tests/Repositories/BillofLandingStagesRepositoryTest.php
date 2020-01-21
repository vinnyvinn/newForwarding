<?php namespace Tests\Repositories;

use App\Models\BillofLandingStages;
use App\Repositories\BillofLandingStagesRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class BillofLandingStagesRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var BillofLandingStagesRepository
     */
    protected $billofLandingStagesRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->billofLandingStagesRepo = \App::make(BillofLandingStagesRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->make()->toArray();

        $createdBillofLandingStages = $this->billofLandingStagesRepo->create($billofLandingStages);

        $createdBillofLandingStages = $createdBillofLandingStages->toArray();
        $this->assertArrayHasKey('id', $createdBillofLandingStages);
        $this->assertNotNull($createdBillofLandingStages['id'], 'Created BillofLandingStages must have id specified');
        $this->assertNotNull(BillofLandingStages::find($createdBillofLandingStages['id']), 'BillofLandingStages with given id must be in DB');
        $this->assertModelData($billofLandingStages, $createdBillofLandingStages);
    }

    /**
     * @test read
     */
    public function test_read_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->create();

        $dbBillofLandingStages = $this->billofLandingStagesRepo->find($billofLandingStages->id);

        $dbBillofLandingStages = $dbBillofLandingStages->toArray();
        $this->assertModelData($billofLandingStages->toArray(), $dbBillofLandingStages);
    }

    /**
     * @test update
     */
    public function test_update_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->create();
        $fakeBillofLandingStages = factory(BillofLandingStages::class)->make()->toArray();

        $updatedBillofLandingStages = $this->billofLandingStagesRepo->update($fakeBillofLandingStages, $billofLandingStages->id);

        $this->assertModelData($fakeBillofLandingStages, $updatedBillofLandingStages->toArray());
        $dbBillofLandingStages = $this->billofLandingStagesRepo->find($billofLandingStages->id);
        $this->assertModelData($fakeBillofLandingStages, $dbBillofLandingStages->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->create();

        $resp = $this->billofLandingStagesRepo->delete($billofLandingStages->id);

        $this->assertTrue($resp);
        $this->assertNull(BillofLandingStages::find($billofLandingStages->id), 'BillofLandingStages should not exist in DB');
    }
}
