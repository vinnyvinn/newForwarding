<template>
    <span>
        <button @click="active = true" class="btn btn-xs btn-primary">
            <i class="fa fa-pencil"></i>
        </button>

        <my-modal
                class="text-left"
                @close-modal="active =false"
                v-if="active"
        >
            <div slot="title">
                Edit Quotation Service
            </div>
            <div slot="body" style="min-height:200px; overflow-y: scroll">
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
                                                    {{ option.name }} ~ SP KES {{ formatToCurrency(option.rate) }} | USD {{
                                                    formatToCurrency(option.rate/rate) }}
                                                </div>
                                            </template>
                                            <template slot="selected-option" slot-scope="option">
                                                <div class="selected d-center">
                                                    {{ option.name }} ~ SP KES {{ formatToCurrency(option.rate) }} | USD {{
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
                                    <span><i class="fa fa-save"></i> Edit service</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </ValidationObserver>
            </div>
        </my-modal>
    </span>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import alertMixins from '../../../mixins/alert-mixins';

    export default {
        components: {ValidationObserver},
        props: {
            quoteid: {
                default: null,
                type: Number
            },
            service: {
                required: true,
                type: Object
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
            rate: {
                required: true,
                type: Number
            },
            serviceIndex: {
                required: true,
                type: Number,
            },
            currency:{
                required: true,
            }
        },
        mixins: [alertMixins],
        data() {
            return {
                active: false,
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
            }
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
                if (this.serviceForm.selling_price < this.serviceRate(this.selectedServiceValue)) {
                    return this.flashError("Unit  cost cannot be below buying price " + this.currency + " " + this.serviceRate(this.selectedServiceValue) )
                }

                let quantity = this.formatToCurrency(this.serviceForm.service_units),
                    sellingPrice = this.formatToCurrency(this.serviceForm.selling_price);

                let totalInclTax = this.formatToCurrency((parseFloat(sellingPrice) * parseFloat(quantity)) +
                    (parseFloat(quantity) * parseFloat(sellingPrice) * (parseFloat(this.selectedTaxValue.TaxRate) / 100)));

                let data = {
                    service: this.selectedServiceValue,
                    id: this.selectedServiceValue.id,
                    service_id: this.selectedServiceValue.id,
                    stock_link: this.selectedServiceValue.StockLink,
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

                let quotationServiceData = {
                    data: data,
                    index: this.serviceIndex
                };

                this.quotationService = quotationServiceData;

                //save quotation if quote id is not empty
                if (!_.isNil(this.quoteid)) {
                    let serviceFormData = {
                        quotation_id: this.quoteid,
                        DCLink: this.dclink,
                        inputCur: this.currency,
                        type: this.type,
                        service: data,
                        service_id: this.service.id
                    };

                    return this.saveQuotationServiceToDb(serviceFormData, quotationServiceData);
                } else {
                    this.$store.commit('EDIT_QUOTATION_SERVICE', quotationServiceData);

                    this.active = false;
                }

                this.$refs.addservice.reset();

            },
            saveQuotationServiceToDb(data, quotationServiceData) {
                Event.fire('show-loader', true);

                axios.post('/add-service-to-quotation', data).then((response) => {
                    Event.fire('show-loader', false);

                    this.$toastr.s(
                        "Service added successfully" + response
                    );

                    this.$store.commit('EDIT_QUOTATION_SERVICE', quotationServiceData);

                    this.$refs.addservice.reset();

                    this.active = false;

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
            serviceRate(value) {
                return this.formatToCurrency(this.currency === 'USD' ? parseFloat(value.rate) / parseFloat(this.rate) : parseFloat(value.rate))
            },
            serviceTax() {
                return this.formatToCurrency(this.currency === 'USD' ?
                    (((this.selectedTaxValue.TaxRate * (parseFloat(this.serviceForm.selling_price) * parseFloat(this.serviceForm.service_units))) / 100) / parseFloat(this.rate))
                    : ((this.selectedTaxValue.TaxRate * (parseFloat(this.serviceForm.selling_price) * parseFloat(this.serviceForm.service_units))) / 100));
            },
            serviceSellingPrice(value) {
                return this.formatToCurrency(this.currency === 'USD' ? ((value.selling_price) / this.rate) : (value.selling_price));
            },
            formatServiceRate(service){
                let rate = this.currency === 'USD' ? parseFloat(service.rate)*parseFloat(this.rate): parseFloat(service.rate)/parseFloat(this.rate);

                console.log(rate,service);

                return service['rate'] = rate;

            }
        },
        watch: {
            'selectedServiceValue'(value) {
                if (!_.isNull(value)) {
                    this.serviceForm.selling_price = this.formatToCurrency(value.rate);
                }
            }
        },
        mounted() {
            this.selectedTaxValue = _.isEmpty(this.service) ? null : this.service.tax_details;
            this.selectedServiceValue = _.isEmpty(this.service) ? null :  this.service;
            this.serviceForm.rate = _.isEmpty(this.service) ? null : this.service.rate;
            this.serviceForm.selling_price = _.isEmpty(this.service) ? null : this.service.selling_price;
            this.serviceForm.service_units = _.isEmpty(this.service) ? null : this.service.total_units;
        }

    }
</script>