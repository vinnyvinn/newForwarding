<template>
    <div class="col-sm-12 table-responsive" v-if="!customerDetailsSet">
        <h5 class="mb-0"><b>Cargo Details</b></h5>
        <hr/>
        <ValidationObserver v-slot="{ valid, passes  }" ref="cargoDetails">
            <form id="cargo_details" @submit.prevent="saveCargoDetails()">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group mb-2">
                            <label> {{ quotationLabel}}</label>
                            <input type="text"  v-model="cargo_details.bl_no" id="bl_no"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Cargo Description</label>
                            <input type="text" v-model="cargo_details.cargo_name"
                                   id="cargo_name"
                                   class="form-control">
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>MV/FLIGHT</label>
                            <input type="text" v-model="cargo_details.vessel_name" id="vessel_name"
                                   class="form-control">
                        </div>
                    </div>
                    <type-of-shipment
                            :quotationType="quotationType"
                    ></type-of-shipment>

                    <shipment-sub-type>

                    </shipment-sub-type>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Cargo Quantity</label>
                            <input type="text" id="cargo_qty" v-model="cargo_details.cargo_qty"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Container No</label>
                            <input type="text" id="container_no"
                                   v-model="cargo_details.container_no"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Consignee</label>
                            <input type="text" id="consignee_name"
                                   v-model="cargo_details.consignee_name"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Cargo Weight</label>
                            <input type="number" step="0.01"  id="cargo_weight"
                                   v-model="cargo_details.cargo_weight" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Location</label>
                            <input type="text"  name="location" id="location"
                                   v-model="cargo_details.location"
                                   class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group  mb-2">
                            <label>Manifest</label>
                            <input type="text"
                                   :readonly="cargoDetailsManifestReadOnly"
                                   v-model="cargo_details.manifest"
                                   id="manifest" class="form-control">
                        </div>
                    </div>
                    <div class="col-sm-2 pull-right">
                        <div class="form-group  mb-2 mt-4">
                            <button type="submit" :disabled="!valid" class="btn btn-block btn-sm mt-2 btn-info p-2 pull-right">
                                <i class="fa fa-check"></i> Add Details
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {ValidationObserver} from 'vee-validate';
    import ShipmentSubType from "../Shipment/ShipmentmentSubType";
    import alertMixins from '../../../mixins/alert-mixins'

    export default {
        mixins: [alertMixins],
        components: {
            ShipmentSubType,
            ValidationObserver
        },
        props: {
            quotationType: {
                required: false,
                type: String,
                default: 'null'
            },
        },
        data() {
            return {
                cargo_details: {
                    bl_no: '',
                    cargo_name: '',
                    vessel_name: '',
                    cargo_qty: '',
                    container_no: '',
                    consignee_name: '',
                    cargo_weight: '',
                    location: '',
                    manifest: ''
                },
            }
        },
        methods: {
            saveCargoDetails() {
                if (_.isEmpty(this.customerDetails)) {
                    return this.flashError("Select a customer");
                }
                this.$store.commit('SET_CARGO_DETAILS', this.cargo_details);
                this.$store.commit('SET_CUSTOMER_DETAILS_SET', true);
            },
        },
        computed: {
            ...mapGetters({
                customerDetailsSet: 'customerDetailsSet',
                customerDetails: 'customerDetails',

            }),
            quotationLabel() {
                return this.quotationtype === 'import' ? 'AWB/BL NO' : 'AWB/SO'
            },
            cargoDetailsManifestValue() {
                return this.quotationtype === 'import' ? '' : 'N/A';
            },
            cargoDetailsManifestReadOnly() {
                return this.quotationtype !== 'import';
            }
        }
    }
</script>

<style>
    input[disabled=disabled]{
        cursor:no-drop;
    }
</style>