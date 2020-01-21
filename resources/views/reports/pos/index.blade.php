@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-white">
                        <h4>Pos Reports</h4>
                        {{--<h4 class="card-title">Leads <a href="{{ route('leads.create') }}" class="btn btn-primary pull-right">Add Lead</a></h4>--}}
                    </div>
                    <div class="card-body">

                        <a href="{{url('export-po/'.$from.'/'.$to.'/'.$status.'/xls')}}" class="btn btn-success pull-right" style="margin-left: 5px"><i
                                    class="fa fa-file-excel-o" aria-hidden="true"></i> Export Excel</a>
                        <a href="{{url('export-po/'.$from.'/'.$to.'/'.$status.'/pdf')}}" class="btn btn-info pull-right"> <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                            Export Pdf</a>

                        <div class="table-responsive">
                            <table class="table table-striped tbl-agency">
                                <thead>
                                <tr>
                                    <th>Order No</th>
                                    <th>Supplier</th>
                                    <th>Created By</th>
                                    <th>Status</th>
                                    <th>PO Date</th>

                                </tr>
                                </thead>
                                <tbody id="customers">
                                @foreach($pos as $po)
                                    <tr>
                                        <td>{{ $po->po_no }}</td>
                                        <td>{{ ucfirst($po->supplier->Name) }}</td>
                                        <td>{{ucfirst($po->user->fname .' '.$po->user->lname) }}</td>
                                        <td>{{ucfirst($po->status)}}</td>
                                        <td>{{ \Carbon\Carbon::parse($po->po_date)->format('d-M-y')}}</td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
  $('.tbl-agency').dataTable();
    </script>
@endsection
