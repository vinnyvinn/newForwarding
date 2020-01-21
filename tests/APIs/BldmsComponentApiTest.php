<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\BldmsComponent;

class BldmsComponentApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/bldms_components', $bldmsComponent
        );

        $this->assertApiResponse($bldmsComponent);
    }

    /**
     * @test
     */
    public function test_read_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/bldms_components/'.$bldmsComponent->id
        );

        $this->assertApiResponse($bldmsComponent->toArray());
    }

    /**
     * @test
     */
    public function test_update_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->create();
        $editedBldmsComponent = factory(BldmsComponent::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/bldms_components/'.$bldmsComponent->id,
            $editedBldmsComponent
        );

        $this->assertApiResponse($editedBldmsComponent);
    }

    /**
     * @test
     */
    public function test_delete_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/bldms_components/'.$bldmsComponent->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/bldms_components/'.$bldmsComponent->id
        );

        $this->response->assertStatus(404);
    }
}
