<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShipmentSubTypeTransportDocsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'shipment_sub_type_transport_docs';

    /**
     * Run the migrations.
     * @table shipment_sub_type_transport_docs
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->unsignedInteger('shipment_sub_types_id');
            $table->unsignedInteger('shipment_types_id');
            $table->increments('transport_doc_id');

            $table->index(["shipment_types_id"], 'fk_stage_shipment_sub_type_transport_docs_shipment_types1_idx');

            $table->index(["shipment_sub_types_id"], 'fk_stage_shipment_sub_type_transport_docs_shipment_sub_type_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('shipment_sub_types_id', 'fk_stage_shipment_sub_type_transport_docs_shipment_sub_type_idx')
                ->references('id')->on('shipment_sub_types')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('shipment_types_id', 'fk_stage_shipment_sub_type_transport_docs_shipment_types1_idx')
                ->references('id')->on('shipment_types')
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
