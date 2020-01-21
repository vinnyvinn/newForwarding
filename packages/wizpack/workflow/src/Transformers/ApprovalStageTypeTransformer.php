<?php

namespace WizPack\Workflow\Transformers;

use Carbon\Carbon;
use WizPack\Workflow\Models\Approvals;
use Illuminate\Support\Collection;
use League\Fractal\TransformerAbstract;
use WizPack\Workflow\Models\WorkflowStage;
use WizPack\Workflow\Models\WorkflowStageType;

/**
 * Class ApprovalTransformer.
 *
 * @package namespace App\Transformers\Workflow;
 */
class ApprovalStageTypeTransformer extends TransformerAbstract
{
    /**
     * Transform the Approval entity.
     *
     * @param WorkflowStageType $model
     *
     * @return array
     */
    public function transform(WorkflowStageType $model)
    {
        return [
            'id' => (int)$model->id,
            "name" => $model->name,
            "weight" => $model->weight,
            "slug" => $model->slug,
            "created_at" => Carbon::parse($model->created_at)->format('d-M-y'),
            'updated_at' => $model->updated_at
        ];
    }

}
