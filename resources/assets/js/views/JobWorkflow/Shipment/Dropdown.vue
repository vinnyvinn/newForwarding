<template>
    <ValidationProvider :rules="required" name="Shipment Type" v-slot="{ errors }">
        <v-select
                @input="getShipmentValue"
                :options="shipments"
                v-model="selectedShipment"
                @search:focus="clearShipmentInput"
        >
            <template slot="no-options">
                Select service
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
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import tableMixinsAction from '../../../mixins/table-mixins-actions';

    export default {
        props: {
            required: {
                default: 'required',
                required: false,
                type: String
            }
        },
        components: {
            ValidationObserver,
        },
        mixins: [tableMixinsAction],
        data() {
            return {
                shipments: [],
                selectedShipment: null
            }
        },
        methods: {
            getShipments() {
                this.getRecord('/api/shipments', {all: true}, 'Shipment',false).then((response) => {
                    this.shipments = response.data
                })

            },
            getShipmentValue(value) {
                this.$emit('selected-value', value)

            },
            clearShipmentInput() {
                this.selectedShipment = null
            }
        },
        created() {
            this.getShipments()

        }
    }
</script>

<style lang="scss">
    @import "../../../../../../node_modules/vue-select/src/scss/vue-select";
</style>