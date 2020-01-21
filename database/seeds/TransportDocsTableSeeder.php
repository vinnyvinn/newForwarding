<?php

use Illuminate\Database\Seeder;

class TransportDocsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('transport_docs')->delete();
        
        \DB::table('transport_docs')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Packing List',
                'description' => 'Packing List',
                'created_at' => '2018-09-10 14:41:54',
                'updated_at' => '2018-09-10 14:41:54',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Commercial Invoice',
                'description' => 'Commercial Invoice',
                'created_at' => '2018-09-14 13:04:22',
                'updated_at' => '2018-09-14 13:04:22',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Bill of Lading',
                'description' => 'Bill of Lading',
                'created_at' => '2018-09-14 13:04:54',
                'updated_at' => '2018-09-14 13:04:54',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Certificate of Origin',
                'description' => 'Certificate of Origin',
                'created_at' => '2018-09-14 13:05:49',
                'updated_at' => '2018-09-14 13:05:49',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Certificate of Fumigation',
                'description' => 'Certificate of Fumigation',
                'created_at' => '2018-09-14 13:06:24',
                'updated_at' => '2018-09-14 13:06:24',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'Certificate of Conformity',
                'description' => 'Certificate of Conformity',
                'created_at' => '2018-09-14 13:07:41',
                'updated_at' => '2018-09-14 13:07:41',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'Certificate of Analysis',
                'description' => 'Certificate of Analysis',
                'created_at' => '2018-09-14 13:08:15',
                'updated_at' => '2018-09-14 13:08:15',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'Health Certificate',
                'description' => 'Health Certificate',
                'created_at' => '2018-09-14 13:08:46',
                'updated_at' => '2018-09-14 13:08:46',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'Material Safety Data Sheet',
                'description' => 'Material Safety Data Sheet',
                'created_at' => '2018-09-14 13:09:39',
                'updated_at' => '2018-09-14 13:09:39',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'Airway Bill',
                'description' => 'Airway Bill',
                'created_at' => '2018-09-14 13:10:00',
                'updated_at' => '2018-09-14 13:10:00',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'COMESA Certificate',
                'description' => 'COMESA Certificate',
                'created_at' => '2018-09-14 13:10:27',
                'updated_at' => '2018-09-14 13:10:27',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'EAC Certificate',
                'description' => 'EAC Certificate',
                'created_at' => '2018-09-14 13:10:55',
                'updated_at' => '2018-09-14 13:10:55',
            ),
        ));
        
        
    }
}