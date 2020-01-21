<?php

namespace App\Repositories;

use App\Models\BldmsComponent;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class BldmsComponentRepository
 * @package App\Repositories
 * @version January 5, 2020, 8:25 pm UTC
 *
 * @method BldmsComponent findWithoutFail($id, $columns = ['*'])
 * @method BldmsComponent find($id, $columns = ['*'])
 * @method BldmsComponent first($columns = ['*'])
*/
class BldmsComponentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'bill_of_landing_id',
        'bill_of_landing_stage_components_id',
        'stage_component_id',
        'completion_date',
        'remark',
        'doc_links',
        'text',
        'subchecklist'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return BldmsComponent::class;
    }
}
