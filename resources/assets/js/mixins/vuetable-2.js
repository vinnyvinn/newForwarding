import Vue from 'vue';
import accounting from 'accounting'
import moment from 'moment'
import alertMixins from './alert-mixins'

const vueTableMixin = {
    mixins:[alertMixins],
    created() {

    },
    data() {
        return {
            css: {
                table: {
                    tableClass: ' display mx-auto  table table-striped table-bordered printableArea dataTable',
                    ascendingIcon: 'fa fa-sort-up',
                    descendingIcon: 'fa fa-sort-down'
                },
                pagination: {
                    wrapperClass: 'pagination',
                    activeClass: 'active',
                    disabledClass: 'disabled',
                    pageClass: 'page',
                    linkClass: 'link',
                    icons: {
                        first: '',
                        prev: '',
                        next: '',
                        last: '',
                    },
                },
                icons: {
                    first: 'glyphicon glyphicon-step-backward',
                    prev: 'glyphicon glyphicon-chevron-left fa fa-angle-left',
                    next: 'glyphicon glyphicon-chevron-right fa fa-angle-right',
                    last: 'glyphicon glyphicon-step-forward',
                },
            },
            promise: true
        }
    },
    methods: {
        allcap(value) {
            return value.toUpperCase()
        },
        genderLabel(value) {
            return value === 'M'
                ? '<span class="label label-success"><i class="glyphicon glyphicon-star"></i> Male</span>'
                : '<span class="label label-danger"><i class="glyphicon glyphicon-heart"></i> Female</span>'
        },
        formatNumber(value) {
            return accounting.formatNumber(value, 2)
        },
        formatDate(value, fmt = 'D-MMM-YYYY') {
            return (value == null)
                ? ''
                : moment(value, 'YYYY-MM-DD').format(fmt)
        },
        onPaginationData(paginationData) {
            this.customPagination = paginationData;
            this.$refs.pagination.setPaginationData(paginationData);
            this.$refs.paginationInfo.setPaginationData(paginationData)
        },
        onChangePage(page) {
            this.$refs.vuetable.changePage(page)
        },
        onCellClicked(data, field, event) {
            this.$refs.vuetable.toggleDetailRow(data.id)
        },
        loading() {
            this.$Progress.start();
            Event.fire('show-simple-spinner', true)
        },
        loaded() {
            this.$Progress.finish();
            Event.fire('show-simple-spinner', false)
        },
        loadError(error) {
            this.$Progress.fail();
            flash("An error occured");
            this.$toastr.e(
                 " An error occured" + error
            );
            Event.fire('show-simple-spinner', false)
        },
    },
    events: {
        'filter-set'(filterText) {
            this.moreParams = {
                filter: filterText
            };
            Vue.nextTick(() => this.$refs.vuetable.refresh())
        },
        'filter-reset'() {
            this.moreParams = {};
            Vue.nextTick(() => this.$refs.vuetable.refresh())
        },
        'per-page-set'(perPage) {
            this.moreParams = {
                perPage: perPage
            };
            Vue.nextTick(() => this.$refs.vuetable.refresh())
        },
    },
    mounted() {
        Event.listen('refresh-data', () => {
            Vue.nextTick(() => this.$refs.vuetable.refresh())
        })
    }
};

export default vueTableMixin;