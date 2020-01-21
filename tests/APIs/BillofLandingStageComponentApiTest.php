<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\BillofLandingStageComponent;

class BillofLandingStageComponentApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/billof_landing_stage_components', $billofLandingStageComponent
        );

        $this->assertApiResponse($billofLandingStageComponent);
    }

    /**
     * @test
     */
    public function test_read_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/billof_landing_stage_components/'.$billofLandingStageComponent->id
        );

        $this->assertApiResponse($billofLandingStageComponent->toArray());
    }

    /**
     * @test
     */
    public function test_update_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->create();
        $editedBillofLandingStageComponent = factory(BillofLandingStageComponent::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/billof_landing_stage_components/'.$billofLandingStageComponent->id,
            $editedBillofLandingStageComponent
        );

        $this->assertApiResponse($editedBillofLandingStageComponent);
    }

    /**
     * @test
     */
    public function test_delete_billof_landing_stage_component()
    {
        $billofLandingStageComponent = factory(BillofLandingStageComponent::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/billof_landing_stage_components/'.$billofLandingStageComponent->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/billof_landing_stage_components/'.$billofLandingStageComponent->id
        );

        $this->response->assertStatus(404);
    }
}
