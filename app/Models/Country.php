<?php

namespace App\Models;

use App\continent;
use Eloquent as Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class Country
 * @package App\Models
 * @version December 7, 2019, 4:18 pm UTC
 *
 * @property Continent continentCode
 * @property string name
 * @property string full_name
 * @property string iso3
 * @property integer number
 * @property string continent_code
 */
class Country extends Model
{
    use SearchableTrait;

    public $table = 'countries';

    protected $primaryKey = 'number';

    public $fillable = [
        'name',
        'full_name',
        'iso3',
        'number',
        'continent_code'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'code' => 'string',
        'name' => 'string',
        'full_name' => 'string',
        'iso3' => 'string',
        'number' => 'integer',
        'continent_code' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required',
        'full_name' => 'required',
        'iso3' => 'required',
        'number' => 'required',
        'continent_code' => 'required'
    ];

    protected $searchable = [
        'columns' => [
            'countries.name' => 6,
            'countries.full_name' => 6,
            'countries.number' => 6,
            'countries.continent_code' => 6,
            'continents.code' => 6,
        ],
        'joins' => [
            'continents' => ['countries.continent_code','continents.code'],
        ]
    ];
    /**
     * @return BelongsTo
     **/
    public function continentCode()
    {
        return $this->belongsTo(Continent::class, 'continent_code');
    }
}
