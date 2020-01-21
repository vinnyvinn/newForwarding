<template>
    <span class="pull-left">
        <span>
            <button @click="editDSR" class="btn btn-info mb-2">
                Edit DSR
            </button>
        </span>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Edit DSR</div>
            <div slot="body">
                <ValidationObserver v-slot="{ valid, passes  }" ref="addShipment">

                    <div class="row" style="height: 60vh; overflow-y: scroll">

                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="file_number">ESL REF</label>
                                <input type="text" required id="file_number" v-model="form.file_number"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="ctm_ref">Client REF</label>
                                <input type="text" required v-model="form.ctm_ref" id="ctm_ref" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="bl_number">BL N</label>
                                <input type="text" required id="bl_number" v-model="form.bl_number"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="cargo_weight">Cargo Weight</label>
                                <input type="text" required id="cargo_weight" v-model="form.cargo_weight"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="shipper">Shipper</label>
                                <input type="text" required id="shipper" v-model="form.shipper" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="shipping_line">Shipping Lines</label>
                                <input type="text" required id="shipping_line" v-model="form.shipping_line"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="distance">Distance</label>
                                <input type="number" required id="distance" step="0.01" v-model="form.distance"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="start">Pick up Point</label>
                                <input type="text" required id="start" v-model="form.start" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="destination">Destination</label>
                                <input type="text" required id="destination" v-model="form.destination"
                                       class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea v-model="form.desc" id="description"
                                          cols="30"
                                          rows="5" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <button
                                class="btn pull-right btn-primary mr-2"
                                @click.prevent="save()"
                        >
                            Save
                        </button>
                        <button @click="showModal=false" class="btn pull-right btn-danger mr-3">
                            Cancel
                        </button>
                    </div>
                </ValidationObserver>
            </div>
        </my-modal>

    </span>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import tableMixinsAction from '../../../mixins/table-mixins-actions'

    export default {
        props: {
            dms: {
                required: true
            },
            jobId: {
                required: true
            }
        },
        mixins: [tableMixinsAction],
        components: {
            ValidationObserver,
        },
        data() {
            return {
                showModal: false,
                form: {
                    id: '',
                    file_number: '',
                    ctm_ref: '',
                    bl_number: '',
                    cargo_weight: '',
                    shipper: '',
                    shipping_line: '',
                    start: '',
                    destination: '',
                    distance: '',
                    desc: '',
                }
            }
        },
        methods: {
            save() {
                this.form.id = this.jobId;
                let url = '/update-dsr',
                    data = this.form,
                    serviceName = 'DSR';

                Event.fire('show-loader', true);

                this.addRecord(url, data, serviceName).then(() => {
                    this.form = {};
                    this.showModal = false;

                    this.$emit('dsr-update');

                    Event.fire('show-loader', false);

                }).catch(() => {
                    Event.fire('show-loader', false);

                });

            },
            editDSR() {
                this.showModal = true;

                this.setInputFields(this.dms);

            },
            setInputFields(value) {

                console.log(value);

                this.form.id = value.id;
                this.form.file_number = value.file_number;
                this.form.ctm_ref = value.ctm_ref;
                this.form.bl_number = value.bl_number;
                this.form.cargo_weight = value.cargo_weight;
                this.form.shipper = value.shipper;
                this.form.shipping_line = value.shipping_line;
                this.form.start = value.start;
                this.form.destination = value.destination;
                this.form.distance = value.distance;
                this.form.desc = value.desc;

            }
        },
        mounted() {
        }

    }
</script>