<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\BldmsComponent;
use Faker\Generator as Faker;

$factory->define(BldmsComponent::class, function (Faker $faker) {

    return [
        'bill_of_landing_id' => $faker->randomDigitNotNull,
        'bill_of_landing_stage_components_id' => $faker->randomDigitNotNull,
        'stage_component_id' => $faker->randomDigitNotNull,
        'remark' => $faker->text,
        'doc_links' => $faker->text,
        'text' => $faker->text,
        'subchecklist' => $faker->text,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
