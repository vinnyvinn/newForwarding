<?php

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class JobStages
 * @package App\Models
 * @version December 13, 2019, 12:19 pm UTC
 *
 * @property ShipmentSubType shipmentSubType
 * @property ShipmentType shipmentType
 * @property Collection stageComments
 * @property Collection stageComponents
 * @property string name
 * @property string type
 * @property string slag
 * @property string description
 * @property integer shipment_sub_type_id
 * @property integer shipment_type_id
 */
class JobStages extends Model
{
    use SoftDeletes,SearchableTrait;

    public $table = 'stages';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'slug' => 6,
            'description' => 6,
        ]
    ];

    public $fillable = [
        'name',
        'slug',
        'description',
        'shipment_sub_type_id',
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
        'description' => 'string',
        'shipment_sub_type_id' => 'integer',
        'shipment_type_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required',
        'slug' => 'required',
        'description' => 'required'
    ];

    /**
     * @return BelongsTo
     **/
    public function shipmentSubType()
    {
        return $this->belongsTo(ShipmentSubType::class, 'shipment_sub_type_id');
    }

    /**
     * @return BelongsTo
     **/
    public function shipmentType()
    {
        return $this->belongsTo(ShipmentType::class, 'shipment_type_id');
    }

    /**
     * @return HasMany
     **/
    public function stageComments()
    {
        return $this->hasMany(StageComment::class, 'stage_id');
    }

    /**
     * @return HasMany
     **/
    public function stageComponents()
    {
        return $this->hasMany(StageComponent::class, 'stage_id');
    }
}
