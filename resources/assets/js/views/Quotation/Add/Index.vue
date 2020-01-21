<template>
    <div class="card card-body printableArea">
        <div class="ribbon ribbon-bookmark ribbon-right ribbon-primary">New</div>
        <h3 class="text-center mb-0">{{quotationtype | capitalizeFirst}} Quotation </h3>
        <hr/>
        <div class="row" style="padding-left: 30px !important;padding-right: 30px !important;">
            <!-- company address bar-->
            <div class="col-md-7">
                <company-address></company-address>
            </div>
            <!--customer currency-->
            <div class="col-md-5">
                <div v-if="!customerDetailsSet">
                    <div class="form-group mb-2">
                        <h5><b>{{(quotationtype ==='import'?'Consignee':(quotationtype
                            ==='export'?'Consignor':'Customer'))}} Details</b></h5>
                        <hr/>
                        <p class="inputcurrency mb-1">Choose Currency <span class="text-danger">*</span></p>
                        <v-select
                                :options="['KES','USD']"
                                v-model="inputCur"
                                :required="!inputCur"
                                class="mb-0"
                        ></v-select>
                    </div>

                    <!-- search for customer-->
                    <div class="form-group mb-2">
                        <label>Add Customer <span class="text-danger">*</span></label>
                        <search-customer-component
                                ref="customer"
                                @selected-customer="selectedCustomer"
                                :inputCurrency="inputCur"
                                :selectedCustomer="customerDetails"
                                class="mb-0"
                        ></search-customer-component>
                    </div>

                    <address id="client_details" class="mb0">
                        <p><b>Date : {{date}}</b></p>
                    </address>
                </div>

                <!-- display customer  details      -->
                <customer-contact-details-component
                        v-if="customerDetailsSet"
                        :customerDetails="selectedCustomerDetails"
                        :quotationType="quotationtype"
                >

                </customer-contact-details-component>
            </div>

            <!-- cargo details   -->
            <cargo-details-form-component
                    :quotationType="quotationtype"
            ></cargo-details-form-component>
            <hr/>

            <!-- customer details -->
            <div class="col-md-12">
                <add-service-component
                        :currency="inputCur"
                        :services="services"
                        :taxes="taxes"
                        :rate="rate"
                ></add-service-component>
            </div>
        </div>
        <div class="pull-right">
            <div class="form-group  pull-right mb-2 mt-2 mt-4 p3">
                <button class="btn btn-primary "
                        @click.prevent="saveQuotation">Save Quotation
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import SearchCustomerComponent from '../../Customer/SearchAjax.vue'
    import CustomerContactDetailsComponent from "../../Customer/ContactDetails";
    import CargoDetailsFormComponent from "./Cargo.vue";
    import alertMixins from '../../../mixins/alert-mixins'

    export default {
        mixins: [alertMixins],
        components: {
            'search-customer-component': SearchCustomerComponent,
            'customer-details-component': CustomerContactDetailsComponent,
            'cargo-details-form-component': CargoDetailsFormComponent,
        },
        props: {
            quotationtype: {
                required: false,
                type: String,
                default: null
            },
            logo: {
                required: false,
                type: String,
                default: null
            },
            rate: {
                required: false,
                type: Number,
                default: null
            },
            services: {
                required: false,
                type: Array,
                default: null
            },
            taxes: {
                required: false,
                type: Array,
                default: null
            },
            date: {
                required: false,
            }
        },
        data() {
            return {
                currency: '',
                exrate: '',
                DCLink: '',
                inputCur: '',
                type: '',
                customerTitle: '',
                showModal:true
            }
        },
        computed: {
            ...mapGetters({
                cargoDetails: 'cargoDetails',
                customerDetails: 'customerDetails',
                quotationServices: 'quotationServices',
                customerDetailsSet: 'customerDetailsSet',
                shipmentSubType:'shipmentSubType',
                shipmentType:'shipmentType',
            }),
            selectedCustomerDetails() {
                return this.customerDetails;
            }
        },
        methods: {
            selectedCustomer(value) {
                this.$store.commit('SET_CUSTOMER_DETAILS', value)
            },
            setQuotation() {
                this.type = this.quotationtype;
                this.exrate = this.rate;
            },
            saveQuotation() {
                let data = {
                    currency: this.inputCur,
                    exrate: this.exrate,
                    DCLink: this.customerDetails.DCLink,
                    inputCur: this.inputCur,
                    type: this.quotationtype,
                    services: this.quotationServices,
                    cargo_details: this.cargoDetails,
                    shipment_type:this.shipmentType,
                    shipment_sub_type:this.shipmentSubType
                };

                if (Object.keys(data.services).length > 0 && data.DCLink !== '') {
                    Event.fire('show-loader', true);
                    axios.post('/add-services', data)
                        .then((response) => {
                            Event.fire('show-loader', false);
                            this.flashSucces("Quotation saved successfully");
                            window.location.href = '/quotation/' + response.data.quotation_id;
                        })
                        .catch((error) => {
                            this.flashError("Quotation not saved");
                            Event.fire('show-loader', false);
                            console.log(error.data);
                        });
                } else {
                    let errorMsg = '';
                    if (Object.keys(data.services).length < 1) {
                        errorMsg =  '1. No service added \n';

                    }

                    if (Object.keys(data.cargo_details).length < 1) {
                        errorMsg +=  '2. No client details added \n';
                    }

                    if (data.DCLink === '') {
                        errorMsg += '3. No customer added'
                    }
                    console.log(errorMsg);
                    this.flashError(errorMsg);
                }
                console.log(data, "data to be saved");
            },
            setCustomerTitle() {
                if (this.quotationType === 'import') {
                    return this.customerTitle = 'Consignor';
                }

                if (this.quotationType === 'export') {
                    return this.customerTitle = 'Consignee'
                }
            },
            mounted() {
                this.setCustomerTitle();
            }
        }
    }
</script>

<style lang="scss">
    @import "~vue-select/src/scss/vue-select";
</style>
