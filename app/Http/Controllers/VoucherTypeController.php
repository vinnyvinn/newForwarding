<?php

namespace App\Http\Controllers;

use App\Voucher;

class VoucherTypeController extends Controller
{
    public function index()
    {
        return Voucher::where('fk_iVoucherMaster', 1)->get();
    }
}
