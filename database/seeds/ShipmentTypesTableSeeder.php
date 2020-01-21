<?php

use Illuminate\Database\Seeder;

class ShipmentTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('shipment_types')->delete();
        
        \DB::table('shipment_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Sea Import',
                'slug' => 'sea-import',
                'shipments_id' => 1,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:52:29',
                'updated_at' => '2019-12-25 00:52:29',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Air Import',
                'slug' => 'air-import',
                'shipments_id' => 1,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:52:43',
                'updated_at' => '2019-12-25 00:52:43',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Road Import',
                'slug' => 'road-import',
                'shipments_id' => 1,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:52:57',
                'updated_at' => '2019-12-25 00:52:57',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Rail Import',
                'slug' => 'rail-import',
                'shipments_id' => 1,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:53:11',
                'updated_at' => '2019-12-25 00:53:11',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Sea Export',
                'slug' => 'sea-export',
                'shipments_id' => 1,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:53:24',
                'updated_at' => '2019-12-25 00:53:24',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Road Export',
                'slug' => 'road-export',
                'shipments_id' => 2,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:53:39',
                'updated_at' => '2019-12-25 00:53:39',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Rail Export',
                'slug' => 'rail-export',
                'shipments_id' => 2,
                'deleted_at' => NULL,
                'created_at' => '2019-12-25 00:53:56',
                'updated_at' => '2019-12-25 00:53:56',
            ),
        ));
        
        
    }
}