<?php

namespace App\Transformers;

use App\TransportDoc;
use League\Fractal\TransformerAbstract;

/**
 * Class TransportDocTransformer.
 *
 * @package namespace App\Transformers;
 */
class TransportDocTransformer extends TransformerAbstract
{
    /**
     * Transform the TransportDoc entity.
     *
     * @param TransportDoc $model
     *
     * @return array
     */
    public function transform(TransportDoc $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => $model->name,
            'description' => $model->description,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at
        ];
    }
}
