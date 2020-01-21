<?php

namespace App;

use Esl\Repository\ESLModel;
use Illuminate\Database\Eloquent\Model;
use Nicolaslopezj\Searchable\SearchableTrait;


class Role extends ESLModel
{
    use SearchableTrait;

    protected $searchable = [
        'columns' => [
            'name' => 6,
            'slug' => 6,
        ]
    ];

    protected $fillable = ['name', 'slug', 'permissions'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'role_users');
    }

    public function hasAccess(array $permissions)
    {
        foreach ($permissions as $permission) {
            if ($this->hasPermission($permission)) {
                return true;
            }
        }

        return false;
    }

    public function hasPermission(string $permission)
    {
        $permissions = json_decode($this->permissions, true);

        return $permissions[$permission] ?? false;


    }
}
