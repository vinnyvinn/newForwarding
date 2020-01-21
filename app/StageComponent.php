<?php

namespace App;

use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;

class StageComponent extends ESLModel
{
    protected $fillable = ['stage_id', 'name', 'type', 'required', 'notification', 'timing',

        'description', 'components'];

    public function stage()
    {
        return $this->belongsTo(Stage::class, 'stage_id', 'id');
    }

    public function scopeStageById($query, $id)
    {
        return $query->where('stage_id', $id);
    }
}