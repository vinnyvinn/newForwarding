<template>
    <div class="col-sm-4">
        <div class="form-group  mb-2">
            <label>Shipment sub type <span class="text-danger">*</span></label>
            <ValidationProvider rules="required" v-slot="{ errors }" name="Type of sub shipment">
                <v-select
                        :options="options"
                        @input="setShipmentSubType"
                        v-model="selectedValue"
                        class="mb-0"
                >
                    <template slot="no-options">
                        Select shipment sub-type
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
        data() {
            return {
                options: [],
                selectedValue: ""

            }
        },
        computed: {
            ...mapGetters({
                shipmentSubType: 'shipmentSubType',
            }),
        },
        methods: {
            setShipmentSubType(value) {
                this.selectedValue = value;
                this.$store.commit('SET_CARGO_SHIPMENT_SUB_TYPE', value);
            },
            getShipmentSubTypes() {
                let url = '/api/shipmentSubTypes',
                    params = {
                        all: true
                    };
                this.getRecord(url, params, 'shipment types', false).then((response) => {
                    this.options = _.values(response.data);
                })
            }
        },
        watch:{
            'shipmentSubType'(value){
                this.selectedValue = value;
            }
        },
        created() {
            this.getShipmentSubTypes();
        },
        mounted() {
            this.selectedValue = this.shipmentSubType
        }
    }
</script>

<style>
    .select2-dropdown {
        z-index: 9001;
    }
</style>