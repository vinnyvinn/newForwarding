<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStageCommentsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'stage_comments';

    /**
     * Run the migrations.
     * @table stage_comments
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('user_id');
            $table->unsignedInteger('bill_of_landing_id')->nullable()->default(null);
            $table->unsignedInteger('stage_id')->nullable()->default(null);
            $table->longText('comments');

            $table->index(["stage_id"], 'fk_stage_comments_stages1_idx');

            $table->index(["bill_of_landing_id"], 'fk_stage_comments_bill_of_landings1_idx');
            $table->nullableTimestamps();


            $table->foreign('stage_id', 'fk_stage_comments_stages1_idx')
                ->references('id')->on('stages')
                ->onDelete('no action')
                ->onUpdate('no action');

            $table->foreign('bill_of_landing_id', 'fk_stage_comments_bill_of_landings1_idx')
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
