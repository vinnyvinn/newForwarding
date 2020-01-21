@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        {{--        <approval-tabs></approval-tabs>--}}
        <jobs-workflow-tabs-component></jobs-workflow-tabs-component>
        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
@endsection
