<?php

namespace App\Transformers;

use App\Models\BillofLandingStages;
use Carbon\Carbon;
use League\Fractal\TransformerAbstract;

/**
 * Class BillofLandingStageTransformer.
 *
 * @package namespace App\Transformers;
 */
class BillofLandingStageTransformer extends TransformerAbstract
{
    /**
     * Transform the BillofLandingStage entity.
     *
     * @param BillofLandingStages $model
     *
     * @return array
     */
    public function transform(BillofLandingStages $model)
    {
        return [
            'id' => (int)$model->id,
            'bl_id' => (int)$model->bill_of_landings_id,
            'stage_id' => (int)$model->stages_id,
            "name" => ucwords($model->stages->name),
            "type" => ucwords($model->stages->type),
            "description" => ucfirst($model->stages->description),
            "created_at" => Carbon::parse($model->created_at)->format('d-M-y'),
            'updated_at' => $model->updated_at
        ];
    }
}
