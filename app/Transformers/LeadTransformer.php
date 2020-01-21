<?php

namespace App\Transformers;

use App\Lead;
use League\Fractal\TransformerAbstract;

/**
 * Class LeadTransformer.
 *
 * @package namespace App\Transformers;
 */
class LeadTransformer extends TransformerAbstract
{
    /**
     * Transform the Lead entity.
     *
     * @param Lead $model
     *
     * @return array
     */
    public function transform(Lead $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => ucwords($model->name),
            'contact_person' => ucfirst($model->contact_person),
            'phone' => $model->phone,
            'email' => $model->email,
            'currency' => $model->currency,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at
        ];
    }
}
