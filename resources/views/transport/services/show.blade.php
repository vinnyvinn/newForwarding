@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{ ucwords($lead->name) }}</h4>
                        <table class="table table-borded">
                            <tr>
                                <td><strong>Name : </strong> {{ ucwords($lead->name) }}</td>
                                <td><strong>Contact Person : </strong> {{ ucwords($lead->contact_person) }}</td>
                            </tr>
                            <tr>
                                <td><strong>Address : </strong> {{ ucwords($lead->address) }}</td>
                                <td><strong>Phone : </strong> {{ $lead->phone }}</td>
                            </tr>
                            <tr>
                                <td><strong>Telephone : </strong> {{ $lead->telephone }}</td>
                                <td><strong>Location : </strong> {{ $lead->location }}</td>
                            </tr>
                        </table>

                        <div class="col-sm-8">
                            <a href="{{ url('/customer-request/'.$lead->id.'/'.\Esl\helpers\Constants::LEAD_CUSTOMER) }}"
                               class="btn btn-primary">Accept Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

