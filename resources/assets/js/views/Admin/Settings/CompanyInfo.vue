<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <div class="ribbon ribbon-bookmark ribbon-left ribbon-primary" style="top:0">
                                Company Info
                            </div>
                        </div>
                        <h4 class="col-md-4  text-center"> Settings</h4>
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
                        <filter-bar
                                placeholder="Name"
                        ></filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/companies"
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
    import vueTableMixin from '../../../mixins/vuetable-2'

    export default {
        mixins:[vueTableMixin],
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
        },
        data() {
            return {
                fields: [
                    {
                        name: 'name',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'email',
                        sortField: 'Email',
                        title: 'email',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'phone',
                        sortField: 'phone',
                        title: 'Phone',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'website',
                        title: 'website',
                        sortField: 'status',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'Address',
                        title: 'Address',
                        sortField: 'status',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'created_at',
                        title: 'Created',
                        sortField: 'generated_on',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    }
                ],
                sortOrder: [
                    {field: 'name', sortField: 'name', direction: 'asc'}
                ],
                moreParams: {},
                customPagination: {}
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name)
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
        },
    }
</script>
