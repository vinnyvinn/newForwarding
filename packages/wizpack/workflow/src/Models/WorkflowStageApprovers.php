<?php

namespace WizPack\Workflow\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * @SWG\Definition(
 *      definition="WorkflowStageApprovers",
 *      required={""},
 *      @SWG\Property(
 *          property="id",
 *          description="id",
 *          type="integer",
 *          format="int32"
 *      ),
 *      @SWG\Property(
 *          property="user_id",
 *          description="user_id",
 *          type="integer",
 *          format="int32"
 *      ),
 *      @SWG\Property(
 *          property="granted_by",
 *          description="granted_by",
 *          type="integer",
 *          format="int32"
 *      ),
 *      @SWG\Property(
 *          property="workflow_stage_id",
 *          description="workflow_stage_id",
 *          type="integer",
 *          format="int32"
 *      ),
 *      @SWG\Property(
 *          property="workflow_stage_type_id",
 *          description="workflow_stage_type_id",
 *          type="integer",
 *          format="int32"
 *      ),
 *      @SWG\Property(
 *          property="created_at",
 *          description="created_at",
 *          type="string",
 *          format="date-time"
 *      ),
 *      @SWG\Property(
 *          property="updated_at",
 *          description="updated_at",
 *          type="string",
 *          format="date-time"
 *      ),
 *      @SWG\Property(
 *          property="deleted_at",
 *          description="deleted_at",
 *          type="string",
 *          format="date-time"
 *      )
 * )
 */
class WorkflowStageApprovers extends Model
{
    use SoftDeletes,SearchableTrait;

    public $table = 'workflow_stage_approvers';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];


    public $fillable = [
        'user_id',
        'granted_by',
        'workflow_stage_id',
        'workflow_stage_type_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
        'granted_by' => 'integer',
        'workflow_stage_id' => 'integer',
        'workflow_stage_type_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'user_id' => 'exists:users,id',
        'granted_by' => 'exists:users,id',
        'workflow_stage_id' => 'required|exists:workflow_stages,id',
        'workflow_stage_type_id' => 'exists:workflow_stage_type,id'
    ];

    protected $searchable = [
        'columns' => [
            'users.name' => 6,
            'workflow_types.name' => 6,
            'workflow_stage_type.name' => 6,
        ],
        'joins' => [
            'workflow_stages' => ['workflow_stage_approvers.workflow_stage_id', 'workflow_stages.id'],
            'users' => ['workflow_stage_approvers.user_id', 'users.id'],
            'workflow_stage_type' => ['workflow_stage_approvers.workflow_stage_type_id', 'workflow_stage_type.id'],
            'workflow_types' => ['workflow_stages.workflow_type_id', 'workflow_types.id'],
        ]
    ];

    /**
     * @return BelongsTo
     **/
    public function workflowStageType()
    {
        return $this->belongsTo(WorkflowStageType::class, 'workflow_stage_type_id');
    }

    /**
     * @return BelongsTo
     **/
    public function workflowStage()
    {
        return $this->belongsTo(WorkflowStage::class, 'workflow_stage_id');
    }

    /**
     * @return BelongsTo
     **/
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @return BelongsTo
     **/
    public function grantedBy()
    {
        return $this->belongsTo(User::class, 'granted_by');
    }

    public function scopeOrderByWeight($query)
    {
        return $query->whereHas('workflowStage', function ($q) {
            return $q->orderBy('weight','asc');
        });
    }
}
