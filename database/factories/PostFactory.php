<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {

    return [
        'stages_id' => $faker->randomDigitNotNull,
        'bill_of_landings_id' => $faker->randomDigitNotNull,
        'stage_name' => $faker->word,
        'stage_description' => $faker->word,
        'weight' => $faker->randomDigitNotNull,
        'deleted_at' => $faker->date('Y-m-d H:i:s'),
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
