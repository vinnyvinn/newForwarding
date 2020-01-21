<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\BillofLandingStageComponent;
use Faker\Generator as Faker;

$factory->define(BillofLandingStageComponent::class, function (Faker $faker) {

    return [
        'stages_id' => $faker->randomDigitNotNull,
        'bill_of_landing_stages_id' => $faker->randomDigitNotNull,
        'name' => $faker->word,
        'type' => $faker->word,
        'required' => $faker->word,
        'notification' => $faker->word,
        'timing' => $faker->word,
        'description' => $faker->word,
        'components' => $faker->text,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
