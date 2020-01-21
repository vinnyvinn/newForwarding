<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Nicolaslopezj\Searchable\SearchableTrait;

/**
 * @property int $id
 * @property int $DCLink
 * @property string $Account
 * @property string $Name
 * @property string $Title
 * @property string $Contact_Person
 * @property string $Physical1
 * @property string $Physical2
 * @property string $Physical3
 * @property string $Physical4
 * @property string $Physical5
 * @property string $PhysicalPC
 * @property string $Addressee
 * @property string $Post1
 * @property string $Post2
 * @property string $Telephone
 * @property string $Telephone2
 * @property string $Fax2
 * @property string $AccountTerms
 * @property string $CT
 * @property string $Tax_Number
 * @property string $Registration
 * @property int $Credit_Limit
 * @property int $RepID
 * @property float $Interest_Rate
 * @property float $Discount
 * @property string $EMail
 */
class Client extends Model
{
    use SoftDeletes,SearchableTrait;
    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['DCLink', 'Account', 'Name', 'Title', 'Contact_Person', 'Physical1', 'Physical2', 'Physical3', 'Physical4', 'Physical5', 'PhysicalPC', 'Addressee', 'Post1', 'Post2', 'Telephone', 'Telephone2', 'Fax2', 'AccountTerms', 'CT', 'Tax_Number', 'Registration', 'Credit_Limit', 'RepID', 'Interest_Rate', 'Discount', 'EMail'];

    protected $searchable = [
        'columns' => [
            'Name' => 10,
            'Contact_Person' => 10,
            'Telephone' => 10,
        ]
    ];
}
