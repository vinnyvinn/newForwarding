@extends('layouts.main')
@section('content')
    <div class="container-fluid">

        <stage-check-list-component
                :stageid="{{$stage->id}}"
                :stagename="{{json_encode($stage->name)}}"
        ></stage-check-list-component>
    </div>
@endsection

