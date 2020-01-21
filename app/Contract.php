<?php

namespace App;

use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;

class Contract extends ESLModel
{
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'company_name' => 6,
            'contact' => 6,
            'contract_type' => 6,
            'body' => 6,
        ]
    ];

    protected $fillable = ['company_name','contact','contract_type','value',
        'address','body','remarks','status','doc_path'];

    public function slubs()
    {
        return $this->hasMany(ContractSlub::class,'contract_id','id');
    }

}
