<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\JobWorkflowProcess;
use Faker\Generator as Faker;

$factory->define(JobWorkflowProcess::class, function (Faker $faker) {

    return [
        'stages_id' => $faker->randomDigitNotNull,
        'shipment_types_id' => $faker->randomDigitNotNull
    ];
});
