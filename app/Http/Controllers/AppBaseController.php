<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use InfyOm\Generator\Utils\ResponseUtil;

/**
 * @SWG\Swagger(
 *   basePath="/api/v1",
 *   @SWG\Info(
 *     title="Laravel Generator APIs",
 *     version="1.0.0",
 *   )
 * )
 * This class should be parent class for other API controllers
 * Class AppBaseController
 */
class AppBaseController extends Controller
{
    public function sendResponse($result, $message)
    {
        return response()->json(ResponseUtil::makeResponse($message, $result));
    }

    public function sendError($error, $code = 404)
    {
        return response()->json(ResponseUtil::makeError($error), $code);
    }
}
