<template>
    <div>
        <ul class="icheck-list" @click="showForm">
            <input type="checkbox"
                   :checked="setActive"
                   :key="step.id"
                   :id="step.id"
                   disabled="true"
                   :value="step.id"
            />
            <label :for="step.id">
                {{step.name}}
            </label>
        </ul>


        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title">
                <b>{{step.name | capitalizeFirst}}</b>
            </div>
            <div slot="body">
                <ValidationObserver v-slot="{ valid, passes  }" ref="completeStep">
                    <div class="p-2 mb-2" style="min-height: 300px; overflow-y: scroll">
                        <div class="form-group">
                            <label for="components">Date ({{step.name}})</label>
                            <datepicker
                                    placeholder="End date"
                                    @input="setDate"
                                    v-model="form.date"
                            ></datepicker>
                        </div>

                        <div class="form-group" v-if="step.type ==='file'">
                            <label for="components">Upload file
                                <small v-if="showFile"><a :href="step.dmsComponents.file"> view file</a></small>
                            </label>
                            <input type="file" class="form-control" id="file" ref="file"
                                   v-on:change="handleFileUpload()"/>
                        </div>

                        <div class="form-group" v-if="step.type ==='text'">
                            <label for="text">Text </label>
                            <input type="text" class="form-control" id="text" v-model="form.text"/>
                        </div>

                        <div class="form-group col-sm-12" v-if="step.type ==='checkbox'">
                            <ul class="icheck-list" v-for="(component,key) in step.components">
                                <input type="checkbox"
                                       class="form-control"
                                       :key="key"
                                       :id="key"
                                       :value="component"
                                       v-model="form.subchecklist"
                                />
                                <label :for="key">
                                    {{component}}
                                </label>
                            </ul>
                        </div>


                        <div class="form-group">
                            <ValidationProvider rules="" v-slot="{ errors }" name="Sub check list ">
                                <label for="components">Remarks</label>
                                <textarea
                                        v-model="form.remark"
                                        id="components"
                                        cols="30"
                                        rows="3"
                                        class="form-control">

                            </textarea>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>


                    <div class="form-group">
                        <button :disabled="!valid"
                                class="btn pull-right btn-primary mr-2"
                                @click.prevent="save()"
                        >
                            Save
                        </button>
                        <button @click.prevent="showModal=false" class="btn pull-right btn-danger mr-3">
                            Cancel
                        </button>
                    </div>
                </ValidationObserver>
            </div>
        </my-modal>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import Datepicker from 'vuejs-datepicker';
    import alertMixins from '../../../mixins/alert-mixins'
    import tableMixinsAction from '../../../mixins/table-mixins-actions'
    import {mapGetters} from 'vuex';

    export default {
        props: {
            step: {
                required: true
            },
            jobId: {
                required: true
            }
        },
        components: {
            ValidationObserver, Datepicker
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                showModal: false,
                form: {
                    remark: null,
                    date: null,
                    file: null,
                    text: null,
                    subchecklist: [],
                    step: null,
                    stepChecked: false
                }
            }
        },
        computed: {
            setActive() {
                return (!_.isEmpty(this.step.dmsComponents) || this.stepChecked);
            },
            showFile() {
                return !_.isNil(this.step.dmsComponents) && !_.isNil(this.step.dmsComponents.file);
            },
            ...mapGetters({
                selectedJobStage: 'selectedJobStage'
            })
        },
        methods: {
            showForm() {
                this.showModal = true;

            },
            setDate(value) {
                this.form.date = value;
            },
            save() {
                this.form.step = this.step;

                let formData = new FormData();

                formData.append('file', this.form.file);

                formData.append('completion_date', moment(this.form.date));

                formData.append('remark', this.form.remark);

                formData.append('text', this.form.text);

                formData.append('subchecklist', this.form.subchecklist);

                formData.append('bill_of_landing_stage_components_id', this.form.step.id);

                formData.append('bill_of_landing_id', this.jobId);

                Event.fire('show-loader', true);

                axios.post('/api/bldmsComponents', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(() => {
                    Event.fire('show-loader', false);

                    Event.fire('reload-dsr');

                    this.$toastr.s(
                        "Checklist updated successfully "
                    );

                    this.showModal = false;

                    this.form = {};

                    this.stepChecked = true;

                    Event.fire('load-stage-checklist', this.selectedJobStage)

                }).catch(() => {

                    this.$toastr.e(
                        "An error occured "
                    );

                    Event.fire('show-loader', false);
                })

            },
            handleFileUpload() {
                this.form.file = this.$refs.file.files[0];
            }
        },
        mounted() {
            if (!_.isNil(this.step.dmsComponents)) {
                this.form.text = this.step.dmsComponents.text;
                this.form.remark = _.isNil(this.step.dmsComponents.remark) ? '' : this.step.dmsComponents.remark;
                // this.form.date = moment(this.step.dmsComponents.date);
                this.form.file = _.isNil(this.step.dmsComponents.file) ? '' : this.step.dmsComponents.file;
                this.form.subchecklist = this.step.dmsComponents.subchecklist;
            }
        }
    }
</script>

<style lang="scss">
    [type=checkbox]:not(:checked):disabled + label:before {
        border: 1px solid #b1b8bb !important;
        background-color: unset !important;
    }

    [type=checkbox]:checked + label:before {
        border-right: 2px solid #26a69a !important;
        border-bottom: 2px solid #26a69a !important;
    }
</style>