<?php

use Illuminate\Database\Seeder;

class TransportServicesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('transport_services')->delete();
        
        \DB::table('transport_services')->insert(array (
            0 => 
            array (
                'id' => 2,
                'type' => 'kpa',
                'StockLink' => '156',
                'name' => 'Storage',
                'rate' => '25',
                'unit' => 'Day',
                'created_at' => '2018-04-23 13:48:42',
                'updated_at' => '2018-04-23 13:48:42',
            ),
            1 => 
            array (
                'id' => 3,
                'type' => 'kpa',
                'StockLink' => '157',
                'name' => 'Alteration',
                'rate' => '500',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:49:13',
                'updated_at' => '2018-04-23 13:49:13',
            ),
            2 => 
            array (
                'id' => 4,
                'type' => 'kpa',
                'StockLink' => '158',
                'name' => 'Survey',
                'rate' => '50',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:49:58',
                'updated_at' => '2018-04-23 13:49:58',
            ),
            3 => 
            array (
                'id' => 5,
                'type' => 'kpa',
                'StockLink' => '159',
                'name' => 'Transfer',
                'rate' => '50',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:50:53',
                'updated_at' => '2018-04-23 13:50:53',
            ),
            4 => 
            array (
                'id' => 6,
                'type' => 'All',
                'StockLink' => '160',
                'name' => 'CFS Charges',
                'rate' => '1000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:51:40',
                'updated_at' => '2018-04-23 13:51:40',
            ),
            5 => 
            array (
                'id' => 7,
                'type' => 'All',
                'StockLink' => '161',
                'name' => 'KEBS Inspection',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:52:36',
                'updated_at' => '2018-04-23 13:52:36',
            ),
            6 => 
            array (
                'id' => 8,
                'type' => 'All',
                'StockLink' => '162',
                'name' => 'KEBS ISM',
                'rate' => '490',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:53:17',
                'updated_at' => '2018-04-23 13:53:17',
            ),
            7 => 
            array (
                'id' => 9,
                'type' => 'kpa',
                'StockLink' => '163',
                'name' => 'Rail Freight Full',
                'rate' => '250',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:54:17',
                'updated_at' => '2018-04-23 13:54:17',
            ),
            8 => 
            array (
                'id' => 10,
                'type' => 'kpa',
                'StockLink' => '164',
                'name' => 'Rail Freight Empty',
                'rate' => '100',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:54:50',
                'updated_at' => '2018-04-23 13:54:50',
            ),
            9 => 
            array (
                'id' => 11,
                'type' => 'All',
                'StockLink' => '165',
                'name' => 'Radiation Charges',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:55:36',
                'updated_at' => '2018-04-23 13:55:36',
            ),
            10 => 
            array (
                'id' => 12,
                'type' => 'All',
                'StockLink' => '166',
                'name' => 'Port Health Charges',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:56:13',
                'updated_at' => '2018-04-23 13:56:13',
            ),
            11 => 
            array (
                'id' => 13,
                'type' => 'All',
                'StockLink' => '167',
                'name' => 'Kephis Charges',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 13:56:38',
                'updated_at' => '2018-04-23 13:56:38',
            ),
            12 => 
            array (
                'id' => 14,
                'type' => 'All',
                'StockLink' => '168',
                'name' => 'Insurance Charges',
                'rate' => '1',
                'unit' => 'Value',
                'created_at' => '2018-04-23 13:57:14',
                'updated_at' => '2018-04-23 13:57:14',
            ),
            13 => 
            array (
                'id' => 15,
                'type' => 'Import',
                'StockLink' => '169',
                'name' => 'Agency Fees',
                'rate' => '5000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:00:06',
                'updated_at' => '2018-09-14 13:34:19',
            ),
            14 => 
            array (
                'id' => 16,
                'type' => 'All',
                'StockLink' => '170',
                'name' => 'Agency Fee First',
                'rate' => '15000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:01:48',
                'updated_at' => '2018-04-23 14:01:48',
            ),
            15 => 
            array (
                'id' => 17,
                'type' => 'All',
                'StockLink' => '171',
                'name' => 'Agency Fee Thereafter',
                'rate' => '2500',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:02:28',
                'updated_at' => '2018-04-23 14:02:28',
            ),
            16 => 
            array (
                'id' => 18,
                'type' => 'All',
                'StockLink' => '172',
                'name' => 'Bond Fees',
                'rate' => '1000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:03:26',
                'updated_at' => '2018-04-23 14:03:26',
            ),
            17 => 
            array (
                'id' => 19,
                'type' => 'All',
                'StockLink' => '173',
                'name' => 'Documentation',
                'rate' => '1000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:04:04',
                'updated_at' => '2018-04-23 14:04:04',
            ),
            18 => 
            array (
                'id' => 20,
                'type' => 'All',
                'StockLink' => '174',
                'name' => 'Stuffing Charges',
                'rate' => '5000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:04:43',
                'updated_at' => '2018-04-23 14:04:43',
            ),
            19 => 
            array (
                'id' => 21,
                'type' => 'All',
                'StockLink' => '175',
                'name' => 'Fumigation',
                'rate' => '1000',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:05:20',
                'updated_at' => '2018-04-23 14:05:20',
            ),
            20 => 
            array (
                'id' => 22,
                'type' => 'All',
                'StockLink' => '176',
                'name' => 'Operation Expense',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-23 14:05:55',
                'updated_at' => '2018-04-23 14:05:55',
            ),
            21 => 
            array (
                'id' => 23,
                'type' => 'All',
                'StockLink' => '177',
                'name' => 'Custom Duty',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-25 10:33:51',
                'updated_at' => '2018-04-25 10:33:51',
            ),
            22 => 
            array (
                'id' => 24,
                'type' => 'All',
                'StockLink' => '178',
                'name' => 'Shipping Line Charges',
                'rate' => '7000',
                'unit' => 'Unit',
                'created_at' => '2018-04-25 10:34:49',
                'updated_at' => '2018-04-25 10:34:49',
            ),
            23 => 
            array (
                'id' => 25,
                'type' => 'All',
                'StockLink' => '179',
                'name' => 'Detention Charges',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-25 10:35:30',
                'updated_at' => '2018-04-25 10:35:30',
            ),
            24 => 
            array (
                'id' => 26,
                'type' => 'All',
                'StockLink' => '180',
                'name' => 'MSS Levy / Concession Fee',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-04-25 10:36:51',
                'updated_at' => '2018-04-25 10:36:51',
            ),
            25 => 
            array (
                'id' => 27,
                'type' => 'Import',
                'StockLink' => '181',
                'name' => 'Delivery Order Fees',
                'rate' => '7000',
                'unit' => 'Unit',
                'created_at' => '2018-05-02 07:43:15',
                'updated_at' => '2018-05-02 07:43:15',
            ),
            26 => 
            array (
                'id' => 28,
                'type' => 'Import',
                'StockLink' => '182',
                'name' => 'Customs Duty',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-05-02 07:43:44',
                'updated_at' => '2018-05-02 07:43:44',
            ),
            27 => 
            array (
                'id' => 29,
                'type' => 'Import',
                'StockLink' => '183',
                'name' => 'Comesa Certificate',
                'rate' => '1000',
                'unit' => '1',
                'created_at' => '2018-05-02 07:56:46',
                'updated_at' => '2018-05-02 07:56:46',
            ),
            28 => 
            array (
                'id' => 30,
                'type' => 'Import',
                'StockLink' => '184',
                'name' => 'Transport Charges',
                'rate' => '1000',
                'unit' => 'Unit',
                'created_at' => '2018-05-02 07:58:41',
                'updated_at' => '2018-05-02 07:58:41',
            ),
            29 => 
            array (
                'id' => 31,
                'type' => 'Import',
                'StockLink' => '186',
                'name' => 'Telex release charges',
                'rate' => '1',
                'unit' => 'UNIT',
                'created_at' => '2018-05-02 13:19:14',
                'updated_at' => '2018-05-02 13:19:14',
            ),
            30 => 
            array (
                'id' => 32,
                'type' => 'Import',
                'StockLink' => '187',
                'name' => 'Import Service',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-05-22 09:26:05',
                'updated_at' => '2018-05-22 09:26:05',
            ),
            31 => 
            array (
                'id' => 33,
                'type' => 'All',
                'StockLink' => '188',
                'name' => 'To be deleted',
                'rate' => '5',
                'unit' => 'Unit',
                'created_at' => '2018-09-14 13:01:17',
                'updated_at' => '2018-09-14 13:01:17',
            ),
            32 => 
            array (
                'id' => 34,
                'type' => 'Import',
                'StockLink' => '195',
                'name' => 'Handing Over Fees',
                'rate' => '300',
                'unit' => 'Unit',
                'created_at' => '2018-09-28 15:39:22',
                'updated_at' => '2018-09-28 15:39:22',
            ),
            33 => 
            array (
                'id' => 35,
                'type' => 'All',
                'StockLink' => '196',
                'name' => 'Other Recoverables',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-10-05 10:33:24',
                'updated_at' => '2018-10-05 10:33:24',
            ),
            34 => 
            array (
                'id' => 36,
                'type' => 'Import',
                'StockLink' => '197',
                'name' => 'Customs Clearance Songwe Border',
                'rate' => '50',
                'unit' => 'Unit',
                'created_at' => '2018-10-08 13:42:06',
                'updated_at' => '2018-10-08 13:42:06',
            ),
            35 => 
            array (
                'id' => 37,
                'type' => 'Import',
                'StockLink' => '198',
                'name' => 'Customs Clearance Namanga Border',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-10-08 13:42:41',
                'updated_at' => '2018-10-08 13:42:41',
            ),
            36 => 
            array (
                'id' => 38,
                'type' => 'All',
                'StockLink' => '199',
                'name' => 'Sale of Empty Container',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-10-08 13:43:17',
                'updated_at' => '2018-10-08 13:43:17',
            ),
            37 => 
            array (
                'id' => 39,
                'type' => 'All',
                'StockLink' => '200',
                'name' => 'Transport Empty Container',
                'rate' => '1',
                'unit' => 'Unit',
                'created_at' => '2018-10-08 13:43:42',
                'updated_at' => '2018-10-08 13:43:42',
            ),
            38 => 
            array (
                'id' => 40,
                'type' => 'All',
                'StockLink' => '201',
                'name' => 'VGM',
                'rate' => '10',
                'unit' => 'Unit',
                'created_at' => '2018-11-15 09:54:44',
                'updated_at' => '2018-11-15 09:54:44',
            ),
        ));
        
        
    }
}