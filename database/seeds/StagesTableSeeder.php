<?php

use Illuminate\Database\Seeder;

class StagesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('stages')->delete();
        
        \DB::table('stages')->insert(array (
            0 => 
            array (
                'id' => 22,
                'name' => 'Receipt of Pre-Clearance Documents',
                'type' => 'Import',
                'slug' => 'receipt-of-original-clearance-documents',
                'description' => 'Receipt of Clearance documents from the Client',
                'created_at' => '2018-10-05 08:09:04',
                'updated_at' => '2018-10-05 08:12:24',
            ),
            1 => 
            array (
                'id' => 24,
            'name' => 'Application of Import Permit  (IDF)',
                'type' => 'Import',
                'slug' => 'application-of-import-permit-idf',
                'description' => 'IDF',
                'created_at' => '2018-10-05 08:11:05',
                'updated_at' => '2018-10-05 08:11:05',
            ),
            2 => 
            array (
                'id' => 25,
                'name' => 'Receipt of Original Clearance Documents',
                'type' => 'Import',
                'slug' => 'receipt-of-original-clearance-documents',
                'description' => 'Original Documents receipt from the Customer',
                'created_at' => '2018-10-05 08:12:01',
                'updated_at' => '2018-10-05 08:12:01',
            ),
            3 => 
            array (
                'id' => 26,
                'name' => 'Processing of Shipping Line Charges and Manifest',
                'type' => 'Import',
                'slug' => 'processing-of-shipping-line-charges-and-manifest',
                'description' => 'Collect Shipping Line Invoice and Manifest  from shipping Agent',
                'created_at' => '2018-10-05 08:13:54',
                'updated_at' => '2018-10-05 08:13:54',
            ),
            4 => 
            array (
                'id' => 27,
                'name' => 'Shipping Line Payment Application',
                'type' => 'Import',
                'slug' => 'shipping-line-payment-application',
                'description' => 'Apply for Payment through Finance or Client',
                'created_at' => '2018-10-05 08:15:26',
                'updated_at' => '2018-10-05 08:15:26',
            ),
            5 => 
            array (
                'id' => 28,
                'name' => 'Delivery Order',
                'type' => 'Import',
                'slug' => 'delivery-order',
                'description' => 'Process Delivery order with the Shipping Agent',
                'created_at' => '2018-10-05 08:15:54',
                'updated_at' => '2018-10-05 08:15:54',
            ),
            6 => 
            array (
                'id' => 29,
                'name' => 'Customs Declaration',
                'type' => 'Import',
                'slug' => 'customs-declaration',
                'description' => 'Capturing the Customs Entry',
                'created_at' => '2018-10-05 08:17:04',
                'updated_at' => '2018-10-05 08:17:04',
            ),
            7 => 
            array (
                'id' => 30,
                'name' => 'Tax Payment',
                'type' => 'Import',
                'slug' => 'tax-payment',
                'description' => 'Tax Payment by Client or Finance',
                'created_at' => '2018-10-05 08:17:32',
                'updated_at' => '2018-10-05 08:17:32',
            ),
            8 => 
            array (
                'id' => 31,
                'name' => 'Processing at DPC',
                'type' => 'Import',
                'slug' => 'processing-at-dpc',
                'description' => 'Processing of the Customs Entry at Document Processing Center',
                'created_at' => '2018-10-05 08:18:22',
                'updated_at' => '2018-10-05 08:18:22',
            ),
            9 => 
            array (
                'id' => 32,
                'name' => 'Physical Verification',
                'type' => 'Import',
                'slug' => 'physical-verification',
                'description' => 'Verification with all Government Agencies',
                'created_at' => '2018-10-05 08:19:55',
                'updated_at' => '2018-10-05 08:19:55',
            ),
            10 => 
            array (
                'id' => 33,
                'name' => 'Release',
                'type' => 'Import',
                'slug' => 'release',
                'description' => 'Release with all Government Agencies',
                'created_at' => '2018-10-05 08:20:19',
                'updated_at' => '2018-10-05 08:20:19',
            ),
            11 => 
            array (
                'id' => 34,
                'name' => 'Processing Terminal Invoice',
                'type' => 'Import',
                'slug' => 'processing-terminal-invoice',
                'description' => 'Terminal Invoice by KPA / KPA',
                'created_at' => '2018-10-05 08:21:16',
                'updated_at' => '2018-10-05 08:21:16',
            ),
            12 => 
            array (
                'id' => 35,
                'name' => 'Payment of Terminal Invoice',
                'type' => 'Import',
                'slug' => 'payment-of-terminal-invoice',
                'description' => 'Payment by Finance/ Customer',
                'created_at' => '2018-10-05 08:22:39',
                'updated_at' => '2018-10-05 08:22:39',
            ),
            13 => 
            array (
                'id' => 36,
                'name' => 'Gate Pass and Loading',
                'type' => 'Import',
                'slug' => 'gate-pass-and-loading',
                'description' => 'Processing Gate Pass',
                'created_at' => '2018-10-05 08:23:08',
                'updated_at' => '2018-10-05 08:23:08',
            ),
            14 => 
            array (
                'id' => 37,
                'name' => 'Loading',
                'type' => 'Import',
                'slug' => 'loading',
                'description' => 'Loading',
                'created_at' => '2018-10-05 08:26:05',
                'updated_at' => '2018-10-05 08:26:05',
            ),
            15 => 
            array (
                'id' => 38,
                'name' => 'Receipt of Original Clearance Documents',
                'type' => 'Export',
                'slug' => 'receipt-of-original-clearance-documents',
                'description' => 'Receipt of Clearance documents from the Client',
                'created_at' => '2018-10-05 08:31:57',
                'updated_at' => '2018-10-05 08:31:57',
            ),
            16 => 
            array (
                'id' => 39,
                'name' => 'Collection of Empty Containers',
                'type' => 'Export',
                'slug' => 'collection-of-empty-containers',
                'description' => 'Collect empty container from the Appointed Depot',
                'created_at' => '2018-10-05 08:32:30',
                'updated_at' => '2018-10-05 08:32:30',
            ),
            17 => 
            array (
                'id' => 40,
                'name' => 'Customs Declaration',
                'type' => 'Export',
                'slug' => 'customs-declaration',
            'description' => 'Customs Declaration (Entry Registration)',
                'created_at' => '2018-10-05 08:32:47',
                'updated_at' => '2018-10-05 08:32:47',
            ),
            18 => 
            array (
                'id' => 41,
                'name' => 'Processing at DPC',
                'type' => 'Export',
                'slug' => 'processing-at-dpc',
                'description' => 'processing at DPC',
                'created_at' => '2018-10-05 08:33:06',
                'updated_at' => '2018-10-05 08:33:06',
            ),
            19 => 
            array (
                'id' => 42,
                'name' => 'Stuffing',
                'type' => 'Export',
                'slug' => 'stuffing',
                'description' => 'Stuffing in the presence of Customs Officer',
                'created_at' => '2018-10-05 08:33:32',
                'updated_at' => '2018-10-05 08:33:32',
            ),
            20 => 
            array (
                'id' => 43,
                'name' => 'Stuffing Report, and Release',
                'type' => 'Export',
                'slug' => 'stuffing-report-and-release',
                'description' => 'Stuffing report by the Customs Officer',
                'created_at' => '2018-10-05 08:34:06',
                'updated_at' => '2018-10-05 08:34:06',
            ),
            21 => 
            array (
                'id' => 44,
                'name' => 'Terminal Invoice',
                'type' => 'Export',
                'slug' => 'terminal-invoice',
                'description' => 'Processing of Terminal Invoice',
                'created_at' => '2018-10-05 08:34:40',
                'updated_at' => '2018-10-05 08:34:40',
            ),
            22 => 
            array (
                'id' => 45,
                'name' => 'Gate In the Export Shipment',
                'type' => 'Export',
                'slug' => 'gate-in-the-export-shipment',
                'description' => 'Gate in shipments at the export Station',
                'created_at' => '2018-10-05 08:35:23',
                'updated_at' => '2018-10-05 08:35:23',
            ),
            23 => 
            array (
                'id' => 46,
                'name' => 'Scanning/Verification',
                'type' => 'Export',
                'slug' => 'scanningverification',
                'description' => 'Scanning/Verification',
                'created_at' => '2018-10-05 08:35:52',
                'updated_at' => '2018-10-05 08:36:59',
            ),
            24 => 
            array (
                'id' => 47,
                'name' => 'Release',
                'type' => 'Export',
                'slug' => 'release',
                'description' => 'Release by Customs',
                'created_at' => '2018-10-05 08:36:14',
                'updated_at' => '2018-10-05 08:36:14',
            ),
            25 => 
            array (
                'id' => 48,
                'name' => 'Handing Over',
                'type' => 'Export',
                'slug' => 'handing-over-fees',
                'description' => 'Hand Over to the Port of Exit',
                'created_at' => '2018-10-05 08:36:39',
                'updated_at' => '2018-10-18 17:16:38',
            ),
        ));
        
        
    }
}