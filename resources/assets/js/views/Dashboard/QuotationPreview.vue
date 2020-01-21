<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body pt-2">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <quotation-gen-button></quotation-gen-button>
                        </div>
                        <h4 class="col-md-4  text-center"> Quotatons</h4>
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
                    <div class="card card-body pt-2">
                        <simple-spiner></simple-spiner>
                        <filter-bar placeholder="Customer"></filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/"
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
    import Datepicker from 'vuejs-datepicker';

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
                        name: 'quote_id',
                        title: '#',
                        sortField: 'id',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'customer',
                        sortField: 'clients.Name',
                        titleClass: 'sorting w-50'
                    },
                    {
                        name: 'job_no',
                        sortField: 'job_no',
                        title: 'Job No',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'status',
                        title: 'Status',
                        sortField: 'status',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    },
                    {
                        name: 'generated_on',
                        title: 'Generated on',
                        sortField: 'created_at',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    },
                    {
                        name: 'link',
                        title: 'Action',
                        titleClass: 'text-center',
                        dataClass: 'text-center'
                    }
                ],
                sortOrder: [
                    {field: 'created_at', sortField: 'created_at', direction: 'desc'}
                ],
                moreParams: {},
                customPagination: {},
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name)
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
        }
    }
</script>