<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class RequiredDocs
 * @package App\Models
 * @version December 13, 2019, 1:34 pm UTC
 *
 * @property string name
 * @property string description
 */
class RequiredDocs extends Model
{
    use SoftDeletes,SearchableTrait;

    public $table = 'transport_docs';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'description' => 6
        ]
    ];

    public $fillable = [
        'name',
        'description'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'description' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required',
        'description' => 'required'
    ];

    
}
