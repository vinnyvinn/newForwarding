<template>
    <div class="pull-left mr-2">
        <button @click="showForm" class="btn btn-info">
            Request Fund
        </button>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Request Fund</div>
            <div slot="body" class="p-2">
                <ValidationObserver v-slot="{ valid, passes  }" ref="requestFunds">

                    <div class="row" style="height: 300px; overflow-y: scroll">
                        <div class="form-group col-sm-6 ">
                            <label for="employee_number">Employee Number/ID</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Employee number ">
                                <input type="text" required="" id="employee_number" v-model="form.employee_number"
                                       class="form-control"
                                >
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="amount">Amount Requested</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Amount Requested ">
                                <input type="number" required="" id="amount" step="0.09" v-model="form.amount"
                                       class="form-control"
                                >
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Select Currency</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Select currency ">
                                <v-select
                                        :options="['KES','USD']"
                                        v-model="form.currency_type"
                                        class="mb-0"
                                ></v-select>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <div class="form-group col-sm-6">
                            <label>Select Voucher Type</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Select voucher ">
                                <v-select
                                        label="name"
                                        :filterable="true"
                                        @input="getSelectedValue"
                                        @search:focus="clearInput"
                                        :options="voucherTypes"
                                        v-model="form.vouchertype"
                                >
                                    <template slot="no-options">
                                        Select voucher type
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{ option.cVoucherName }}
                                        </div>
                                    </template>
                                    <template slot="selected-option" slot-scope="option">
                                        <div class="selected d-center">
                                            {{ option.cVoucherName }}
                                        </div>
                                    </template>
                                </v-select>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Deadline</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="Deadline ">
                                <datepicker
                                        placeholder="Deadline"
                                        @input="setDate"
                                        v-model="form.deadline"
                                ></datepicker>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="file">Select Supporting Doc</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="file ">
                                <input type="file" class="form-control" id="file" ref="file"
                                       v-on:change="handleFileUpload()"/>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="reason">Reason</label>
                            <ValidationProvider rules="required" v-slot="{ errors }" name="reason ">
                                <textarea v-model="form.reason" id="reason" cols="30" rows="3" class="form-control"></textarea>
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
    import Datepicker from 'vuejs-datepicker';

    export default {
        props: {
            jobId: null
        },
        mixins: [alertMixins, tableMixinsAction],
        components: {
            ValidationObserver, Datepicker
        },
        data() {
            return {
                showModal: false,
                voucherTypes: null,
                Bl:null,
                form: {
                    currency_type: null,
                    quotation_id: null,
                    user_id: null,
                    employee_number: null,
                    amount: null,
                    file: null,
                    vouchertype:null,
                    reason:null,
                    deadline: null
                }
            }
        },
        methods: {
            save() {
                this.form.quotation_id = this.Bl.quote_id;

                if(_.isNil(this.form.currency_type)||_.isNil(this.form.amount)||_.isNil(this.form.vouchertype)||_.isNil(this.form.file)||_.isNil(this.form.employee_number)){
                    return this.flashError('Ensure all the fields are filled')
                }

                let formData = new FormData();

                formData.append('file', this.form.file);

                formData.append('deadline', moment(this.form.date));

                formData.append('vouchertype', this.form.vouchertype.iVoucherTypeID);

                formData.append('employee_number', this.form.employee_number);

                formData.append('quotation_id', this.form.quotation_id);

                formData.append('amount', this.form.amount);

                formData.append('reason', this.form.reason);

                formData.append('currency_type', this.form.currency_type);


                Event.fire('show-loader', true);

                axios.post('/project-cost', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(() => {
                    Event.fire('show-loader', false);

                    this.$toastr.s(
                        "Funds Request successfully "
                    );

                    this.showModal = false;

                    this.form = {};

                    this.stepChecked = true;

                    Event.fire('load-requested-funds', this.selectedJobStage)

                }).catch(() => {

                    this.$toastr.e(
                        "An error occured "
                    );

                    Event.fire('show-loader', false);
                })

            },
            clearInput() {
                this.form.vouchertype = null;
            },
            getSelectedValue() {

            },
            setDate(value) {
                this.form.date = value;
            },
            getVoucherTypes() {
                let url = '/api/voucher-types';
                this.getRecord(url, {}, 'Voucher Types').then((response) => {
                    this.voucherTypes = response.data;
                })
            },
            handleFileUpload() {
                this.form.file = this.$refs.file.files[0];
            },
            showForm(){
                this.showModal=true
            },
            getBlInfo(){
                let url = `/bill-of-lading/${this.jobId}/show`;
                this.getRecord(url, {}, ' BL info').then((response) => {
                    this.Bl = response.data;
                })

            }
        },
        created() {
            this.getVoucherTypes();
            this.getBlInfo()
        }
    }
</script>