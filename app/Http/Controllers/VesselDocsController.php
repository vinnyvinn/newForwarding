<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\CargoImage;
use App\VesselDocs;
use Esl\Repository\UploadFileRepo;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class VesselDocsController extends Controller
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

        $model = app(VesselDocs::class)->where('vessel_id', $biId);

        return $this->present($model, $request, $with);
    }

    public function upload(Request $request)
    {
        $path_file = UploadFileRepo::init()->upload($request->file, 'documents/uploads/');

        VesselDocs::create([
            //this is quotation id
            'vessel_id' => $request->vessel_id,
            'name' => $request->name,
            'doc_path' => $path_file]);

        return response()->json(['data'=>'Doc added successfully'],200);
    }

    public function getBLrequiredDoc(Request $request, $biId)
    {
        $with = ['quote'];

        $model = BillOfLanding::with($with)->find( $biId)->quote;

        return $model;
    }
}
