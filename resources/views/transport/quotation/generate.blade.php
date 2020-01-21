@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <generate-quotation-component
                    :quotationtype="{{json_encode($type)}}"
                    :services="{{json_encode($services)}}"
                    :taxes="{{ json_encode($taxs)}}"
                    :logo="{{json_encode(asset('images/logo.png'))}}"
                    :date="{{json_encode(Carbon\Carbon::now()->format('d-M-y'))}}"
                    :rate="{!! json_encode($exrate) !!}"

            >
            </generate-quotation-component>
        </div>
    </div>
@endsection
@section('scripts')

@endsection