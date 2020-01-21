<?php

namespace App\Repositories;

use App\Models\JobWorkflowProcess;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class JobWorkflowProcessRepository
 * @package App\Repositories
 * @version January 2, 2020, 9:08 pm UTC
 *
 * @method JobWorkflowProcess findWithoutFail($id, $columns = ['*'])
 * @method JobWorkflowProcess find($id, $columns = ['*'])
 * @method JobWorkflowProcess first($columns = ['*'])
*/
class JobWorkflowProcessRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'stages_id',
        'shipment_types_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return JobWorkflowProcess::class;
    }
}
