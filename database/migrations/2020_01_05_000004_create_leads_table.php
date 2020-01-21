<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'leads';

    /**
     * Run the migrations.
     * @table leads
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 191);
            $table->string('contact_person', 191);
            $table->string('phone', 191);
            $table->string('email', 191);
            $table->string('telephone', 191)->nullable()->default(null);
            $table->string('address', 191)->nullable()->default(null);
            $table->string('location', 191)->nullable()->default(null);
            $table->string('status', 191)->default('0');
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
