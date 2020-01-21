<template>
    <div class="card mb-2">
        <div>
            <button @click="addCargoImage" class="btn btn-info mb-2">
                Add Cargo Image
            </button>
        </div>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
        >
            <div slot="title"> Add Cargo Image</div>
            <div slot="body">
                <ValidationObserver v-slot="{ valid, passes  }" ref="addShipment">
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

        <div v-for="(image,key) in images" class="mb-2">
            {{key+1}} . <a :href="'/'+image.image_path" target="_blank">{{ image.image_path }}</a>
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
                images: null,
                form: {
                    file: '',
                    bill_of_landing_id: ''
                }
            }
        },
        methods: {
            addCargoImage() {
                this.showModal = true;
            },
            save() {

                let formData = new FormData();

                formData.append('file', this.form.file);

                formData.append('bill_of_landing_id', this.jobId);

                Event.fire('show-loader', true);

                axios.post('/cargo/image/upload', formData, {
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

                    this.getCargoImages();

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
            getCargoImages() {
                let url = '/cargo/image/' + this.jobId;

                this.getRecord(url).then(({data}) => {
                    this.images = data.data;
                })
            }

        },
        mounted() {
            this.jobId = this.$route.params.jobId;

            this.getCargoImages();
        }
    }
</script>