<?php

namespace App\Repositories;

use App\Models\JobWorkflowProcess;
use App\Models\JobWorkflowTransportDocs;
use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Class JobWorkflowStageDocsRepository
 * @package App\Repositories
 * @version January 2, 2020, 9:08 pm UTC
 *
 * @method JobWorkflowProcess findWithoutFail($id, $columns = ['*'])
 * @method JobWorkflowProcess find($id, $columns = ['*'])
 * @method JobWorkflowProcess first($columns = ['*'])
*/
class JobWorkflowTransportDocsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'transport_doc_id',
        'shipment_types_id',
        'shipment_sub_types_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return JobWorkflowTransportDocs::class;
    }
}
