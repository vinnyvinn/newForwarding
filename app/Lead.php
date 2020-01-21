<?php

namespace App;

use Carbon\Carbon;
use Esl\Repository\ESLModel;

class Lead extends ESLModel
{
    protected  $fillable = ['name','contact_person','phone',
        'email','telephone','address','location'];

    public function quotation()
    {
        return $this->hasMany(Quotation::class, 'lead_id','id');
    }

    public function scopeWhereCreatedDateBetween($query, $dateFrom, $dateTo)
    {
        $dateFrom = $dateFrom ?: Carbon::now()->subDays(30);

        $dateTo = $dateTo ?: Carbon::now();

        if ($dateFrom && !$dateTo) {
            return $query->where('created_at', '>=', $dateFrom);
        }

        if (!$dateFrom && $dateTo) {
            return $query->where('created_at', '>=', $dateFrom);
        }

        if ($dateFrom && $dateTo) {
            return $query->whereBetween('created_at', [$dateFrom, $dateTo]);
        }

        return $query;
    }
}
