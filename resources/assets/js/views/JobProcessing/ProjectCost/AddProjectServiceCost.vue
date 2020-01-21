<template>
    <div class="pull-left mr-2">
        <button @click="showForm" class="btn btn-info">
            Add project service cost
        </button>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Add project service cost</div>
            <div slot="body" class="p-2">
                <ValidationObserver v-slot="{ valid, passes  }" ref="requestFunds">

                    <div class="row">

                        <div class="form-group col-sm-6">
                            <label>Select Service</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Select voucher ">
                                <v-select
                                        label="name"
                                        :filterable="true"
                                        @input="getSelectedValue"
                                        @search:focus="clearInput"
                                        :options="serviceTypes"
                                        v-model="form.service_type"
                                >
                                    <template slot="no-options">
                                        Select Service
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.name }} ~ SP : {{ option.selling_price }}
                                        </div>
                                    </template>
                                    <template slot="selected-option" slot-scope="option">
                                        <div class="selected d-center">
                                            {{ option.name }} ~ SP : {{ option.selling_price }}
                                        </div>
                                    </template>
                                </v-select>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="form-group col-sm-6">
                            <label for="amount">Service Buying Amount</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Amount Requested ">
                                <input type="number" required="" id="amount" step="0.09" v-model="form.buying_price"
                                       class="form-control"
                                >
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="form-group col-sm-12">
                            <label for="file">Select Supporting Doc</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="file ">
                                <input type="file" class="form-control" id="file" ref="file"
                                       v-on:change="handleFileUpload()"/>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="description">Description</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="description ">
                                <textarea v-model="form.description" id="description" cols="30" rows="3"
                                          class="form-control"></textarea>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div class="form-group">
                        <button
                                class="btn pull-right btn-primary mr-2"
                                @click.prevent="save()"
                        >
                            Send Request
                        </button>
                        <button @click="showModal=false" class="btn pull-right btn-danger mr-3">
                            Cancel
                        </button>
                    </div>
                </ValidationObserver>
            </div>
        </my-modal>
    </div>
</template>

<script>
    import tableMixinsAction from '../../../mixins/table-mixins-actions'
    import alertMixins from '../../../mixins/alert-mixins'
    import {ValidationObserver} from 'vee-validate';

    export default {
        props: {
            jobId: null
        },
        mixins: [alertMixins, tableMixinsAction],
        components: {
            ValidationObserver
        },
        data() {
            return {
                showModal: false,
                serviceTypes: [],
                form: {
                    quotation_id: null,
                    buying_price: null,
                    file: null,
                    service_type: null,
                    description: null
                }
            }
        },
        methods: {
            save() {
                this.form.quotation_id = this.jobId;

                if (_.isNil(this.form.buying_price) || _.isNil(this.form.service_type) || _.isNil(this.form.description) || _.isNil(this.form.file)) {
                    return this.flashError('Ensure all the fields are filled')
                }

                let formData = new FormData();

                formData.append('file', this.form.file);

                formData.append('buying_price', this.form.buying_price);

                formData.append('service_id', this.form.service_type.id);

                formData.append('quotation_id', this.form.quotation_id);

                formData.append('description', this.form.description);

                Event.fire('show-loader', true);

                axios.post('/service-cost', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(() => {
                    Event.fire('show-loader', false);

                    this.$toastr.s(
                        "project service cost added successfully "
                    );

                    this.showModal = false;

                    this.form = {};

                    Event.fire('load-project-statement', this.selectedJobStage)

                }).catch(() => {

                    this.$toastr.e(
                        "An error occured "
                    );

                    Event.fire('show-loader', false);
                })

            },
            clearInput() {
                this.form.service_type = null;
            },
            getSelectedValue() {

            },
            getServiceTypes() {
                let url = '/api/get-service-cost-dropdown/' + this.jobId;
                this.getRecord(url, {}, 'Services ').then((response) => {
                    this.serviceTypes = _.values(response.data);
                })
            },
            handleFileUpload() {
                this.form.file = this.$refs.file.files[0];
            },
            showForm() {
                this.showModal = true
            }
        },
        created() {
            this.getServiceTypes()
        }
    }
</script>