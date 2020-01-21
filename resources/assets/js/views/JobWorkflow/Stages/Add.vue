<template>
    <div>
        <button @click="showModal = true" class="btn btn-primary">
            Add Stage
        </button>
        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-shipment"
        >
            <div slot="title"> Add Job Stage</div>
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
                                        <input type="text" v-model="form.name" class="form-control">
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
                                        <textarea type="text" v-model="form.description" class="form-control">
                                        </textarea>
                                        <span class="form-control-feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>

                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Shipment
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <shipment-list-dropdown
                                            @selected-value="shipment"
                                    ></shipment-list-dropdown>
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
    import MyDrawer from "../../../components/MyDrawer";

    export default {
        components: {
            MyDrawer,
            ValidationObserver,
        },
        mixins: [alertMixins, tableMixinsAction],
        data() {
            return {
                showDialog: true,
                showModal: false,
                form: {
                    name: null,
                    description: null,
                    slug: null,
                    type: null
                }
            };
        },
        computed: {
            nameSlug() {
                return _.kebabCase(this.form.name);
            }
        },
        methods: {
            shipment(value) {
                this.form.type = value.name;
            },
            save() {
                this.form.slug = this.nameSlug;

                let url = '/api/jobStages',
                    data = this.form,
                    serviceName = 'Job Stage';

                this.addRecord(url, data, serviceName).then((response) => {
                    this.form = {};
                    this.showModal = false;
                });
            }
        },

        mounted() {

        }
    }
</script>