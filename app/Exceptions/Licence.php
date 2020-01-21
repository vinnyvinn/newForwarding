<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;

class Licence extends Exception
{
    /**
     * Report the exception.
     *
     * @return void
     */
    public function report()
    {
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param $request
     * @return Response
     */
    public function render($request)
    {
        return response()->view(
            'errors.custom',
            array(
                'exception' => $this
            )
        );
    }
}
