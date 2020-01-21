<?php namespace Tests\Repositories;

use App\Models\BldmsComponent;
use App\Repositories\BldmsComponentRepository;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use Tests\ApiTestTrait;

class BldmsComponentRepositoryTest extends TestCase
{
    use ApiTestTrait, DatabaseTransactions;

    /**
     * @var BldmsComponentRepository
     */
    protected $bldmsComponentRepo;

    public function setUp() : void
    {
        parent::setUp();
        $this->bldmsComponentRepo = \App::make(BldmsComponentRepository::class);
    }

    /**
     * @test create
     */
    public function test_create_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->make()->toArray();

        $createdBldmsComponent = $this->bldmsComponentRepo->create($bldmsComponent);

        $createdBldmsComponent = $createdBldmsComponent->toArray();
        $this->assertArrayHasKey('id', $createdBldmsComponent);
        $this->assertNotNull($createdBldmsComponent['id'], 'Created BldmsComponent must have id specified');
        $this->assertNotNull(BldmsComponent::find($createdBldmsComponent['id']), 'BldmsComponent with given id must be in DB');
        $this->assertModelData($bldmsComponent, $createdBldmsComponent);
    }

    /**
     * @test read
     */
    public function test_read_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->create();

        $dbBldmsComponent = $this->bldmsComponentRepo->find($bldmsComponent->id);

        $dbBldmsComponent = $dbBldmsComponent->toArray();
        $this->assertModelData($bldmsComponent->toArray(), $dbBldmsComponent);
    }

    /**
     * @test update
     */
    public function test_update_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->create();
        $fakeBldmsComponent = factory(BldmsComponent::class)->make()->toArray();

        $updatedBldmsComponent = $this->bldmsComponentRepo->update($fakeBldmsComponent, $bldmsComponent->id);

        $this->assertModelData($fakeBldmsComponent, $updatedBldmsComponent->toArray());
        $dbBldmsComponent = $this->bldmsComponentRepo->find($bldmsComponent->id);
        $this->assertModelData($fakeBldmsComponent, $dbBldmsComponent->toArray());
    }

    /**
     * @test delete
     */
    public function test_delete_bldms_component()
    {
        $bldmsComponent = factory(BldmsComponent::class)->create();

        $resp = $this->bldmsComponentRepo->delete($bldmsComponent->id);

        $this->assertTrue($resp);
        $this->assertNull(BldmsComponent::find($bldmsComponent->id), 'BldmsComponent should not exist in DB');
    }
}
