<?php

namespace App;

use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

class Stage extends ESLModel
{
    use SearchableTrait,SoftDeletes;

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'description' => 6,
            'type' => 6,
        ]
    ];

    protected $fillable = ['name', 'type', 'slug', 'description'];

    public function sComments()
    {
        return $this->hasMany(StageComment::class, 'stage_id', 'id');
    }

    public function components()
    {
        return $this->hasMany(StageComponent::class, 'stage_id', 'id');
    }

    public function scopeComponentById($query, $id)
    {
        return $query->whereHas('components', function ($q) use ($id) {
            $q->where('stage_id', $id);
        });
    }

    public function scopeOfType($query, $type)
    {
        return $query->where('type',$type);
    }

}
