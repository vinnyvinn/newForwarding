@extends('layouts.job')
@section('content')
    <div class="container-fluid">

        <div class="row">
            <div class="card card-body printableArea" style="min-height: 80vh">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-primary">
                            <a href="javascript:history.back()" class="btn btn-primary mr-5">
                                <i class="fa fa-arrow-left"></i> Back
                            </a>
                            <div class="panel-heading">
                                <h4 class="text-center">DSR</h4>
                                <hr/>
                            </div>
                            <div class="panel-body">
                                <div class="table-responsive">
                                    <table class="table table-stripped table-bordered">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ESL REF</th>
                                            <th>Client REF</th>
                                            <th>Shipper</th>
                                            <th>Shipper Line</th>
                                            <th>BL NO</th>
                                            <th>Description</th>
                                            <th>Qty</th>
                                            <th>ETA</th>
                                            <th>Original Docs Rcvd</th>
                                            <th>DATE ENTRY LODGED</th>
                                            <th>DUTY PAYMENTS MADE ON</th>
                                            <th>DATE ENTRY PASSED</th>
                                            <th>DATE CNTR TRANSFERRED TO CFS</th>
                                            <th>VERIFICATION DATE</th>
                                            <th>RELEASED DATE</th>
                                            <th>CFS</th>
                                            <th>REMARKS</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($dsrs as $dsr)
                                            <tr>
                                                <td>{{ $loop->iteration }}</td>
                                                <td>{{ strtoupper($dsr->file_number) }}</td>
                                                <td>{{ strtoupper($dsr->ctm_ref ) }}</td>
                                                <td>{{ ucwords($dsr->shipper) }}</td>
                                                <td>{{ ucwords($dsr->shipping_line) }}</td>
                                                <td>{{ strtoupper($dsr->bl_number) }}</td>
                                                <td>{{ ucfirst($dsr->desc) }}</td>
                                                <td>{{ $dsr->quote->cargo->cargo_qty }}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
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
        </div>
    </div>
@endsection
