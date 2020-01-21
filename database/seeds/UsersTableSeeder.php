<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('users')->delete();
        
        \DB::table('users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'superuser',
                'department_id' => 1,
                'email' => 'admin@esl.com',
                'password' => '$2y$10$KU2uThD7.sb7mCIKXkTY.ez.Bq5wHPekdTjr.N84M/TzKbfc4XnBe',
                'remember_token' => 'vGs10gTq0QumuxKgi2ErlsZvvtndR2zzabpjbImLm6gxJ3h8PJqEwuHW8cF1',
                'created_at' => '2018-09-27 10:17:35',
                'updated_at' => '2019-04-12 10:56:04',
                'title' => 'Staff',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Washington Mwamburi',
                'department_id' => 1,
                'email' => 'washington.mwamburi@freightwell.com',
                'password' => '$2y$10$wgvDkgTaVzXmzVs.PMmNwunoCgn0C2SyRHQU6/dcc.LpJAF6M/Twa',
                'remember_token' => 'vrYDzB9SIp3eOBg5g6M8JOnLEQM6YgiVOOUbRxdixPZHK8oH1O3JFQtEuKWL',
                'created_at' => '2018-04-23 11:45:37',
                'updated_at' => '2019-02-12 14:17:23',
                'title' => 'HOD',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Grace Mpoya',
                'department_id' => 2,
                'email' => 'grace.mpoya@esl-eastafrica.com',
                'password' => '$2y$10$Al4dBAnLLmXp.halAGG72O.4MQkKBiJNPXYism3bDY8IUr/iYhriO',
                'remember_token' => 'ephEcdUlcA8asfP5m7ySa3iEa2ocxI3YBg52j3dZwvxGDSS6cr6bEkBb6Add',
                'created_at' => '2018-05-02 08:04:05',
                'updated_at' => '2018-09-14 12:54:41',
                'title' => 'Customer Service Executive',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Joseph Matheka',
                'department_id' => 5,
                'email' => 'joseph.matheka@freightwell.com',
                'password' => '$2y$10$7grY8tX53yllocXNpF3yMuG43YboYWhP5oUj5Wb6YC2JohswoxKTK',
                'remember_token' => 'yfWFEZCBtZr4TVM5WChMENSOrHX5XrnpdnxRaJxUAW5CfIA4aU2TzgzQuVKy',
                'created_at' => '2018-05-02 14:47:12',
                'updated_at' => '2019-10-28 07:03:42',
                'title' => 'RF SURVEY',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Salim Sulubu',
                'department_id' => 1,
                'email' => 'salim.sulubu@esl-eastafrica.com',
                'password' => '$2y$10$dOuZ4e4rqs90f4egpZ7Eue3VCgXPbZtqcGfYknUAXnu1/6Rjx8cyW',
                'remember_token' => NULL,
                'created_at' => '2018-05-02 14:48:33',
                'updated_at' => '2018-09-14 12:28:58',
                'title' => 'Declaration Officer',
            ),
            5 => 
            array (
                'id' => 7,
                'name' => 'Maurine Atieno Opiyo',
                'department_id' => 1,
                'email' => 'maurine.atieno@esl-eastafrica.com',
                'password' => '$2y$10$2tAxloO02.836.EKX.PxCu5yWQibF46mWet9dKHK4JpqRaOEqzN2O',
                'remember_token' => 'VMh5fLhyn5OmCBByiDgeizuC05HIQwguQ6AgXRLZvVYN2eD5SRabgxjHahR3',
                'created_at' => '2018-06-19 17:32:50',
                'updated_at' => '2019-04-12 11:18:39',
                'title' => 'MR',
            ),
            6 => 
            array (
                'id' => 8,
                'name' => 'Evans Ngala',
                'department_id' => 1,
                'email' => 'evans.ngala@esl-eastafrica.com',
                'password' => '$2y$10$WPASZ1XPNOZnN9hBcO4jWu5Gj3fid/g.cNqLacIWu7Oa70vLtHKHG',
                'remember_token' => 'oriZpuqa4nbGWw5LP7FzHlEMUkdFxFeNQjjuc065AUsrBfRehKETVBb6t9af',
                'created_at' => '2018-06-23 02:51:59',
                'updated_at' => '2018-10-03 08:06:58',
                'title' => 'IT Manager',
            ),
            7 => 
            array (
                'id' => 9,
                'name' => 'marvin',
                'department_id' => 1,
                'email' => 'marvin@gmail.com',
                'password' => '$2y$10$6Ylu/QG6LTGMmlFqVZ7hRO4QLS1GqB6B04JaS8NAWgHymFpeEtS3q',
                'remember_token' => 'MNAcuq2f9T1FKHum36mLKWnpKhtKICYdY0U6rlmRdFUDszTjFzM0rlEQLt8W',
                'created_at' => '2018-07-24 07:36:05',
                'updated_at' => '2018-07-24 07:36:05',
                'title' => 'Staff',
            ),
            8 => 
            array (
                'id' => 10,
                'name' => 'Laura Mwamkita',
                'department_id' => 1,
                'email' => 'imports@freightwell.com',
                'password' => '$2y$10$GEQ4GTdqheGCLQelMgjgHuWUrDitetLUWHBGji4XSJq6zkkehFWna',
                'remember_token' => '2Nsl4yoPGhzQO8c5vD39OxHiqwhFizbxOocPwMgAdka2zhcjpfkP6uMFzFjt',
                'created_at' => '2018-09-14 12:33:33',
                'updated_at' => '2018-09-14 13:13:51',
                'title' => 'Declaration oficer',
            ),
            9 => 
            array (
                'id' => 11,
                'name' => 'Jackline Waweru',
                'department_id' => 1,
                'email' => 'intern@freightwell.com',
                'password' => '$2y$10$RFIKhw5Wxtv3IxUBSeIWZem.L4ElA1imZLDEvKgnG259CNM2gyETS',
                'remember_token' => 'WGvAaEIw1WirVD0nqIGm08TpMNI5jfUEJqVnX7z7fslz3kqTUoHFaL8pNnq2',
                'created_at' => '2018-09-14 12:35:39',
                'updated_at' => '2018-09-14 12:35:39',
                'title' => 'Operations Intern',
            ),
            10 => 
            array (
                'id' => 12,
                'name' => 'Lawrence Amenya',
                'department_id' => 1,
                'email' => 'operations@esl-eastafrica.com',
                'password' => '$2y$10$N2GEG05EwmomJQIRwLBJju.Lb7XGFa/ShB.7c5F6oeRBBzMeMwuxK',
                'remember_token' => NULL,
                'created_at' => '2018-09-14 14:05:41',
                'updated_at' => '2018-09-14 14:05:41',
                'title' => 'Forwarding Officer',
            ),
            11 => 
            array (
                'id' => 13,
                'name' => 'Marvin Collins',
                'department_id' => 1,
                'email' => 'test@esl.com',
                'password' => '$2y$10$qGODpspTsxZ35Ha8fZizM.hp/P1y0ecCfHCFfHy.PFV/T.lMyvV0S',
                'remember_token' => NULL,
                'created_at' => '2018-10-03 08:04:47',
                'updated_at' => '2018-10-03 08:04:47',
                'title' => 'Staff',
            ),
            12 => 
            array (
                'id' => 14,
                'name' => 'Martin Karani',
                'department_id' => 1,
                'email' => 'martin.karani@esl-eastafrica.com',
                'password' => '$2y$10$i9pZWmVHAb6R/tsi3mkZce/.p5vH5JHQQd7/adpZErkA7Z5EvCuIm',
                'remember_token' => NULL,
                'created_at' => '2018-10-11 07:21:04',
                'updated_at' => '2018-10-11 07:21:04',
                'title' => 'GCFO',
            ),
            13 => 
            array (
                'id' => 15,
                'name' => 'John Lagat',
                'department_id' => 1,
                'email' => 'john.lagat@esl-eastafrica.com',
                'password' => '$2y$10$i8Z1RGyHHEWNx60Dugg3Tu1MvVwsHY5UdPdf.5nvoEVaId3yvIvwW',
                'remember_token' => 'Zb5YtVLHCmP3tar8aVZ8PfAuso7c29LHMsg2jqQzWQKpxGMjhTKsLJ1ydSVj',
                'created_at' => '2018-10-11 07:25:29',
                'updated_at' => '2018-10-18 07:56:54',
                'title' => 'ICT',
            ),
            14 => 
            array (
                'id' => 16,
                'name' => 'Catherine Thuo',
                'department_id' => 1,
                'email' => 'catherine.thuo@freightwell.com',
                'password' => '$2y$10$znu4Cp8imsNCd.pDUHDQjOaDVhtX2TECFO4IwBC85Vd0kBi/THvzW',
                'remember_token' => '0qi0ep8aX6rInyfQQyZ68SRLZqGs5bO61WXbax5jsO6ciRtMKMmg2WaCshpy',
                'created_at' => '2018-11-02 11:08:22',
                'updated_at' => '2019-02-01 06:08:02',
                'title' => 'Customer Service Executive',
            ),
            15 => 
            array (
                'id' => 17,
                'name' => 'Christine Gema',
                'department_id' => 1,
                'email' => 'christine.gema@esl-eastafrica.com',
                'password' => '$2y$10$BaRJqQ8IXDPZdSvHN7eWUeyCbZZSL2gGS33Ltteez1MccqKq3QdeK',
                'remember_token' => NULL,
                'created_at' => '2018-11-02 11:09:47',
                'updated_at' => '2018-11-02 11:09:47',
                'title' => 'Operations Supervisor',
            ),
            16 => 
            array (
                'id' => 18,
                'name' => 'Joseph Kirimo',
                'department_id' => 1,
                'email' => 'joseph.kirimo@esl-eastafrica.com',
                'password' => '$2y$10$cSyOp40TppiW4Ae/H2iovue7jqqAeaguHaTgggphZVayXD0iHgSBO',
                'remember_token' => '8mttn63xPlesVqjszGiQWkPn0GlBAfyBIdbBA5i2oNfLPpwBrSZiYAWmTxRB',
                'created_at' => '2018-11-06 11:41:53',
                'updated_at' => '2018-11-06 11:41:53',
                'title' => 'Operations Intern',
            ),
            17 => 
            array (
                'id' => 19,
                'name' => 'Erick Osinya',
                'department_id' => 1,
                'email' => 'erick.osinya@esl-eastafrica.com',
                'password' => '$2y$10$L26pwvh9kEKcFffmVk6sX.qKO1sumWipTJdBBjpUsSu8omQxBeK.2',
                'remember_token' => NULL,
                'created_at' => '2018-11-07 10:14:06',
                'updated_at' => '2018-11-07 10:14:06',
                'title' => 'Transport Officer',
            ),
            18 => 
            array (
                'id' => 20,
                'name' => 'Jesinta Njeri',
                'department_id' => 1,
                'email' => 'jesinta.njeri@esl-eastafrica.com',
                'password' => '$2y$10$oILKuHDLpwgpYSmNR5pkMemhZU3Ql7eyc4q136NhU7V66enCxDUSq',
                'remember_token' => '7PF4VwIc8479lEfnSt7ZrZIqGnNAq4Mt2ky7z76t0J3cJfGdkR1Q32fPGJ7x',
                'created_at' => '2018-11-07 10:34:08',
                'updated_at' => '2018-11-07 10:34:08',
                'title' => 'Customer Service Executive',
            ),
            19 => 
            array (
                'id' => 21,
                'name' => 'Rachael Munyao',
                'department_id' => 1,
                'email' => 'rachael.syomiti@freightwell.com',
                'password' => '$2y$10$tx.GRmkyP3xbS9TGxThI3u/OCjTLc3jDVk9.2KUqYYF3EQhs7N/Vq',
                'remember_token' => NULL,
                'created_at' => '2019-01-24 13:58:47',
                'updated_at' => '2019-01-24 13:58:47',
                'title' => 'Forwarding Officer',
            ),
            20 => 
            array (
                'id' => 22,
                'name' => 'Zack',
                'department_id' => 1,
                'email' => 'z.mugo@wizag.biz',
                'password' => '$2y$10$Db8cVCFr5QGv.z4m5c4grOhJozP4QoctXp.tzaojAIt6LcFIjPII2',
                'remember_token' => 'dkDcUGljVCFZM4fxWYeb6A6fS4cQNruKTwc1RIfSPiZJFv3FZlL8FuZIpydS',
                'created_at' => '2019-07-25 14:55:41',
                'updated_at' => '2019-07-25 14:55:41',
                'title' => 'Admin',
            ),
        ));
        
        
    }
}