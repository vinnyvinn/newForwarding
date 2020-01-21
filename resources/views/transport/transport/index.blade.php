@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <my-approval-component></my-approval-component>
            </div>
            <approval-notification-component></approval-notification-component>
        </div>
    </div>
@endsection
