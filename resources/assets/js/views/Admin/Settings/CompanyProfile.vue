<template>
    <div class="card pt-5 pb-5">
        <form method="post" @submit.prevent="saveSettings">
            <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addservice">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group col-md-12">
                            <label class="col-md-12 control-label">
                                Company Name
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-md-12">
                                <ValidationProvider rules="required" v-slot="{ errors }" name="Company name">
                                    <input type="text" v-model="form.company_name" class="form-control">
                                    <span class="form-control-feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label class="col-md-12 control-label">
                                Legal Name
                                <span class="text-danger">*</span>
                            </label>
                            <div class="col-md-12">
                                <ValidationProvider rules="required" v-slot="{ errors }" name="Company legal name">
                                    <input type="text" v-model="form.company_legal_name" class="form-control">
                                    <span class="form-control-feedback">{{ errors[0] }}</span>
                                </ValidationProvider>
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label class="col-md-12 control-label">Contact Person </label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" v-model="form.contact_person">
                            </div>
                        </div>
                        <div class="form-group col-md-12">
                            <label class="col-md-12 control-label">Building Name </label>
                            <div class="col-md-12">
                                <input type="text" class="form-control" v-model="form.building_name">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group col-md-12">
                            <label class="col-md-12 control-label p3">Company logo
                                <button v-if="(form.logo_url)" class="btn btn-xs btn-danger"
                                        @click.prevent="form.logo_url =''">Remove
                                </button>
                            </label>
                            <vue-dropzone
                                    ref="myVueDropzone"
                                    id="dropzone"
                                    :options="dropzoneOptions"
                                    @vdropzone-success="vDropZoneSuccess"
                                    @vdropzone-sending="vDropZoneSending"
                                    @vdropzone-error="vDropZoneError"
                                    v-if="!(form.logo_url)"
                            ></vue-dropzone>
                            <div v-else>
                                <img :src="form.logo_url" width="100%" height="300px">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-12 control-label">
                        Tag line  <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-12">
                        <ValidationProvider rules="required" v-slot="{ errors }" name="Company address">
                            <input type="text" class="form-control" v-model="form.company_tag_line">
                            <span class="form-control-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-12 control-label">
                        Company Address <span class="text-danger">*</span>
                    </label>
                    <div class="col-md-12">
                        <ValidationProvider rules="required" v-slot="{ errors }" name="Company address">
                            <textarea class="form-control ta" v-model="form.company_address" required=""></textarea>
                            <span class="form-control-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Zip Code</label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_zip_code">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">City </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_city">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">State </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_state">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Country</label>
                        <div class="col-md-12">
                            <select class=" form-control " v-model="form.company_country">
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Company Email </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_email">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Company Phone </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_phone">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Company Phone 2</label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_phone_2">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Mobile </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_mobile">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Fax </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_fax">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Website </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_domain">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Company Registration </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_registration">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="col-md-12 control-label">Tax Number </label>
                        <div class="col-md-12">
                            <input type="text" class="form-control" v-model="form.company_vat">
                        </div>
                    </div>
                </div>
                <div class="form-group col-md-12">
                    <label class="col-md-12 control-label">Email Signature </label>
                    <div class="col-md-12">
                    <textarea class="form-control ta" v-model="form.email_signature">
                    </textarea>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <input type="submit" :disabled="!valid" value="Add Details" class="btn btn-primary pull-right"/>
                    </div>
                </div>
            </ValidationObserver>
        </form>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import vue2Dropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.min.css'
    import alertMixins from '../../../mixins/alert-mixins'

    export default {
        components: {
            ValidationObserver,
            vueDropzone: vue2Dropzone
        },
        mixins: [alertMixins],
        data() {
            return {
                dropzoneOptions: {
                    url: '/company-logo',
                    thumbnailWidth: 300,
                    maxFilesize: 2,
                    headers: {
                        "X-CSRF-TOKEN": document.head.querySelector("[name=csrf-token]").content
                    },
                    maxFiles: 1,
                },
                form: {
                    email_signature: '',
                    company_vat: '',
                    company_registration: '',
                    company_domain: '',
                    company_fax: '',
                    company_mobile: '',
                    company_phone_2: '',
                    company_phone: '',
                    company_email: '',
                    company_country: '',
                    company_state: '',
                    company_zip_code: '',
                    company_name: '',
                    company_legal_name: '',
                    logo_url: '',
                    contact_person: '',
                    company_address: '',
                    company_city: '',
                    building_name: '',
                    company_tag_line:''
                }
            }

        },
        methods: {
            saveSettings() {
                Event.fire('show-loader', true);
                axios.post('/save-company-info', this.form).then((response) => {

                    Event.fire('show-loader', false);
                    this.flashSucces("Saved Successfully");

                }).catch(error => {
                    Event.fire('show-loader', false);
                    this.flashError("Not saved");
                })
            },
            vDropZoneSuccess(file, response) {
                this.form.logo_url = response.data.url;
                this.flashSucces("Company logo Saved Successfully");
            },
            vDropZoneSending(file, xhr, formData) {


            },
            vDropZoneError(file, message, xhr) {
                this.flashError("Company not updated");
            },
            getCompanyInfo() {
                Event.fire('show-loader', true);
                axios.get('/get-company-info').then((response) => {
                    this.form = response.data;

                    Event.fire('show-loader', false);
                }).catch((error) => {
                    console.log(error);
                    Event.fire('show-loader', false);
                })
            }
        },
        mounted() {
            this.getCompanyInfo();
        }
    }
</script>