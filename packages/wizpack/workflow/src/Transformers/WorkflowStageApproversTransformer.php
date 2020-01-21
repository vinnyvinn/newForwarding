<?php

namespace WizPack\Workflow\Transformers;

use Carbon\Carbon;
use League\Fractal\TransformerAbstract;
use WizPack\Workflow\Models\WorkflowStage;
use WizPack\Workflow\Models\WorkflowStageApprovers;

/**
 * Class ApprovalTransformer.
 *
 * @package namespace App\Transformers\Workflow;
 */
class WorkflowStageApproversTransformer extends TransformerAbstract
{
    /**
     * Transform the Approval entity.
     *
     * @param WorkflowStageApprovers $model
     *
     * @return array
     */
    public function transform(WorkflowStageApprovers $model)
    {
        return [
            'id' => (int)$model->id,
            'approver' => $model->user ? $model->user->name : null,
            'granted_by' => $model->grantedBy ? $model->grantedBy->name : null,
            "workflow_stage_type" => $model->workflowStageType ? ucwords($model->workflowStageType->name) : null,
            "workflow_type" => $model->workflowStage->workflowType ? ucwords($model->workflowStage->workflowType->name) : null,
            "weight" => $model->workflowStageType ? $model->workflowStageType->weight : null,
            "created_at" => Carbon::parse($model->created_at)->format('d-M-y'),
            'updated_at' => $model->updated_at
        ];
    }

}
