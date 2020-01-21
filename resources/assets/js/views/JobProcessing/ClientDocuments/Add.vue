<template>
    <div>
        <div>
            <a :href="'/quotation/'+jobId" target="_blank" class="btn btn-success mb-2">
                Running Quote
            </a>
            <button @click="addClientImage" class="btn btn-info mb-2">
                Add Client Document
            </button>

        </div>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Add Client Documents</div>
            <div slot="body">
                <ValidationObserver v-slot="{ valid, passes  }" ref="addShipment">
                    <div class="form-group">
                        <ValidationProvider rules="required" v-slot="{ errors }"
                                            name="Send notification ">
                            <label>Select Document</label>
                            <v-select
                                    :options="requiredDocs"
                                    v-model="form.doc_name"
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

    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import tableMixinsAction from '../../../mixins/table-mixins-actions'

    export default {
        props: {
            jobId: {
                required: true,
            }
        },
        mixins: [tableMixinsAction],
        components: {
            ValidationObserver,
        },
        data() {
            return {
                showModal: false,
                quote: '',
                requiredDocs: [],
                form: {
                    file: '',
                    bill_of_landing_id: '',
                    doc_name: '',
                    vessel_id: ''
                }
            }
        },
        methods: {
            addClientImage() {
                this.showModal = true;
            },
            handleFileUpload() {
                this.form.file = this.$refs.file.files[0];
            },
            save() {

                if (_.isNil(this.form.file)) {
                    return this.flashError('File cannot be empty')
                }

                let formData = new FormData();

                formData.append('file', this.form.file);

                formData.append('bill_of_landing_id', this.jobId);

                // formData.append('vessel_id', this.quote.id);
                formData.append('vessel_id', this.jobId);

                formData.append('name', this.form.doc_name.name);

                Event.fire('show-loader', true);

                axios.post('/vessel/doc/upload', formData, {
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

                    this.$emit('document-added');

                }).catch(() => {

                    this.$toastr.e(
                        "An error occured "
                    );

                    Event.fire('show-loader', false);
                })

            },
            getClientRequiredDocs() {
                let url = '/client/required-docs/' + this.jobId;

                this.getRecord(url).then(({data}) => {
                    this.quote = data;
                    this.requiredDocs = JSON.parse(data.doc_ids);
                })
            },
        },
        created() {
            this.getClientRequiredDocs();
        }
    }
</script>