<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Setting extends Model
{
    use SoftDeletes;

    protected $dateFormat = 'Y-m-d H:i:s';

    public $table = 'settings';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'setting_name',
        'setting_type',
        'setting_value',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'setting_name',
        'setting_type',
        'setting_value'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'setting_name' => 'required',
        'setting_type' => 'required',
        'setting_value' => 'required'
    ];
}
