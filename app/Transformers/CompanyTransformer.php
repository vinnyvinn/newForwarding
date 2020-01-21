<?php

namespace App\Transformers;

use App\Models\Company;
use League\Fractal\TransformerAbstract;

/**
 * Class CompanyTransformer.
 *
 * @package namespace App\Transformers;
 */
class CompanyTransformer extends TransformerAbstract
{
    /**
     * Transform the Company entity.
     *
     * @param Company $model
     *
     * @return array
     */
    public function transform(Company $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => $model->name,
            'email' => $model->email,
            'phone' => $model->phone,
            'website' => $model->website,
            'Address' => $model->Address,
        ];
    }
}
