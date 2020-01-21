<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillOfLandingsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'bill_of_landings';

    /**
     * Run the migrations.
     * @table bill_of_landings
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('quote_id')->nullable()->default(null);
            $table->string('contract_ids', 191)->nullable()->default(null);
            $table->string('slub_id', 191)->nullable()->default(null);
            $table->string('client_notification', 191)->nullable()->default(null);
            $table->integer('Client_id');
            $table->string('cargo_weight', 191)->nullable()->default(null);
            $table->string('cost', 191)->nullable()->default(null);
            $table->string('code_name', 191)->nullable()->default(null);
            $table->string('file_number', 191)->nullable()->default(null);
            $table->string('ctm_ref', 191)->nullable()->default(null);
            $table->string('stage', 191)->nullable()->default(null);
            $table->string('bl_number', 191)->nullable()->default(null);
            $table->string('shipper', 191)->nullable()->default(null);
            $table->string('shipping_line', 191)->nullable()->default(null);
            $table->string('start', 191)->nullable()->default(null);
            $table->string('destination', 191)->nullable()->default(null);
            $table->string('seal_number', 191)->nullable()->default(null);
            $table->string('distance', 191)->nullable()->default(null);
            $table->longText('desc')->nullable()->default(null);
            $table->longText('remarks')->nullable()->default(null);
            $table->string('status', 191)->default('0');
            $table->string('destination_country', 191)->nullable()->default(null);
            $table->string('pro_no', 191)->nullable()->default(null);
            $table->string('cargo_id', 191)->nullable()->default(null);
            $table->dateTime('eta')->nullable()->default(null);
            $table->dateTime('taxes_paid')->nullable();
            $table->dateTime('custom_approval')->nullable();
            $table->dateTime('shipment_availability')->nullable();
            $table->dateTime('verification')->nullable();
            $table->dateTime('stakeholder_release')->nullable();
            $table->dateTime('loading')->nullable();
            $table->float('levis_paid')->nullable();
            $table->dateTime('stuffing_date')->nullable();
            $table->dateTime('container_pick_date')->nullable();
            $table->dateTime('get_in_date')->nullable();
            $table->dateTime('hold_removal')->nullable();
            $table->dateTime('handing_over')->nullable();

            $table->index(["quote_id"], 'fk_bill_of_landings_quotations1_idx');

            $table->unique(["id"], 'IX_fwe_bill_of_landings');

            $table->unique(["id"], 'IX_fwe_bill_of_landings_1');
            $table->nullableTimestamps();


            $table->foreign('quote_id', 'fk_bill_of_landings_quotations1_idx')
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
