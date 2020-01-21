<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\Mail\FundRequest;
use App\PettyCash;
use App\Project;
use Carbon\Carbon;
use App\Voucher;
use App\CashRequest;
use Esl\helpers\Constants;
use Esl\Repository\UploadFileRepo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class PettyCashController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $id
     * @return Collection
     */
    public function index($id)
    {
        $pettyCash = BillOfLanding::with(['quote.pettyCash.user'])->findOrFail($id)->quote->pettyCash;

        return collect($pettyCash)->filter(function ($value) {
            return Auth::id() == $value->user_id;
        })->map(function ($cash) {
            return [
                'id' => $cash->id,
                'employee' => $cash->user->name,
                'employee_no' => $cash->employee_number,
                'deadline' => Carbon::parse($cash->deadline)->format('d-M-y'),
                'reason' => $cash->reason,
                'file_path' => `<a target="_blank" href="asset($cash->file_path)"> $cash->file_path == ' ' ? '' : 'File' </a>`,
                'status' => $cash->status == 0 ? 'Not Approved' : 'Approved',
                'status_value' => $cash->status,
                'amount' => $cash->amount,
                'show' => Auth::id() == $cash->user_id,
            ];
        });
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $filepath = ' ';
        if ($request->has('file')) {
            $filepath = UploadFileRepo::init()->upload($request->file);
        }

        PettyCash::create(
            [
                'quotation_id' => $request->quotation_id,
                'employee_number' => $request->employee_number,
                'user_id' => Auth::id(),
                'amount' => $request->amount,
                'currency_type' => $request->currency_type,
                'vouchertype' => $request->vouchertype,
                'deadline' => Carbon::parse($request->deadline),
                'reason' => $request->reason,
                'file_path' => $filepath
            ]
        );

        return Response()->json(['data' => 'record saved successfully'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param PettyCash $pettyCash
     * @return Response
     */
    public function show(PettyCash $pettyCash)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param PettyCash $pettyCash
     * @return Response
     */
    public function edit(PettyCash $pettyCash)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param PettyCash $pettyCash
     * @return Response
     */
    public function update(Request $request, PettyCash $pettyCash)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param PettyCash $pettyCash
     * @return Response
     */
    public function destroy(PettyCash $pettyCash)
    {
        //
    }

    public function approve($petty_cash_id, Request $request)
    {


        $pettyCash = PettyCash::with(['quotation'])->find($petty_cash_id);
        $pettyCash->status = 1;
        $pettyCash->save();
        $pettyCash->update(['status' => 1]);

        $project = Project::find($pettyCash->quotation->project_int);

        //insert to sage

        $cashrequ = new CashRequest();

        $from_sage = Voucher::where('iVoucherTypeID', $pettyCash->vouchertype)->first();

        $ref_no = $pettyCash->currency_type == 'KSH' ? (strlen($from_sage->iDeftStartNo) <= $from_sage->iPad ? str_pad('KES', strlen($from_sage->iDeftStartNo), '0', STR_PAD_RIGHT) : 'KES') : '';
        $ref_no .= $pettyCash->currency_type == 'USD' ? (strlen($from_sage->iDeftStartNo) <= $from_sage->iPad ? str_pad('USD', strlen($from_sage->iDeftStartNo), '0', STR_PAD_RIGHT) : 'USD') : '';

        $cashrequ->Audit_No = 0;
        $cashrequ->bIsReceipt = 1;
        $cashrequ->iModule = 0;
        $cashrequ->iCustSuppGLAccId = 0;
        $cashrequ->iBankAccountID = 0;
        $cashrequ->iAPAccId = 0;
        $cashrequ->iARAccId = 0;
        $cashrequ->iGrpId = 0;
        $cashrequ->iTrAccId = $from_sage->iTrCodeId;
        $cashrequ->iARTrAccId = 0;
        $cashrequ->fAmount = $pettyCash->amount;
        $cashrequ->iTenderTypeId = 1;
        $cashrequ->dExtraDate = '';
        $cashrequ->TxDate = Carbon::now()->toDateTimeString();
        $cashrequ->Reference = $ref_no . '' . $from_sage->iDeftStartNo . '' . $from_sage->cSuffix;
        $cashrequ->Description = '';
        $cashrequ->Username = '';
        $cashrequ->cChequeNo = '';
        $cashrequ->iBankLink = 0;
        $cashrequ->cBankBranch = '';
        $cashrequ->cBankRefNo = '';
        $cashrequ->cEFTAccountNo = '';
        $cashrequ->cAccountHolder = '';
        $cashrequ->cCardNo = '';
        $cashrequ->cCardType = '';
        $cashrequ->dCardExpiryDate = '';
        $cashrequ->cCardAuthCode = '';
        $cashrequ->bProcessUnprocessed = 'UnProcessed';
        $cashrequ->bApproved = 0;
        $cashrequ->cCabNo = '';
        $cashrequ->cOwnerLessee = '';
        $cashrequ->cCurrencySymbol = $pettyCash->currency_type == 'KSH' ? 'KES' : '$';
        $cashrequ->fExchangeRate = 0;
        $cashrequ->fHomeAmount = $pettyCash->amount;
        $cashrequ->fForeignAmount = 0;
        $cashrequ->bIsHomeCurrency = 0;
        $cashrequ->iCurrencyLink = $pettyCash->currency_type == 'KSH' ? '0' : '1';
        $cashrequ->iVoucherID = $pettyCash->vouchertype;
        $cashrequ->cNarrative = $pettyCash->reason;
        $cashrequ->fk_iProjectID = $pettyCash->quotation->project_int;
        $cashrequ->bSpiltTrans = 0;
        $cashrequ->cAccountPayee = '';
        $cashrequ->bPostDated = 0;
        $cashrequ->bPostDatedChqCancelled = 0;
        $cashrequ->bIsPrinted = '';
        $cashrequ->PR_PmtRec_iBranchID = 0;
        $cashrequ->iIncidentTypeId = 0;
        $cashrequ->iIncidentID = 0;
        $cashrequ->save();


        Voucher::where('iVoucherTypeID', $pettyCash->vouchertype)->update(['iDeftStartNo' => $from_sage->iDeftStartNo + 1]);

        $project_name = $project ? $project->ProjectName : 'Not Set';
        Mail::to(['email' => 'accounts@esl-eastafrica.com'])
            ->cc(Constants::EMAILS_CC)
            ->send(new FundRequest([
                'message' => 'Approved, Kindly issue KES ' . number_format($pettyCash->amount, 2) . ' to ' . ucwords($pettyCash->user->name) . ' for ' .
                    ucfirst($pettyCash->reason) . '. Project Name ' . $project_name, 'user' => Auth::user()->name], $project));

        alert()->success('Successfully approved', 'Success');

        return redirect()->back();
    }
}
