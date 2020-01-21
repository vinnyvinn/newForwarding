<?php

namespace App\Repositories;

use App\Models\RequiredDocs;
use InfyOm\Generator\Common\BaseRepository;

/**
 * Class RequiredDocsRepository
 * @package App\Repositories
 * @version December 13, 2019, 1:34 pm UTC
 *
 * @method RequiredDocs findWithoutFail($id, $columns = ['*'])
 * @method RequiredDocs find($id, $columns = ['*'])
 * @method RequiredDocs first($columns = ['*'])
*/
class RequiredDocsRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name',
        'description'
    ];

    /**
     * Configure the Model
     **/
    public function model()
    {
        return RequiredDocs::class;
    }
}
