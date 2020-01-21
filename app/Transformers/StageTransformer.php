<?php

namespace App\Transformers;

use App\Stage;
use Carbon\Carbon;
use League\Fractal\TransformerAbstract;

/**
 * Class StageTransformer.
 *
 * @package namespace App\Transformers;
 */
class StageTransformer extends TransformerAbstract
{
    /**
     * Transform the Stage entity.
     *
     * @param Stage $model
     *
     * @return array
     */
    public function transform(Stage $model)
    {
        return [
            'id'=> (int) $model->id,
            "name"=>ucwords($model->name),
            "type"=> ucwords($model->type),
            "description"=>ucfirst($model->description),
            "created_at"=>Carbon::parse($model->created_at)->format('d-M-y'),
            'updated_at' => $model->updated_at
        ];
    }
}
