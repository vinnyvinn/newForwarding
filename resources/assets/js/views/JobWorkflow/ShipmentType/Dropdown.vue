<template>
    <ValidationProvider rules="required" name="Shipment  type" v-slot="{ errors }">
        <v-select
                @input="getShipmentTypeValue"
                :filterable="true"
                :options="shipmentTypes"
                v-model="selectedShipmentType"
                @search:focus="clearShipmentTypeInput"
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
                shipmentTypes: [],
                selectedShipmentType: null
            }
        },
        methods: {
            getShipmentTypes() {
                this.getRecord('/api/shipmentTypes', {all: true}, 'Shipment Types',false).then((response) => {
                    this.shipmentTypes = response.data
                })

            },
            getShipmentTypeValue(value) {
                this.$emit('selected-value', value)

            },
            clearShipmentTypeInput() {
                this.selectedShipmentType = null
            }
        },
        created() {
            this.getShipmentTypes()

        }
    }
</script>