<?php

namespace App\Repositories;

use App\Models\BillofLandingStages;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class BillofLandingStagesRepository
 * @package App\Repositories
 * @version January 4, 2020, 12:35 pm UTC
 *
 * @method BillofLandingStages findWithoutFail($id, $columns = ['*'])
 * @method BillofLandingStages find($id, $columns = ['*'])
 * @method BillofLandingStages first($columns = ['*'])
*/
class BillofLandingStagesRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'stages_id',
        'bill_of_landings_id',
        'stage_name',
        'stage_description',
        'weight'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return BillofLandingStages::class;
    }
}
