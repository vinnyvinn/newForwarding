<?php

namespace App\Repositories;

use App\Models\JobStages;
use App\Stage;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class JobStagesRepository
 * @package App\Repositories
 * @version December 13, 2019, 12:19 pm UTC
 *
 * @method JobStages findWithoutFail($id, $columns = ['*'])
 * @method JobStages find($id, $columns = ['*'])
 * @method JobStages first($columns = ['*'])
*/
class JobStagesRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'type',
        'slag',
        'description',
        'shipment_sub_type_id',
        'shipment_type_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Stage::class;
    }
}
