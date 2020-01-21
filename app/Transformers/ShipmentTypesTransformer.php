<?php

namespace App\Transformers;

use App\Models\shipmentType;
use League\Fractal\TransformerAbstract;


/**
 * Class ShipmentTypesTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShipmentTypesTransformer extends TransformerAbstract
{
    /**
     * Transform the ShipmentTypes entity.
     *
     * @param ShipmentType $model
     *
     * @return array
     */
    public function transform(ShipmentType $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => $model->name,
            'slug' => $model->slug,
            'shipment' => isset($model->shipment)?$model->shipment->name:null,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => formatToDate($model->updated_at)
        ];
    }
}
