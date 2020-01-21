<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\ShipmentSubType;

class ShipmentSubTypesApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/shipment_sub_types', $shipmentSubTypes
        );

        $this->assertApiResponse($shipmentSubTypes);
    }

    /**
     * @test
     */
    public function test_read_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/shipment_sub_types/'.$shipmentSubTypes->id
        );

        $this->assertApiResponse($shipmentSubTypes->toArray());
    }

    /**
     * @test
     */
    public function test_update_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->create();
        $editedShipmentSubTypes = factory(ShipmentSubType::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/shipment_sub_types/'.$shipmentSubTypes->id,
            $editedShipmentSubTypes
        );

        $this->assertApiResponse($editedShipmentSubTypes);
    }

    /**
     * @test
     */
    public function test_delete_shipment_sub_types()
    {
        $shipmentSubTypes = factory(ShipmentSubType::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/shipment_sub_types/'.$shipmentSubTypes->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/shipment_sub_types/'.$shipmentSubTypes->id
        );

        $this->response->assertStatus(404);
    }
}
