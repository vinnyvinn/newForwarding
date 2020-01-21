<?php namespace Tests\APIs;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;
use App\Models\RequiredDocs;

class RequiredDocsApiTest extends TestCase
{
    use ApiTestTrait, WithoutMiddleware, DatabaseTransactions;

    /**
     * @test
     */
    public function test_create_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->make()->toArray();

        $this->response = $this->json(
            'POST',
            '/api/required_docs', $requiredDocs
        );

        $this->assertApiResponse($requiredDocs);
    }

    /**
     * @test
     */
    public function test_read_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->create();

        $this->response = $this->json(
            'GET',
            '/api/required_docs/'.$requiredDocs->id
        );

        $this->assertApiResponse($requiredDocs->toArray());
    }

    /**
     * @test
     */
    public function test_update_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->create();
        $editedRequiredDocs = factory(RequiredDocs::class)->make()->toArray();

        $this->response = $this->json(
            'PUT',
            '/api/required_docs/'.$requiredDocs->id,
            $editedRequiredDocs
        );

        $this->assertApiResponse($editedRequiredDocs);
    }

    /**
     * @test
     */
    public function test_delete_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->create();

        $this->response = $this->json(
            'DELETE',
             '/api/required_docs/'.$requiredDocs->id
         );

        $this->assertApiSuccess();
        $this->response = $this->json(
            'GET',
            '/api/required_docs/'.$requiredDocs->id
        );

        $this->response->assertStatus(404);
    }
}
