@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Add Stage</h4>
                        <hr/>
                        <form class="form-material m-t-0" action="{{ route('stages.store') }}" method="post">
                            {{ csrf_field() }}
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" required id="name" name="name" class="form-control"
                                               placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="type">Transport Type</label>
                                        <select name="type" required id="type" class="form-control">
                                            <option value="">Select Transport Type</option>
                                            <option value="{{ \Esl\helpers\Constants::TRANSPORT_TYPE_IMPORT }}">Import
                                            </option>
                                            <option value="{{ \Esl\helpers\Constants::TRANSPORT_TYPE_EXPORT }}">Export
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <input type="text" required id="description" name="description"
                                               class="form-control" placeholder="Description">
                                    </div>
                                    <div class="form-group">
                                        <br>
                                        <input class="btn pull-right btn-primary" type="submit" value="Save">
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

