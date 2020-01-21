<?php

use Illuminate\Database\Seeder;

class ShipmentsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('shipments')->delete();
        
        \DB::table('shipments')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Import',
                'slug' => 'import',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:47:37',
                'updated_at' => '2019-12-25 00:47:37',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Export',
                'slug' => 'export',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:47:47',
                'updated_at' => '2019-12-25 00:47:47',
            ),
        ));
        
        
    }
}