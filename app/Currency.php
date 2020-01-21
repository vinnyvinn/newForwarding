<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    //
    protected $table = 'Currency';
    protected $primaryKey = 'CurrencyLink';
    protected $connection = 'sqlsrv2';
    public $timestamps = false;


    public function customers()
    {
        return $this->hasMany(Customer::class,'iCurrencyID','CurrencyLink');
    }
}
