<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\Quotation;
use App\Transformers\QuotationTransformer;
use App\Transport;
use Carbon\Carbon;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class TransportController extends Controller
{
    use TablePresentableTrait;

    public function index(Request $request)
    {
        if ($request->expectsJson()) {

            $with = ['customer', 'user'];

            $quotation = app(Quotation::class)->notConverted()->notRequested()->findBy($request);

            $collection = $this->presentWithoutPagination($quotation, $request->all(), $with);

            $transformedResult = new Collection($collection, new QuotationTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        $quotation = Quotation::with(['customer', 'user'])->simplePaginate(25);

        return view('transport.dashboard.dashboard')
            ->withQuotations($quotation);
    }

    public function transport(Request $request)
    {
        if ($request->expectsJson()) {

            $with = ['customer', 'user'];

            $bl = app(Quotation::class)->pendingApproval();

            $collection = $this->presentWithoutPagination($bl, $request->all(), $with);

            $transformedResult = new Collection($collection, new QuotationTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        $quotation = Quotation::with(['customer', 'user'])->get();

        return view('transport.transport.index')
            ->withQuotations($quotation);
    }

    public function addTransport($id)
    {
        $dms = BillOfLanding::with(['quote.services', 'contracts', 'contracts.slubs', 'remarks',
            'quote.docs', 'customer'])->findOrFail($id);

        return view('transport.transport.add-transport')
            ->withTransport($dms);
    }

    public function storeTransport(Request $request)
    {
        $data = $request->all();
        $data['depart'] = Carbon::parse($request->depart);

        Transport::create($data);

        return redirect('/dms/edit/' . $request->bill_of_landing_id);

    }
}
