<template>
    <div>
        <modals-container/>
        <a href="#" @click="show()" class="btn btn-outline-info btn-sm">
            Required Documents
        </a>
        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-shipment-type"
        >
            <div slot="title">Select Required Docs for <b>({{rowData.shipment_type_name}} {{rowData.shipment_sub_type_name}})</b></div>
            <div slot="body">
                <form method="post" @submit.prevent="updateWorkflow">
                    <div class="row" style="height: 60vh; overflow-y: scroll">
                        <div class="form-group col-md-12">
                            <div class="row p-2">
                                <div class="col-sm-4" v-for="doc in docs">
                                    <div class="form-group">
                                        <ul class="icheck-list">
                                            <input type="checkbox"
                                                   :key="doc.id"
                                                   :id="doc.id"
                                                   v-model="checkedDocs"
                                                   :value="doc.id"
                                            />
                                            <label :for="doc.id">
                                                {{doc.name}}
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
                docs: {},
                checkedDocs: [],
                form: {
                    shipment_types_id: null,
                    shipment_sub_types_id: null,
                    transport_ids: []
                }
            };
        },
        methods: {
            show() {
                this.getRequiredDocs();

                this.getAttachedDocs();

                this.showModal = true
            },
            updateWorkflow() {
                this.showModal = false;
                this.form.transport_ids = this.checkedDocs;
                this.form.shipment_types_id = this.rowData.shipment_type_id;
                this.form.shipment_sub_types_id = this.rowData.shipment_sub_type_id;

                let url = '/api/edit-workflow-transport-docs/' + this.rowData.shipment_type_id + '/' + this.rowData.shipment_sub_type_id,
                    data = this.form,
                    serviceName = 'Transport Docs';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.form = {};
                    this.selectedShipment = null
                });
            },
            getRequiredDocs() {
                this.getRecord('/api/required-docs', 'Stages', false).then((response) => {
                    this.docs = response.data;
                })
            },
            getAttachedDocs() {
                this.getRecord('/api/workflow-transport-docs/' + this.rowData.shipment_type_id + '/' + this.rowData.shipment_sub_type_id, {}, 'Required Docs', false).then((response) => {
                    this.checkedDocs = response.data;

                })
            }
        },
        created() {

        }
    }
</script>