<?php

namespace WizPack\Workflow\Repositories\API;

use Prettus\Repository\Eloquent\BaseRepository;
use WizPack\Workflow\Models\WorkflowStage;

/**
 * Class WorkflowStageRepository
 * @package App\Repositories
 * @version December 1, 2019, 12:34 am UTC
*/

class WorkflowStageRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'workflow_stage_type_id',
        'workflow_type_id',
        'weight'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return WorkflowStage::class;
    }
}
