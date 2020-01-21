<?php

namespace App\Transformers;

use App\Notification;
use League\Fractal\TransformerAbstract;

/**
 * Class NotificationTransformer.
 *
 * @package namespace App\Transformers;
 */
class NotificationTransformer extends TransformerAbstract
{
    /**
     * Transform the Notification entity.
     *
     * @param Notification $model
     *
     * @return array
     */
    public function transform(Notification $model)
    {
        return [
            'id' => (int)$model->id,
            'title' => $model->title,
            'text' => $model->text,
            'view' => $this->getViewLink($model),
            'status' => $this->setStatus($model),
            'ago' => $model->created_at->diffForHumans(),
            'created_at' => $model->created_at->format('Y-d-m'),
            'updated_at' => $model->updated_at
        ];
    }

    public function getViewLink($model)
    {
        if ($model->status == 0) {
            return "<a href=" . url('/notifications/' . $model->id) . " class=' btn-sm btn-primary'><i class='fa fa-eye'></i></a>";
        }
        return '<i class="fa fa-check btn-circle btn-sm btn-default"></i>';
    }

    public function setStatus($model)
    {
        if($model->status == 0){
            return '<span class="label label-light-info">Unread</span>';
        }

        return '<span class="label label-light-primary">Read</span>';
    }
}
