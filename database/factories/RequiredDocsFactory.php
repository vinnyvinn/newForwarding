<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\RequiredDocs;
use Faker\Generator as Faker;

$factory->define(RequiredDocs::class, function (Faker $faker) {

    return [
        'name' => $faker->word,
        'description' => $faker->word,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
