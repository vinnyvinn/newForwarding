<?php

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('settings')->delete();
        
        \DB::table('settings')->insert(array (
            0 => 
            array (
                'id' => 1,
                'setting_name' => 'logo_url',
                'setting_value' => 'images/logo/1573462908.png',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:01:48',
                'updated_at' => '2019-11-11 09:01:48',
            ),
            1 => 
            array (
                'id' => 2,
                'setting_name' => 'email_signature',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-11-11 09:04:07',
            ),
            2 => 
            array (
                'id' => 3,
                'setting_name' => 'company_vat',
                'setting_value' => 'P051153405J',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-12-25 02:33:57',
            ),
            3 => 
            array (
                'id' => 4,
                'setting_name' => 'company_registration',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-11-11 09:04:07',
            ),
            4 => 
            array (
                'id' => 5,
                'setting_name' => 'company_domain',
                'setting_value' => 'www.esl-eastafrica.com',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-11-11 09:04:07',
            ),
            5 => 
            array (
                'id' => 6,
                'setting_name' => 'company_fax',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-11-11 09:04:07',
            ),
            6 => 
            array (
                'id' => 7,
                'setting_name' => 'company_mobile',
                'setting_value' => '+254 41 2229784',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-12-25 02:34:21',
            ),
            7 => 
            array (
                'id' => 8,
                'setting_name' => 'company_phone_2',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-11-11 09:04:07',
            ),
            8 => 
            array (
                'id' => 9,
                'setting_name' => 'company_phone',
                'setting_value' => '+254 41 2229784',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:07',
                'updated_at' => '2019-12-25 02:34:21',
            ),
            9 => 
            array (
                'id' => 10,
                'setting_name' => 'company_email',
                'setting_value' => 'info@freightwell.com or imports@freightwell.com',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            10 => 
            array (
                'id' => 11,
                'setting_name' => 'company_country',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            11 => 
            array (
                'id' => 12,
                'setting_name' => 'company_state',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            12 => 
            array (
                'id' => 13,
                'setting_name' => 'company_zip_code',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            13 => 
            array (
                'id' => 14,
                'setting_name' => 'company_name',
                'setting_value' => 'Freightwell Express Ltd',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            14 => 
            array (
                'id' => 15,
                'setting_name' => 'company_legal_name',
                'setting_value' => 'Freightwell Express Ltd',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            15 => 
            array (
                'id' => 16,
                'setting_name' => 'contact_person',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            16 => 
            array (
                'id' => 17,
                'setting_name' => 'company_address',
                'setting_value' => '6th Floor, Moi Avenue Mombasa - Kenya',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            17 => 
            array (
                'id' => 18,
                'setting_name' => 'company_city',
                'setting_value' => '',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            18 => 
            array (
                'id' => 19,
                'setting_name' => 'building_name',
                'setting_value' => 'Cannon Towers,',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
            19 => 
            array (
                'id' => 20,
                'setting_name' => 'company_tag_line',
                'setting_value' => 'Powering Our Customers to be Leaders in their Markets',
                'setting_type' => 'company_info',
                'deleted_at' => NULL,
                'created_at' => '2019-11-11 09:04:08',
                'updated_at' => '2019-11-11 09:04:08',
            ),
        ));
        
        
    }
}