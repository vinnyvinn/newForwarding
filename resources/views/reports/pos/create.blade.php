@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <pos-report-component></pos-report-component>
    </div>
@endsection

@section('scripts')
    <script>
        $('.date_range').datepicker();

    </script>
@endsection


