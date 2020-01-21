<?php

namespace App\Transformers;

use App\Role;
use League\Fractal\TransformerAbstract;

/**
 * Class RoleTransformer.
 *
 * @package namespace App\Transformers;
 */
class RoleTransformer extends TransformerAbstract
{
    /**
     * Transform the Role entity.
     *
     * @param Role $model
     *
     * @return array
     */
    public function transform(Role $model)
    {
        return [
            'id' => (int)$model->id,
            'name' => $model->name,
            'permissions' => $this->formatPermissions(json_decode($model->permissions)),
            'created_at' => formatToDate($model->created_at),
            'updated_at' => $model->updated_at,
        ];
    }

    public function formatPermissions($permissions)
    {
        return collect($permissions)->map(function ($permission, $key) {
            return [
                ucwords(str_replace('-', ' ', $key))
            ];
        })->flatten()->map(function ($permission, $key) {
            $no = $key + 1;
            return [
                'permission' => "<b> $no.</b>" . ucwords(str_replace('-', ' ', $permission))
            ];
        })->implode('permission');

    }
}
