<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransportsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'transports';

    /**
     * Run the migrations.
     * @table transports
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('bill_of_landing_id');
            $table->string('driver_name', 191)->nullable()->default(null);
            $table->string('feu', 191)->nullable()->default(null);
            $table->string('teu', 191)->nullable()->default(null);
            $table->string('lcl', 191)->nullable()->default(null);
            $table->string('truck_no', 191)->nullable()->default(null);
            $table->string('container_reg', 191)->nullable()->default(null);
            $table->string('tonne', 191)->nullable()->default(null);
            $table->string('buying', 191)->nullable()->default(null);
            $table->string('cost', 191)->nullable()->default(null);
            $table->dateTime('depart')->nullable()->default(null);
            $table->dateTime('arrival')->nullable()->default(null);
            $table->dateTime('return')->nullable()->default(null);
            $table->double('turn_around')->nullable()->default(null);
            $table->nullableTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
     public function down()
     {
       Schema::dropIfExists($this->tableName);
     }
}
