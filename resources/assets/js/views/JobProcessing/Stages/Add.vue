<template>
    <div>
        <button @click="addStage" class="btn btn-outline- btn-rounded">
            Add Stage
        </button>
        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-shipment"

        >
            <div slot="title"> Add Stage To Job</div>
            <div slot="body">
                <form method="post" @submit.prevent="save">
                    <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addShipment">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Name
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Name ">

                                        <v-select
                                                label="name"
                                                :filterable="true"
                                                @input="getSelectedValue"
                                                @search:focus="clearInput"
                                                :options="filteredStages"
                                                v-model="selectedStage"
                                        >
                                            <template slot="no-options">
                                                Select/type to Add Stage
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
                                    Description
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="description">
                                        <textarea type="text" v-model="form.stage_description" class="form-control">
                                        </textarea>
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
    import alertMixins from '../../../mixins/alert-mixins'
    import tableMixinsAction from '../../../mixins/table-mixins-actions'
    import {mapGetters} from "vuex";

    export default {
        props: {
            jobStages: {
                required: true
            },
            jobId: {
                required: true
            }
        },
        components: {
            ValidationObserver,
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                showModal: false,
                selectedStage: null,
                stages: [],
                form: {
                    stages_id: null,
                    bill_of_landings_id: null,
                    stage_name: null,
                    stage_description: null,
                    weight:null,
                }
            };
        },
        computed: {
            ...mapGetters({
                selectedJobStage: 'selectedJobStage'
            }),

            filteredStages() {
                let stageIds = _.map(this.jobStages, (val) => {
                    return val.id;
                });

                return _.filter(this.stages, (val) => {
                    return !_.includes(stageIds, val.id);
                })
            }
        },
        methods: {
            shipment(value) {
                this.form.type = value.name;
            },
            clearInput(value){
                console.log(value);
                this.selectedStage = null;
            },
            save() {
                this.form.bill_of_landings_id = this.jobId;

                let url = '/api/billofLandingStages',
                    data = this.form,
                    serviceName = 'Job Stage';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.form = {};
                    this.showModal = false;
                    this.selectedStage = false;

                    Event.fire('job-stage-added',this.form.stages_id);

                    Event.fire('reload-dsr');

                });

            },
            getStages() {
                this.getRecord('/stages', {all: 'all'}, 'Stages', false).then((response) => {
                    this.stages = response.data;

                    console.log(this.stages );
                })
            },
            getSelectedValue(value){
                this.form.stage_description = value.description;
                this.form.weight = value.id;
                this.form.stage_name = value.name;
                this.form.stages_id = value.id;
            },
            addStage(){
                this.showModal = true;
                this.getStages()
            }
        },
        created() {

        }
    }
</script>

<style>
    .form-control-feedback {
        color: red;
    }
</style>