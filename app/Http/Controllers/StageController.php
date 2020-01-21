<?php

namespace App\Http\Controllers;

use App\Stage;
use App\StageComponent;
use App\Transformers\StageComponentTransformer;
use App\Transformers\StageTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class StageController extends Controller
{
    use TablePresentableTrait;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     *
     * @return LengthAwarePaginator
     */
    public function index(Request $request)
    {
        if ($request->expectsJson()) {

            $with = [];

            $model = app(Stage::class);

            if ($request->has('all')) {
                return $model->all();
            }

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new StageTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];


            return $this->paginate($data);

        }

        return view('stage.index')
            ->withStages(Stage::simplePaginate(25));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('stage.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['slag'] = str_slug($request->name);
        Stage::create($data);

        return redirect('/stages');
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Stage $stage
     * @return LengthAwarePaginator
     */
    public function show(Request $request, Stage $stage)
    {
        if ($request->expectsJson()) {
            $with = [];

            $model = app(StageComponent::class)->stageById($stage->id);

            $collection = $this->presentWithoutPagination($model, $request->all(), $with);

            $transformedResult = new Collection($collection, new StageComponentTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('stage.show')
            ->withStage($stage)
            ->withComponents($stage->components);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Stage $stage
     * @return Response
     */
    public function edit(Stage $stage)
    {
        return view('stage.edit')
            ->withStage($stage);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Stage $stage
     * @return Response
     */
    public function update(Request $request, Stage $stage)
    {
        $stage->update($request->all());
        return redirect('/stages');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Stage $stage
     * @return Response
     * @throws \Exception
     */
    public function destroy(Request$request, Stage $stage)
    {
        $stage->delete();
        if($request->wantsJson()){
            return response()->json(['message'=>"record deleted"],200);
        }
        return redirect('/stages');
    }
}
