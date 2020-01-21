<template>
    <div>
        <hr class="mt-0"/>
        <div class="col-sm-12 table-responsive">
            <table class="table table table-bordered">
                <thead>
                <tr>
                    <th class=" text-uppercase small font-weight-bold">DESCRIPTION</th>
                    <th class="text-right text-uppercase small font-weight-bold">QUANTITY</th>
                    <th class="text-right  text-uppercase small font-weight-bold">UNIT PRICE</th>
                    <th class="text-right text-uppercase small font-weight-bold">TOTAL EXCL.</th>
                    <th class="text-right text-uppercase small font-weight-bold">TAX</th>
                    <th class="text-right  text-uppercase small font-weight-bold">TOTAL INCL.</th>
                </tr>
                </thead>
                <tbody id="service_table">
                <tr v-for="(service,index) in quotationServices">
                    <td>{{service.name}}</td>
                    <td class="text-right">{{service.total_units}}</td>
                    <td class="text-right">{{service.selling_price | currency(moneySymbol(currency))}}</td>
                    <td class="text-right">{{service.total | currency(moneySymbol(currency))}}</td>
                    <td class="text-right">{{service.tax_details.TaxRate}} %</td>
                    <td class="text-right">{{service.totalInclTax | currency(moneySymbol(currency))}}</td>
                </tr>
                </tbody>
                <tfoot v-if="showSubtotals">
                <tr>
                    <td colspan="4"></td>
                    <td class="text-right">Total (Excl) {{currency}}.&nbsp;&nbsp;:</td>
                    <td>{{subTotalAmountExclTax | currency(moneySymbol(currency))}}</td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td class="text-right">Total Tax &nbsp;{{currency}}&nbsp;:</td>
                    <td>{{subTotalAmountInclTax - subTotalAmountExclTax | currency(moneySymbol(currency))}}</td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td class="text-right">Total Incl.&nbsp;&nbsp;{{currency}}:</td>
                    <td>{{subTotalAmountInclTax | currency(moneySymbol(currency))}}</td>
                </tr>
                </tfoot>
            </table>
        </div>
        <hr/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
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
            taxes: {
                required: false,
                type: Array,
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

            formatToCurrency(value) {
                return parseFloat(value).toFixed(2)
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
            moneySymbol(value) {
                return value === 'USD' ? '$' : 'Ksh';
            }
        },
        mounted() {
            if (!_.isNil(this.quoteid)) {
                this.loadSavedServices();
            }
        }
    }
</script>
