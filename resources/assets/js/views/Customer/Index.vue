<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row card-title fixed ">
                        <div class="col-md-4 ">
                            <div class="ribbon ribbon-bookmark ribbon-left ribbon-primary" style="top:0">
                                Customers
                            </div>
                        </div>
                        <h4 class="col-md-4  text-center"> Customers</h4>
                        <div class="col-md-4">
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

                        <filter-bar placeholder="Name, Contact Person">
                            <div slot="filter3">

                            </div>
                        </filter-bar>
                        <vuetable ref="vuetable"
                                  api-url="/customers"
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
    import MyModal from "../../components/PlainModal";
    import GenerateQuotationComponent from "../Quotation/Add/Index";
    import Loader from "../../components/Loader";

    export default {
        mixins: [vueTableMixin],
        components: {
            Loader,
            GenerateQuotationComponent,
            MyModal,
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
        },
        data() {
            return {
                fields: [
                    {
                        name: 'DCLink',
                        title: '#',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center'
                    },
                    {
                        name: 'Name',
                        sortField: 'Name',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'Contact_Person',
                        sortField: 'Contact_Person',
                        title: 'Contact Person',
                        titleClass: 'sorting'
                    },
                    {
                        name: 'Telephone',
                        title: 'Telephone',
                        sortField: 'Telephone',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    },
                    {
                        name: 'Account',
                        title: 'Account',
                        sortField: 'Account',
                        titleClass: 'sorting text-center',
                        dataClass: 'text-center',
                    }
                ],
                sortOrder: [
                    {field: 'DCLink', sortField: 'DCLink', direction: 'DESC'}
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
            openModal() {
                Event.fire('open-modal');
            },
            closeModal() {
                Event.fire('close-modal');
            }
        }
    }
</script>
