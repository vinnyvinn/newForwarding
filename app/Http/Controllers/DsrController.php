<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\DmsComponent;
use Illuminate\Http\Request;

class DsrController extends Controller
{
    public function showDsr($job_id)
    {
        $quoteId =  BillOfLanding::with(['quote'])->where('');



        $dms = BillOfLanding::with(['quote.services','quote.pettyCash.user','quote.cargo','deliverynotes','transports','images',
            'contracts','remarks','quote.docs','customer','dmscomponent.scomponent.stage'])->where('Client_id', $job_id)->get();

        return view('dsr.current')
            ->withDsrs($dms)
            ->withJobId($job_id);
    }
}
