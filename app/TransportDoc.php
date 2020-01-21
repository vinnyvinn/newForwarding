<?php

namespace App;

use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;

class TransportDoc extends ESLModel
{
    protected $fillable = ['name', 'description'];

    /**
     * @param $query
     * @param $column
     * @return mixed
     */
    public function scopeGetSortBy($query, $column)
    {
        return $query->orderByRaw($column . ' ASC')->get();
    }
}
