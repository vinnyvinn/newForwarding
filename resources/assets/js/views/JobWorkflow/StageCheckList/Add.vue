<template>
    <div class="col-md-4 ">
        <a href="javascript:history.go(-1)" class="btn btn-primary ">
            <i class="fa fa-arrow-left"></i> Back
        </a>

        <button class="btn btn-primary" @click="showModal = true">
            <i class="fa fa-plus"></i> Add checklist
        </button>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Add Stage Checklist - <b>({{stagename}})</b></div>
            <div slot="body">
                <form id="checklist" method="post" @submit.prevent="save()">
                    <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addShipment">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Name ">
                                        <label for="name">Name</label>
                                        <input type="text"
                                               required="required"
                                               id="name"
                                               v-model="form.name"
                                               class="form-control">
                                        <span class="form-control-feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Type">
                                        <label>Type</label>
                                        <v-select
                                                :options="typeOptions"
                                                v-model="form.type"
                                                class="mb-0"
                                        >
                                            <template slot="no-options">
                                                Select type
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
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Required ">
                                        <label>Required</label>

                                        <v-select
                                                :options="requiredOptions"
                                                v-model="form.required"
                                                class="mb-0"
                                        >
                                            <template slot="no-options">
                                                Field Required
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
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Send notification ">
                                        <label>Send Notification</label>
                                        <v-select
                                                :options="sendNotificationOptions"
                                                v-model="form.notification"
                                                class="mb-0"
                                        >
                                            <template slot="no-options">
                                                Field Required
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
                            <div class="col-sm-4">
                                <div class="form-group">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Time">
                                        <label for="timing">Time (minutes)</label>
                                        <input type="number"
                                               required="required"
                                               id="timing"
                                               v-model="form.timing"
                                               class="form-control">
                                        <span class="form-control-feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Description">
                                <label for="description">Description</label>
                                <input type="text"
                                       required="required"
                                       id="description"
                                       v-model="form.description"
                                       class="form-control">
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <ValidationProvider rules="" v-slot="{ errors }" name="Sub check list ">
                                <label for="components">Sub Check List</label>
                                <textarea
                                        v-model="form.components"
                                        id="components"
                                        cols="30"
                                        rows="3"
                                        class="form-control">

                            </textarea>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <input :disabled="!valid" type="submit" value="Save"
                                   class="btn pull-right btn-primary mr-2"/>
                            <button @click="showModal=false" class="btn pull-right btn-danger mr-3">Cancel
                            </button>
                        </div>
                    </ValidationObserver>
                </form>
            </div>
        </my-modal>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import alertMixins from '../../../mixins/alert-mixins'
    import tableMixinsAction from '../../../mixins/table-mixins-actions'

    export default {
        props: {
            stageid: {
                required: true
            },
            stagename: {
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
                url: '/stage-components',
                form: {
                    name: '',
                    type: '',
                    required: '',
                    notification: '',
                    timing: '',
                    description: '',
                    components: '',
                    stage_id: ''
                },
                typeOptions: [
                    {
                        name: 'File',
                        value: 'file'
                    },
                    {
                        name: 'Text',
                        value: 'text'
                    },
                    {
                        name: 'Checkbox',
                        value: 'checkbox'
                    }
                ],
                requiredOptions: [
                    {
                        name: 'Yes',
                        value: true,
                    },
                    {
                        name: 'No',
                        value: false,
                    }
                ],
                sendNotificationOptions: [
                    {
                        name: 'Yes',
                        value: true,
                    },
                    {
                        name: 'No',
                        value: false,
                    }
                ]
            }
        },
        methods: {
            save() {
                this.form.stage_id = this.stageid;
                this.addRecord(this.url, this.form, 'Stage Checklist').then((response) => {
                    this.showModal = false;

                    this.form = {};

                    console.log(response);
                })
            }
        }
    }
</script>
<style>
    .form-control-feedback {
        color: red;
    }
</style>