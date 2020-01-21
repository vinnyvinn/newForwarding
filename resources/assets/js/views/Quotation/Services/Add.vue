<template>
    <div>
        <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addservice">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-12 col-md-12 ">
                        <div class="form-group mb-2">
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Service">
                                <v-select
                                        label="name"
                                        @search:focus="clearServiceInput"
                                        @input="getSelectedServiceValue"
                                        :filterable="true"
                                        :options="services"
                                        v-model="selectedServiceValue"
                                >
                                    <template slot="no-options">
                                        Select service
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.name }} ~ SP KES {{ option.rate }} | USD {{
                                            formatToCurrency(option.rate/rate) }}
                                        </div>
                                    </template>
                                    <template slot="selected-option" slot-scope="option">
                                        <div class="selected d-center">
                                            {{ option.name }} ~ SP KES {{ option.rate }} | USD {{
                                            formatToCurrency(option.rate/rate)}}
                                        </div>
                                    </template>
                                </v-select>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div class="col-sm-12  col-md-3">
                        <div class="form-group mb-2">
                            <label>Quantity <span class="text-danger">*</span></label>
                            <ValidationProvider rules="required" name="Quantity" v-slot="{ errors }">
                                <input type="number" step="0.01" required="required"
                                       v-model="serviceForm.service_units"
                                       class="form-control">
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <div class="form-group mb-2">
                            <label>Unit Cost(Excl.) <span class="text-danger">*</span></label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Unit cost">
                                <input type="number" step="0.01" required="required"
                                       v-model="serviceForm.selling_price" class="form-control">
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="form-group mb-2">
                            <label>Tax <span class="text-danger">*</span> </label>
                            <ValidationProvider rules="required" name="Tax rate" v-slot="{ errors }">
                                <v-select
                                        @input="getTaxValue"
                                        :filterable="true"
                                        :options="taxes"
                                        v-model="selectedTaxValue"
                                        @search:focus="clearTaxInput"
                                >
                                    <template slot="no-options">
                                        Select service
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.Description }} - {{ option.TaxRate }} %
                                        </div>
                                    </template>
                                    <template slot="selected-option" slot-scope="option">
                                        <div class="selected d-center">
                                            {{ option.Description }} - {{ option.TaxRate }} %
                                        </div>
                                    </template>
                                </v-select>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <button class="btn btn-block btn-sm mt-4 btn-info p-2" :disabled="!valid"
                                @click.prevent="addServiceToQuotation()">
                            <span><i class="fa fa-check"></i> Add service</span>
                        </button>
                    </div>
                </div>

            </div>
        </ValidationObserver>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import alertMixins from '../../../mixins/alert-mixins';
    import {mapGetters} from 'vuex'

    export default {
        props: {
            services: {
                required: false,
                type: Array,
                default: null
            },
            quoteid: {
                default: null,
                type: Number
            },
            taxes: {
                required: false,
                type: Array,
                default: null
            },
            rate: {
                required: false,
                type: Number,
                default: null
            },
            currency:{
                required: true,
            }
        },
        mixins: [alertMixins],
        components: {
            ValidationObserver
        },
        data() {
            return {
                selectedServiceValue: null,
                selectedTaxValue: null,
                serviceForm: {
                    service_units: null,
                    selling_price: null,
                    rate: null
                },

            }
        },
        computed: {
            stockLink() {
                return this.selectedServiceValue.StockLink;
            },
            ...mapGetters({
                quotationServices: 'quotationServices'
            }),
        },
        methods: {
            clearServiceInput() {
                this.selectedServiceValue = null;
            },
            getSelectedServiceValue() {

            },
            getTaxValue() {

            },
            formatToCurrency(value) {
                return parseFloat(value).toFixed(2)
            },
            addServiceToQuotation() {
                if (this.serviceSellingPrice(this.serviceForm)<this.selectedServiceValue.selling_price) {
                    return this.flashError("Unit  cost cannot be below buying price " + this.currency + " " + this.serviceRate(this.selectedServiceValue))
                }
                let quantity = this.formatToCurrency(this.serviceForm.service_units),
                    sellingPrice = this.formatToCurrency(this.serviceForm.selling_price);

                let totalInclTax = this.formatToCurrency((parseFloat(sellingPrice) * parseFloat(quantity)) +
                    (parseFloat(quantity) * parseFloat(sellingPrice) * (parseFloat(this.selectedTaxValue.TaxRate) / 100)));

                let quotationServiceData = {
                    service: this.selectedServiceValue,
                    id: ((Object.keys(this.quotationServices).length) + 1),
                    service_id: this.selectedServiceValue.id,
                    stock_link: this.stockLink,
                    selling_price: this.serviceForm.selling_price,
                    tax_code: this.selectedTaxValue.Code,
                    tax_description: this.selectedTaxValue.Description,
                    tax_id: this.selectedTaxValue.idTaxRate,
                    type: this.selectedServiceValue.type,
                    unit: this.selectedServiceValue.unit,
                    rate: this.serviceRate(this.selectedServiceValue),
                    name: this.selectedServiceValue.name,
                    total_units: this.serviceForm.service_units,
                    tax_details: this.selectedTaxValue,
                    tax: (parseFloat(quantity) * parseFloat(sellingPrice) * (parseFloat(this.selectedTaxValue.TaxRate) / 100)),
                    total: (sellingPrice * quantity),
                    totalInclTax: totalInclTax,
                };

                this.quotationService = quotationServiceData;

                //save quotation if quote id is not empty
                if (!_.isNil(this.quoteid)) {
                    let serviceFormData = {
                        quotation_id: this.quoteid,
                        DCLink: this.dclink,
                        inputCur: this.currency,
                        type: this.type,
                        service: this.quotationService
                    };

                    return this.saveQuotationServiceToDb(serviceFormData, quotationServiceData);
                } else {
                    this.serviceForm = {};
                    this.$store.commit('SET_QUOTATION_SERVICES', quotationServiceData);
                    this.selectedTaxValue = this.selectedServiceValue = null;
                }

                this.$refs.addservice.reset();
            },
            saveQuotationServiceToDb(data, quotationServiceData) {
                Event.fire('show-loader', true);

                axios.post('/add-service-to-quotation', data).then((response) => {
                    Event.fire('show-loader', false);

                    this.$toastr.s(
                        "Service added successfully"
                    );

                    console.log(response);

                    this.serviceForm = {};

                    this.$store.commit('SET_QUOTATION_SERVICES', quotationServiceData);

                    this.selectedTaxValue = this.selectedServiceValue = null;


                    this.$refs.addservice.reset();

                }).catch((error) => {
                    Event.fire('show-loader', false);

                    this.$toastr.e(
                        "Service not added "
                    );
                });
            },

            clearTaxInput() {
                this.selectedTaxValue = null;
            },
            serviceRate(value){
                return  this.formatToCurrency(this.currency === 'USD' ? (value.rate / this.rate) : value.rate)
            },
            serviceTax(){
                return  this.formatToCurrency(this.currency === 'USD' ?
                    (((this.selectedTaxValue.TaxRate * (parseFloat(this.serviceForm.selling_price) * parseFloat(this.serviceForm.service_units))) / 100) / parseFloat(this.rate))
                    : ((this.selectedTaxValue.TaxRate * (parseFloat(this.serviceForm.selling_price) * parseFloat(this.serviceForm.service_units))) / 100));
            },
            serviceSellingPrice(value){
                return  this.formatToCurrency(this.currency === 'USD' ? ((value.selling_price) / this.rate) : (value.selling_price));
            }
        },
        watch: {
            'selectedServiceValue'(value) {
                if(!_.isNull(value)){
                    this.serviceForm.selling_price = this.serviceRate(value);
                }
            }
        },
        mounted() {

        }

    }
</script>

<style lang="scss">

    @import "~vue-select/src/scss/vue-select";


    .select2-container .select2-selection--single {
        height: 50px !important;
        padding: 2px;
    }

    .vs__search {
        padding: 2px !important;
    }


    .select2-container .select2-selection--single {
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        /* height: 28px; */
        user-select: none;
        /* -webkit-user-select: none; */
    }

    .size-modal-content {
        padding: 10px;
    }

    .v--modal-overlay[data-modal="example"] {
        background: rgba(0, 0, 0, 0.3);
    }

    .demo-modal-class {
        border-radius: 5px;
        background: #F7F7F7;
        box-shadow: 5px 5px 30px 0 rgba(46, 61, 73, 0.2);
    }
</style>