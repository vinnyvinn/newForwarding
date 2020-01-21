<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseOrderLinesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'purchase_order_lines';

    /**
     * Run the migrations.
     * @table purchase_order_lines
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('purchase_order_id');
            $table->string('description', 191);
            $table->string('stock_link', 191);
            $table->string('qty', 191);
            $table->string('rate', 191);
            $table->string('total_amount', 191);
            $table->string('tax_code', 191);
            $table->string('tax_description', 191)->nullable()->default(null);
            $table->string('tax_id', 191);
            $table->string('tax', 191);
            $table->tinyInteger('in_quotation')->default('0');
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
