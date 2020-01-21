<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\BillofLandingStages;

class BillofLandingStagesApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/billof_landing_stages', $billofLandingStages
        );

        $this->assertApiResponse($billofLandingStages);
    }

    /**
     * @test
     */
    public function test_read_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/billof_landing_stages/'.$billofLandingStages->id
        );

        $this->assertApiResponse($billofLandingStages->toArray());
    }

    /**
     * @test
     */
    public function test_update_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->create();
        $editedBillofLandingStages = factory(BillofLandingStages::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/billof_landing_stages/'.$billofLandingStages->id,
            $editedBillofLandingStages
        );

        $this->assertApiResponse($editedBillofLandingStages);
    }

    /**
     * @test
     */
    public function test_delete_billof_landing_stages()
    {
        $billofLandingStages = factory(BillofLandingStages::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/billof_landing_stages/'.$billofLandingStages->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/billof_landing_stages/'.$billofLandingStages->id
        );

        $this->response->assertStatus(404);
    }
}
