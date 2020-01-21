<template>
    <div>
        <div class="form-group col-md-12">
            <label class="col-md-12 control-label">
                Shipment Type
                <span class="text-danger">*</span>
            </label>
            <div class="col-md-12">

                <ValidationProvider rules="required" name="Shipment type" v-slot="{ errors }">
                    <v-select
                            @input="getShipmentValue"
                            :filterable="true"
                            :options="shipmentTypes"
                            v-model="selectedShipmentType"
                            @search:focus="clearShipmentInput"
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
        <div class="form-group col-md-12">
            <label class="col-md-12 control-label">
                Shipment Sub-Type
                <span class="text-danger">*</span>
            </label>
            <div class="col-md-12">

                <ValidationProvider rules="required" name="Shipment sub-type" v-slot="{ errors }">
                    <v-select
                            @input="getShipmentSubTypeValue"
                            :filterable="true"
                            :options="shipmentSubTypes"
                            v-model="selectedShipmentSubType"
                            @search:focus="clearShipmentSubTypeInput"
                    >
                        <template slot="no-options">
                            Select shipment sub type
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    shipment_type_id: null,
                    shipment_sub_type_id: null
                },
                shipmentTypes: null,
                shipmentSubTypes: null,
                selectedShipmentType: null,
                selectedShipmentSubType: null

            }
        },
        methods: {

            getShipments() {
                this.getRecord('/api/shipmentTypes', {all: true}, 'Shipment Sub-Types').then((response) => {
                    this.shipmentTypes = response.data
                })

            },
            getShipmentValue(value) {
                this.form.shipment_type_id = value.id;

            },
            clearShipmentInput() {
                this.selectedShipmentType = null
            },
            getShipmentsSubTypes() {
                this.getRecord('/api/shipmentTypes', {all: true}, 'Shipment Sub-Types').then((response) => {
                    this.shipmentSubTypes = response.data
                })

            },
            getShipmentSubTypeValue(value) {
                this.form.shipment_sub_type_id = value.id;

            },
            clearShipmentSubTypeInput() {
                this.selectedShipmentSubType = null
            }
        },
        created() {
            this.getShipments();
            this.getShipmentsSubTypes();


        }
    }
</script>