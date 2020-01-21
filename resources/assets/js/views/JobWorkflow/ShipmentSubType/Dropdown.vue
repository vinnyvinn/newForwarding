<template>
    <ValidationProvider rules="required" name="Shipment sub type" v-slot="{ errors }">
        <v-select
                @input="getShipmentSubTypeValue"
                :filterable="true"
                :options="shipmentSubTypes"
                v-model="selectedShipmentSubType"
                @search:focus="clearShipmentSubTypeInput"
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
                shipmentSubTypes: [],
                selectedShipmentSubType: null
            }
        },
        methods: {
            getShipmentSubTypes() {
                this.getRecord('/api/shipmentSubTypes', {all: true}, 'Shipment SubTypes',false).then((response) => {
                    this.shipmentSubTypes = response.data
                })

            },
            getShipmentSubTypeValue(value) {
                this.$emit('selected-value', value)

            },
            clearShipmentSubTypeInput() {
                this.selectedShipmentSubType = null
            }
        },
        created() {
            this.getShipmentSubTypes()

        }
    }
</script>