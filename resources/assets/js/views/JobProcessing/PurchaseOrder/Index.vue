<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body mt-0 p-0">
                    <div class="card card-body m-0 pt-0 ">
                        <simple-spiner></simple-spiner>
                        <filter-bar
                                placeholder="Name"
                        >
                            <span slot="search"></span>
                            <a :href="poUrl" class="btn btn-info pull-right" slot="filter1">
                                Generate Purchase Order
                            </a>
                        </filter-bar>
                        <vuetable ref="vuetable"
                                  :api-url="url"
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
                        >
                            <template slot="actions" slot-scope="props">
                                <button type="submit"
                                        class="btn btn-sm btn-primary" @click="viewPo()"><i
                                        class="fa fa-eye"></i>
                                </button>
                            </template>
                        </vuetable>
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
    import vueTableMixin from '../../../mixins/vuetable-2'

    export default {
        mixins: [vueTableMixin],
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo
        },
        data() {
            return {
                jobId: '',
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
                    },
                    {
                        name: '__slot:actions',
                        titleClass: 'sorting',
                    }
                ],
                sortOrder: [
                ],
                moreParams: {
                    status: 1,
                    startDate: null,
                    endDate: null,
                },
                customPagination: {},
                poStatus: 'all',
                startDate: null,
                endDate: null,
                url:'/job-purchase-order/'+ this.$route.params.jobId,
                poUrl:'/generate-po/'+ this.$route.params.jobId
            }
        },

        methods:{
            viewPo(){
                window.location.href = '/view-po/'+this.$route.params.jobId;

            }
        },
        created() {
            this.jobId = this.$route.params.jobId;
        }
    }
</script>