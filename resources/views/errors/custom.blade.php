@extends('layouts.main')
@section('content')
    <p>You licence is expired</p> {{$exception->getMessage()}}
@endsection