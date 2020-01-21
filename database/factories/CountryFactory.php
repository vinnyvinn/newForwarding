<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Country;
use Faker\Generator as Faker;

$factory->define(Country::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'full_name' => $faker->word,
        'iso3' => $faker->word,
        'number' => $faker->word,
        'continent_code' => $faker->word
    ];
});
