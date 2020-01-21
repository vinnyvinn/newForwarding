<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillOfLandingStageComponentsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'bill_of_landing_stage_components';

    /**
     * Run the migrations.
     * @table bill_of_landing_stage_components
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('stage_components_id');
            $table->unsignedInteger('stages_id')->nullable()->default(null);
            $table->unsignedInteger('bill_of_landing_stages_id')->nullable()->default(null);
            $table->string('name', 191);
            $table->string('type', 191);
            $table->tinyInteger('required')->default('1');
            $table->tinyInteger('notification')->default('1');
            $table->string('timing', 191)->nullable()->default(null);
            $table->string('description', 191)->nullable()->default(null);
            $table->longText('components')->nullable()->default(null);

            $table->index(["bill_of_landing_stages_id"], 'fk_stage_components_copy1_bill_of_landing_stages1_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('bill_of_landing_stages_id', 'fk_stage_components_copy1_bill_of_landing_stages1_idx')
                ->references('id')->on('bill_of_landing_stages')
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
