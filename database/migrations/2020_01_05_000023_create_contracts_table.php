<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'contracts';

    /**
     * Run the migrations.
     * @table contracts
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('company_name', 191);
            $table->string('contact', 191);
            $table->string('address', 191)->nullable()->default(null);
            $table->string('contract_type', 191);
            $table->string('value', 191)->nullable()->default(null);
            $table->string('doc_path', 191)->nullable()->default(null);
            $table->longText('body');
            $table->longText('remarks')->nullable()->default(null);
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
