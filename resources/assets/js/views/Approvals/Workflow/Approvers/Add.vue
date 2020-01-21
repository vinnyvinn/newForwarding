<template>
    <div>
        <button @click="showModalApprover = true" class="btn btn-primary">
            Add Approver
        </button>
        <my-modal
                v-if="showModalApprover"
                @close-modal="showModalApprover =false"
                id="add-shipment"
        >
            <div slot="title"> Add Stage Approver</div>
            <div slot="body">
                <form method="post" @submit.prevent="save">
                    <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addShipment">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    User
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <user-select-dropdown
                                            @selected-user="setUserValue"
                                    ></user-select-dropdown>
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Workflow Stage
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">

                                    <ValidationProvider rules="required" name="Workflow stage" v-slot="{ errors }">
                                        <v-select
                                                @input="getWorkflowStageValue"
                                                :filterable="true"
                                                :options="workflowStages"
                                                v-model="selectedWorkflowStage"
                                                @search:focus="clearWorkflowStageInput"
                                        >
                                            <template slot="no-options">
                                                Select workflow stage
                                            </template>
                                            <template slot="option" slot-scope="option">
                                                <div class="d-center">
                                                    {{ option.workflow_stage }}
                                                </div>
                                            </template>
                                            <template slot="selected-option" slot-scope="option">
                                                <div class="selected d-center">
                                                    {{ option.workflow_stage }}
                                                </div>
                                            </template>
                                        </v-select>
                                        <span class="form-control-feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <input type="submit" :disabled="!valid" value="Save"
                                           class="btn btn-primary pull-right"/>

                                    <button type="button" class="btn btn-danger waves-effect  pull-right mr-3"
                                            @click="showModalApprover = false">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ValidationObserver>
                </form>
            </div>
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
                form: {
                    user_id: null,
                    workflow_stage_id: null
                },
                workflowStages: null,
                selectedWorkflowStage: null,
                selectedUser: null,
                showModalApprover: false
            };
        },
        methods: {
            save() {
                let url = '/api/wizpack/WorkflowStageApprovers',
                    data = this.form,
                    serviceName = 'WorkflowStageApprovers';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.showModalApprover = false;
                    this.form = {};
                    this.selectedWorkflowStage = null;
                });
            },

            getWorkflowStageValue(value) {
                this.form.workflow_stage_id = value.id;
                this.selectedWorkflowStage = value

            },
            clearWorkflowStageInput() {
                this.selectedWorkflowStage = null;

            },
            getWorkflowStages() {
                this.getRecord('/api/wizpack/workflowStages', {all: true}, 'Workflow Stages').then((response) => {
                    this.workflowStages = response.data.data;

                    console.log(response.data.data);
                }).catch(error => {
                    console.log(error)
                })
            },
            setUserValue(value) {
                this.selectedUser = value;
                this.form.user_id = value.id;
            }
        },
        created() {
            this.getWorkflowStages();
        },
        mounted() {

        }
    }
</script>
