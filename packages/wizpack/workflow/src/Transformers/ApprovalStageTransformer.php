<?php

namespace WizPack\Workflow\Transformers;

use Carbon\Carbon;
use WizPack\Workflow\Models\Approvals;
use Illuminate\Support\Collection;
use League\Fractal\TransformerAbstract;
use WizPack\Workflow\Models\WorkflowStage;

/**
 * Class ApprovalTransformer.
 *
 * @package namespace App\Transformers\Workflow;
 */
class ApprovalStageTransformer extends TransformerAbstract
{
    /**
     * Transform the Approval entity.
     *
     * @param WorkflowStage $model
     *
     * @return array
     */
    public function transform(WorkflowStage $model)
    {
        return [
            'id' => (int)$model->id,
            "workflow_type" => $model->workflowType? ucwords($model->workflowType->name): null,
            "workflow_stage" => $model->workflowStageType? ucwords($model->workflowStageType->name) : null,
            "weight" => $model->weight,
            "created_at" => Carbon::parse($model->created_at)->format('d-M-y'),
            'updated_at' => $model->updated_at
        ];
    }

}
