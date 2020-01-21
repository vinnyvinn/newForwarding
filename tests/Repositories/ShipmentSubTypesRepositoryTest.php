<?php namespace Tests\Repositories;

use App\Models\ShipmentSubType;
use App\Repositories\ShipmentSubTypesRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class ShipmentSubTypesRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var ShipmentSubTypesRepository
     */
    protected $shipmentSubTypesRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->shipmentSubTypesRepo = \App::make(ShipmentSubTypesRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->make()->toArray();

        $createdShipmentSubTypes = $this->shipmentSubTypesRepo->create($shipmentSubTypes);

        $createdShipmentSubTypes = $createdShipmentSubTypes->toArray();
        $this->assertArrayHasKey('id', $createdShipmentSubTypes);
        $this->assertNotNull($createdShipmentSubTypes['id'], 'Created ShipmentSubTypes must have id specified');
        $this->assertNotNull(ShipmentSubType::find($createdShipmentSubTypes['id']), 'ShipmentSubTypes with given id must be in DB');
        $this->assertModelData($shipmentSubTypes, $createdShipmentSubTypes);
    }

    /**
     * @test read
     */
    public function test_read_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->create();

        $dbShipmentSubTypes = $this->shipmentSubTypesRepo->find($shipmentSubTypes->id);

        $dbShipmentSubTypes = $dbShipmentSubTypes->toArray();
        $this->assertModelData($shipmentSubTypes->toArray(), $dbShipmentSubTypes);
    }

    /**
     * @test update
     */
    public function test_update_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->create();
        $fakeShipmentSubTypes = factory(ShipmentSubType::class)->make()->toArray();

        $updatedShipmentSubTypes = $this->shipmentSubTypesRepo->update($fakeShipmentSubTypes, $shipmentSubTypes->id);

        $this->assertModelData($fakeShipmentSubTypes, $updatedShipmentSubTypes->toArray());
        $dbShipmentSubTypes = $this->shipmentSubTypesRepo->find($shipmentSubTypes->id);
        $this->assertModelData($fakeShipmentSubTypes, $dbShipmentSubTypes->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->create();

        $resp = $this->shipmentSubTypesRepo->delete($shipmentSubTypes->id);

        $this->assertTrue($resp);
        $this->assertNull(ShipmentSubType::find($shipmentSubTypes->id), 'ShipmentSubTypes should not exist in DB');
    }
}
