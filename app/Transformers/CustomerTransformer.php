<?php

namespace App\Transformers;

use App\Client;
use App\Customer;
use League\Fractal\TransformerAbstract;

/**
 * Class CustomerTransformer.
 *
 * @package namespace App\Transformers;
 */
class CustomerTransformer extends TransformerAbstract
{
    /**
     * Transform the Customer entity.
     *
     * @param Client $model
     *
     * @return array
     */
    public function transform(Client $model)
    {
        return [
            'DCLink' => (int)$model->DCLink,
            'Name' => ucwords($model->Name),
            'Contact_Person' => ucfirst($model->Contact_Person),
            'Account' => $model->Account,
            'Telephone' => $model->Telephone
        ];
    }
}
