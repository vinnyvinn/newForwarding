<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <add-required-docs-component></add-required-docs-component>
                        </div>
                        <h4 class="col-md-4  text-center"> Required Documents</h4>
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
                        ></filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/api/requiredDocs"
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
                                <button @click="editDocs(props.rowData.id)"
                                        class="btn btn-sm btn-warning">
                                    <i class="fa fa-pencil"></i>
                                </button>

                                <button type="submit" class="btn btn-sm btn-danger"
                                        @click="deleteDocs(props.rowData.id)">
                                    <i class="fa fa-trash"></i>
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
    import AddRequiredDocsComponent from "./Add";
    import TableMixinsActions from '../../../mixins/table-mixins-actions';

    export default {
        mixins: [vueTableMixin,TableMixinsActions],
        components: {
            AddRequiredDocsComponent,
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo
        },
        data() {
            return {
                fields: [
                    {
                        title: '#',
                        name: 'id',
                        sortField: 'id',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'name',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'description',
                        sortField: 'description',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'created_at',
                        title: 'Created',
                        sortField: 'created_at',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: '__slot:actions',
                        title: 'Actions',
                        dataClass: 'text-center',
                        titleClass: 'text-center'
                    }
                ],
                sortOrder: [
                    {field: 'id', sortField: 'id', direction: 'asc'}
                ],
                moreParams: {},
                customPagination: {}
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name);
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
            deleteDocs(id) {
                let url = "/api/requiredDocs/" + id;

                this.deleteRecord(url);

            },
            editDocs(id) {
                window.location.href = '/required-docs/' + id + '/edit';
            }
        },
    }
</script>
