<?php

use Illuminate\Database\Seeder;

class ShipmentSubTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('shipment_sub_types')->delete();
        
        \DB::table('shipment_sub_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Containerised',
                'slug' => 'containerised',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:55:09',
                'updated_at' => '2019-12-25 00:55:09',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Dry Bulk',
                'slug' => 'dry-bulk',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:55:18',
                'updated_at' => '2019-12-25 00:55:18',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Liquid Bulk',
                'slug' => 'liquid-bulk',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:55:30',
                'updated_at' => '2019-12-25 00:55:30',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'LCL',
                'slug' => 'lcl',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:55:40',
                'updated_at' => '2019-12-25 00:55:40',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Units',
                'slug' => 'units',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:55:50',
                'updated_at' => '2019-12-25 00:55:50',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Break-Bulk',
                'slug' => 'break-bulk',
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:56:03',
                'updated_at' => '2019-12-25 00:56:03',
            ),
        ));
        
        
    }
}