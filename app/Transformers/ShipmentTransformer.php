<?php

namespace App\Transformers;

use App\Models\Shipment;
use League\Fractal\TransformerAbstract;

/**
 * Class ShipmentTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShipmentTransformer extends TransformerAbstract
{
    /**
     * Transform the Shipment entity.
     *
     * @param Shipment $model
     *
     * @return array
     */
    public function transform(Shipment $model)
    {
        return [
            'id'         => (int) $model->id,
            'name' =>$model->name,
            'slug' =>$model->slug,
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
