<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title  ">
                        <div class="col-md-4 ">
                            <div class="ribbon ribbon-bookmark ribbon-left ribbon-primary " style="top:0">
                                Countries
                            </div>
                        </div>
                        <h4 class="col-md-4  text-center">Countries</h4>
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
                                @vuetable:filter-set="search"
                        ></filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/api/countries"
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
                        name: 'number',
                        title: '#',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'code',
                        titleClass: 'sorting',
                        sortField: 'code',
                    },
                    {
                        name: 'name',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'full_name',
                        title: 'Full Name',
                        sortField: 'full_name',
                        titleClass: 'sorting',
                    },

                    {
                        name: 'iso3',
                        sortField: 'iso3',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    },
                    {
                        name: 'continent_code',
                        sortField: 'continent_code',
                        dataClass: 'sorting text-center',
                        titleClass: 'text-center'
                    },
                ],
                sortOrder: [
                    {field: 'full_name', sortField: 'full_name', direction: 'desc'}
                ],
                moreParams: {
                    status:1
                },
                customPagination: {
                }
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name);
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
            search(){
                alert("here we go");
            }
        },
    }
</script>
