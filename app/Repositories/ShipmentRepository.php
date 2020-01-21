<?php

namespace App\Repositories;

use App\Models\Shipment;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class ShipmentRepository
 * @package App\Repositories
 * @version December 9, 2019, 2:13 pm UTC
 *
 * @method Shipment findWithoutFail($id, $columns = ['*'])
 * @method Shipment find($id, $columns = ['*'])
 * @method Shipment first($columns = ['*'])
*/
class ShipmentRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'slug'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Shipment::class;
    }
}
