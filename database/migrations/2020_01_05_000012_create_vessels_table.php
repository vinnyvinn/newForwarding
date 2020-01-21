<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVesselsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'vessels';

    /**
     * Run the migrations.
     * @table vessels
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('lead_id');
            $table->string('name', 191);
            $table->string('imo_number', 191)->nullable()->default(null);
            $table->string('country', 191);
            $table->string('call_sign', 191)->nullable()->default(null);
            $table->string('loa', 191);
            $table->string('grt', 191);
            $table->string('consignee_good', 191);
            $table->string('nrt', 191)->nullable()->default(null);
            $table->string('dwt', 191)->nullable()->default(null);
            $table->string('port_of_discharge', 191)->nullable()->default(null);
            $table->string('port_of_loading', 191)->nullable()->default(null);
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
