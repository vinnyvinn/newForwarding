<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title  ">
                        <div class="col-md-4 ">
                            <div class="ribbon ribbon-bookmark ribbon-left ribbon-success " style="top:0">
                                Completed Jobs
                            </div>
                        </div>
                        <h4 class="col-md-4  text-center">Completed Jobs</h4>
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
                                placeholder="Name, Job no"
                        ></filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/dsr"
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
                        name: 'file_number',
                        title: 'Project code',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'code_name',
                        title: 'Ref No.',
                        sortField: 'code_name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'customer',
                        sortField: 'clients.Name',
                        title: 'Name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'contact_person',
                        title: 'Contact Person',
                        sortField: 'clients.Contact_Person',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'Telephone',
                        title: 'Telephone',
                        sortField: 'clients.Telephone',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'type',
                        title: 'Type',
                        sortField: 'type',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'bl_number',
                        title: 'BL/SO NO',
                        sortField: 'bl_number',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'created_at',
                        title: 'Created',
                        sortField: 'created_at',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    },
                    {
                        name: 'editLink',
                        title: 'Actions',
                        titleClass: 'text-center',
                        dataClass: 'text-center',
                    }
                ],
                sortOrder: [
                    {field: 'file_number', sortField: 'file_number', direction: 'asc'}
                ],
                moreParams: {
                    status:'completed'
                },
                customPagination: {
                }
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
