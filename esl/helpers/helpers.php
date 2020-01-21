<?php

use Carbon\Carbon;

if (!function_exists('formatToDate')) {

    function formatToDate($date)
    {
        if (!$date) {
            return "";
        }

        $date = Carbon::parse($date);

        return $date->format('d-M-Y');
    }

}


if (!function_exists('formatDateToYear')) {

    function formatDateToYear($date)
    {
        if (!$date) {
            return "";
        }

        return Carbon::parse($date)->format('y');
    }
}