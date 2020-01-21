@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Departments <a href="{{ route('departments.create') }}"
                                                              class="btn btn-primary pull-right">Add Department</a></h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Created</th>
                                    <th class="text-right">Action</th>
                                </tr>
                                </thead>
                                <tbody id="customers">
                                @foreach($departments as $department)
                                    <tr>
                                        <td>{{ ucwords($department->name) }}</td>
                                        <td>{{ ucfirst($department->description) }}</td>
                                        <td>{{ \Carbon\Carbon::parse($department->created_at)->format('d-M-y') }}</td>
                                        <td class="text-right">
                                            <form action="{{ route('departments.destroy', $department->id) }}"
                                                  method="post">
                                                <a href=" {{ route('departments.edit', $department->id) }}"
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
                                {{ $departments->links() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection