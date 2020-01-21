<?php

namespace App\Transformers;

use App\Models\JobWorkflowProcess;
use League\Fractal\TransformerAbstract;


/**
 * Class JobWorkflowProcessTransformer.
 *
 * @package namespace App\Transformers;
 */
class JobWorkflowProcessTransformer extends TransformerAbstract
{
    /**
     * Transform the JobWorkflowProcess entity.
     *
     * @param JobWorkflowProcess $model
     *
     * @return array
     */
    public function transform(JobWorkflowProcess $model)
    {
        return [
            'stage_id' => $model->stages->id,
            'stage_name' => isset($model->stages)?$model->stages->name:null,
            'shipment_type_id' => isset($model->shipmentTypes)?$model->shipmentTypes->id:null,
            'shipment_type_name' => isset($model->shipmentTypes)?$model->shipmentTypes->name:null,
            'shipment_sub_type_id' => isset($model->shipmentSubTypes)?$model->shipmentSubTypes->id:null,
            'shipment_sub_type_name' => isset($model->shipmentSubTypes)?$model->shipmentSubTypes->name:null,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at
        ];
    }
}
