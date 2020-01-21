<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuotationServicesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'quotation_services';

    /**
     * Run the migrations.
     * @table quotation_services
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('quotation_id')->nullable()->default(null);
            $table->integer('service_id');
            $table->longText('name');
            $table->string('rate', 191);
            $table->string('stock_link', 191);
            $table->string('selling_price', 191);
            $table->string('tax_code', 191);
            $table->string('tax_description', 191);
            $table->string('tax_id', 191);
            $table->string('tax', 191);
            $table->string('type', 191);
            $table->string('unit', 191);
            $table->string('total_units', 191);
            $table->string('total', 191);
            $table->string('buying_price', 191)->default('0');
            $table->string('purchase_desc', 191)->nullable()->default(null);
            $table->string('doc_path', 191)->nullable()->default(null);

            $table->index(["quotation_id"], 'fk_quotation_services_quotations1_idx');
            $table->nullableTimestamps();


            $table->foreign('quotation_id', 'fk_quotation_services_quotations1_idx')
                ->references('id')->on('quotations')
                ->onDelete('no action')
                ->onUpdate('no action');
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
