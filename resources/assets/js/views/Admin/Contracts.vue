<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <a href="/contracts/create" class="btn btn-primary">
                                Add Contract
                            </a>
                        </div>
                        <h4 class="col-md-4  text-center"> Contracts</h4>
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
                                  api-url="/contracts"
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
                                <button @click="editContract(props.rowData.id)"
                                        class="btn btn-sm btn-warning">
                                    <i class="fa fa-pencil"></i>
                                </button>

                                <button @click="viewContract(props.rowData.id)" class="btn btn-sm btn-info">
                                    <i class="fa fa-eye"></i>
                                </button>

                                <button type="submit" class="btn btn-sm btn-danger"
                                        @click="deleteContract(props.rowData.id)">
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
    import vueTableMixin from '../../mixins/vuetable-2'

    export default {
        mixins: [vueTableMixin],
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
        },
        data() {
            return {
                fields: [
                    {
                        title: '#',
                        name: 'id',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        title: 'Company Name',
                        name: 'company_name',
                        sortField: 'company_name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'contract',
                        sortField: 'contract',
                        title: 'Contract',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'contract_type',
                        sortField: 'contract_type',
                        title: 'Contract Type',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'charge',
                        title: 'Charge',
                        sortField: 'charge',
                        titleClass: 'sorting',
                        dataClass: 'text-right',
                    },
                    {
                        name: 'created_at',
                        title: 'Created',
                        sortField: 'created_at',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
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
            editContract(id) {
                return window.location.href = '/contracts/' + id + '/edit';
            },
            viewContract(id){
                return window.location.href = '/contracts/' + id ;

            },
            deleteContract(id) {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Event.fire('show-loader', true);
                        axios.delete('/contracts/' + id).then((response) => {
                            Event.fire('show-loader', false);

                            this.$swal(
                                'Deleted!',
                                'The contract has been deleted.',
                                'success'
                            );

                            Event.fire('refresh-data');

                        }).catch((error) => {
                            Event.fire('show-loader', false);

                            this.$swal(
                                'Not Deleted!',
                                'The contract has not been deleted, an error occured',
                                'error'
                            )

                        });

                    }
                })
            },
        },
    }
</script>