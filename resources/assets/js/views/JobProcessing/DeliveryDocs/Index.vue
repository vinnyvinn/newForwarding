<template>
    <div class="card mb-2">
        <div>
            <button @click="addDeliveryNote" class="btn btn-info mb-2">
                Add Delivery doc
            </button>
        </div>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Add Delivery Document</div>
            <div slot="body">
                <ValidationObserver v-slot="{ valid, passes  }" ref="addCargoImages">
                    <div class="form-group">
                        <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                name="file">
                            <label for="name">
                                Driver Name
                            </label>
                            <input
                                    type="text"
                                    required="required"
                                    class="form-control"
                                    id="name"
                                    v-model="form.driver"
                            />
                            <span class="form-control-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                name="file">
                            <label for="driverModel">
                                Model of driver
                            </label>
                            <input
                                    type="text"
                                    required="required"
                                    class="form-control"
                                    id="driverModel"
                                    v-model="form.vehicle"
                            />
                            <span class="form-control-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                name="file">
                            <label for="file">
                                Upload file
                            </label>
                            <input
                                    type="file"
                                    required="required"
                                    class="form-control"
                                    id="file"
                                    ref="file"
                                    v-on:change="handleFileUpload()"
                            />
                            <span class="form-control-feedback">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <button
                                class="btn pull-right btn-primary mr-2"
                                @click.prevent="save()"
                        >
                            Save
                        </button>
                        <button @click="showModal=false" class="btn pull-right btn-danger mr-3">
                            Cancel
                        </button>
                    </div>
                </ValidationObserver>
            </div>
        </my-modal>

        <div class="col-sm-12">
            <table class="table table-stripped">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Mode</th>
                    <th>Document</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(doc,key) in docs" class="mb-2">
                    <td>
                        {{key+1}}
                    </td>
                    <td>
                        {{doc.driver}}
                    </td>
                    <td>
                        {{doc.vehicle}}
                    </td>

                    <td>
                        <a :href="'/'+doc.doc_path" target="_blank">{{ doc.doc_path }}</a>
                    </td>
                    <td>
                        {{doc.created_at | formatDate}}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import alertMixins from '../../../mixins/alert-mixins'
    import tableMixinsAction from '../../../mixins/table-mixins-actions'

    export default {
        components: {
            ValidationObserver,
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                jobId: '',
                showModal: false,
                docs: null,
                form: {
                    file: '',
                    bol_id: '',
                    driver:'',
                    vehicle:''
                }
            }
        },
        methods: {
            addDeliveryNote() {
                this.showModal = true;
            },
            save() {

                let formData = new FormData();

                formData.append('file', this.form.file);

                formData.append('bol_id', this.jobId);

                formData.append('driver', this.form.driver);

                formData.append('vehicle', this.form.vehicle);

                Event.fire('show-loader', true);

                axios.post('/delivery/note/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(() => {
                    Event.fire('show-loader', false);

                    this.$toastr.s(
                        "Cargo image added successfully "
                    );

                    this.showModal = false;

                    this.form = {};

                    this.getAddedDeliveryDocs();

                }).catch(() => {

                    this.$toastr.e(
                        "An error occured "
                    );

                    Event.fire('show-loader', false);
                })

            },
            handleFileUpload() {
                this.form.file = this.$refs.file.files[0];
            },
            getAddedDeliveryDocs() {
                let url = '/all-delivery/note/' + this.jobId;

                this.getRecord(url).then(({data}) => {
                    this.docs = data;
                })
            }

        },
        mounted() {
            this.jobId = this.$route.params.jobId;

            this.getAddedDeliveryDocs();
        }
    }
</script>