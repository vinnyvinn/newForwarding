<?php

namespace App\Transformers;

use App\Quotation;
use League\Fractal\TransformerAbstract;

/**
 * Class QuotationTransformer.
 *
 * @package namespace App\Transformers;
 */
class QuotationTransformer extends TransformerAbstract
{
    /**
     * Transform the Quotation entity.
     *
     * @param Quotation $model
     *
     * @return array
     */
    public function transform(Quotation $model)
    {
        return [
            'id' => (int)$model->id,
            'quote_id' => 'QU00' . ucwords($model->quote_id ? $model->quote_id : $model->id . '/' . formatDateToYear($model->created_at)),
            'customer' => (ucwords($model->customer ? $model->customer->Name :'')),
            'contact_person' => ucfirst($model->customer->Contact_Person),
            'Telephone' => ucfirst($model->customer->Telephone),
            'job_no' => (ucwords($model->project_int == 0)) ? 'No Job Number Set' : ucwords($model->project_int),
            'status' => $model->quotationStatus(),
            'status_plain' => $model->status,
            'title' => $model->title,
            'ago' => $model->created_at->diffForHumans(),
            'generated_on' => formatToDate($model->created_at),
            'link' => $model->quotationLink(),
        ];
    }
}
