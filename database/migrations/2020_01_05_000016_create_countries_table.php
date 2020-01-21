<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCountriesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'countries';

    /**
     * Run the migrations.
     * @table countries
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->char('code', 2)->comment('Two-letter country code (ISO 3166-1 alpha-2)');
            $table->string('name')->comment('English country name');
            $table->string('full_name')->comment('Full English country name');
            $table->char('iso3', 3)->comment('Three-letter country code (ISO 3166-1 alpha-3)');
            $table->unsignedSmallInteger('number')->comment('Three-digit country number (ISO 3166-1 numeric)');
            $table->string('continent_code', 45)->nullable();
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
