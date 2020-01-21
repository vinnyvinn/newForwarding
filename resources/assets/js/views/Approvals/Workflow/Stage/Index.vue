<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title  ">
                        <div class="col-md-4 ">
                            <add-workflow-stage-component></add-workflow-stage-component>
                        </div>
                        <h4 class="col-md-4  text-center">Approval Stages</h4>
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
                                  api-url="api/wizpack/workflowStages"
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
                                <button type="submit" class="btn btn-sm btn-danger"
                                        @click="deleteShipment(props.rowData.id)">
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
    import vueTableMixin from '../../../../mixins/vuetable-2'
    import TableMixinsActions from '../../../../mixins/table-mixins-actions'
    import AddWorkflowTypesComponent from "../Add";

    export default {
        name:"ApprovalWorkflowStageComponent",
        mixins: [vueTableMixin,TableMixinsActions],
        components: {
            AddWorkflowTypesComponent,
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo
        },
        data() {
            return {
                fields: [
                    {
                        name: 'workflow_type',
                        sortField: 'workflow_type',
                        title: 'Approval Type',
                        titleClass: 'sorting'
                    },
                    {
                        title: 'Stage',
                        name: 'workflow_stage',
                        sortField: 'workflow_stage',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'weight',
                        sortField: 'weight',
                        titleClass: 'sorting'
                    },

                    {
                        name: 'created_at',
                        sortField: 'created_at',
                        titleClass: 'sorting',
                    },
                    {
                        name: '__slot:actions',
                        title: 'Actions',
                        dataClass: 'text-center',
                        titleClass: 'text-center'
                    }

                ],
                sortOrder: [
                    {field: 'weight', sortField: 'weight', direction: 'asc'}
                ],
                moreParams: {
                    status: 1
                },
                customPagination: {},
                showAddShipment: false
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name);
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
            addShipment() {
                this.showModal(true);
            },
            deleteShipment(id){
                let url = "api/wizpack/workflowStages/"+id;

                this.deleteRecord(url);
            }
        },
    }
</script>
