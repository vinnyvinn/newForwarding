<?php

namespace App\Models;

use App\Stage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * Class JobWorkflowProcess
 * @package App\Models
 * @version January 2, 2020, 9:08 pm UTC
 *
 * @property ShipmentSubType shipmentSubTypes
 * @property Stage stages
 * @property ShipmentType shipmentTypes
 * @property integer stages_id
 * @property integer shipment_types_id
 */
class JobWorkflowProcess extends Model
{
    use SearchableTrait;

    public $table = 'stages_shipment_sub_types';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];

    protected $primaryKey = ['stages_id', 'shipment_types_id','shipment_types_id'];

    public $incrementing = false;

    public $fillable = [
        'stages_id',
        'shipment_types_id',
        'shipment_sub_types_id'
    ];

    protected $searchable = [
        'columns' => [
            'stages.name' => 5,
            'sub_type.name' => 5,
            'type.name' => 5,
        ],
        'joins' => [
            'stages' => ['stages_shipment_sub_types.stages_id', 'stages.id'],
            'shipment_sub_types as sub_type' => ['stages_shipment_sub_types.shipment_sub_types_id', 'sub_type.id'],
            'shipment_types as type' => ['stages_shipment_sub_types.shipment_types_id', 'type.id'],
        ],
        'groupBy'=>'stages_shipment_sub_types.shipment_types_id'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'stages_id' => 'integer',
        'shipment_sub_types_id' => 'integer',
        'shipment_types_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'transport_doc_id.*' => 'exists:transport_docs,id',
        'stages_id.*' => 'required|exists:stages,id',
        'shipment_types_id' => 'required|exists:shipment_types,id',
        'shipment_sub_types_id' => 'required|exists:shipment_sub_types,id',
    ];

    /**
     * @return BelongsTo
     **/
    public function shipmentSubTypes()
    {
        return $this->belongsTo(ShipmentSubType::class, 'shipment_sub_types_id');
    }

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
    public function shipmentTypes()
    {
        return $this->belongsTo(ShipmentType::class, 'shipment_types_id');
    }

}
