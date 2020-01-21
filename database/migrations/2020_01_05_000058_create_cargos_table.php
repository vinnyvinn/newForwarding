<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCargosTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'cargos';

    /**
     * Run the migrations.
     * @table cargos
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('quotation_id');
            $table->string('bl_no', 191)->nullable()->default(null);
            $table->string('cargo_name', 191)->nullable()->default(null);
            $table->string('vessel_name', 191)->nullable()->default(null);
            $table->string('location', 191)->nullable()->default(null);
            $table->string('shipper', 191)->nullable()->default(null);
            $table->string('destination', 191)->nullable()->default(null);
            $table->string('shipping_line', 191)->nullable()->default(null);
            $table->string('entry_number', 191)->nullable()->default(null);
            $table->string('eta', 191)->nullable()->default(null);
            $table->string('cargo_qty', 191)->nullable()->default(null);
            $table->string('cargo_weight', 191)->nullable()->default(null);
            $table->string('container_no', 191)->nullable()->default(null);
            $table->string('consignee_name', 191)->nullable()->default(null);
            $table->string('manifest', 191)->nullable()->default(null);
            $table->longText('remarks')->nullable()->default(null);
            $table->string('shipment_type', 45)->nullable();
            $table->string('shipment_sub_type', 45)->nullable();
            $table->unsignedInteger('shipment_types_id')->nullable()->default(null);
            $table->unsignedInteger('shipments_id')->nullable()->default(null);
            $table->unsignedInteger('shipment_sub_types_id')->nullable()->default(null);

            $table->index(["shipments_id"], 'fk_cargos_shipments1_idx');

            $table->index(["quotation_id"], 'fk_cargos_quotations1_idx');

            $table->index(["shipment_types_id"], 'fk_cargos_shipment_types1_idx');

            $table->index(["shipment_sub_types_id"], 'fk_cargos_shipment_sub_types1_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('shipment_types_id', 'fk_cargos_shipment_types1_idx')
                ->references('id')->on('shipment_types')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('shipments_id', 'fk_cargos_shipments1_idx')
                ->references('id')->on('shipments')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('shipment_sub_types_id', 'fk_cargos_shipment_sub_types1_idx')
                ->references('id')->on('shipment_sub_types')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('quotation_id', 'fk_cargos_quotations1_idx')
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
