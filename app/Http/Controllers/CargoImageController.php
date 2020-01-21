<?php

namespace App\Http\Controllers;

use App\CargoImage;
use Esl\Repository\UploadFileRepo;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\LengthAwarePaginator;


class CargoImageController extends Controller
{
    use TablePresentableTrait;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator
     */
    public function index(Request $request, $biId)
    {
        $with = [];

        $model = app(CargoImage::class)->where('bill_of_landing_id', $biId);

        return $this->present($model,$request,$with);

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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param CargoImage $cargoImage
     * @return Response
     */
    public function show(CargoImage $cargoImage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param CargoImage $cargoImage
     * @return Response
     */
    public function edit(CargoImage $cargoImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param CargoImage $cargoImage
     * @return Response
     */
    public function update(Request $request, CargoImage $cargoImage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CargoImage $cargoImage
     * @return Response
     */
    public function destroy(CargoImage $cargoImage)
    {
        //
    }

    public function upload(Request $request)
    {
        $path_file = UploadFileRepo::init()->upload($request->file, 'documents/uploads/');
        CargoImage::create([
            'bill_of_landing_id' => $request->bill_of_landing_id,
            'image_path'=>$path_file]);

        return response()->json(['data'=>'Image added successfully'],200);
    }
}
