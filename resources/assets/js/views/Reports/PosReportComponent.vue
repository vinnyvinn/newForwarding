<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title  ">
                        <div class="col-md-4 ">
                            <div class="ribbon ribbon-bookmark ribbon-left ribbon-primary " style="top:0">
                                Reports
                            </div>
                        </div>
                        <h4 class="col-md-4  text-center">Purchase Orders Reports</h4>
                        <div class="col-md-4 ">
                            <custom-pagination-info
                                    :customPagination="customPagination"
                                    ref="pagination"
                                    :css="css.pagination"
                                    @vuetable-pagination:change-page="onChangePage"
                            ></custom-pagination-info>
                        </div>
                    </div>
                    <hr class="mb-0 mt-0"/>
                    <div class="card card-body ">
                        <simple-spiner></simple-spiner>
                        <filter-bar
                                placeholder="Name"
                        >
                            <div slot="filter1" class="pull-right  mr-3">
                                <datepicker class="" placeholder="Start date" @input="setStartDate"
                                            v-model="startDate"></datepicker>
                            </div>
                            <div slot="filter2" class="pull-right mr-3">
                                <datepicker class="" placeholder="End date" @input="setEndDate"
                                            v-model="endDate"></datepicker>
                            </div>
                            <div slot="filter3" class="pull-right col-2">
                                <v-select
                                        :options="['requested', 'approved','all']"
                                        @input="setStatus"
                                        v-model="poStatus"
                                ></v-select>
                            </div>
                            <div slot="search" class="float-center">
                                <a :href="'/export-po/'+dataFrom+'/'+dateTo+'/'+poStatus+'/xls'"
                                   class="btn btn-success pull-right" style="margin-left: 5px">
                                    <i class="fa fa-file-excel-o" aria-hidden="true"></i> Export Excel
                                </a>
                                <a :href="'/export-po/'+dataFrom+'/'+dateTo+'/'+poStatus+'/pdf'"
                                   class="btn btn-info pull-right">
                                    <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    Export Pdf
                                </a>
                            </div>
                        </filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/pos-report"
                                  :fields="fields"
                                  pagination-path=""
                                  :css="css.table"
                                  :sort-order="sortOrder"
                                  :multi-sort="true"
                                  :append-params="moreParams"
                                  @vuetable:cell-clicked="onCellClicked"
                                  @vuetable:pagination-data="onPaginationData"
                                  @vuetable:loading="loading"
                                  @vuetable:load-success="loaded"
                                  @vuetable:load-error="loadError"
                        ></vuetable>
                        <div class="vuetable-pagination">
                            <vuetable-pagination-info ref="paginationInfo"
                                                      info-class="pagination-info"
                            ></vuetable-pagination-info>
                            <vuetable-pagination ref="pagination"
                                                 :css="css.pagination"
                                                 @vuetable-pagination:change-page="onChangePage"
                            ></vuetable-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
    import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
    import vueTableMixin from '../../mixins/vuetable-2'
    import Datepicker from 'vuejs-datepicker'
    import moment from 'moment'

    export default {
        mixins: [vueTableMixin],
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
            Datepicker
        },
        data() {
            return {
                fields: [
                    {
                        name: 'po_no',
                        title: 'Order No',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },

                    {
                        name: 'Name',
                        sortField: 'Name',
                        title: 'Supplier',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'created_by',
                        title: 'Created By',
                        sortField: 'created_by',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'status',
                        sortField: 'status',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'po_date',
                        title: 'PO Date',
                        sortField: 'po_date',
                        titleClass: 'sorting',
                    }
                ],
                sortOrder: [
                    {field: 'po_no', sortField: 'po_no', direction: 'asc'}
                ],
                moreParams: {
                    status: 1,
                    startDate: null,
                    endDate: null,
                },
                customPagination: {},
                poStatus: 'all',
                startDate: null,
                endDate: null
            }
        },
        computed: {
            dataFrom() {
                let today = new Date();
                return !_.isEmpty(this.formatDate(this.startDate, 'D-M-YYYY')) ?
                    this.formatDate(this.startDate, 'D-M-YYYY') :
                    this.formatDate(moment(today).subtract(30, 'day'), 'D-M-YYYY');
            },
            dateTo() {
                let today = new Date();
                return !_.isEmpty(this.formatDate(this.endDate, 'D-M-YYYY')) ?
                    this.formatDate(this.endDate, 'D-M-YYYY') :
                    this.formatDate(moment(today).add(1, 'day'), 'D-M-YYYY');
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name);
                this.$refs.vuetable.toggleDetailRow(data.id);
            },
            setStartDate(date) {
                this.startDate = date;
                this.moreParams.from = this.formatDate(this.startDate);
                Event.fire('refresh-data');
            },
            setEndDate(date) {
                this.endDate = date;
                this.moreParams.to = this.formatDate(this.endDate);
                Event.fire('refresh-data');
            },
            setStatus(value) {
                this.moreParams.status = value;
                Event.fire('refresh-data');
            }
        },
    }
</script>

<style lang="scss">
    @import "../../../../../node_modules/vue-select/src/scss/vue-select";
</style>
