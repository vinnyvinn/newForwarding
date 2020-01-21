<?php

namespace App\Repositories;

use App\Models\BillofLandingStageComponent;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class BillofLandingStageComponentRepository
 * @package App\Repositories
 * @version January 4, 2020, 8:38 pm UTC
 *
 * @method BillofLandingStageComponent findWithoutFail($id, $columns = ['*'])
 * @method BillofLandingStageComponent find($id, $columns = ['*'])
 * @method BillofLandingStageComponent first($columns = ['*'])
*/
class BillofLandingStageComponentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'stages_id',
        'bill_of_landing_stages_id',
        'stage_components_id',
        'name',
        'type',
        'required',
        'notification',
        'timing',
        'description',
        'components'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return BillofLandingStageComponent::class;
    }
}
