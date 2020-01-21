<?php

namespace App\Repositories;

use App\Models\ShipmentType;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class shipmentTypesRepository
 * @package App\Repositories
 * @version December 10, 2019, 2:05 pm UTC
 *
 * @method shipmentType findWithoutFail($id, $columns = ['*'])
 * @method shipmentType find($id, $columns = ['*'])
 * @method shipmentType first($columns = ['*'])
*/
class shipmentTypesRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'slug',
        'shipment_id'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return ShipmentType::class;
    }
}
