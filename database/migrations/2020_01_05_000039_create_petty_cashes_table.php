<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePettyCashesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'petty_cashes';

    /**
     * Run the migrations.
     * @table petty_cashes
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('quotation_id');
            $table->string('employee_number', 191)->nullable()->default(null);
            $table->integer('user_id');
            $table->string('amount', 191);
            $table->tinyInteger('status')->default('0');
            $table->date('deadline');
            $table->longText('reason');
            $table->string('file_path', 191)->nullable()->default(null);
            $table->string('currency_type', 50)->nullable()->default(null);
            $table->string('vouchertype', 50)->nullable()->default(null);
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
