<?php

namespace App\Transformers;

use App\PurchaseOrder;
use League\Fractal\TransformerAbstract;

/**
 * Class PurchaseOrderTransformer.
 *
 * @package namespace App\Transformers;
 */
class PurchaseOrderTransformer extends TransformerAbstract
{
    /**
     * Transform the PurchaseOrder entity.
     *
     * @param PurchaseOrder $model
     *
     * @return array
     */
    public function transform(PurchaseOrder $model)
    {
        return [
            'id' => (int)$model->id,
            'po_no' => $model->po_no,
            'Name' => ucfirst($model->supplier->Name),
            'created_by' => ucfirst($model->user->name),
            'status' => ucfirst($model->status),
            'po_date' => formatToDate($model->po_date),
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at,
        ];
    }
}
