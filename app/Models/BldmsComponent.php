<?php

namespace App\Models;

use App\BillOfLanding;
use App\StageComponent;
use Eloquent as Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class BldmsComponent
 * @package App\Models
 * @version January 5, 2020, 8:25 pm UTC
 *
 * @property BillOfLandingStageComponent billOfLandingStageComponents
 * @property BillOfLanding billOfLanding
 * @property StageComponent stageComponent
 * @property integer bill_of_landing_id
 * @property integer bill_of_landing_stage_components_id
 * @property integer stage_component_id
 * @property string remark
 * @property string doc_links
 * @property string text
 * @property string subchecklist
 */
class BldmsComponent extends Model
{
    use SoftDeletes;

    public $table = 'dms_components';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];



    public $fillable = [
        'bill_of_landing_id',
        'bill_of_landing_stage_components_id',
        'stage_component_id',
        'completion_date',
        'remark',
        'doc_links',
        'text',
        'subchecklist'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'bill_of_landing_id' => 'integer',
        'bill_of_landing_stage_components_id' => 'integer',
        'stage_component_id' => 'integer',
        'remark' => 'string',
        'doc_links' => 'string',
        'text' => 'string',
        'subchecklist' => 'string'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        
    ];

    /**
     * @return BelongsTo
     **/
    public function billOfLandingStageComponents()
    {
        return $this->belongsTo(BillOfLandingStageComponent::class, 'bill_of_landing_stage_components_id');
    }

    /**
     * @return BelongsTo
     **/
    public function billOfLanding()
    {
        return $this->belongsTo(BillOfLanding::class, 'bill_of_landing_id');
    }

    /**
     * @return BelongsTo
     **/
    public function stageComponent()
    {
        return $this->belongsTo(StageComponent::class, 'stage_component_id');
    }
}
