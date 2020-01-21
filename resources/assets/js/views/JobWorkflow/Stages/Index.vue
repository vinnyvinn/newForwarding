<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <add-stage-component></add-stage-component>
                        </div>
                        <h4 class="col-md-4  text-center"> Workflow Stages</h4>
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
                                  api-url="/stages"
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
                                <button type="submit" class="btn btn-sm btn-warning"
                                        @click="editStage(props.rowData.id)">
                                    <i class="fa fa-pencil"></i>
                                </button>
                                <button type="submit" class="btn btn-sm btn-primary"
                                        @click="viewStage(props.rowData.id)">
                                    <i class="fa fa-eye"></i>
                                </button>
                                <button type="submit" class="btn btn-sm btn-danger"
                                        @click="deleteStage(props.rowData.id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </template>

                            <template slot="name" slot-scope="props">
                                <a :href="'/stages/'+props.rowData.id" >
                                        {{props.rowData.name}}
                                </a>
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
    import TableMixinsActions from '../../../mixins/table-mixins-actions'

    export default {
        mixins: [vueTableMixin, TableMixinsActions],
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
        },
        data() {
            return {
                fields: [
                    {
                        name: 'id',
                        title: '#',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: '__slot:name',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        title: 'Shipment',
                        name: 'type',
                        sortField: 'type',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'description',
                        title: 'Description',
                        sortField: 'status',
                        titleClass: 'sorting',
                    },
                    {
                        name: 'created_at',
                        title: 'Created',
                        sortField: 'generated_on',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    },
                    {
                        name: '__slot:actions',
                        title: 'Actions',
                        titleClass: 'text-center w10p',
                        dataClass: 'text-center'
                    }
                ],
                sortOrder: [
                    {field: 'name', sortField: 'name', direction: 'asc'}
                ],
                moreParams: {},
                customPagination: {},
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name);
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
            formatName(value) {
                return "<a href='/'>" + value + "</a>"

            },
            deleteStage(id) {
                let url = '/stages/' + id;

                this.deleteRecord(url);
            },
            editStage(id) {
                window.location.href = '/stages/' + id + '/edit';
            },
            viewStage(id) {
                window.location.href = '/stages/' + id + '';
            }
        }
    }
</script>
