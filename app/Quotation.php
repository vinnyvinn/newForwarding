<?php

namespace App;

use Esl\Repository\ESLModel;
use Nicolaslopezj\Searchable\SearchableTrait;

class Quotation extends ESLModel
{
    use SearchableTrait;

    protected $table = "quotations";

    protected $searchable = [
        'columns' => [
            'clients.DCLink' => 5,
            'clients.Name' => 5,
            'clients.Contact_Person' => 5,
        ],
        'joins' => [
            'clients' => ['quotations.DCLink', 'clients.DCLink'],
        ],
    ];

    protected $guarded = [];

    public function pettyCash()
    {
        return $this->hasMany(PettyCash::class);
    }

    public function customer()
    {
        return $this->hasOne(Client::class, 'DCLink', 'DCLink');
    }

    public function purchaseOrder()
    {
        return $this->hasMany(PurchaseOrder::class);
    }

    public function checkedBy()
    {
        return $this->hasOne(User::class, 'id', 'checked_by');
    }

    public function approvedBy()
    {
        return $this->hasOne(User::class, 'id', 'approved_by');
    }

    public function services()
    {
        return $this->hasMany(QuotationService::class, 'quotation_id', 'id');
    }

    public function cargo()
    {
        return $this->hasOne(Cargo::class, 'quotation_id', 'id');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function remarks()
    {
        return $this->hasMany(Remarks::class, 'quotation_id', 'id');
    }

    public function docs()
    {
        return $this->hasMany(VesselDocs::class, 'vessel_id', 'id');
    }

    public function dms()
    {
        return $this->hasOne(BillOfLanding::class, 'quote_id', 'id');
    }

    public function quotationStatus()
    {
        switch ($this->status) {
            case 'approved':
                return " <span class='badge badge-success'>$this->status</span>";
            case 'declined':
                return " <span class='badge badge-danger'>$this->status</span>";
            case 'accepted':
                return " <span class='badge badge-success'>$this->status</span>";
            case 'checked':
                return " <span class='badge badge-info'>$this->status</span>";
            case 'Pending':
                return " <span class='badge badge-warning'>$this->status</span>";
            default:
                return " <span class='badge badge-dark'>$this->status</span>";
        }
    }

    public function quotationLink()
    {
        $quote_id = $this->id;
        return "<a href='/quotation/$quote_id' class='btn btn-sm btn-info'><i class='fa fa-eye'></i></a>";
    }

    public function scopeConverted($query)
    {
        return $query->where('status', 'converted');
    }

    public function scopeRequested($query)
    {
        return $query->where('status', 'requested');
    }

    public function scopeChecked($query)
    {
        return $query->where('status', 'checked');
    }

    public function scopePendingApproval($query)
    {
        return $query->where('status', 'converted')
            ->orWhere('status', 'requested')
            ->orWhere('status', 'checked');
    }

    public function scopeNotConverted($query)
    {
        return $query->where('status', '!=', 'converted');
    }

    public function scopeNotRequested($query)
    {
        return $query->where('status', '!=', 'requested');
    }

    public function scopeFindBy($query, $request)
    {


        return $query;
    }
}
