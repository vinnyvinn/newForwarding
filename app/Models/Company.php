<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class Company
 * @package App\Models
 * @version October 27, 2019, 5:00 pm UTC
 *
 * @property string name
 * @property integer phone
 * @property string email
 * @property string website
 * @property string Address
 */
class Company extends Model
{
    use SoftDeletes, SearchableTrait;

    protected $dateFormat = 'Y-m-d H:i:s';

    public $table = 'companies';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'name',
        'phone',
        'email',
        'website',
        'Address'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'phone' => 'integer',
        'email' => 'string',
        'website' => 'string',
        'Address' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required',
        'phone' => 'required',
        'email' => 'required',
        'website' => 'required',
        'Address' => 'required'
    ];

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'phone' => 6
        ]
    ];


}
