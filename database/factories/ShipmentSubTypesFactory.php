<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\ShipmentSubType;
use Faker\Generator as Faker;

$factory->define(ShipmentSubType::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'slug' => $faker->word,
        'shipment_type_id' => $faker->randomDigitNotNull,
        'deleted_at' => $faker->date('Y-m-d H:i:s'),
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
