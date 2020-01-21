<?php

namespace App;

use App\Models\BillofLandingStages;
use Carbon\Carbon;
use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;

class BillOfLanding extends ESLModel
{
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'clients.DCLink' => 5,
            'clients.Name' => 5,
            'clients.Contact_Person' => 5,
            'clients.Telephone' => 5,
            'quotations.type' => 5,
        ],
        'joins' => [
            'clients' => ['bill_of_landings.Client_id', 'clients.DCLink'],
            'quotations' => ['bill_of_landings.quote_id', 'quotations.id'],
            'quotation_services' => ['quotations.id', 'quotation_services.quotation_id'],
        ],
    ];

    protected $guarded = [];

    public function quote()
    {
        return $this->hasOne(Quotation::class, 'id', 'quote_id');
    }

    public function customer()
    {
        return $this->hasOne(Client::class, 'DCLink', 'Client_id');
    }

    public function dmscomponent()
    {
        return $this->hasMany(DmsComponent::class);
    }

    public function stages()
    {
        return $this->hasMany(BillofLandingStages::class, 'bill_of_landings_id');
    }

    public function contracts()
    {
        return $this->hasOne(Contract::class, 'id', 'contract_ids');
    }

    public function remarks()
    {
        return $this->hasMany(CtmRemark::class, 'ctm_id', 'id');
    }

    public function transports()
    {
        return $this->hasMany(Transport::class, 'bill_of_landing_id', 'id');
    }

    public function images()
    {
        return $this->hasMany(CargoImage::class, 'bill_of_landing_id', 'id');
    }

    public function deliverynotes()
    {
        return $this->hasMany(DeliveryNote::class, 'bol_id', 'id');
    }

    public function customerLink()
    {
        return "<a href='/dms/edit/$this->id'> " . ucwords($this->customer ? $this->customer->Name : '') . " </a>";
    }

    public function editLink()
    {
        return "<a href='/dms/edit/$this->id#/job-processing/$this->id/job-steps' class='btn btn-sm btn-primary'> <i class='fa fa-check'></i> </a>";
    }

    public function statusLabel()
    {
        if ($this->status == 1) {
            return '<span class="label label-success">Completed</span>';
        }

        return '<span class="label label-primary">Active</span>';
    }

    public function scopeByStatus($query, $status)
    {
        $status = $status == 'active' ? 0 : (($status == 'completed') ? 1 : null);

        if ($status) {
            return $query->where('status', $status);
        }
        return $query;
    }

    public function scopeFindById($query, $id)
    {
        return $query->where('id', $id);
    }

    public function scopeWhereCreatedDateBetween($query, $dateFrom, $dateTo)
    {
        $dateFrom = $dateFrom ? Carbon::parse($dateFrom) : Carbon::now()->subDays(30);

        $dateTo = $dateTo ? Carbon::parse($dateTo) : Carbon::now();

        if ($dateFrom && !$dateTo) {
            return $query->where('created_at', '>=', $dateFrom);
        }

        if (!$dateFrom && $dateTo) {
            return $query->where('created_at', '>=', $dateFrom);
        }

        if ($dateFrom && $dateTo) {
            return $query->whereBetween('created_at', [$dateFrom->startOfDay(), $dateTo->endOfDay()]);
        }

        return $query;
    }

    public function scopeJobStages($query, $id)
    {
        $quoteType = $query->with('quote')->findOrFail($id)->quote;

        return Stage::OfType(ucfirst($quoteType->type));
    }
}
