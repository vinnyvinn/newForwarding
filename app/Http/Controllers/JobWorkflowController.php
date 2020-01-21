<?php

namespace App\Http\Controllers;

use App\BillOfLanding;
use App\Models\BillofLandingStages;
use App\Stage;
use App\Transformers\BillofLandingStageTransformer;
use App\Transformers\PurchaseOrderTransformer;
use App\Transformers\StageTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class JobWorkflowController extends Controller
{
    use TablePresentableTrait;

    public function index(Request $request)
    {
        return view('job-workflow.index');
    }

    public function jobPurchaseOrder(Request $request, $jobId)
    {
        $with = ["quote.purchaseOrder"];

        $jobs = app(BillOfLanding::class)->findById($jobId);

        $collection = $this->presentWithoutPagination($jobs, $request->all(), $with)->first();

        $dataTransformation = new Collection($collection->quote->purchaseOrder, new PurchaseOrderTransformer());

        $collection = (new Manager())->createData($dataTransformation)->toArray()['data'];

        return $this->paginate($collection);
    }

    public function getJobStages(Request $request, $jobId)
    {
        $with = ['stages'];

        $stages = app(BillofLandingStages::class)->where('bill_of_landings_id',$jobId);

        $collection = $this->presentWithoutPagination($stages, $request->all(), $with);

        $dataTransformation = new Collection($collection, new BillofLandingStageTransformer());

        $collection = (new Manager())->createData($dataTransformation)->toArray()['data'];

        return $this->paginate($collection);

    }

    public function getJobStageComponent($stageId)
    {
        return Stage::findOrFail($stageId)->components->toArray();

    }


}
