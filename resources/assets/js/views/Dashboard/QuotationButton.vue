<template>
    <div class="dropdown float-left mr-2 hidden-sm-down">
        <button class="btn  btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
            <i class="mdi mdi-plus-circle"></i> Add new
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start"
             style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
            <span v-for="option in options">
                <a class="dropdown-item" @click.prevent="goToUrl(option.slug)" href="#">{{option.name}} Quotation</a>
            </span>
        </div>
    </div>
</template>

<script>
    import TableMixinsActions from '../../mixins/table-mixins-actions'

    export default {
        mixins: [TableMixinsActions],
        data() {
            return {
                options: null,
                url: '/generate-quotation/'
            }
        },
        methods: {
            goToUrl(type) {
                return window.location.href = this.url + type
            },
            getShipmentTypes() {
                let url = '/api/shipments',
                    params = {
                        all: true
                    };
                this.getRecord(url, params, 'shipment', false).then((response) => {
                    this.options = response.data;
                })
            }
        },
        created() {
            this.getShipmentTypes();
        }
    }
</script>