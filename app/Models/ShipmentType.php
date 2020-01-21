<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class shipmentTypes
 * @package App\Models
 * @version December 10, 2019, 2:05 pm UTC
 *
 * @property Shipment shipment
 * @property Collection shipmentSubTypes
 * @property Collection stages
 * @property string name
 * @property string slug
 * @property integer shipment_id
 */
class ShipmentType extends Model
{
    use SoftDeletes, SearchableTrait;

    public $table = 'shipment_types';

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
        'shipments_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'slug' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        "name" => "required"
    ];

    /**
     * @return BelongsTo
     **/
    public function shipment()
    {
        return $this->belongsTo(Shipment::class, 'shipments_id');
    }

    public function scopeByType($query, Request $request)
    {
        if ($request->has('type')) {
            return $query->whereHas('shipment', function ($q) use ($request) {
                return $q->where('name', $request->get('type'));
            });
        }

        return $query;

    }

}
