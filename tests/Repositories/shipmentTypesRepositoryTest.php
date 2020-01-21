<?php namespace Tests\Repositories;

use App\Models\shipmentType;
use App\Repositories\shipmentTypesRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class shipmentTypesRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var shipmentTypesRepository
     */
    protected $shipmentTypesRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->shipmentTypesRepo = \App::make(shipmentTypesRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->make()->toArray();

        $createdshipmentTypes = $this->shipmentTypesRepo->create($shipmentTypes);

        $createdshipmentTypes = $createdshipmentTypes->toArray();
        $this->assertArrayHasKey('id', $createdshipmentTypes);
        $this->assertNotNull($createdshipmentTypes['id'], 'Created shipmentTypes must have id specified');
        $this->assertNotNull(shipmentType::find($createdshipmentTypes['id']), 'shipmentTypes with given id must be in DB');
        $this->assertModelData($shipmentTypes, $createdshipmentTypes);
    }

    /**
     * @test read
     */
    public function test_read_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->create();

        $dbshipmentTypes = $this->shipmentTypesRepo->find($shipmentTypes->id);

        $dbshipmentTypes = $dbshipmentTypes->toArray();
        $this->assertModelData($shipmentTypes->toArray(), $dbshipmentTypes);
    }

    /**
     * @test update
     */
    public function test_update_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->create();
        $fakeshipmentTypes = factory(shipmentType::class)->make()->toArray();

        $updatedshipmentTypes = $this->shipmentTypesRepo->update($fakeshipmentTypes, $shipmentTypes->id);

        $this->assertModelData($fakeshipmentTypes, $updatedshipmentTypes->toArray());
        $dbshipmentTypes = $this->shipmentTypesRepo->find($shipmentTypes->id);
        $this->assertModelData($fakeshipmentTypes, $dbshipmentTypes->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->create();

        $resp = $this->shipmentTypesRepo->delete($shipmentTypes->id);

        $this->assertTrue($resp);
        $this->assertNull(shipmentType::find($shipmentTypes->id), 'shipmentTypes should not exist in DB');
    }
}
