<?php

namespace App;

use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;

class TransportService extends ESLModel
{
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'type' => 6,
        ]
    ];

    protected $fillable = ['type','StockLink','name','rate','unit'];

    public function scopeGetSortBy($query, $column)
    {
        return $query->orderByRaw($column . ' ASC')->get();
    }
}
