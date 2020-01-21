<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <add-stage-check-list-component
                                :stageid="stageid"
                                :stagename="stagename"
                        ></add-stage-check-list-component>
                        <h4 class="col-md-4  text-center"><b>Stage</b>: {{stagename}}</h4>
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
                                  :api-url="api"
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
                                        @click="deleteStageCheckList(props.rowData.id)">
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

    export default {
        mixins: [vueTableMixin],
        props: {
            stageid: {
                required: true
            },
            stagename: {
                required: true
            }
        },
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
                        name: 'description',
                        sortField: 'description',
                        titleClass: 'sorting'
                    },
                    {
                        sortField: 'required',
                        name: 'required',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'notification',
                        sortField: 'status',
                        titleClass: 'sorting',
                    }, {
                        name: 'timing',
                        sortField: 'timing',
                        titleClass: 'sorting',
                    }
                    , {
                        name: 'components',
                        sortField: 'components',
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
                api: `/stages/${this.stageid}`
            }
        },
        methods: {
            onCellClicked(data, field, event) {
                console.log('cellClicked: ', field.name);
                this.$refs.vuetable.toggleDetailRow(data.id)
            },
            deleteStageCheckList(id) {
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
                        axios.delete('/stage-components/' + id).then((response) => {
                            Event.fire('show-loader', false);

                            this.$swal(
                                'Deleted!',
                                'Stage checklist has been deleted.',
                                'success'
                            );

                            Event.fire('refresh-data');

                        }).catch((error) => {
                            Event.fire('show-loader', false);

                            this.$swal(
                                'Not Deleted!',
                                'Stage checklist has not been deleted, an error occured',
                                'error'
                            )

                        });

                    }
                })
            }
        }
    }
</script>