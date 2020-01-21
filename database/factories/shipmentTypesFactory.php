<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\shipmentType;
use Faker\Generator as Faker;

$factory->define(shipmentType::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'slug' => $faker->word,
        'shipment_id' => $faker->randomDigitNotNull,
        'deleted_at' => $faker->date('Y-m-d H:i:s'),
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
