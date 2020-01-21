<?php

namespace App\Models;

use App\BillOfLanding;
use App\Stage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class BillofLandingStages
 * @package App\Models
 * @version January 4, 2020, 12:35 pm UTC
 *
 * @property BillOfLanding billOfLandings
 * @property Stage stages
 * @property integer stages_id
 * @property integer bill_of_landings_id
 * @property string stage_name
 * @property string stage_description
 * @property integer weight
 */
class BillofLandingStages extends Model
{
    use SoftDeletes;

    public $table = 'bill_of_landing_stages';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'stages_id',
        'bill_of_landings_id',
        'stage_name',
        'stage_description',
        'weight'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'stages_id' => 'integer|exists:stages,id',
        'bill_of_landings_id' => 'integer|exists:bill_of_landings,id',
        'stage_name' => 'string',
        'stage_description' => 'string',
        'weight' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'stages_id' => 'required',
        'bill_of_landings_id' => 'required'
    ];

    /**
     * @return BelongsTo
     **/
    public function billOfLandings()
    {
        return $this->belongsTo(BillOfLanding::class, 'bill_of_landings_id');
    }

    /**
     * @return BelongsTo
     **/
    public function stages()
    {
        return $this->belongsTo(Stage::class, 'stages_id');
    }

    /**
     * @return HasOne
     */
    public function sComponent()
    {
        return $this->hasOne(BillofLandingStageComponent::class, 'bill_of_landing_stages_id');
    }

    /**
     * @return HasMany
     */
    public function sComponents()
    {
        return $this->hasMany(BillofLandingStageComponent::class, 'bill_of_landing_stages_id');
    }
}
