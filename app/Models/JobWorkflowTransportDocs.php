<?php

namespace App\Models;

use App\Stage;
use App\TransportDoc;
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
class JobWorkflowTransportDocs extends Model
{
    use SearchableTrait;

    protected $table = 'shipment_sub_type_transport_docs';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';


    protected $dates = ['deleted_at'];

    protected $primaryKey = ['transport_doc_id', 'shipment_sub_types_id','shipment_types_id'];

    public $incrementing = false;

    public $fillable = [
        'transport_doc_id',
        'shipment_types_id',
        'shipment_sub_types_id'
    ];

    protected $searchable = [
        'columns' => [
            'transport_docs.name' => 5,
            'sub_type.name' => 5,
            'type.name' => 5,
        ],
        'joins' => [
            'transport_docs' => ['shipment_sub_type_transport_docs.transport_doc_id', 'transport_docs.id'],
            'shipment_sub_types as sub_type' => ['shipment_sub_type_transport_docs.shipment_sub_types_id', 'sub_type.id'],
            'shipment_types as type' => ['shipment_sub_type_transport_docs.shipment_types_id', 'type.id'],
        ],
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'transport_doc_id' => 'integer',
        'shipment_sub_types_id' => 'integer',
        'shipment_types_id' => 'integer'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'transport_doc_id.*' => 'required|exists:transport_docs,id',
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
    public function doc()
    {
        return $this->belongsTo(TransportDoc::class, 'transport_doc_id');
    }

    /**
     * @return BelongsTo
     **/
    public function shipmentTypes()
    {
        return $this->belongsTo(ShipmentType::class, 'shipment_types_id');
    }


}
