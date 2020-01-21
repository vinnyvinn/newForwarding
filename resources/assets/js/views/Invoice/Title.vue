<template>
    <div class=" pr-2 pl-2 pb-0 mb-0">
        <div class="row">
            <div class="col-md-12">
            <div class="pull-left text-left">
                <company-address></company-address>
            </div>
            <div class="pull-right text-left">
                <address id="clients_address">
                    <table>
                        <tr>
                            <td class="pull-right"></td>
                            <td></td>
                            <td>
                                <div class="form-group mb-0 mt-4 w-100">
                                    <h5 class="mt-2 pull-right">
                                        <b>{{ type}}</b>
                                        <hr/>
                                    </h5>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="pull-right"></td>
                            <td></td>
                            <td><h5>{{number}}</h5></td>
                        </tr>
                        <tr>
                            <td class="pull-right"><h5>Tax Registration</h5></td>
                            <td><h5>&nbsp;:&nbsp; </h5></td>
                            <td><h5>{{companyInfo.company_vat}}</h5></td>
                        </tr>
                        <tr>
                            <td class="pull-right"><h5>Telephone </h5></td>
                            <td><h5>&nbsp;:&nbsp;</h5></td>
                            <td><h5>{{companyInfo.company_mobile}}</h5></td>
                        </tr>
                    </table>
                </address>
            </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <hr>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="pull-left">
                    <address>
                        <h5><b>To</b></h5>
                        <h5>Name &nbsp;:&nbsp; {{quotation.customer.Name}} </h5>
                        <h5>Contact Person &nbsp;:&nbsp; {{quotation.customer.Contact_Person}} </h5>
                        <h5>Phone &nbsp;:&nbsp; {{quotation.customer.Telephone}}</h5>
                        <h5>Email &nbsp;:&nbsp; {{quotation.customer.EMail}}</h5>
                        <br>
                        <p><b>Date &nbsp;:&nbsp; </b> {{ date }}</p>
                    </address>
                </div>
                <div class="pull-right text-left">
                    <table>
                        <tr>
                            <td class="pull-right">
                                <h5>B/L NO</h5>
                            </td>
                            <td><h5> &nbsp;:&nbsp; </h5></td>
                            <td>
                                <h5>{{ quotation.cargo.bl_no }}</h5>
                            </td>
                        </tr>
                        <tr>
                            <td class="pull-right"><h5>Cargo </h5></td>
                            <td><h5> &nbsp;:&nbsp; </h5></td>
                            <td><h5>{{ quotation.cargo.cargo_name }}</h5></td>
                        </tr>
                        <tr>
                            <td class="pull-right text-black">Vessel/DSTN</td>
                            <td><h5> &nbsp;:&nbsp; </h5></td>
                            <td><h5 class="text-grey">{{ quotation.cargo.vessel_name }}</h5></td>
                        </tr>
                        <tr>
                            <td class="pull-right">Quantity</td>
                            <td><h5> &nbsp;:&nbsp; </h5></td>
                            <td><h5>{{ quotation.cargo.cargo_qty }}</h5></td>
                        </tr>
                        <tr>
                            <td class="pull-right">Weight</td>
                            <td><h5> &nbsp;:&nbsp; </h5></td>
                            <td><h5>{{ quotation.cargo.cargo_weight }}</h5></td>
                        </tr>
                        <tr>
                            <td class="pull-right">Date</td>
                            <td><h5> &nbsp;:&nbsp; </h5></td>
                            <td><h5>{{ date }}</h5></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <!-- <edit-clients-details-component
                 :quotationInfo="quotation"
         ></edit-clients-details-component>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: {
            logo: {
                required: false
            },
            type: {
                required: false
            },
            number: {
                required: false
            },
            quotation: {
                required: false
            },
            date: {
                required: false
            }
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                companyInfo: 'companyInfo'
            })
        },
        created() {
        }
    }
</script>