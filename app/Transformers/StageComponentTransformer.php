<?php

namespace App\Transformers;

use App\StageComponent;
use League\Fractal\TransformerAbstract;

;

/**
 * Class StageComponentTransformer.
 *
 * @package namespace App\Transformers;
 */
class StageComponentTransformer extends TransformerAbstract
{
    /**
     * Transform the StageComponent entity.
     *
     * @param StageComponent $model
     *
     * @return array
     */
    public function transform(StageComponent $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => ucwords($model->name),
            'description' => ucfirst($model->description),
            'type' => ucfirst($model->type),
            'required' => $model->required == true ? 'Yes' : 'No',
            'notification' => $model->notification == true ? 'Yes' : 'No',
            'timing' => $model->timing,
            'components' => ($model->components != null ? implode(",",json_decode($model->components)) : $model->components ),
            'created_at' => formatToDate($model->created_at),
            'updated_at' => formatToDate($model->updated_at)
        ];
    }
}
