@extends('layouts.job')
@section('content')
    <div class="container-fluid">

        <div class="row">
            <div class="card card-body printableArea" style="min-height: 80vh">
                <h3 class=" mb-0">
                    <a href="/dsr#/jobs/active" class="btn btn-primary mr-5">
                        <i class="fa fa-arrow-left"></i> Back
                    </a>
                    Job #{{$dms->id}} - <b>{{ ucwords( $dms->customer ? $dms->customer->Name :'')  }}</b> : {{$dms->created_at}} ( {{formatToDateTime($dms->created_at)}})</h3>
                <br>
                <job-processing-tabs-component
                        :jobid="{{$dms->id}}"
                ></job-processing-tabs-component>
                <transition>
                    <keep-alive>
                        <router-view ></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
@endsection

