<?php

namespace App\Repositories;

use App\Setting;
use InfyOm\Generator\Common\BaseRepository;


class SettingRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'setting_name',
        'setting_type',
        'setting_value'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return Setting::class;
    }
}
