<template>
    <div class="col-sm-4">
        <div class="form-group  mb-2">
            <label>Shipment type <span class="text-danger">*</span></label>
            <ValidationProvider rules="required" v-slot="{ errors }" name="Type of shipment">
                <v-select
                        :options="options"
                        @input="setShipmentType"
                        v-model="selectedValue"
                        class="mb-0"
                >
                    <template slot="no-options">
                        Select shipment type
                    </template>
                    <template slot="option" slot-scope="option">
                        <div class="d-center">
                            {{ option.name }}
                        </div>
                    </template>
                    <template slot="selected-option" slot-scope="option">
                        <div class="selected d-center">
                            {{ option.name }}
                        </div>
                    </template>
                </v-select>
                <span class="form-control-feedback">{{ errors[0] }}</span>
            </ValidationProvider>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TableMixinsActions from '../../../mixins/table-mixins-actions'

    export default {
        mixins: [TableMixinsActions],
        props: {
            quotationType: {
                required: true,
                type: String
            }

        },
        data() {
            return {
                options: [],
                selectedValue: ''
            }
        },
        computed: {
            ...mapGetters({
                shipmentType: 'shipmentType',
            })
        },
        methods: {
            setShipmentType(value) {
                this.selectedValue = value;
                this.$store.commit('SET_CARGO_SHIPMENT_TYPE', value);
            },
            getShipmentTypes() {
                let url = '/api/shipmentTypes',
                    params = {
                        type: this.quotationType,
                        all: true
                    };
                this.getRecord(url, params, 'shipment types', false).then((response) => {
                    this.options = _.values(response.data);
                })
            }
        },
        watch: {
            'shipmentType'(value) {
                this.selectedValue = value;
            }
        },
        created() {
            this.getShipmentTypes();
        },
        mounted() {
            this.selectedValue = this.shipmentType;
        }
    }
</script>