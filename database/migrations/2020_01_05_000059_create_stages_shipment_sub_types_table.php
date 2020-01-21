<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStagesShipmentSubTypesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'stages_shipment_sub_types';

    /**
     * Run the migrations.
     * @table stages_shipment_sub_types
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('stages_id');
            $table->unsignedInteger('shipment_sub_types_id');
            $table->unsignedInteger('shipment_types_id');

            $table->index(["shipment_types_id"], 'fk_stages_shipment_sub_types_shipment_types1_idx');

            $table->index(["shipment_sub_types_id"], 'fk_stages_has_shipment_sub_types_shipment_sub_types1_idx');

            $table->index(["stages_id"], 'fk_stages_has_shipment_sub_types_stages1_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('stages_id', 'fk_stages_has_shipment_sub_types_stages1_idx')
                ->references('id')->on('stages')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('shipment_sub_types_id', 'fk_stages_has_shipment_sub_types_shipment_sub_types1_idx')
                ->references('id')->on('shipment_sub_types')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('shipment_types_id', 'fk_stages_shipment_sub_types_shipment_types1_idx')
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
