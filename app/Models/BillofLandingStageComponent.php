<?php

namespace App\Models;

use App\DmsComponent;
use App\Stage;
use App\StageComponent;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class BillofLandingStageComponent
 * @package App\Models
 * @version January 4, 2020, 8:38 pm UTC
 *
 * @property Stage stages
 * @property BillOfLandingStages billOfLandingStages
 * @property Collection dmsComponents
 * @property integer stages_id
 * @property integer bill_of_landing_stages_id
 * @property string name
 * @property string type
 * @property boolean required
 * @property boolean notification
 * @property string timing
 * @property string description
 * @property string components
 */
class BillofLandingStageComponent extends Model
{
    use SoftDeletes;

    public $table = 'bill_of_landing_stage_components';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $dates = ['deleted_at'];

    public $fillable = [
        'stages_id',
        'bill_of_landing_stages_id',
        'stage_components_id',
        'name',
        'type',
        'required',
        'notification',
        'timing',
        'description',
        'components'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'stages_id' => 'integer',
        'bill_of_landing_stages_id' => 'integer',
        'stage_components_id' => 'integer',
        'name' => 'string',
        'type' => 'string',
        'required' => 'boolean',
        'notification' => 'boolean',
        'timing' => 'string',
        'description' => 'string',
        'components' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'bill_of_landing_stages_id' => 'required',
        'stage_components_id' => 'required',
        'name' => 'required',
        'type' => 'required',
        'required' => 'required',
        'notification' => 'required'
    ];

    /**
     * @return BelongsTo
     **/
    public function stages()
    {
        return $this->belongsTo(Stage::class, 'stages_id');
    }

    /**
     * @return BelongsTo
     **/
    public function billOfLandingStages()
    {
        return $this->belongsTo(BillofLandingStages::class, 'bill_of_landing_stages_id');
    }

    /**
     * @return HasOne
     */
    public function dmsComponents()
    {
        return $this->hasOne(DmsComponent::class, 'bill_of_landing_stage_components_id');
    }


    public function scopeByBLStageId($query, $id)
    {
        return $query->where('bill_of_landing_stages_id',$id);

    }
}
