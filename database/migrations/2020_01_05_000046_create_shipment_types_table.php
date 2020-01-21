<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShipmentTypesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'shipment_types';

    /**
     * Run the migrations.
     * @table shipment_types
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name', 45)->nullable();
            $table->string('slug', 45)->nullable();
            $table->unsignedInteger('shipments_id');

            $table->index(["shipments_id"], 'fk_shipment_types_shipments1_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('shipments_id', 'fk_shipment_types_shipments1_idx')
                ->references('id')->on('shipments')
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
