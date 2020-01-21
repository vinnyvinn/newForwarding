<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseOrdersTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'purchase_orders';

    /**
     * Run the migrations.
     * @table purchase_orders
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('quotation_id');
            $table->integer('user_id');
            $table->integer('approved_by')->nullable()->default(null);
            $table->integer('invnum_id')->nullable()->default(null);
            $table->integer('project_id');
            $table->integer('supplier_id');
            $table->dateTime('po_date');
            $table->string('po_no', 191);
            $table->string('input_currency', 191);
            $table->string('status', 191);
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
