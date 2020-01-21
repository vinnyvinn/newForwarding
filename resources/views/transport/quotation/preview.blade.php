@extends('layouts.main')
@section('content')
    <div class="container-fluid">
        <div class="row" >
            <div class="card card-body printableArea" style="padding-left: 50px !important;padding-right: 50px !important;">
                <br>
                <?php $quote = $quotation->quote_id ? $quotation->quote_id : $quotation->id;?>
                <invoice-head-component
                        :logo="{{json_encode(asset('images/logo.png')) }}"
                        :type="{{json_encode(isset($quotation) ? $quotation->status != \Esl\helpers\Constants::LEAD_QUOTATION_ACCEPTED ?'Quotation' : 'Proforma Invoice' : '')}}"
                        :number="{{json_encode('#QU00'.$quote.'/'.\Carbon\Carbon::parse($quotation->created_at)->format('y'))}}"
                        :quotation="{{json_encode($quotation)}}"
                        :date="{{json_encode(\Carbon\Carbon::parse($quotation->created_at)->format('d-M-y'))}}"
                ></invoice-head-component>

                <preview-quotation-service-component
                        :currency="{{json_encode($currency)}}"
                        :quoteid="{{$quotation->id }}"
                        :dclink="{{$quotation->customer->DCLink}}"
                        :savedquotationservices="{{json_encode($quotation->services)}}"
                ></preview-quotation-service-component>

                <div>
                    <address id="client_details text-left">
                        <table class="">
                            <tr>
                                <td><h5>Prepared by </h5></td>
                                <td><h5>&nbsp;&nbsp;:&nbsp;&nbsp;</h5></td>
                                <td><h5 style="margin-top: 4px">{{ ucwords($quotation->user->name)  }}</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Checked by </h5></td>
                                <td><h5>&nbsp;&nbsp;:&nbsp;&nbsp;</h5></td>
                                <td> <h5 style="margin-top: 4px">{{ $quotation->checkedBy == null ? '................................................................................................................................' : ucwords($quotation->checkedBy->name )}}</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Approved by </h5></td>
                                <td><h5>&nbsp;&nbsp;:&nbsp;&nbsp;</h5></td>
                                <td><h5 style="margin-top: 4px">{{ $quotation->approvedBy == null ? '................................................................................................................................'
                                : ucwords($quotation->approvedBy->name) }}</h5></td>
                            </tr>
                            <tr>
                                <td><h5>Date </h5></td>
                                <td><h5>&nbsp;&nbsp;:&nbsp;&nbsp;</h5></td>
                                <td><h5 style="margin-top: 4px">{{ \Carbon\Carbon::now()->format('d-M-Y') }}</h5></td>
                            </tr>
                        </table>
                    </address>
                </div>
                <hr/>
                <div class="row">

                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="text-left"></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <company-bank-account-details
                                        :currency="{{json_encode($currency)}}"
                                >
                                </company-bank-account-details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-body mt-0"  style="padding-left: 50px !important;padding-right: 50px !important;">
                <div class="row">
                    <div class="col-sm-12">
                        <h4>Required Documents</h4>
                        <hr/>
                    </div>
                    <div class="col-sm-12">
                        <show-required-quotation-documents
                                :requireddocs="{{ empty($quotation->doc_ids)?json_encode([]):$quotation->doc_ids }}"
                        ></show-required-quotation-documents>

                        @if($quotation->status != \Esl\helpers\Constants::LEAD_QUOTATION_ACCEPTED )
                            <form class="pda_remarks_form" action="" method="post">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label for="remarks">Comment</label>
                                    <textarea name="remarks" id="remarks" cols="30" rows="3"
                                              class="form-control"></textarea>
                                </div>
                                <input type="hidden" name="quotation_id" id="quotation_id"
                                       value="{{ $quotation->id }}">
                            </form>
                        @endif
                    </div>

                    <div class="col-sm-12 pull-right">
                        @if($quotation->status != \Esl\helpers\Constants::LEAD_QUOTATION_ACCEPTED)
                            <button id="accept" class="btn btn btn-primary">Accepted</button>
                            <button onclick="declined()" class="btn btn-danger"> Declined</button>
                        @endif
                        <button id="print" class="btn btn-success pull-right" type="button"><span><i
                                        class="fa fa-print"></i> Print / Download</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        var form = $('.pda_remarks_form');

        // function accept() {
        //
        //     var formData = $('#pda_remarks_form').serializeArray().reduce(function (obj, item){
        //         obj[item.name] = item.value;
        //         return obj;
        //     }, {});
        //
        //     submitData(formData,'/quotation/customer/accepted')
        // }

        $('#accept').on('click', function () {

            $.ajax({
                url: '{{url('/quotation/customer/accepted')}}',
                type: 'POST',
                data: form.serialize(),
                success: function (response) {
                    window.location.reload();
                }
            })
        });

        function declined() {
            var formData = form.serializeArray().reduce(function (obj, item) {
                obj[item.name] = item.value;
                return obj;
            }, {});

            submitData(formData, '/quotation/customer/declined')
        }

        function submitData(data, formUrl) {
            cssLoader();
            axios.post('{{ url('/') }}' + formUrl, data)
                .then(function (response) {

                    stopLoader();
                    window.location.reload();
                })
                .catch(function (response) {
                    console.log(response.data);
                });
        }
    </script>
@endsection
