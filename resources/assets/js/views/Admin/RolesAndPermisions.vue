<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <a href="/create-role" class="btn btn-primary pull-left">Add Role</a>
                        </div>
                        <h4 class="col-md-4  text-center"> Roles And Permissions</h4>
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
                                  api-url="/all-roles"
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
                            <template slot="deleteRole" slot-scope="props">
                                <button type="submit" class="btn btn-sm btn-danger" @click="deleteRole(props.rowData.id)"><i
                                        class="fa fa-trash"></i></button>
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
    import mixin from '../../mixins/mixins'

    export default {
        mixins: [vueTableMixin, mixin],
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
                        title: 'Role',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'permissions',
                        title: 'Permissions',
                        sortField: 'name',
                        titleClass: 'sorting'
                    },
                    {
                        name: '__slot:deleteRole',
                        title: 'Actions',
                        titleClass: 'text-center',
                        dataClass: 'text-center'
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
            deleteRole(id) {
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
                        axios.delete('/delete-role/' + id).then((response) => {
                            Event.fire('show-loader', false);

                            this.$swal(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );

                            Event.fire('refresh-data');

                        }).catch((error) => {
                            Event.fire('show-loader', false);

                            this.$swal(
                                'Not Deleted!',
                                'Your file has not been deleted, an error occured',
                                'error'
                            )

                        });

                    }
                })
            }
        },
    }
</script>
