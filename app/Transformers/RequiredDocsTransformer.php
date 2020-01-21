<?php

namespace App\Transformers;

use App\Models\RequiredDocs;
use League\Fractal\TransformerAbstract;


/**
 * Class RequiredDocsTransformer.
 *
 * @package namespace App\Transformers;
 */
class RequiredDocsTransformer extends TransformerAbstract
{
    /**
     * Transform the RequiredDocs entity.
     *
     * @param RequiredDocs $model
     *
     * @return array
     */
    public function transform(RequiredDocs $model)
    {
        return [
            'id'         => (int) $model->id,
            'name' => $model->name,
            'description' => $model->description,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at
        ];
    }
}
