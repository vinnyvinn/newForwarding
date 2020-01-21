<?php

namespace App\Transformers;

use App\Models\ShipmentSubType;
use League\Fractal\TransformerAbstract;


/**
 * Class ShipmentSubTypeTransformer.
 *
 * @package namespace App\Transformers;
 */
class ShipmentSubTypeTransformer extends TransformerAbstract
{
    /**
     * Transform the ShipmentSubType entity.
     *
     * @param ShipmentSubType $model
     *
     * @return array
     */
    public function transform(ShipmentSubType $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => $model->name,
            'slug' => $model->slug,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at
        ];
    }
}
