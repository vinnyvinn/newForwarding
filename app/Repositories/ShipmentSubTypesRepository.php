<?php

namespace App\Repositories;

use App\Models\ShipmentSubType;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class ShipmentSubTypesRepository
 * @package App\Repositories
 * @version December 13, 2019, 9:49 am UTC
 *
 * @method ShipmentSubType findWithoutFail($id, $columns = ['*'])
 * @method ShipmentSubType find($id, $columns = ['*'])
 * @method ShipmentSubType first($columns = ['*'])
*/
class ShipmentSubTypesRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'slug',
        'shipment_type_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ShipmentSubType::class;
    }
}
