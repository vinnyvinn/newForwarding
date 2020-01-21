<?php

namespace App\Transformers;

use App\BillOfLanding;
use League\Fractal\TransformerAbstract;

/**
 * Class BillOfLandingTransformer.
 *
 * @package namespace App\Transformers;
 */
class BillOfLandingTransformer extends TransformerAbstract
{
    /**
     * Transform the BillOfLanding entity.
     *
     * @param BillOfLanding $model
     *
     * @return array
     */
    public function transform(BillOfLanding $model)
    {
        return [
            'file_number' => $model->file_number,
            'code_name' => $model->code_name,
            'customer' => $model->customerLink(),
            'id' => (int)$model->id,
            'status' => $model->statusLabel(),
            'contact_person' => ucwords($model->customer? $model->customer->Contact_Person :''),
            'Telephone' => $model->customer ? $model->customer->Telephone :'',
            'type' => ucwords($model->quote ? $model->quote->type :''),
            'bl_number' => $model->bl_number,
            'editLink' => $model->editLink(),
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at
        ];
    }
}
