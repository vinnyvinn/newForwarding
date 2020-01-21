<template>
    <div>
        <hr/>
        <div class="col-sm-12">
            <h5 class="mb-0 mr-2"><b>Add Service <span class="text-danger">*</span> |
                <code style="color: green" id="currency">
                    Currency {{currency}}
                </code>
                <span id="notification" class="pull-right" style="overflow: hidden"></span></b>
            </h5>
        </div>
        <add-quotation-service-form
                :services="services"
                :quoteid="quoteid"
                :taxes="taxes"
                :rate="rate"
                :currency="currency"
        ></add-quotation-service-form>
        <hr class="mt-0"/>
        <div class="col-sm-12 table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th class="border-0 text-uppercase small font-weight-bold">DESCRIPTION</th>
                    <th class="text-right border-0 text-uppercase small font-weight-bold">QUANTITY</th>
                    <th class="text-right border-0 text-uppercase small font-weight-bold">UNIT PRICE</th>
                    <th class="text-right border-0 text-uppercase small font-weight-bold">TOTAL EXCL.</th>
                    <th class="text-right border-0 text-uppercase small font-weight-bold">TAX</th>
                    <th class="text-right border-0 text-uppercase small font-weight-bold">TOTAL INCL.</th>
                    <th class="text-center border-0 text-uppercase small font-weight-bold w-5">Action</th>
                </tr>
                </thead>
                <tbody id="service_table">
                <tr v-for="(service,index) in quotationServices">
                    <td>{{service.name}}</td>
                    <td class="text-right">{{service.total_units}}</td>
                    <td class="text-right">{{service.selling_price | currency(moneySymbol(currency))}}</td>
                    <td class="text-right">{{service.total |  currency(moneySymbol(currency))}}</td>
                    <td class="text-right">{{service.tax_details.TaxRate}} %</td>
                    <td class="text-right">{{service.totalInclTax |  currency(moneySymbol(currency))}}</td>
                    <td class="text-center">
                        <quotation-service-actions-component
                                :service="service"
                                :services="services"
                                :quoteid="quoteid"
                                :taxes="taxes"
                                :rate="rate"
                                :currency="currency"
                                :serviceIndex="index"
                        ></quotation-service-actions-component>
                    </td>
                </tr>
                </tbody>
                <tfoot v-if="showSubtotals">
                <tr>
                    <td colspan="5"></td>
                    <td class="text-right">Total Excl.&nbsp;&nbsp;:</td>
                    <td>{{subTotalAmountExclTax |  currency(moneySymbol(currency))}}</td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                    <td class="text-right">Total Tax&nbsp;&nbsp;:</td>
                    <td>{{subTotalAmountInclTax - subTotalAmountExclTax |  currency(moneySymbol(currency))}}</td>
                </tr>
                <tr>
                    <td colspan="5"></td>
                    <td class="text-right">Total Incl.&nbsp;&nbsp;:</td>
                    <td>{{subTotalAmountInclTax |  currency(moneySymbol(currency))}}</td>
                </tr>
                </tfoot>
            </table>
        </div>
        <hr/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {ValidationObserver} from 'vee-validate';
    import AddQuotationServiceForm from "./Add";

    export default {
        components: {
            AddQuotationServiceForm,
            ValidationObserver
        },
        props: {
            quoteid: {
                default: null,
                type: Number
            },
            type: {
                default: null,
                type: String
            },
            dclink: {
                default: null,
                type: Number
            },
            currency: {
                required: true,
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
                required: false,
                type: Number,
                default: null
            },
            savedquotationservices: {
                required: false,
                type: Array,
                default: null
            },
        },
        data() {
            return {
                title: '',
                selectedServiceValue: null,
                quotationService: [],
                value: ''

            }
        },
        computed: {
            ...mapGetters({
                quotationServices: 'quotationServices',
                customerDetailsSet: 'customerDetailsSet',
            }),
            showSubtotals() {
                return !_.isEmpty(this.quotationServices)
            },
            subTotalAmountExclTax() {
                return (this.quotationServices.reduce(function (sum, obj) {
                    return sum + parseFloat(obj.total);
                }, 0));
            },
            subTotalAmountInclTax() {
                return (this.quotationServices.reduce(function (sum, obj) {
                    return sum + parseFloat(obj.totalInclTax);
                }, 0));
            }
        },
        methods: {
            getTaxValue() {

            },

            formatToCurrency(value) {
                return parseFloat(value).toFixed(2)
            },

            clearServiceInput() {
                this.selectedServiceValue = null;
            },
            formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
                try {
                    decimalCount = Math.abs(decimalCount);
                    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                    const negativeSign = amount < 0 ? "-" : "";

                    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                    let j = (i.length > 3) ? i.length % 3 : 0;

                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
                } catch (e) {
                    console.log(e)
                }
            },
            loadSavedServices() {
                _.map(this.savedquotationservices, (service) => {

                    let quantity = this.formatToCurrency(service.total_units),
                        sellingPrice = this.formatToCurrency(service.selling_price);

                    let totalInclTax = this.formatToCurrency((sellingPrice * quantity) +
                        (quantity * sellingPrice * (service.tax_details.TaxRate / 100)));

                    let quotationService = {
                        service: service,
                        id: service.id,
                        service_id: service.service_id,
                        stock_link: service.stock_link,
                        selling_price: service.selling_price,
                        tax_code: service.tax_code,
                        tax_description: service.tax_description,
                        tax_id: service.tax_id,
                        type: service.type,
                        unit: service.unit,
                        rate: service.rate,
                        name: service.name,
                        total_units: service.total_units,
                        tax_details: service.tax_details,
                        tax: service.tax,
                        total: this.formatToCurrency(sellingPrice * quantity),
                        totalInclTax: totalInclTax
                    };

                    this.$store.commit('SET_QUOTATION_SERVICES', quotationService);
                });
            },
            moneySymbol(value){
               return  value ==='USD'?'$':'Ksh';
            }
        },
        watch:{
            'quotationServices'(value){
                console.log('watch working as expected'+value)
            }
        },
        mounted() {
            if (!_.isNil(this.quoteid)) {
                this.loadSavedServices();
            }
        }
    }
</script>

<style lang="scss">
    .v-select .dropdown li {
        border-bottom: 1px solid rgba(112, 128, 144, 0.1);
    }

    .v-select .dropdown li:last-child {
        border-bottom: none;
    }

    .v-select .dropdown li a {
        padding: 10px 20px;
        width: 100%;
        font-size: 1.25em;
        color: #3c3c3c;
    }

    .v-select .dropdown-menu .active > a {
        color: #fff;
    }

    .vs__search {
        padding: 2px !important;
    }

    .form-control-feedback {
        color: red;
    }
</style>
