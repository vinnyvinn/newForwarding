<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDmsComponentsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'dms_components';

    /**
     * Run the migrations.
     * @table dms_components
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('bill_of_landing_id')->nullable()->default(null);
            $table->unsignedInteger('bill_of_landing_stage_components_id')->nullable()->default(null);
            $table->unsignedInteger('stage_component_id')->nullable()->default(null);
            $table->dateTime('completion_date')->nullable()->default(null);
            $table->longText('remark')->nullable()->default(null);
            $table->longText('doc_links')->nullable()->default(null);
            $table->longText('text')->nullable()->default(null);
            $table->longText('subchecklist')->nullable()->default(null);

            $table->index(["bill_of_landing_id"], 'fk_dms_components_bill_of_landings1_idx');

            $table->index(["bill_of_landing_stage_components_id"], 'fk_dms_components_bill_of_landing_stage_components1_idx');

            $table->index(["stage_component_id"], 'fk_dms_components_stage_components1_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('stage_component_id', 'fk_dms_components_stage_components1_idx')
                ->references('id')->on('stage_components')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('bill_of_landing_id', 'fk_dms_components_bill_of_landings1_idx')
                ->references('id')->on('bill_of_landings')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('bill_of_landing_stage_components_id', 'fk_dms_components_bill_of_landing_stage_components1_idx')
                ->references('id')->on('bill_of_landing_stage_components')
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
