<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBillOfLandingStagesTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'bill_of_landing_stages';

    /**
     * Run the migrations.
     * @table bill_of_landing_stages
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->unsignedInteger('stages_id');
            $table->unsignedInteger('bill_of_landings_id');
            $table->string('stage_name', 45)->nullable();
            $table->string('stage_description', 45)->nullable();
            $table->integer('weight')->nullable();

            $table->index(["bill_of_landings_id"], 'fk_bill_of_landing_stage_bill_of_landings1_idx');

            $table->index(["stages_id"], 'fk_bill_of_landing_stage_stages1_idx');
            $table->softDeletes();
            $table->nullableTimestamps();


            $table->foreign('stages_id', 'fk_bill_of_landing_stage_stages1_idx')
                ->references('id')->on('stages')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('bill_of_landings_id', 'fk_bill_of_landing_stage_bill_of_landings1_idx')
                ->references('id')->on('bill_of_landings')
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
