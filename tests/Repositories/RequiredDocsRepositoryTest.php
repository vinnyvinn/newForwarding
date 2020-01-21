<?php namespace Tests\Repositories;

use App\Models\RequiredDocs;
use App\Repositories\RequiredDocsRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class RequiredDocsRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var RequiredDocsRepository
     */
    protected $requiredDocsRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->requiredDocsRepo = \App::make(RequiredDocsRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->make()->toArray();

        $createdRequiredDocs = $this->requiredDocsRepo->create($requiredDocs);

        $createdRequiredDocs = $createdRequiredDocs->toArray();
        $this->assertArrayHasKey('id', $createdRequiredDocs);
        $this->assertNotNull($createdRequiredDocs['id'], 'Created RequiredDocs must have id specified');
        $this->assertNotNull(RequiredDocs::find($createdRequiredDocs['id']), 'RequiredDocs with given id must be in DB');
        $this->assertModelData($requiredDocs, $createdRequiredDocs);
    }

    /**
     * @test read
     */
    public function test_read_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->create();

        $dbRequiredDocs = $this->requiredDocsRepo->find($requiredDocs->id);

        $dbRequiredDocs = $dbRequiredDocs->toArray();
        $this->assertModelData($requiredDocs->toArray(), $dbRequiredDocs);
    }

    /**
     * @test update
     */
    public function test_update_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->create();
        $fakeRequiredDocs = factory(RequiredDocs::class)->make()->toArray();

        $updatedRequiredDocs = $this->requiredDocsRepo->update($fakeRequiredDocs, $requiredDocs->id);

        $this->assertModelData($fakeRequiredDocs, $updatedRequiredDocs->toArray());
        $dbRequiredDocs = $this->requiredDocsRepo->find($requiredDocs->id);
        $this->assertModelData($fakeRequiredDocs, $dbRequiredDocs->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_required_docs()
    {
        $requiredDocs = factory(RequiredDocs::class)->create();

        $resp = $this->requiredDocsRepo->delete($requiredDocs->id);

        $this->assertTrue($resp);
        $this->assertNull(RequiredDocs::find($requiredDocs->id), 'RequiredDocs should not exist in DB');
    }
}
