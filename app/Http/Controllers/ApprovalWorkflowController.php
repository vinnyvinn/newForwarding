<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApprovalWorkflowController extends Controller
{
    //
    public function index(Request $request)
    {
        return view('approval-workflow.index');
    }
}
