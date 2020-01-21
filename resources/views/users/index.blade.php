@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Cargo Types <a href="{{ route('good-types.create') }}"
                                                              class="btn btn-primary pull-right">Add Cargo Type</a></h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Unit Of Measure</th>
                                    <th>Created</th>
                                    <th class="text-nowrap">Action</th>
                                </tr>
                                </thead>
                                <tbody id="customers">
                                @foreach($goodtypes as $goodtype)
                                    <tr>
                                        <td>{{ ucwords($goodtype->name) }}</td>
                                        <td>{{ ucfirst($goodtype->description) }}</td>
                                        <td>{{ $goodtype->uom }}</td>
                                        <td>{{ \Carbon\Carbon::parse($goodtype->created_at)->format('d-M-y') }}</td>
                                        <td class="text-nowrap">
                                            <form action="{{ route('good-types.destroy', $goodtype->id) }}"
                                                  method="post">
                                                <a href=" {{ route('good-types.edit', $goodtype->id) }}"
                                                   class="btn btn-sm btn-warning"><i class="fa fa-pencil"></i></a>
                                                {{ csrf_field() }}
                                                {{ method_field('DELETE') }}
                                                <button type="submit" class="btn btn-sm btn-danger"><i
                                                            class="fa fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            <div class="footable pagination">
                                {{ $goodtypes->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection