<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class ShipmentSubTypes
 * @package App\Models
 * @version December 13, 2019, 9:49 am UTC
 *
 * @property ShipmentType shipmentType
 * @property Collection stages
 * @property string name
 * @property string slug
 * @property integer shipment_type_id
 */
class ShipmentSubType extends Model
{
    use SoftDeletes,SearchableTrait;

    public $table = 'shipment_sub_types';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'slug' => 6
        ]
    ];

    public $fillable = [
        'name',
        'slug',
        'shipment_type_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'slug' => 'string',
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        "name"=>"required"
    ];

}
