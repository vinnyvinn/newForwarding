<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\shipmentType;

class shipmentTypesApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/shipment_types', $shipmentTypes
        );

        $this->assertApiResponse($shipmentTypes);
    }

    /**
     * @test
     */
    public function test_read_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/shipment_types/'.$shipmentTypes->id
        );

        $this->assertApiResponse($shipmentTypes->toArray());
    }

    /**
     * @test
     */
    public function test_update_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->create();
        $editedshipmentTypes = factory(shipmentType::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/shipment_types/'.$shipmentTypes->id,
            $editedshipmentTypes
        );

        $this->assertApiResponse($editedshipmentTypes);
    }

    /**
     * @test
     */
    public function test_delete_shipment_types()
    {
        $shipmentTypes = factory(shipmentType::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/shipment_types/'.$shipmentTypes->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/shipment_types/'.$shipmentTypes->id
        );

        $this->response->assertStatus(404);
    }
}
