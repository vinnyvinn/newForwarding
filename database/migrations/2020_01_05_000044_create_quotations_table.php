<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuotationsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'quotations';

    /**
     * Run the migrations.
     * @table quotations
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('DCLink');
            $table->longText('doc_ids')->nullable()->default(null);
            $table->string('type', 191);
            $table->string('status', 191);
            $table->string('inputCur', 191)->nullable()->default(null);
            $table->string('checked_by', 191)->nullable()->default(null);
            $table->string('approved_by', 191)->nullable()->default(null);
            $table->string('project_int', 191)->default('0');
            $table->string('quote_id', 191)->nullable()->default(null);
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
