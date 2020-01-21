<?php namespace Tests\Repositories;

use App\Models\BillofLandingStageComponent;
use App\Repositories\BillofLandingStageComponentRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class BillofLandingStageComponentRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var BillofLandingStageComponentRepository
     */
    protected $billofLandingStageComponentRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->billofLandingStageComponentRepo = \App::make(BillofLandingStageComponentRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->make()->toArray();

        $createdBillofLandingStageComponent = $this->billofLandingStageComponentRepo->create($billofLandingStageComponent);

        $createdBillofLandingStageComponent = $createdBillofLandingStageComponent->toArray();
        $this->assertArrayHasKey('id', $createdBillofLandingStageComponent);
        $this->assertNotNull($createdBillofLandingStageComponent['id'], 'Created BillofLandingStageComponent must have id specified');
        $this->assertNotNull(BillofLandingStageComponent::find($createdBillofLandingStageComponent['id']), 'BillofLandingStageComponent with given id must be in DB');
        $this->assertModelData($billofLandingStageComponent, $createdBillofLandingStageComponent);
    }

    /**
     * @test read
     */
    public function test_read_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->create();

        $dbBillofLandingStageComponent = $this->billofLandingStageComponentRepo->find($billofLandingStageComponent->id);

        $dbBillofLandingStageComponent = $dbBillofLandingStageComponent->toArray();
        $this->assertModelData($billofLandingStageComponent->toArray(), $dbBillofLandingStageComponent);
    }

    /**
     * @test update
     */
    public function test_update_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->create();
        $fakeBillofLandingStageComponent = factory(BillofLandingStageComponent::class)->make()->toArray();

        $updatedBillofLandingStageComponent = $this->billofLandingStageComponentRepo->update($fakeBillofLandingStageComponent, $billofLandingStageComponent->id);

        $this->assertModelData($fakeBillofLandingStageComponent, $updatedBillofLandingStageComponent->toArray());
        $dbBillofLandingStageComponent = $this->billofLandingStageComponentRepo->find($billofLandingStageComponent->id);
        $this->assertModelData($fakeBillofLandingStageComponent, $dbBillofLandingStageComponent->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->create();

        $resp = $this->billofLandingStageComponentRepo->delete($billofLandingStageComponent->id);

        $this->assertTrue($resp);
        $this->assertNull(BillofLandingStageComponent::find($billofLandingStageComponent->id), 'BillofLandingStageComponent should not exist in DB');
    }
}
