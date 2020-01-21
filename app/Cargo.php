<?php

namespace App;

use Esl\Repository\ESLModel;
use Nicolaslopezj\Searchable\SearchableTrait;

class Cargo extends ESLModel
{
    use SearchableTrait;

    protected $fillable = ['bl_no','cargo_name','vessel_name','location',
        'shipper','destination','shipping_line','entry_number','eta',
        'cargo_qty','cargo_weight','quotation_id','container_no','consignee_name','manifest','shipment_sub_type',
        'shipment_type','shipment_sub_types_id','shipment_types_id','shipments_id'];

    public function quotation()
    {
        return $this->hasOne(Quotation::class, 'id', 'quotation_id');
    }
//
//    public function goodType()
//    {
//        return $this->hasOne(GoodType::class, 'id','good_type_id');
//    }
}







