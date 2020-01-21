@extends('layouts.main')
@section('content')
    <div class="container-fluid" >
        <jobs-tabs-component></jobs-tabs-component>

        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
@endsection
