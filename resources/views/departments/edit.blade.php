@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Edit Good Type</h4>
                        <form class="form-material m-t-40" action="{{ route('good-types.update', $goodtype->id) }}"
                              method="post">
                            {{ csrf_field() }}
                            {{ method_field('PUT') }}
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="name">Name <span
                                                    class="help">(Customer or Company Name)</span></label>
                                        <input type="text" required id="name" value="{{ $goodtype->name }}" name="name"
                                               class="form-control" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <input type="text" required id="description"
                                               value="{{ $goodtype->description }}" name="description"
                                               class="form-control" placeholder="Description">
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="uom">Unit of Measure </label>
                                        <input type="text" required id="uom" name="uom" value="{{ $goodtype->uom }}"
                                               class="form-control" placeholder="Unit of Measure">
                                    </div>
                                    <div class="form-group">
                                        <br>
                                        <input class="btn btn-block btn-primary" type="submit" value="Save">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

