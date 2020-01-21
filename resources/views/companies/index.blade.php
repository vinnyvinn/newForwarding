@extends('layouts.main')

@section('content')
    <div class="container-fluid">
        <settings-tabs></settings-tabs>

        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
@endsection

