<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class Shipment
 * @package App\Models
 * @version December 9, 2019, 2:13 pm UTC
 *
 * @property string name
 * @property string slug
 */
class Shipment extends Model
{
    use SoftDeletes, SearchableTrait;

    public $table = 'shipments';

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
        'slug'
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

    public function scopeFindBySlug($query, $slug)
    {
        return $query->where('slug',$slug)->first();

    }


}
