@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <approval-tabs-component></approval-tabs-component>

        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
@endsection
