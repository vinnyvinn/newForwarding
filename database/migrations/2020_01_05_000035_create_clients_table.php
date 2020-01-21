<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientsTable extends Migration
{
    /**
     * Schema table name to migrate
     * @var string
     */
    public $tableName = 'clients';

    /**
     * Run the migrations.
     * @table clients
     *
     * @return void
     */
    public function up()
    {
        Schema::create($this->tableName, function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('DCLink')->nullable();
            $table->text('Account')->nullable();
            $table->text('Name')->nullable();
            $table->text('Title')->nullable();
            $table->text('Contact_Person')->nullable();
            $table->text('Physical1')->nullable();
            $table->text('Physical2')->nullable();
            $table->text('Physical3')->nullable();
            $table->text('Physical4')->nullable();
            $table->text('Physical5')->nullable();
            $table->text('PhysicalPC')->nullable();
            $table->text('Addressee')->nullable();
            $table->text('Post1')->nullable();
            $table->text('Post2')->nullable();
            $table->text('Telephone')->nullable();
            $table->text('Telephone2')->nullable();
            $table->text('Fax2')->nullable();
            $table->text('AccountTerms')->nullable();
            $table->text('CT')->nullable();
            $table->text('Tax_Number')->nullable();
            $table->text('Registration')->nullable();
            $table->integer('Credit_Limit')->nullable();
            $table->integer('RepID')->nullable();
            $table->float('Interest_Rate')->nullable();
            $table->float('Discount')->nullable();
            $table->text('EMail')->nullable();
            $table->softDeletes();
            $table->nullableTimestamps();
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
