<?php

namespace App\Http\Controllers;

use App\Notification;
use App\Transformers\NotificationTransformer;
use Esl\Traits\TablePresentableTrait;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class NotificationController extends Controller
{
    use TablePresentableTrait;

    public function index(Request $request)
    {
        if ($request->expectsJson()) {

            $with = [];

            $notification = app(Notification::class);

            $collection = $this->presentWithoutPagination($notification, $request->all(), $with);

            $transformedResult = new Collection($collection, new NotificationTransformer());

            $data = (new Manager())->createData($transformedResult)->toArray()['data'];

            return $this->paginate($data);
        }

        return view('notifications.index')
            ->withNotifications(Notification::simplePaginate(25));
    }

    public function show($id)
    {
        $notification = Notification::findOrFail($id);
        $notification->status = 1;
        $notification->save();

        return redirect($notification->link);
    }

    public function unRead(Request $request)
    {
        $with = [];

        $notification = app(Notification::class)->where('status', 0)->orderByDesc('id');

        $collection = $this->presentWithoutPagination($notification, $request->all(), $with);

        $transformedResult = new Collection($collection, new NotificationTransformer());

        $data = (new Manager())->createData($transformedResult)->toArray()['data'];

        return $this->paginate($data);
    }
}
