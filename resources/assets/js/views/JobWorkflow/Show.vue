<template>
    <div>
        <modals-container/>
        <a href="#" @click="show()" class="btn btn-outline-info btn-sm">
            View Stages
        </a>
        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                width="70%"
                id="add-shipment-type"
        >
            <div slot="title">Select Stages for <b>({{rowData.shipment_type_name}} {{rowData.shipment_sub_type_name}})</b></div>
            <div slot="body">
                <form method="post" @submit.prevent="updateWorkflow">
                    <div class="row" style="height: 300px; overflow-y: scroll; overflow-x: hidden">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-sm-4" v-for="stage in stages">
                                    <div class="form-group">
                                        <ul class="icheck-list">
                                            <input type="checkbox"
                                                   :key="stage.id"
                                                   :id="stage.id"
                                                   v-model="checkedStages"
                                                   :value="stage.id"
                                            />
                                            <label :for="stage.id">
                                                {{stage.name}}
                                            </label>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type="submit" value="Save"
                                   class="btn btn-primary pull-right"/>

                            <button type="button" class="btn btn-danger waves-effect  pull-right mr-3"
                                    @click="showModal = false">
                                Close
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div slot="footer"></div>
        </my-modal>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import alertMixins from '../../mixins/alert-mixins'
    import tableMixinsAction from '../../mixins/table-mixins-actions'

    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            },
            rowIndex: {
                type: Number
            }
        },
        components: {
            ValidationObserver,
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                showModal: false,
                stages: {},
                checkedNames: [],
                checkedStages: [],
                form: {
                    shipment_types_id: null,
                    shipment_sub_types_id: null,
                    stages_id: []
                }
            };
        },
        methods: {
            show() {
                this.getStages();

                this.getAttachedStages();

                this.showModal = true
            },
            updateWorkflow() {
                this.showModal = false;
                this.form.stages_id = this.checkedStages;
                this.form.shipment_types_id = this.rowData.shipment_type_id;
                this.form.shipment_sub_types_id = this.rowData.shipment_sub_type_id;

                let url = '/api/edit-workflow-stages/' + this.rowData.shipment_type_id + '/' + this.rowData.shipment_sub_type_id,
                    data = this.form,
                    serviceName = 'Job process workflow';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.form = {};
                    this.selectedShipment = null
                });
            },
            setShipmentType(value) {
                this.form.shipment_types_id = value.id;
            },
            setShipmentSubType(value) {
                this.form.shipment_sub_types_id = value.id;
            },
            getStages() {
                this.getRecord('/stages', {all: 'all'}, 'Stages', false).then((response) => {
                    this.stages = response.data;

                    console.log(this.stages);
                })
            },
            getAttachedStages() {
                this.getRecord('/api/show-workflow-stages/' + this.rowData.shipment_type_id + '/' + this.rowData.shipment_sub_type_id, {}, 'Stages', false).then((response) => {
                    this.checkedStages = response.data;

                    console.log(this.stages);
                })
            }
        },
        created() {

        }
    }
</script>