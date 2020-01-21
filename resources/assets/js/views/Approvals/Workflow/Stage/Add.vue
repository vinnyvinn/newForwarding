<template>
    <div>
        <button @click="showModal = true" class="btn btn-primary">
            Add Stages
        </button>
        <my-modal
                v-if="showModal"
                @close-modal="showModal = false"
                id="add-shipment"
        >
            <div slot="title"> Add Workflow Stages</div>
            <div slot="body">
                <form method="post" @submit.prevent="save">
                    <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addShipment">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    workflow Type
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">

                                    <ValidationProvider rules="required" name="Shipment type" v-slot="{ errors }">
                                        <v-select
                                                @input="getWorkflowTypeValue"
                                                :filterable="true"
                                                :options="workflowTypes"
                                                v-model="selectedWorkflowType"
                                                @search:focus="clearWorkflowTypeInput"
                                        >
                                            <template slot="no-options">
                                                Select workflow type
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
                                    Workflow Stage Type
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">

                                    <ValidationProvider rules="required" name="Shipment sub-type" v-slot="{ errors }">
                                        <v-select
                                                @input="getWorkflowStageTypesValue"
                                                :filterable="true"
                                                :options="workflowStageTypes"
                                                v-model="selectedWorkflowStageType"
                                                @search:focus="clearWorkflowStageTypeInput"
                                        >
                                            <template slot="no-options">
                                                Select workflow stage type
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
                                    Weight
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="weight">
                                        <input type="number" v-model="form.weight" class="form-control">
                                        <span class="form-control-feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
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
    import alertMixins from '../../../../mixins/alert-mixins'
    import tableMixinsAction from '../../../../mixins/table-mixins-actions'
    import MyDrawer from "../../../../components/MyDrawer";

    export default {
        components: {
            MyDrawer,
            ValidationObserver,
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                showDialog: true,
                showModal: false,
                form: {
                    weight: null,
                    workflow_type_id: null,
                    workflow_stage_type_id: null
                },
                workflowTypes: null,
                workflowStageTypes: null,
                selectedWorkflowType: null,
                selectedWorkflowStageType: null
            };
        },
        methods: {
            save() {
                let url = '/api/wizpack/workflowStages',
                    data = this.form,
                    serviceName = 'workflowStages';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.showModal = false;
                    this.selectedWorkflowType = null;
                    this.selectedWorkflowStageType = null;
                    this.form = {}
                });
            },
            getWorkflowTypeValue(value) {
                this.form.workflow_type_id = value.id
            },
            clearWorkflowTypeInput() {
                this.selectedWorkflowType = null;
            },
            getWorkflowStageTypesValue(value) {
                this.form.workflow_stage_type_id = value.id

            },
            clearWorkflowStageTypeInput() {
                this.selectedWorkflowStageType = null;

            },
            getWorkflowTypes() {
                this.getRecord('/api/wizpack/workflowType', {all: true}, 'Workflow types').then((response) => {
                    this.workflowTypes = response.data.data
                })

            },
            getWorkflowStageTypes() {
                this.getRecord('/api/wizpack/workflowStageTypes', {all: true}, 'Workflow Stage types').then((response) => {
                    this.workflowStageTypes = response.data.data
                })
            },
        },
        created() {
            this.getWorkflowTypes();
            this.getWorkflowStageTypes();

        },
        mounted() {


        }
    }
</script>
