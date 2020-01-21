<?php

use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('countries')->delete();
        
        \DB::table('countries')->insert(array (
            0 => 
            array (
                'code' => 'AD',
                'name' => 'Andorra',
                'full_name' => 'Principality of Andorra',
                'iso3' => 'AND',
                'number' => 20,
                'continent_code' => 'EU',
            ),
            1 => 
            array (
                'code' => 'AE',
                'name' => 'United Arab Emirates',
                'full_name' => 'United Arab Emirates',
                'iso3' => 'ARE',
                'number' => 784,
                'continent_code' => 'AS',
            ),
            2 => 
            array (
                'code' => 'AF',
                'name' => 'Afghanistan',
                'full_name' => 'Islamic Republic of Afghanistan',
                'iso3' => 'AFG',
                'number' => 4,
                'continent_code' => 'AS',
            ),
            3 => 
            array (
                'code' => 'AG',
                'name' => 'Antigua and Barbuda',
                'full_name' => 'Antigua and Barbuda',
                'iso3' => 'ATG',
                'number' => 28,
                'continent_code' => 'NA',
            ),
            4 => 
            array (
                'code' => 'AI',
                'name' => 'Anguilla',
                'full_name' => 'Anguilla',
                'iso3' => 'AIA',
                'number' => 660,
                'continent_code' => 'NA',
            ),
            5 => 
            array (
                'code' => 'AL',
                'name' => 'Albania',
                'full_name' => 'Republic of Albania',
                'iso3' => 'ALB',
                'number' => 8,
                'continent_code' => 'EU',
            ),
            6 => 
            array (
                'code' => 'AM',
                'name' => 'Armenia',
                'full_name' => 'Republic of Armenia',
                'iso3' => 'ARM',
                'number' => 51,
                'continent_code' => 'AS',
            ),
            7 => 
            array (
                'code' => 'AO',
                'name' => 'Angola',
                'full_name' => 'Republic of Angola',
                'iso3' => 'AGO',
                'number' => 24,
                'continent_code' => 'AF',
            ),
            8 => 
            array (
                'code' => 'AQ',
                'name' => 'Antarctica',
            'full_name' => 'Antarctica (the territory South of 60 deg S)',
                'iso3' => 'ATA',
                'number' => 10,
                'continent_code' => 'AN',
            ),
            9 => 
            array (
                'code' => 'AR',
                'name' => 'Argentina',
                'full_name' => 'Argentine Republic',
                'iso3' => 'ARG',
                'number' => 32,
                'continent_code' => 'SA',
            ),
            10 => 
            array (
                'code' => 'AS',
                'name' => 'American Samoa',
                'full_name' => 'American Samoa',
                'iso3' => 'ASM',
                'number' => 16,
                'continent_code' => 'OC',
            ),
            11 => 
            array (
                'code' => 'AT',
                'name' => 'Austria',
                'full_name' => 'Republic of Austria',
                'iso3' => 'AUT',
                'number' => 40,
                'continent_code' => 'EU',
            ),
            12 => 
            array (
                'code' => 'AU',
                'name' => 'Australia',
                'full_name' => 'Commonwealth of Australia',
                'iso3' => 'AUS',
                'number' => 36,
                'continent_code' => 'OC',
            ),
            13 => 
            array (
                'code' => 'AW',
                'name' => 'Aruba',
                'full_name' => 'Aruba',
                'iso3' => 'ABW',
                'number' => 533,
                'continent_code' => 'NA',
            ),
            14 => 
            array (
                'code' => 'AX',
                'name' => 'Åland Islands',
                'full_name' => 'Åland Islands',
                'iso3' => 'ALA',
                'number' => 248,
                'continent_code' => 'EU',
            ),
            15 => 
            array (
                'code' => 'AZ',
                'name' => 'Azerbaijan',
                'full_name' => 'Republic of Azerbaijan',
                'iso3' => 'AZE',
                'number' => 31,
                'continent_code' => 'AS',
            ),
            16 => 
            array (
                'code' => 'BA',
                'name' => 'Bosnia and Herzegovina',
                'full_name' => 'Bosnia and Herzegovina',
                'iso3' => 'BIH',
                'number' => 70,
                'continent_code' => 'EU',
            ),
            17 => 
            array (
                'code' => 'BB',
                'name' => 'Barbados',
                'full_name' => 'Barbados',
                'iso3' => 'BRB',
                'number' => 52,
                'continent_code' => 'NA',
            ),
            18 => 
            array (
                'code' => 'BD',
                'name' => 'Bangladesh',
                'full_name' => 'People\'s Republic of Bangladesh',
                'iso3' => 'BGD',
                'number' => 50,
                'continent_code' => 'AS',
            ),
            19 => 
            array (
                'code' => 'BE',
                'name' => 'Belgium',
                'full_name' => 'Kingdom of Belgium',
                'iso3' => 'BEL',
                'number' => 56,
                'continent_code' => 'EU',
            ),
            20 => 
            array (
                'code' => 'BF',
                'name' => 'Burkina Faso',
                'full_name' => 'Burkina Faso',
                'iso3' => 'BFA',
                'number' => 854,
                'continent_code' => 'AF',
            ),
            21 => 
            array (
                'code' => 'BG',
                'name' => 'Bulgaria',
                'full_name' => 'Republic of Bulgaria',
                'iso3' => 'BGR',
                'number' => 100,
                'continent_code' => 'EU',
            ),
            22 => 
            array (
                'code' => 'BH',
                'name' => 'Bahrain',
                'full_name' => 'Kingdom of Bahrain',
                'iso3' => 'BHR',
                'number' => 48,
                'continent_code' => 'AS',
            ),
            23 => 
            array (
                'code' => 'BI',
                'name' => 'Burundi',
                'full_name' => 'Republic of Burundi',
                'iso3' => 'BDI',
                'number' => 108,
                'continent_code' => 'AF',
            ),
            24 => 
            array (
                'code' => 'BJ',
                'name' => 'Benin',
                'full_name' => 'Republic of Benin',
                'iso3' => 'BEN',
                'number' => 204,
                'continent_code' => 'AF',
            ),
            25 => 
            array (
                'code' => 'BL',
                'name' => 'Saint Barthélemy',
                'full_name' => 'Saint Barthélemy',
                'iso3' => 'BLM',
                'number' => 652,
                'continent_code' => 'NA',
            ),
            26 => 
            array (
                'code' => 'BM',
                'name' => 'Bermuda',
                'full_name' => 'Bermuda',
                'iso3' => 'BMU',
                'number' => 60,
                'continent_code' => 'NA',
            ),
            27 => 
            array (
                'code' => 'BN',
                'name' => 'Brunei Darussalam',
                'full_name' => 'Brunei Darussalam',
                'iso3' => 'BRN',
                'number' => 96,
                'continent_code' => 'AS',
            ),
            28 => 
            array (
                'code' => 'BO',
                'name' => 'Bolivia',
                'full_name' => 'Plurinational State of Bolivia',
                'iso3' => 'BOL',
                'number' => 68,
                'continent_code' => 'SA',
            ),
            29 => 
            array (
                'code' => 'BQ',
                'name' => 'Bonaire, Sint Eustatius and Saba',
                'full_name' => 'Bonaire, Sint Eustatius and Saba',
                'iso3' => 'BES',
                'number' => 535,
                'continent_code' => 'NA',
            ),
            30 => 
            array (
                'code' => 'BR',
                'name' => 'Brazil',
                'full_name' => 'Federative Republic of Brazil',
                'iso3' => 'BRA',
                'number' => 76,
                'continent_code' => 'SA',
            ),
            31 => 
            array (
                'code' => 'BS',
                'name' => 'Bahamas',
                'full_name' => 'Commonwealth of the Bahamas',
                'iso3' => 'BHS',
                'number' => 44,
                'continent_code' => 'NA',
            ),
            32 => 
            array (
                'code' => 'BT',
                'name' => 'Bhutan',
                'full_name' => 'Kingdom of Bhutan',
                'iso3' => 'BTN',
                'number' => 64,
                'continent_code' => 'AS',
            ),
            33 => 
            array (
                'code' => 'BV',
            'name' => 'Bouvet Island (Bouvetøya)',
            'full_name' => 'Bouvet Island (Bouvetøya)',
                'iso3' => 'BVT',
                'number' => 74,
                'continent_code' => 'AN',
            ),
            34 => 
            array (
                'code' => 'BW',
                'name' => 'Botswana',
                'full_name' => 'Republic of Botswana',
                'iso3' => 'BWA',
                'number' => 72,
                'continent_code' => 'AF',
            ),
            35 => 
            array (
                'code' => 'BY',
                'name' => 'Belarus',
                'full_name' => 'Republic of Belarus',
                'iso3' => 'BLR',
                'number' => 112,
                'continent_code' => 'EU',
            ),
            36 => 
            array (
                'code' => 'BZ',
                'name' => 'Belize',
                'full_name' => 'Belize',
                'iso3' => 'BLZ',
                'number' => 84,
                'continent_code' => 'NA',
            ),
            37 => 
            array (
                'code' => 'CA',
                'name' => 'Canada',
                'full_name' => 'Canada',
                'iso3' => 'CAN',
                'number' => 124,
                'continent_code' => 'NA',
            ),
            38 => 
            array (
                'code' => 'CC',
            'name' => 'Cocos (Keeling) Islands',
            'full_name' => 'Cocos (Keeling) Islands',
                'iso3' => 'CCK',
                'number' => 166,
                'continent_code' => 'AS',
            ),
            39 => 
            array (
                'code' => 'CD',
                'name' => 'Congo',
                'full_name' => 'Democratic Republic of the Congo',
                'iso3' => 'COD',
                'number' => 180,
                'continent_code' => 'AF',
            ),
            40 => 
            array (
                'code' => 'CF',
                'name' => 'Central African Republic',
                'full_name' => 'Central African Republic',
                'iso3' => 'CAF',
                'number' => 140,
                'continent_code' => 'AF',
            ),
            41 => 
            array (
                'code' => 'CG',
                'name' => 'Congo',
                'full_name' => 'Republic of the Congo',
                'iso3' => 'COG',
                'number' => 178,
                'continent_code' => 'AF',
            ),
            42 => 
            array (
                'code' => 'CH',
                'name' => 'Switzerland',
                'full_name' => 'Swiss Confederation',
                'iso3' => 'CHE',
                'number' => 756,
                'continent_code' => 'EU',
            ),
            43 => 
            array (
                'code' => 'CI',
                'name' => 'Cote d\'Ivoire',
                'full_name' => 'Republic of Cote d\'Ivoire',
                'iso3' => 'CIV',
                'number' => 384,
                'continent_code' => 'AF',
            ),
            44 => 
            array (
                'code' => 'CK',
                'name' => 'Cook Islands',
                'full_name' => 'Cook Islands',
                'iso3' => 'COK',
                'number' => 184,
                'continent_code' => 'OC',
            ),
            45 => 
            array (
                'code' => 'CL',
                'name' => 'Chile',
                'full_name' => 'Republic of Chile',
                'iso3' => 'CHL',
                'number' => 152,
                'continent_code' => 'SA',
            ),
            46 => 
            array (
                'code' => 'CM',
                'name' => 'Cameroon',
                'full_name' => 'Republic of Cameroon',
                'iso3' => 'CMR',
                'number' => 120,
                'continent_code' => 'AF',
            ),
            47 => 
            array (
                'code' => 'CN',
                'name' => 'China',
                'full_name' => 'People\'s Republic of China',
                'iso3' => 'CHN',
                'number' => 156,
                'continent_code' => 'AS',
            ),
            48 => 
            array (
                'code' => 'CO',
                'name' => 'Colombia',
                'full_name' => 'Republic of Colombia',
                'iso3' => 'COL',
                'number' => 170,
                'continent_code' => 'SA',
            ),
            49 => 
            array (
                'code' => 'CR',
                'name' => 'Costa Rica',
                'full_name' => 'Republic of Costa Rica',
                'iso3' => 'CRI',
                'number' => 188,
                'continent_code' => 'NA',
            ),
            50 => 
            array (
                'code' => 'CU',
                'name' => 'Cuba',
                'full_name' => 'Republic of Cuba',
                'iso3' => 'CUB',
                'number' => 192,
                'continent_code' => 'NA',
            ),
            51 => 
            array (
                'code' => 'CV',
                'name' => 'Cabo Verde',
                'full_name' => 'Republic of Cabo Verde',
                'iso3' => 'CPV',
                'number' => 132,
                'continent_code' => 'AF',
            ),
            52 => 
            array (
                'code' => 'CW',
                'name' => 'Curaçao',
                'full_name' => 'Curaçao',
                'iso3' => 'CUW',
                'number' => 531,
                'continent_code' => 'NA',
            ),
            53 => 
            array (
                'code' => 'CX',
                'name' => 'Christmas Island',
                'full_name' => 'Christmas Island',
                'iso3' => 'CXR',
                'number' => 162,
                'continent_code' => 'AS',
            ),
            54 => 
            array (
                'code' => 'CY',
                'name' => 'Cyprus',
                'full_name' => 'Republic of Cyprus',
                'iso3' => 'CYP',
                'number' => 196,
                'continent_code' => 'AS',
            ),
            55 => 
            array (
                'code' => 'CZ',
                'name' => 'Czechia',
                'full_name' => 'Czech Republic',
                'iso3' => 'CZE',
                'number' => 203,
                'continent_code' => 'EU',
            ),
            56 => 
            array (
                'code' => 'DE',
                'name' => 'Germany',
                'full_name' => 'Federal Republic of Germany',
                'iso3' => 'DEU',
                'number' => 276,
                'continent_code' => 'EU',
            ),
            57 => 
            array (
                'code' => 'DJ',
                'name' => 'Djibouti',
                'full_name' => 'Republic of Djibouti',
                'iso3' => 'DJI',
                'number' => 262,
                'continent_code' => 'AF',
            ),
            58 => 
            array (
                'code' => 'DK',
                'name' => 'Denmark',
                'full_name' => 'Kingdom of Denmark',
                'iso3' => 'DNK',
                'number' => 208,
                'continent_code' => 'EU',
            ),
            59 => 
            array (
                'code' => 'DM',
                'name' => 'Dominica',
                'full_name' => 'Commonwealth of Dominica',
                'iso3' => 'DMA',
                'number' => 212,
                'continent_code' => 'NA',
            ),
            60 => 
            array (
                'code' => 'DO',
                'name' => 'Dominican Republic',
                'full_name' => 'Dominican Republic',
                'iso3' => 'DOM',
                'number' => 214,
                'continent_code' => 'NA',
            ),
            61 => 
            array (
                'code' => 'DZ',
                'name' => 'Algeria',
                'full_name' => 'People\'s Democratic Republic of Algeria',
                'iso3' => 'DZA',
                'number' => 12,
                'continent_code' => 'AF',
            ),
            62 => 
            array (
                'code' => 'EC',
                'name' => 'Ecuador',
                'full_name' => 'Republic of Ecuador',
                'iso3' => 'ECU',
                'number' => 218,
                'continent_code' => 'SA',
            ),
            63 => 
            array (
                'code' => 'EE',
                'name' => 'Estonia',
                'full_name' => 'Republic of Estonia',
                'iso3' => 'EST',
                'number' => 233,
                'continent_code' => 'EU',
            ),
            64 => 
            array (
                'code' => 'EG',
                'name' => 'Egypt',
                'full_name' => 'Arab Republic of Egypt',
                'iso3' => 'EGY',
                'number' => 818,
                'continent_code' => 'AF',
            ),
            65 => 
            array (
                'code' => 'EH',
                'name' => 'Western Sahara',
                'full_name' => 'Western Sahara',
                'iso3' => 'ESH',
                'number' => 732,
                'continent_code' => 'AF',
            ),
            66 => 
            array (
                'code' => 'ER',
                'name' => 'Eritrea',
                'full_name' => 'State of Eritrea',
                'iso3' => 'ERI',
                'number' => 232,
                'continent_code' => 'AF',
            ),
            67 => 
            array (
                'code' => 'ES',
                'name' => 'Spain',
                'full_name' => 'Kingdom of Spain',
                'iso3' => 'ESP',
                'number' => 724,
                'continent_code' => 'EU',
            ),
            68 => 
            array (
                'code' => 'ET',
                'name' => 'Ethiopia',
                'full_name' => 'Federal Democratic Republic of Ethiopia',
                'iso3' => 'ETH',
                'number' => 231,
                'continent_code' => 'AF',
            ),
            69 => 
            array (
                'code' => 'FI',
                'name' => 'Finland',
                'full_name' => 'Republic of Finland',
                'iso3' => 'FIN',
                'number' => 246,
                'continent_code' => 'EU',
            ),
            70 => 
            array (
                'code' => 'FJ',
                'name' => 'Fiji',
                'full_name' => 'Republic of Fiji',
                'iso3' => 'FJI',
                'number' => 242,
                'continent_code' => 'OC',
            ),
            71 => 
            array (
                'code' => 'FK',
            'name' => 'Falkland Islands (Malvinas)',
            'full_name' => 'Falkland Islands (Malvinas)',
                'iso3' => 'FLK',
                'number' => 238,
                'continent_code' => 'SA',
            ),
            72 => 
            array (
                'code' => 'FM',
                'name' => 'Micronesia',
                'full_name' => 'Federated States of Micronesia',
                'iso3' => 'FSM',
                'number' => 583,
                'continent_code' => 'OC',
            ),
            73 => 
            array (
                'code' => 'FO',
                'name' => 'Faroe Islands',
                'full_name' => 'Faroe Islands',
                'iso3' => 'FRO',
                'number' => 234,
                'continent_code' => 'EU',
            ),
            74 => 
            array (
                'code' => 'FR',
                'name' => 'France',
                'full_name' => 'French Republic',
                'iso3' => 'FRA',
                'number' => 250,
                'continent_code' => 'EU',
            ),
            75 => 
            array (
                'code' => 'GA',
                'name' => 'Gabon',
                'full_name' => 'Gabonese Republic',
                'iso3' => 'GAB',
                'number' => 266,
                'continent_code' => 'AF',
            ),
            76 => 
            array (
                'code' => 'GB',
                'name' => 'United Kingdom of Great Britain & Northern Ireland',
                'full_name' => 'United Kingdom of Great Britain & Northern Ireland',
                'iso3' => 'GBR',
                'number' => 826,
                'continent_code' => 'EU',
            ),
            77 => 
            array (
                'code' => 'GD',
                'name' => 'Grenada',
                'full_name' => 'Grenada',
                'iso3' => 'GRD',
                'number' => 308,
                'continent_code' => 'NA',
            ),
            78 => 
            array (
                'code' => 'GE',
                'name' => 'Georgia',
                'full_name' => 'Georgia',
                'iso3' => 'GEO',
                'number' => 268,
                'continent_code' => 'AS',
            ),
            79 => 
            array (
                'code' => 'GF',
                'name' => 'French Guiana',
                'full_name' => 'French Guiana',
                'iso3' => 'GUF',
                'number' => 254,
                'continent_code' => 'SA',
            ),
            80 => 
            array (
                'code' => 'GG',
                'name' => 'Guernsey',
                'full_name' => 'Bailiwick of Guernsey',
                'iso3' => 'GGY',
                'number' => 831,
                'continent_code' => 'EU',
            ),
            81 => 
            array (
                'code' => 'GH',
                'name' => 'Ghana',
                'full_name' => 'Republic of Ghana',
                'iso3' => 'GHA',
                'number' => 288,
                'continent_code' => 'AF',
            ),
            82 => 
            array (
                'code' => 'GI',
                'name' => 'Gibraltar',
                'full_name' => 'Gibraltar',
                'iso3' => 'GIB',
                'number' => 292,
                'continent_code' => 'EU',
            ),
            83 => 
            array (
                'code' => 'GL',
                'name' => 'Greenland',
                'full_name' => 'Greenland',
                'iso3' => 'GRL',
                'number' => 304,
                'continent_code' => 'NA',
            ),
            84 => 
            array (
                'code' => 'GM',
                'name' => 'Gambia',
                'full_name' => 'Republic of the Gambia',
                'iso3' => 'GMB',
                'number' => 270,
                'continent_code' => 'AF',
            ),
            85 => 
            array (
                'code' => 'GN',
                'name' => 'Guinea',
                'full_name' => 'Republic of Guinea',
                'iso3' => 'GIN',
                'number' => 324,
                'continent_code' => 'AF',
            ),
            86 => 
            array (
                'code' => 'GP',
                'name' => 'Guadeloupe',
                'full_name' => 'Guadeloupe',
                'iso3' => 'GLP',
                'number' => 312,
                'continent_code' => 'NA',
            ),
            87 => 
            array (
                'code' => 'GQ',
                'name' => 'Equatorial Guinea',
                'full_name' => 'Republic of Equatorial Guinea',
                'iso3' => 'GNQ',
                'number' => 226,
                'continent_code' => 'AF',
            ),
            88 => 
            array (
                'code' => 'GR',
                'name' => 'Greece',
                'full_name' => 'Hellenic Republic of Greece',
                'iso3' => 'GRC',
                'number' => 300,
                'continent_code' => 'EU',
            ),
            89 => 
            array (
                'code' => 'GS',
                'name' => 'South Georgia and the South Sandwich Islands',
                'full_name' => 'South Georgia and the South Sandwich Islands',
                'iso3' => 'SGS',
                'number' => 239,
                'continent_code' => 'AN',
            ),
            90 => 
            array (
                'code' => 'GT',
                'name' => 'Guatemala',
                'full_name' => 'Republic of Guatemala',
                'iso3' => 'GTM',
                'number' => 320,
                'continent_code' => 'NA',
            ),
            91 => 
            array (
                'code' => 'GU',
                'name' => 'Guam',
                'full_name' => 'Guam',
                'iso3' => 'GUM',
                'number' => 316,
                'continent_code' => 'OC',
            ),
            92 => 
            array (
                'code' => 'GW',
                'name' => 'Guinea-Bissau',
                'full_name' => 'Republic of Guinea-Bissau',
                'iso3' => 'GNB',
                'number' => 624,
                'continent_code' => 'AF',
            ),
            93 => 
            array (
                'code' => 'GY',
                'name' => 'Guyana',
                'full_name' => 'Co-operative Republic of Guyana',
                'iso3' => 'GUY',
                'number' => 328,
                'continent_code' => 'SA',
            ),
            94 => 
            array (
                'code' => 'HK',
                'name' => 'Hong Kong',
                'full_name' => 'Hong Kong Special Administrative Region of China',
                'iso3' => 'HKG',
                'number' => 344,
                'continent_code' => 'AS',
            ),
            95 => 
            array (
                'code' => 'HM',
                'name' => 'Heard Island and McDonald Islands',
                'full_name' => 'Heard Island and McDonald Islands',
                'iso3' => 'HMD',
                'number' => 334,
                'continent_code' => 'AN',
            ),
            96 => 
            array (
                'code' => 'HN',
                'name' => 'Honduras',
                'full_name' => 'Republic of Honduras',
                'iso3' => 'HND',
                'number' => 340,
                'continent_code' => 'NA',
            ),
            97 => 
            array (
                'code' => 'HR',
                'name' => 'Croatia',
                'full_name' => 'Republic of Croatia',
                'iso3' => 'HRV',
                'number' => 191,
                'continent_code' => 'EU',
            ),
            98 => 
            array (
                'code' => 'HT',
                'name' => 'Haiti',
                'full_name' => 'Republic of Haiti',
                'iso3' => 'HTI',
                'number' => 332,
                'continent_code' => 'NA',
            ),
            99 => 
            array (
                'code' => 'HU',
                'name' => 'Hungary',
                'full_name' => 'Hungary',
                'iso3' => 'HUN',
                'number' => 348,
                'continent_code' => 'EU',
            ),
            100 => 
            array (
                'code' => 'ID',
                'name' => 'Indonesia',
                'full_name' => 'Republic of Indonesia',
                'iso3' => 'IDN',
                'number' => 360,
                'continent_code' => 'AS',
            ),
            101 => 
            array (
                'code' => 'IE',
                'name' => 'Ireland',
                'full_name' => 'Ireland',
                'iso3' => 'IRL',
                'number' => 372,
                'continent_code' => 'EU',
            ),
            102 => 
            array (
                'code' => 'IL',
                'name' => 'Israel',
                'full_name' => 'State of Israel',
                'iso3' => 'ISR',
                'number' => 376,
                'continent_code' => 'AS',
            ),
            103 => 
            array (
                'code' => 'IM',
                'name' => 'Isle of Man',
                'full_name' => 'Isle of Man',
                'iso3' => 'IMN',
                'number' => 833,
                'continent_code' => 'EU',
            ),
            104 => 
            array (
                'code' => 'IN',
                'name' => 'India',
                'full_name' => 'Republic of India',
                'iso3' => 'IND',
                'number' => 356,
                'continent_code' => 'AS',
            ),
            105 => 
            array (
                'code' => 'IO',
            'name' => 'British Indian Ocean Territory (Chagos Archipelago)',
            'full_name' => 'British Indian Ocean Territory (Chagos Archipelago)',
                'iso3' => 'IOT',
                'number' => 86,
                'continent_code' => 'AS',
            ),
            106 => 
            array (
                'code' => 'IQ',
                'name' => 'Iraq',
                'full_name' => 'Republic of Iraq',
                'iso3' => 'IRQ',
                'number' => 368,
                'continent_code' => 'AS',
            ),
            107 => 
            array (
                'code' => 'IR',
                'name' => 'Iran',
                'full_name' => 'Islamic Republic of Iran',
                'iso3' => 'IRN',
                'number' => 364,
                'continent_code' => 'AS',
            ),
            108 => 
            array (
                'code' => 'IS',
                'name' => 'Iceland',
                'full_name' => 'Republic of Iceland',
                'iso3' => 'ISL',
                'number' => 352,
                'continent_code' => 'EU',
            ),
            109 => 
            array (
                'code' => 'IT',
                'name' => 'Italy',
                'full_name' => 'Italian Republic',
                'iso3' => 'ITA',
                'number' => 380,
                'continent_code' => 'EU',
            ),
            110 => 
            array (
                'code' => 'JE',
                'name' => 'Jersey',
                'full_name' => 'Bailiwick of Jersey',
                'iso3' => 'JEY',
                'number' => 832,
                'continent_code' => 'EU',
            ),
            111 => 
            array (
                'code' => 'JM',
                'name' => 'Jamaica',
                'full_name' => 'Jamaica',
                'iso3' => 'JAM',
                'number' => 388,
                'continent_code' => 'NA',
            ),
            112 => 
            array (
                'code' => 'JO',
                'name' => 'Jordan',
                'full_name' => 'Hashemite Kingdom of Jordan',
                'iso3' => 'JOR',
                'number' => 400,
                'continent_code' => 'AS',
            ),
            113 => 
            array (
                'code' => 'JP',
                'name' => 'Japan',
                'full_name' => 'Japan',
                'iso3' => 'JPN',
                'number' => 392,
                'continent_code' => 'AS',
            ),
            114 => 
            array (
                'code' => 'KE',
                'name' => 'Kenya',
                'full_name' => 'Republic of Kenya',
                'iso3' => 'KEN',
                'number' => 404,
                'continent_code' => 'AF',
            ),
            115 => 
            array (
                'code' => 'KG',
                'name' => 'Kyrgyz Republic',
                'full_name' => 'Kyrgyz Republic',
                'iso3' => 'KGZ',
                'number' => 417,
                'continent_code' => 'AS',
            ),
            116 => 
            array (
                'code' => 'KH',
                'name' => 'Cambodia',
                'full_name' => 'Kingdom of Cambodia',
                'iso3' => 'KHM',
                'number' => 116,
                'continent_code' => 'AS',
            ),
            117 => 
            array (
                'code' => 'KI',
                'name' => 'Kiribati',
                'full_name' => 'Republic of Kiribati',
                'iso3' => 'KIR',
                'number' => 296,
                'continent_code' => 'OC',
            ),
            118 => 
            array (
                'code' => 'KM',
                'name' => 'Comoros',
                'full_name' => 'Union of the Comoros',
                'iso3' => 'COM',
                'number' => 174,
                'continent_code' => 'AF',
            ),
            119 => 
            array (
                'code' => 'KN',
                'name' => 'Saint Kitts and Nevis',
                'full_name' => 'Federation of Saint Kitts and Nevis',
                'iso3' => 'KNA',
                'number' => 659,
                'continent_code' => 'NA',
            ),
            120 => 
            array (
                'code' => 'KP',
                'name' => 'Korea',
                'full_name' => 'Democratic People\'s Republic of Korea',
                'iso3' => 'PRK',
                'number' => 408,
                'continent_code' => 'AS',
            ),
            121 => 
            array (
                'code' => 'KR',
                'name' => 'Korea',
                'full_name' => 'Republic of Korea',
                'iso3' => 'KOR',
                'number' => 410,
                'continent_code' => 'AS',
            ),
            122 => 
            array (
                'code' => 'KW',
                'name' => 'Kuwait',
                'full_name' => 'State of Kuwait',
                'iso3' => 'KWT',
                'number' => 414,
                'continent_code' => 'AS',
            ),
            123 => 
            array (
                'code' => 'KY',
                'name' => 'Cayman Islands',
                'full_name' => 'Cayman Islands',
                'iso3' => 'CYM',
                'number' => 136,
                'continent_code' => 'NA',
            ),
            124 => 
            array (
                'code' => 'KZ',
                'name' => 'Kazakhstan',
                'full_name' => 'Republic of Kazakhstan',
                'iso3' => 'KAZ',
                'number' => 398,
                'continent_code' => 'AS',
            ),
            125 => 
            array (
                'code' => 'LA',
                'name' => 'Lao People\'s Democratic Republic',
                'full_name' => 'Lao People\'s Democratic Republic',
                'iso3' => 'LAO',
                'number' => 418,
                'continent_code' => 'AS',
            ),
            126 => 
            array (
                'code' => 'LB',
                'name' => 'Lebanon',
                'full_name' => 'Lebanese Republic',
                'iso3' => 'LBN',
                'number' => 422,
                'continent_code' => 'AS',
            ),
            127 => 
            array (
                'code' => 'LC',
                'name' => 'Saint Lucia',
                'full_name' => 'Saint Lucia',
                'iso3' => 'LCA',
                'number' => 662,
                'continent_code' => 'NA',
            ),
            128 => 
            array (
                'code' => 'LI',
                'name' => 'Liechtenstein',
                'full_name' => 'Principality of Liechtenstein',
                'iso3' => 'LIE',
                'number' => 438,
                'continent_code' => 'EU',
            ),
            129 => 
            array (
                'code' => 'LK',
                'name' => 'Sri Lanka',
                'full_name' => 'Democratic Socialist Republic of Sri Lanka',
                'iso3' => 'LKA',
                'number' => 144,
                'continent_code' => 'AS',
            ),
            130 => 
            array (
                'code' => 'LR',
                'name' => 'Liberia',
                'full_name' => 'Republic of Liberia',
                'iso3' => 'LBR',
                'number' => 430,
                'continent_code' => 'AF',
            ),
            131 => 
            array (
                'code' => 'LS',
                'name' => 'Lesotho',
                'full_name' => 'Kingdom of Lesotho',
                'iso3' => 'LSO',
                'number' => 426,
                'continent_code' => 'AF',
            ),
            132 => 
            array (
                'code' => 'LT',
                'name' => 'Lithuania',
                'full_name' => 'Republic of Lithuania',
                'iso3' => 'LTU',
                'number' => 440,
                'continent_code' => 'EU',
            ),
            133 => 
            array (
                'code' => 'LU',
                'name' => 'Luxembourg',
                'full_name' => 'Grand Duchy of Luxembourg',
                'iso3' => 'LUX',
                'number' => 442,
                'continent_code' => 'EU',
            ),
            134 => 
            array (
                'code' => 'LV',
                'name' => 'Latvia',
                'full_name' => 'Republic of Latvia',
                'iso3' => 'LVA',
                'number' => 428,
                'continent_code' => 'EU',
            ),
            135 => 
            array (
                'code' => 'LY',
                'name' => 'Libya',
                'full_name' => 'State of Libya',
                'iso3' => 'LBY',
                'number' => 434,
                'continent_code' => 'AF',
            ),
            136 => 
            array (
                'code' => 'MA',
                'name' => 'Morocco',
                'full_name' => 'Kingdom of Morocco',
                'iso3' => 'MAR',
                'number' => 504,
                'continent_code' => 'AF',
            ),
            137 => 
            array (
                'code' => 'MC',
                'name' => 'Monaco',
                'full_name' => 'Principality of Monaco',
                'iso3' => 'MCO',
                'number' => 492,
                'continent_code' => 'EU',
            ),
            138 => 
            array (
                'code' => 'MD',
                'name' => 'Moldova',
                'full_name' => 'Republic of Moldova',
                'iso3' => 'MDA',
                'number' => 498,
                'continent_code' => 'EU',
            ),
            139 => 
            array (
                'code' => 'ME',
                'name' => 'Montenegro',
                'full_name' => 'Montenegro',
                'iso3' => 'MNE',
                'number' => 499,
                'continent_code' => 'EU',
            ),
            140 => 
            array (
                'code' => 'MF',
                'name' => 'Saint Martin',
            'full_name' => 'Saint Martin (French part)',
                'iso3' => 'MAF',
                'number' => 663,
                'continent_code' => 'NA',
            ),
            141 => 
            array (
                'code' => 'MG',
                'name' => 'Madagascar',
                'full_name' => 'Republic of Madagascar',
                'iso3' => 'MDG',
                'number' => 450,
                'continent_code' => 'AF',
            ),
            142 => 
            array (
                'code' => 'MH',
                'name' => 'Marshall Islands',
                'full_name' => 'Republic of the Marshall Islands',
                'iso3' => 'MHL',
                'number' => 584,
                'continent_code' => 'OC',
            ),
            143 => 
            array (
                'code' => 'MK',
                'name' => 'North Macedonia',
                'full_name' => 'Republic of North Macedonia',
                'iso3' => 'MKD',
                'number' => 807,
                'continent_code' => 'EU',
            ),
            144 => 
            array (
                'code' => 'ML',
                'name' => 'Mali',
                'full_name' => 'Republic of Mali',
                'iso3' => 'MLI',
                'number' => 466,
                'continent_code' => 'AF',
            ),
            145 => 
            array (
                'code' => 'MM',
                'name' => 'Myanmar',
                'full_name' => 'Republic of the Union of Myanmar',
                'iso3' => 'MMR',
                'number' => 104,
                'continent_code' => 'AS',
            ),
            146 => 
            array (
                'code' => 'MN',
                'name' => 'Mongolia',
                'full_name' => 'Mongolia',
                'iso3' => 'MNG',
                'number' => 496,
                'continent_code' => 'AS',
            ),
            147 => 
            array (
                'code' => 'MO',
                'name' => 'Macao',
                'full_name' => 'Macao Special Administrative Region of China',
                'iso3' => 'MAC',
                'number' => 446,
                'continent_code' => 'AS',
            ),
            148 => 
            array (
                'code' => 'MP',
                'name' => 'Northern Mariana Islands',
                'full_name' => 'Commonwealth of the Northern Mariana Islands',
                'iso3' => 'MNP',
                'number' => 580,
                'continent_code' => 'OC',
            ),
            149 => 
            array (
                'code' => 'MQ',
                'name' => 'Martinique',
                'full_name' => 'Martinique',
                'iso3' => 'MTQ',
                'number' => 474,
                'continent_code' => 'NA',
            ),
            150 => 
            array (
                'code' => 'MR',
                'name' => 'Mauritania',
                'full_name' => 'Islamic Republic of Mauritania',
                'iso3' => 'MRT',
                'number' => 478,
                'continent_code' => 'AF',
            ),
            151 => 
            array (
                'code' => 'MS',
                'name' => 'Montserrat',
                'full_name' => 'Montserrat',
                'iso3' => 'MSR',
                'number' => 500,
                'continent_code' => 'NA',
            ),
            152 => 
            array (
                'code' => 'MT',
                'name' => 'Malta',
                'full_name' => 'Republic of Malta',
                'iso3' => 'MLT',
                'number' => 470,
                'continent_code' => 'EU',
            ),
            153 => 
            array (
                'code' => 'MU',
                'name' => 'Mauritius',
                'full_name' => 'Republic of Mauritius',
                'iso3' => 'MUS',
                'number' => 480,
                'continent_code' => 'AF',
            ),
            154 => 
            array (
                'code' => 'MV',
                'name' => 'Maldives',
                'full_name' => 'Republic of Maldives',
                'iso3' => 'MDV',
                'number' => 462,
                'continent_code' => 'AS',
            ),
            155 => 
            array (
                'code' => 'MW',
                'name' => 'Malawi',
                'full_name' => 'Republic of Malawi',
                'iso3' => 'MWI',
                'number' => 454,
                'continent_code' => 'AF',
            ),
            156 => 
            array (
                'code' => 'MX',
                'name' => 'Mexico',
                'full_name' => 'United Mexican States',
                'iso3' => 'MEX',
                'number' => 484,
                'continent_code' => 'NA',
            ),
            157 => 
            array (
                'code' => 'MY',
                'name' => 'Malaysia',
                'full_name' => 'Malaysia',
                'iso3' => 'MYS',
                'number' => 458,
                'continent_code' => 'AS',
            ),
            158 => 
            array (
                'code' => 'MZ',
                'name' => 'Mozambique',
                'full_name' => 'Republic of Mozambique',
                'iso3' => 'MOZ',
                'number' => 508,
                'continent_code' => 'AF',
            ),
            159 => 
            array (
                'code' => 'NA',
                'name' => 'Namibia',
                'full_name' => 'Republic of Namibia',
                'iso3' => 'NAM',
                'number' => 516,
                'continent_code' => 'AF',
            ),
            160 => 
            array (
                'code' => 'NC',
                'name' => 'New Caledonia',
                'full_name' => 'New Caledonia',
                'iso3' => 'NCL',
                'number' => 540,
                'continent_code' => 'OC',
            ),
            161 => 
            array (
                'code' => 'NE',
                'name' => 'Niger',
                'full_name' => 'Republic of Niger',
                'iso3' => 'NER',
                'number' => 562,
                'continent_code' => 'AF',
            ),
            162 => 
            array (
                'code' => 'NF',
                'name' => 'Norfolk Island',
                'full_name' => 'Norfolk Island',
                'iso3' => 'NFK',
                'number' => 574,
                'continent_code' => 'OC',
            ),
            163 => 
            array (
                'code' => 'NG',
                'name' => 'Nigeria',
                'full_name' => 'Federal Republic of Nigeria',
                'iso3' => 'NGA',
                'number' => 566,
                'continent_code' => 'AF',
            ),
            164 => 
            array (
                'code' => 'NI',
                'name' => 'Nicaragua',
                'full_name' => 'Republic of Nicaragua',
                'iso3' => 'NIC',
                'number' => 558,
                'continent_code' => 'NA',
            ),
            165 => 
            array (
                'code' => 'NL',
                'name' => 'Netherlands',
                'full_name' => 'Kingdom of the Netherlands',
                'iso3' => 'NLD',
                'number' => 528,
                'continent_code' => 'EU',
            ),
            166 => 
            array (
                'code' => 'NO',
                'name' => 'Norway',
                'full_name' => 'Kingdom of Norway',
                'iso3' => 'NOR',
                'number' => 578,
                'continent_code' => 'EU',
            ),
            167 => 
            array (
                'code' => 'NP',
                'name' => 'Nepal',
                'full_name' => 'Federal Democratic Republic of Nepal',
                'iso3' => 'NPL',
                'number' => 524,
                'continent_code' => 'AS',
            ),
            168 => 
            array (
                'code' => 'NR',
                'name' => 'Nauru',
                'full_name' => 'Republic of Nauru',
                'iso3' => 'NRU',
                'number' => 520,
                'continent_code' => 'OC',
            ),
            169 => 
            array (
                'code' => 'NU',
                'name' => 'Niue',
                'full_name' => 'Niue',
                'iso3' => 'NIU',
                'number' => 570,
                'continent_code' => 'OC',
            ),
            170 => 
            array (
                'code' => 'NZ',
                'name' => 'New Zealand',
                'full_name' => 'New Zealand',
                'iso3' => 'NZL',
                'number' => 554,
                'continent_code' => 'OC',
            ),
            171 => 
            array (
                'code' => 'OM',
                'name' => 'Oman',
                'full_name' => 'Sultanate of Oman',
                'iso3' => 'OMN',
                'number' => 512,
                'continent_code' => 'AS',
            ),
            172 => 
            array (
                'code' => 'PA',
                'name' => 'Panama',
                'full_name' => 'Republic of Panama',
                'iso3' => 'PAN',
                'number' => 591,
                'continent_code' => 'NA',
            ),
            173 => 
            array (
                'code' => 'PE',
                'name' => 'Peru',
                'full_name' => 'Republic of Peru',
                'iso3' => 'PER',
                'number' => 604,
                'continent_code' => 'SA',
            ),
            174 => 
            array (
                'code' => 'PF',
                'name' => 'French Polynesia',
                'full_name' => 'French Polynesia',
                'iso3' => 'PYF',
                'number' => 258,
                'continent_code' => 'OC',
            ),
            175 => 
            array (
                'code' => 'PG',
                'name' => 'Papua New Guinea',
                'full_name' => 'Independent State of Papua New Guinea',
                'iso3' => 'PNG',
                'number' => 598,
                'continent_code' => 'OC',
            ),
            176 => 
            array (
                'code' => 'PH',
                'name' => 'Philippines',
                'full_name' => 'Republic of the Philippines',
                'iso3' => 'PHL',
                'number' => 608,
                'continent_code' => 'AS',
            ),
            177 => 
            array (
                'code' => 'PK',
                'name' => 'Pakistan',
                'full_name' => 'Islamic Republic of Pakistan',
                'iso3' => 'PAK',
                'number' => 586,
                'continent_code' => 'AS',
            ),
            178 => 
            array (
                'code' => 'PL',
                'name' => 'Poland',
                'full_name' => 'Republic of Poland',
                'iso3' => 'POL',
                'number' => 616,
                'continent_code' => 'EU',
            ),
            179 => 
            array (
                'code' => 'PM',
                'name' => 'Saint Pierre and Miquelon',
                'full_name' => 'Saint Pierre and Miquelon',
                'iso3' => 'SPM',
                'number' => 666,
                'continent_code' => 'NA',
            ),
            180 => 
            array (
                'code' => 'PN',
                'name' => 'Pitcairn Islands',
                'full_name' => 'Pitcairn Islands',
                'iso3' => 'PCN',
                'number' => 612,
                'continent_code' => 'OC',
            ),
            181 => 
            array (
                'code' => 'PR',
                'name' => 'Puerto Rico',
                'full_name' => 'Commonwealth of Puerto Rico',
                'iso3' => 'PRI',
                'number' => 630,
                'continent_code' => 'NA',
            ),
            182 => 
            array (
                'code' => 'PS',
                'name' => 'Palestine',
                'full_name' => 'State of Palestine',
                'iso3' => 'PSE',
                'number' => 275,
                'continent_code' => 'AS',
            ),
            183 => 
            array (
                'code' => 'PT',
                'name' => 'Portugal',
                'full_name' => 'Portuguese Republic',
                'iso3' => 'PRT',
                'number' => 620,
                'continent_code' => 'EU',
            ),
            184 => 
            array (
                'code' => 'PW',
                'name' => 'Palau',
                'full_name' => 'Republic of Palau',
                'iso3' => 'PLW',
                'number' => 585,
                'continent_code' => 'OC',
            ),
            185 => 
            array (
                'code' => 'PY',
                'name' => 'Paraguay',
                'full_name' => 'Republic of Paraguay',
                'iso3' => 'PRY',
                'number' => 600,
                'continent_code' => 'SA',
            ),
            186 => 
            array (
                'code' => 'QA',
                'name' => 'Qatar',
                'full_name' => 'State of Qatar',
                'iso3' => 'QAT',
                'number' => 634,
                'continent_code' => 'AS',
            ),
            187 => 
            array (
                'code' => 'RE',
                'name' => 'Réunion',
                'full_name' => 'Réunion',
                'iso3' => 'REU',
                'number' => 638,
                'continent_code' => 'AF',
            ),
            188 => 
            array (
                'code' => 'RO',
                'name' => 'Romania',
                'full_name' => 'Romania',
                'iso3' => 'ROU',
                'number' => 642,
                'continent_code' => 'EU',
            ),
            189 => 
            array (
                'code' => 'RS',
                'name' => 'Serbia',
                'full_name' => 'Republic of Serbia',
                'iso3' => 'SRB',
                'number' => 688,
                'continent_code' => 'EU',
            ),
            190 => 
            array (
                'code' => 'RU',
                'name' => 'Russian Federation',
                'full_name' => 'Russian Federation',
                'iso3' => 'RUS',
                'number' => 643,
                'continent_code' => 'EU',
            ),
            191 => 
            array (
                'code' => 'RW',
                'name' => 'Rwanda',
                'full_name' => 'Republic of Rwanda',
                'iso3' => 'RWA',
                'number' => 646,
                'continent_code' => 'AF',
            ),
            192 => 
            array (
                'code' => 'SA',
                'name' => 'Saudi Arabia',
                'full_name' => 'Kingdom of Saudi Arabia',
                'iso3' => 'SAU',
                'number' => 682,
                'continent_code' => 'AS',
            ),
            193 => 
            array (
                'code' => 'SB',
                'name' => 'Solomon Islands',
                'full_name' => 'Solomon Islands',
                'iso3' => 'SLB',
                'number' => 90,
                'continent_code' => 'OC',
            ),
            194 => 
            array (
                'code' => 'SC',
                'name' => 'Seychelles',
                'full_name' => 'Republic of Seychelles',
                'iso3' => 'SYC',
                'number' => 690,
                'continent_code' => 'AF',
            ),
            195 => 
            array (
                'code' => 'SD',
                'name' => 'Sudan',
                'full_name' => 'Republic of Sudan',
                'iso3' => 'SDN',
                'number' => 729,
                'continent_code' => 'AF',
            ),
            196 => 
            array (
                'code' => 'SE',
                'name' => 'Sweden',
                'full_name' => 'Kingdom of Sweden',
                'iso3' => 'SWE',
                'number' => 752,
                'continent_code' => 'EU',
            ),
            197 => 
            array (
                'code' => 'SG',
                'name' => 'Singapore',
                'full_name' => 'Republic of Singapore',
                'iso3' => 'SGP',
                'number' => 702,
                'continent_code' => 'AS',
            ),
            198 => 
            array (
                'code' => 'SH',
                'name' => 'Saint Helena, Ascension and Tristan da Cunha',
                'full_name' => 'Saint Helena, Ascension and Tristan da Cunha',
                'iso3' => 'SHN',
                'number' => 654,
                'continent_code' => 'AF',
            ),
            199 => 
            array (
                'code' => 'SI',
                'name' => 'Slovenia',
                'full_name' => 'Republic of Slovenia',
                'iso3' => 'SVN',
                'number' => 705,
                'continent_code' => 'EU',
            ),
            200 => 
            array (
                'code' => 'SJ',
                'name' => 'Svalbard & Jan Mayen Islands',
                'full_name' => 'Svalbard & Jan Mayen Islands',
                'iso3' => 'SJM',
                'number' => 744,
                'continent_code' => 'EU',
            ),
            201 => 
            array (
                'code' => 'SK',
            'name' => 'Slovakia (Slovak Republic)',
            'full_name' => 'Slovakia (Slovak Republic)',
                'iso3' => 'SVK',
                'number' => 703,
                'continent_code' => 'EU',
            ),
            202 => 
            array (
                'code' => 'SL',
                'name' => 'Sierra Leone',
                'full_name' => 'Republic of Sierra Leone',
                'iso3' => 'SLE',
                'number' => 694,
                'continent_code' => 'AF',
            ),
            203 => 
            array (
                'code' => 'SM',
                'name' => 'San Marino',
                'full_name' => 'Republic of San Marino',
                'iso3' => 'SMR',
                'number' => 674,
                'continent_code' => 'EU',
            ),
            204 => 
            array (
                'code' => 'SN',
                'name' => 'Senegal',
                'full_name' => 'Republic of Senegal',
                'iso3' => 'SEN',
                'number' => 686,
                'continent_code' => 'AF',
            ),
            205 => 
            array (
                'code' => 'SO',
                'name' => 'Somalia',
                'full_name' => 'Federal Republic of Somalia',
                'iso3' => 'SOM',
                'number' => 706,
                'continent_code' => 'AF',
            ),
            206 => 
            array (
                'code' => 'SR',
                'name' => 'Suriname',
                'full_name' => 'Republic of Suriname',
                'iso3' => 'SUR',
                'number' => 740,
                'continent_code' => 'SA',
            ),
            207 => 
            array (
                'code' => 'SS',
                'name' => 'South Sudan',
                'full_name' => 'Republic of South Sudan',
                'iso3' => 'SSD',
                'number' => 728,
                'continent_code' => 'AF',
            ),
            208 => 
            array (
                'code' => 'ST',
                'name' => 'Sao Tome and Principe',
                'full_name' => 'Democratic Republic of Sao Tome and Principe',
                'iso3' => 'STP',
                'number' => 678,
                'continent_code' => 'AF',
            ),
            209 => 
            array (
                'code' => 'SV',
                'name' => 'El Salvador',
                'full_name' => 'Republic of El Salvador',
                'iso3' => 'SLV',
                'number' => 222,
                'continent_code' => 'NA',
            ),
            210 => 
            array (
                'code' => 'SX',
            'name' => 'Sint Maarten (Dutch part)',
            'full_name' => 'Sint Maarten (Dutch part)',
                'iso3' => 'SXM',
                'number' => 534,
                'continent_code' => 'NA',
            ),
            211 => 
            array (
                'code' => 'SY',
                'name' => 'Syrian Arab Republic',
                'full_name' => 'Syrian Arab Republic',
                'iso3' => 'SYR',
                'number' => 760,
                'continent_code' => 'AS',
            ),
            212 => 
            array (
                'code' => 'SZ',
                'name' => 'Eswatini',
                'full_name' => 'Kingdom of Eswatini',
                'iso3' => 'SWZ',
                'number' => 748,
                'continent_code' => 'AF',
            ),
            213 => 
            array (
                'code' => 'TC',
                'name' => 'Turks and Caicos Islands',
                'full_name' => 'Turks and Caicos Islands',
                'iso3' => 'TCA',
                'number' => 796,
                'continent_code' => 'NA',
            ),
            214 => 
            array (
                'code' => 'TD',
                'name' => 'Chad',
                'full_name' => 'Republic of Chad',
                'iso3' => 'TCD',
                'number' => 148,
                'continent_code' => 'AF',
            ),
            215 => 
            array (
                'code' => 'TF',
                'name' => 'French Southern Territories',
                'full_name' => 'French Southern Territories',
                'iso3' => 'ATF',
                'number' => 260,
                'continent_code' => 'AN',
            ),
            216 => 
            array (
                'code' => 'TG',
                'name' => 'Togo',
                'full_name' => 'Togolese Republic',
                'iso3' => 'TGO',
                'number' => 768,
                'continent_code' => 'AF',
            ),
            217 => 
            array (
                'code' => 'TH',
                'name' => 'Thailand',
                'full_name' => 'Kingdom of Thailand',
                'iso3' => 'THA',
                'number' => 764,
                'continent_code' => 'AS',
            ),
            218 => 
            array (
                'code' => 'TJ',
                'name' => 'Tajikistan',
                'full_name' => 'Republic of Tajikistan',
                'iso3' => 'TJK',
                'number' => 762,
                'continent_code' => 'AS',
            ),
            219 => 
            array (
                'code' => 'TK',
                'name' => 'Tokelau',
                'full_name' => 'Tokelau',
                'iso3' => 'TKL',
                'number' => 772,
                'continent_code' => 'OC',
            ),
            220 => 
            array (
                'code' => 'TL',
                'name' => 'Timor-Leste',
                'full_name' => 'Democratic Republic of Timor-Leste',
                'iso3' => 'TLS',
                'number' => 626,
                'continent_code' => 'AS',
            ),
            221 => 
            array (
                'code' => 'TM',
                'name' => 'Turkmenistan',
                'full_name' => 'Turkmenistan',
                'iso3' => 'TKM',
                'number' => 795,
                'continent_code' => 'AS',
            ),
            222 => 
            array (
                'code' => 'TN',
                'name' => 'Tunisia',
                'full_name' => 'Tunisian Republic',
                'iso3' => 'TUN',
                'number' => 788,
                'continent_code' => 'AF',
            ),
            223 => 
            array (
                'code' => 'TO',
                'name' => 'Tonga',
                'full_name' => 'Kingdom of Tonga',
                'iso3' => 'TON',
                'number' => 776,
                'continent_code' => 'OC',
            ),
            224 => 
            array (
                'code' => 'TR',
                'name' => 'Turkey',
                'full_name' => 'Republic of Turkey',
                'iso3' => 'TUR',
                'number' => 792,
                'continent_code' => 'AS',
            ),
            225 => 
            array (
                'code' => 'TT',
                'name' => 'Trinidad and Tobago',
                'full_name' => 'Republic of Trinidad and Tobago',
                'iso3' => 'TTO',
                'number' => 780,
                'continent_code' => 'NA',
            ),
            226 => 
            array (
                'code' => 'TV',
                'name' => 'Tuvalu',
                'full_name' => 'Tuvalu',
                'iso3' => 'TUV',
                'number' => 798,
                'continent_code' => 'OC',
            ),
            227 => 
            array (
                'code' => 'TW',
                'name' => 'Taiwan',
                'full_name' => 'Taiwan, Province of China',
                'iso3' => 'TWN',
                'number' => 158,
                'continent_code' => 'AS',
            ),
            228 => 
            array (
                'code' => 'TZ',
                'name' => 'Tanzania',
                'full_name' => 'United Republic of Tanzania',
                'iso3' => 'TZA',
                'number' => 834,
                'continent_code' => 'AF',
            ),
            229 => 
            array (
                'code' => 'UA',
                'name' => 'Ukraine',
                'full_name' => 'Ukraine',
                'iso3' => 'UKR',
                'number' => 804,
                'continent_code' => 'EU',
            ),
            230 => 
            array (
                'code' => 'UG',
                'name' => 'Uganda',
                'full_name' => 'Republic of Uganda',
                'iso3' => 'UGA',
                'number' => 800,
                'continent_code' => 'AF',
            ),
            231 => 
            array (
                'code' => 'UM',
                'name' => 'United States Minor Outlying Islands',
                'full_name' => 'United States Minor Outlying Islands',
                'iso3' => 'UMI',
                'number' => 581,
                'continent_code' => 'OC',
            ),
            232 => 
            array (
                'code' => 'US',
                'name' => 'United States of America',
                'full_name' => 'United States of America',
                'iso3' => 'USA',
                'number' => 840,
                'continent_code' => 'NA',
            ),
            233 => 
            array (
                'code' => 'UY',
                'name' => 'Uruguay',
                'full_name' => 'Eastern Republic of Uruguay',
                'iso3' => 'URY',
                'number' => 858,
                'continent_code' => 'SA',
            ),
            234 => 
            array (
                'code' => 'UZ',
                'name' => 'Uzbekistan',
                'full_name' => 'Republic of Uzbekistan',
                'iso3' => 'UZB',
                'number' => 860,
                'continent_code' => 'AS',
            ),
            235 => 
            array (
                'code' => 'VA',
            'name' => 'Holy See (Vatican City State)',
            'full_name' => 'Holy See (Vatican City State)',
                'iso3' => 'VAT',
                'number' => 336,
                'continent_code' => 'EU',
            ),
            236 => 
            array (
                'code' => 'VC',
                'name' => 'Saint Vincent and the Grenadines',
                'full_name' => 'Saint Vincent and the Grenadines',
                'iso3' => 'VCT',
                'number' => 670,
                'continent_code' => 'NA',
            ),
            237 => 
            array (
                'code' => 'VE',
                'name' => 'Venezuela',
                'full_name' => 'Bolivarian Republic of Venezuela',
                'iso3' => 'VEN',
                'number' => 862,
                'continent_code' => 'SA',
            ),
            238 => 
            array (
                'code' => 'VG',
                'name' => 'British Virgin Islands',
                'full_name' => 'British Virgin Islands',
                'iso3' => 'VGB',
                'number' => 92,
                'continent_code' => 'NA',
            ),
            239 => 
            array (
                'code' => 'VI',
                'name' => 'United States Virgin Islands',
                'full_name' => 'United States Virgin Islands',
                'iso3' => 'VIR',
                'number' => 850,
                'continent_code' => 'NA',
            ),
            240 => 
            array (
                'code' => 'VN',
                'name' => 'Vietnam',
                'full_name' => 'Socialist Republic of Vietnam',
                'iso3' => 'VNM',
                'number' => 704,
                'continent_code' => 'AS',
            ),
            241 => 
            array (
                'code' => 'VU',
                'name' => 'Vanuatu',
                'full_name' => 'Republic of Vanuatu',
                'iso3' => 'VUT',
                'number' => 548,
                'continent_code' => 'OC',
            ),
            242 => 
            array (
                'code' => 'WF',
                'name' => 'Wallis and Futuna',
                'full_name' => 'Wallis and Futuna',
                'iso3' => 'WLF',
                'number' => 876,
                'continent_code' => 'OC',
            ),
            243 => 
            array (
                'code' => 'WS',
                'name' => 'Samoa',
                'full_name' => 'Independent State of Samoa',
                'iso3' => 'WSM',
                'number' => 882,
                'continent_code' => 'OC',
            ),
            244 => 
            array (
                'code' => 'YE',
                'name' => 'Yemen',
                'full_name' => 'Yemen',
                'iso3' => 'YEM',
                'number' => 887,
                'continent_code' => 'AS',
            ),
            245 => 
            array (
                'code' => 'YT',
                'name' => 'Mayotte',
                'full_name' => 'Mayotte',
                'iso3' => 'MYT',
                'number' => 175,
                'continent_code' => 'AF',
            ),
            246 => 
            array (
                'code' => 'ZA',
                'name' => 'South Africa',
                'full_name' => 'Republic of South Africa',
                'iso3' => 'ZAF',
                'number' => 710,
                'continent_code' => 'AF',
            ),
            247 => 
            array (
                'code' => 'ZM',
                'name' => 'Zambia',
                'full_name' => 'Republic of Zambia',
                'iso3' => 'ZMB',
                'number' => 894,
                'continent_code' => 'AF',
            ),
            248 => 
            array (
                'code' => 'ZW',
                'name' => 'Zimbabwe',
                'full_name' => 'Republic of Zimbabwe',
                'iso3' => 'ZWE',
                'number' => 716,
                'continent_code' => 'AF',
            ),
        ));
        
        
    }
}