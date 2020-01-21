<?php

namespace WizPack\Workflow\Transformers;

use Carbon\Carbon;
use WizPack\Workflow\Models\Approvals;
use Illuminate\Support\Collection;
use League\Fractal\TransformerAbstract;
use WizPack\Workflow\Models\WorkflowStage;
use WizPack\Workflow\Models\WorkflowStageType;
use WizPack\Workflow\Models\WorkflowType;

/**
 * Class ApprovalTransformer.
 *
 * @package namespace App\Transformers\Workflow;
 */
class WorkflowTypeTransformer extends TransformerAbstract
{
    /**
     * Transform the Approval entity.
     *
     * @param WorkflowType $model
     *
     * @return array
     */
    public function transform(WorkflowType $model)
    {
        return [
            'id' => (int)$model->id,
            "name" => $model->name,
            "slug" => $model->slug,
            "created_at" => Carbon::parse($model->created_at)->format('d-M-y'),
            'updated_at' => $model->updated_at
        ];
    }

}
