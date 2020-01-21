<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\JobStages--skip=views,inde,edit,show,update;
use Faker\Generator as Faker;

$factory->define(JobStages--skip=views,inde,edit,show,update::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'type' => $faker->word,
        'slag' => $faker->word,
        'description' => $faker->word,
        'shipment_sub_type_id' => $faker->randomDigitNotNull,
        'shipment_type_id' => $faker->randomDigitNotNull,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
