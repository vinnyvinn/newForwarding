@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Add Required Docs</h4>
                        <form class="form-material m-t-40" action="{{ route('required-docs.store') }}" method="post">
                            {{ csrf_field() }}
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="name">Document Name</label>
                                        <input type="text" required id="name" name="name" class="form-control" placeholder="Document Name">
                                    </div>
                                </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="description">Description</label>
                                            <input type="text" required id="description" name="description" class="form-control" placeholder="Description">
                                        </div>
                                    </div>
                                </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input class="btn pull-right btn-primary" type="submit" value="Save">
                                </div>
                            </div>
                            {{--</div>--}}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

