<template>
    <div>
        <modals-container/>
        <button @click="createWorkflow" class="btn btn-primary">
            Add workflow
        </button>
        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-shipment-type"
        >
            <div slot="title"> Job processing Workflow</div>
            <div slot="body">
                <form method="post" @submit.prevent="addWorkflow">
                    <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addShippmentType">
                        <div class="row" style="height: 60vh; overflow-y: scroll">
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Shipment Type
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <shipment-type-dropdown
                                            @selected-value="setShipmentType"
                                    ></shipment-type-dropdown>
                                </div>
                            </div>


                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Shipment Sub-Type
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <shipment-sub-type-dropdown
                                            @selected-value="setShipmentSubType"
                                    ></shipment-sub-type-dropdown>
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label p-2">
                                    Select Stages
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="row p-2">
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

                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label p-2">
                                    Select Required Documents
                                    <span class="text-danger">*</span>
                                </label>
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
                                <input type="submit" :disabled="!valid" value="Save"
                                       class="btn btn-primary pull-right"/>

                                <button type="button" class="btn btn-danger waves-effect  pull-right mr-3"
                                        @click="showModal = false">
                                    Close
                                </button>
                            </div>
                        </div>
                    </ValidationObserver>
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
        components: {
            ValidationObserver,
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                showModal: false,
                stages: {},
                docs:{},
                checkedDocs:[],
                checkedStages: [],
                form: {
                    slug: null,
                    shipment_types_id: null,
                    shipment_sub_types_id: null,
                    stages_id: [],
                    docs_id:[]
                }
            };
        },
        computed: {
            nameSlug() {
                return _.kebabCase(this.form.name);
            }
        },
        methods: {
            addWorkflow() {
                this.form.slug = this.nameSlug;
                this.showModal = false;
                this.form.stages_id = this.checkedStages;
                this.form.docs_id = this.checkedDocs;

                let url = '/api/jobWorkflowProcesses',
                    data = this.form,
                    serviceName = 'Job process workflow';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.form = {};
                    this.selectedShipment = null;
                    this.checkedDocs = [];
                    this.checkedStages = [];
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
                    this.stages = response.data

                    console.log(this.stages);
                })
            },
            getRequiredDocs() {
                this.getRecord('/api/required-docs', 'Docs', false).then((response) => {
                    this.docs = response.data;
                })
            },
            createWorkflow(){
                this.showModal = true;
                this.getStages();
                this.getRequiredDocs();
            }
        },
        created() {


        }
    }
</script>