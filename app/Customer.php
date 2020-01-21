<?php

namespace App;

use Esl\Repository\ESLModel;
use Laravel\Scout\Searchable;
use Nicolaslopezj\Searchable\SearchableTrait;


class Customer extends ESLModel
{
    use SearchableTrait;

    protected $table = 'Client';
    protected $primaryKey = 'DCLink';
    protected $connection = 'sqlsrv2';
    public $timestamps = false;

    protected $fillable = ['DCLink','Account','Physical1','iCurrencyID','Physical2','Email',
        'Contact_Person','Name','Telephone'];

    protected $searchable = [
        'columns' => [
            'Name' => 10,
            'Contact_Person' => 10,
            ]
        ];

    public function searchableAs()
    {
        return 'customers_index';
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();

        return $array;
    }

    public function getScoutKey()
    {
        return $this->DCLink;
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class,'iCurrencyID','CurrencyLink');
    }
}