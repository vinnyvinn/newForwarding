<?php

namespace App\Http\Controllers\Api;

use App\BillOfLanding;
use App\Http\Controllers\Controller;
use App\Quotation;

class DashboardStatsController extends Controller
{
    public function index()
    {
        return [
            'quotations' => $this->quotationStats(),
            'approvals' => $this->approvalStats(),
            'jobs' => $this->jobStats()
        ];

    }


    public function quotationStats()
    {
        return Quotation::count();
    }

    public function jobStats()
    {
        return BillOfLanding::count();
    }

    public function approvalStats()
    {
        return app(Quotation::class)->pendingApproval()->count();
    }

}
