<?php

namespace App\Transformers;

use App\Models\BillofLandingStageComponent;
use League\Fractal\TransformerAbstract;

/**
 * Class BillofLandingStageComponentTransformer.
 *
 * @package namespace App\Transformers;
 */
class BillofLandingStageComponentTransformer extends TransformerAbstract
{
    /**
     * Transform the BillofLandingStageComponent entity.
     *
     * @param BillofLandingStageComponent $model
     *
     * @return array
     */
    public function transform(BillofLandingStageComponent $model)
    {
        return [
            "id" => $model->id,
            "bill_of_landing_stages_id" => $model->bill_of_landing_stages_id,
            "stage_id" => $model->stage_id,
            "name" => $model->name,
            "type" => $model->type,
            "required" => $model->required,
            "notification" => $model->notification,
            "timing" => $model->timing,
            "description" => $model->description,
            "components" => json_decode($model->components),
            "dmsComponents"=>$model->dmsComponents
        ];
    }
}
