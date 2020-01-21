<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Admin',
                'slug' => 'admin',
                'permissions' => '{"manage-user":true,"admin":true}',
                'created_at' => '2018-09-27 10:17:35',
                'updated_at' => '2018-09-27 10:17:35',
            ),
            1 => 
            array (
                'id' => 3,
                'name' => 'Sudo',
                'slug' => 'sudo',
                'permissions' => '{"manage-users":true,"manager":true,"admin":true,"approve-quotation":true,"manage-contracts":true,"generate-quotation":true,"view-quotation":true,"add-services":true,"add-contracts":true,"view-services":true,"view-contracts":true,"delete-services":true,"delete-contracts":true,"add-stages":true,"view-stages":true,"delete-stages":true,"add-documents":true,"view-documents":true,"delete-documents":true,"add-roles":true,"view-roles":true,"manage-jobs":true,"view-customers":true,"delete-roles":true,"can-delete":true}',
                'created_at' => '2018-06-08 12:36:55',
                'updated_at' => '2018-06-08 12:36:55',
            ),
            2 => 
            array (
                'id' => 4,
                'name' => 'Manager',
                'slug' => 'manager',
                'permissions' => '{"manage-users":true,"manager":true,"admin":true,"manage-contracts":true,"generate-quotation":true,"view-quotation":true,"add-services":true,"add-contracts":true,"view-services":true,"view-contracts":true,"delete-services":true,"delete-contracts":true,"add-stages":true,"view-stages":true,"delete-stages":true,"add-documents":true,"view-documents":true,"delete-documents":true,"manage-jobs":true,"view-customers":true}',
                'created_at' => '2018-06-08 12:39:36',
                'updated_at' => '2018-06-08 12:39:36',
            ),
            3 => 
            array (
                'id' => 5,
                'name' => 'Operation',
                'slug' => 'operation',
                'permissions' => '{"generate-quotation":true,"view-quotation":true,"add-services":true,"view-services":true,"view-contracts":true,"delete-services":true,"delete-contracts":true,"add-stages":true,"view-stages":true,"add-documents":true,"view-documents":true,"delete-documents":true,"manage-jobs":true,"view-customers":true}',
                'created_at' => '2018-06-08 12:41:17',
                'updated_at' => '2018-06-08 12:41:17',
            ),
            4 => 
            array (
                'id' => 6,
                'name' => 'Front Office',
                'slug' => 'front-office',
                'permissions' => '{"manage-jobs":true}',
                'created_at' => '2018-06-08 12:41:44',
                'updated_at' => '2018-06-08 12:41:44',
            ),
            5 => 
            array (
                'id' => 7,
                'name' => 'System Admin',
                'slug' => 'system-admin',
                'permissions' => '{"manage-users":true,"manager":true,"admin":true,"approve-quotation":true,"manage-contracts":true,"view-quotation":true,"add-services":true,"add-contracts":true,"view-services":true,"view-contracts":true,"delete-services":true,"delete-contracts":true,"add-stages":true,"view-stages":true,"delete-stages":true,"add-documents":true,"view-documents":true,"delete-documents":true,"view-roles":true,"manage-jobs":true,"view-customers":true,"can-delete":true}',
                'created_at' => '2018-06-23 02:50:55',
                'updated_at' => '2018-06-23 02:50:55',
            ),
            6 => 
            array (
                'id' => 8,
                'name' => 'COM',
                'slug' => 'com',
                'permissions' => '{"manager":true,"admin":true,"approve-quotation":true,"manage-contracts":true,"generate-quotation":true,"view-quotation":true,"add-services":true,"add-contracts":true,"view-services":true,"view-contracts":true,"delete-services":true,"delete-contracts":true,"add-stages":true,"view-stages":true,"delete-stages":true,"add-documents":true,"view-documents":true,"delete-documents":true,"view-roles":true,"manage-jobs":true,"view-customers":true,"can-delete":true}',
                'created_at' => '2018-07-06 06:31:40',
                'updated_at' => '2018-07-06 06:31:40',
            ),
            7 => 
            array (
                'id' => 9,
                'name' => 'GCFO',
                'slug' => 'gcfo',
                'permissions' => '{"manager":true,"manage-contracts":true,"view-quotation":true,"view-services":true,"view-contracts":true,"view-stages":true,"view-documents":true,"view-customers":true}',
                'created_at' => '2018-10-11 07:16:24',
                'updated_at' => '2018-10-11 07:16:24',
            ),
        ));
        
        
    }
}