<?php

namespace App\Transformers;

use App\TransportService;
use League\Fractal\TransformerAbstract;

/**
 * Class TransportServiceTransformer.
 *
 * @package namespace App\Transformers;
 */
class TransportServiceTransformer extends TransformerAbstract
{
    /**
     * Transform the TransportService entity.
     *
     * @param TransportService $model
     *
     * @return array
     */
    public function transform(TransportService $model)
    {
        return [
            'id' => (int)$model->id,
            'name'=> ucwords($model->name),
            'type'=> ucfirst($model->type),
            'unit'=> $model->unit ,
            'rate'=> $model->rate ,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => formatToDate($model->updated_at)
        ];
    }
}
