<?php

namespace App\Transformers;

use App\User;
use Illuminate\Support\Facades\Auth;
use League\Fractal\TransformerAbstract;

/**
 * Class UserTransformer.
 *
 * @package namespace App\Transformers;
 */
class UserTransformer extends TransformerAbstract
{
    /**
     * Transform the User entity.
     *
     * @param User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => ucwords($model->name),
            'email' => $model->email,
            'role' => $model->roles->implode('name',','),
            'title' => $model->title,
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at,
            'can_delete_user'=> Auth::user()->hasAccess(['can-delete']),
            'can_manage_user'=> Auth::user()->hasAccess(['manage-users'])
        ];
    }
}
