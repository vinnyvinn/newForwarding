<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $code
 * @property string $continent_code
 * @property string $name
 * @property string $full_name
 * @property string $iso3
 * @property integer $number
 * @property Continent $continent
 */
class Country extends Model
{
    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'code';

    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['continent_code', 'name', 'full_name', 'iso3', 'number'];

    /**
     * @return BelongsTo
     */
    public function continent()
    {
        return $this->belongsTo('App\Continent', 'continent_code', 'code');
    }
}
