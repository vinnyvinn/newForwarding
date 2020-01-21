<?php

namespace App\Http\Controllers;

use App\Quotation;
use App\StageComponent;
use App\Transformers\StageComponentTransformer;
use App\Transformers\TransportDocTransformer;
use App\TransportDoc;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class TransportDocController extends Controller
{
    use TablePresentableTrait;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {
            $with = [];

            $model = app(TransportDoc::class);

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new TransportDocTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('transport.docs.index')
            ->withDocs(TransportDoc::simplePaginate(25));
    }


    /**
     * @return mixed
     */
    public function all()
    {
         return TransportDoc::all()->map(function ($model){
             return [
                 'id' => (int)$model->id,
                 'name' => $model->name,
                 'description' => $model->description,
                 'created_at' => formatToDate($model->created_at),
                 'updated_at' => $model->updated_at
             ];
         });
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('transport.docs.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        TransportDoc::create($request->all());
        return redirect('/required-docs');
    }

    /**
     * Display the specified resource.
     *
     * @param TransportDoc $transportDoc
     * @return Response
     */
    public function show(TransportDoc $transportDoc)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param TransportDoc $transportDoc
     * @return Response
     */
    public function edit($transportDoc)
    {
        return view('transport.docs.edit')
            ->withDoc(TransportDoc::findOrFail($transportDoc));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param TransportDoc $transportDoc
     * @return Response
     */
    public function update(Request $request, $transportDoc)
    {
        TransportDoc::findOrFail($transportDoc)->update($request->all());
        return redirect('/required-docs');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param TransportDoc $transportDoc
     * @return Response
     */
    public function destroy(Request $request, $transportDoc)
    {
        TransportDoc::findOrFail($transportDoc)->delete();

        if ($request->expectsJson()) {
            return response(['message'=>'User deleted successfully'], 200);
        }

        return redirect('/required-docs');
    }

    public function deleteDoc(Request $request)
    {
        $quotation = Quotation::findOrFail($request->quotation_id);

        $docsArray = json_decode($quotation->doc_ids, true);
        $doc_id = (int)$request->doc_id;
        foreach ($docsArray as $key => $doc){
            if ($doc['doc_id'] == $doc_id){
                unset($docsArray[$key]);
                $quotation->doc_ids = json_encode($docsArray);
                $quotation->save();
                break;
            }
        }

        return Response(json_encode(['success'=>'success']));
    }
}
