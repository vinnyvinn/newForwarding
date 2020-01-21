<?php

namespace App\Transformers;

use App\Contract;
use League\Fractal\TransformerAbstract;

/**
 * Class ContractTransformer.
 *
 * @package namespace App\Transformers;
 */
class ContractTransformer extends TransformerAbstract
{
    /**
     * Transform the Contract entity.
     *
     * @param Contract $model
     *
     * @return array
     */
    public function transform(Contract $model)
    {
        return [
            'id'         => (int) $model->id,
            'company_name' => ucwords($model->company_name),
            'contract' => ucfirst($model->contact),
            'contract_type' => $this->contractType($model),
            'charge' => $this->contractCharge($model),
            'created_at' => formatToDate($model->created_at),
            'updated_at' => formatToDate($model->updated_at)
        ];
    }

    public function contractCharge($contract)
    {
        if($contract->contract_type == 'rates'){
            return$contract->slubs->map(function ($slub){
                return [
                    'rate' => $slub->from. ' - '. $slub->to.'USD'. $slub->charges
                ];
            })->implode('rate',' ,');

        }

        return $contract->contract_type == 'open' ? $contract->value : $contract->value;
    }

    public function contractType($contract)
    {
        return $contract->contract_type == 'open' ||
        $contract->contract_type == 'rates' ? ($contract->contract_type ==
        'open' ? 'Open' : 'Rates') : ($contract->contract_type == 'per_km' ?
            'Per Kilo Meter' : 'Per Tonne');
    }
}
