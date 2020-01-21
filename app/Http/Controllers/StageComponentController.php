<?php

namespace App\Http\Controllers;

use App\StageComponent;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StageComponentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
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
        $data = $request->all();

        $data['required'] = $request->required['value'] == 'true' ? true : false;
        $data['notification'] = $request->required['value'] == 'true' ? true : false;
        $data['type'] = $request->type['value'];

        $jsondata = $request->components != null ? explode(',',$request->components) : null;

        $data['components'] = ($jsondata == null ? null : json_encode($jsondata));

        $item = StageComponent::create($data);

        if($item){
            return Response(['success' => 'Component saved successfully'],200);
        }

        return Response(['error' => 'Component not saved'],500);
    }

    /**
     * Display the specified resource.
     *
     * @param StageComponent $stageComponent
     * @return Response
     */
    public function show(StageComponent $stageComponent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param StageComponent $stageComponent
     * @return Response
     */
    public function edit(StageComponent $stageComponent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param StageComponent $stageComponent
     * @return Response
     */
    public function update(Request $request, StageComponent $stageComponent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param StageComponent $stageComponent
     * @return Response
     * @throws Exception
     */
    public function destroy(Request $request, StageComponent $stageComponent)
    {
        $stageComponent->delete();

        if($request->wantsJson()){
            return response()->json(['message'=>'stage deleted successfully']);
        }
        return redirect()->back();
    }
}
