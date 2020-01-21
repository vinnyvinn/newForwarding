<?php

namespace App\Http\Controllers;

use App\Contract;
use App\ContractSlub;
use App\Transformers\ContractTransformer;
use Carbon\Carbon;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class ContractController extends Controller
{
    use TablePresentableTrait;
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request$request)
    {
        if ($request->wantsJson()) {
            $with = [];

            $model = app(Contract::class);

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new ContractTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('transport.contracts.index')
            ->withContracts(Contract::with(['slubs'])->simplePaginate(25));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('transport.contracts.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $contract = Contract::create($request->all());

        if ($request->contract_type == 'rates'){

            $data = [];
            $from = $request->from;
            $to = $request->to;
            $charges = $request->charges;
            $t_round = $request->t_round;
            $now = Carbon::now();

            foreach ($from as $key => $value){
                array_push($data,[
                    'contract_id' => $contract->id,
                    'from' => $value,
                'to' => $to[$key],
                'charges' => $charges[$key],
                't_round' => $t_round[$key],
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            }

            ContractSlub::insert($data);
        }

        return redirect('/contracts');
    }

    /**
     * Display the specified resource.
     *
     * @param Contract $contract
     * @return Response
     */
    public function show(Contract $contract)
    {
        return view('transport.contracts.show')
            ->withContract($contract);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Contract $contract
     * @return Response
     */
    public function edit(Contract $contract)
    {
        return view('transport.contracts.edit')
            ->withContract($contract);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Contract $contract
     * @return Response
     */
    public function update(Request $request, Contract $contract)
    {
        $contract->update($request->all());
        return redirect('/contracts');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Contract $contract
     * @return Response
     * @throws \Exception
     */
    public function destroy(Request $request, Contract $contract)
    {
        $contract->delete();

        if ($request->expectsJson()) {
            return response(['message'=>'User deleted successfully'], 200);
        }

        return redirect('/contracts');
    }
}
