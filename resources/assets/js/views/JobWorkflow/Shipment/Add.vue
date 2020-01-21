<template>
    <div>
        <button @click="showModal = true" class="btn btn-primary" v-if="type === 'button'">
            Add Shipment
        </button>
        <a href="#" class="btn-block" v-else>Add Shipment</a>
        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-shipment"
        >
            <div slot="title"> Add Shipment </div>
            <div slot="body">
                <form method="post" @submit.prevent="addShipment">
                    <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addShipment">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Name
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <ValidationProvider rules="required" v-slot="{ errors }" name="Shipment ">
                                        <input type="text" v-model="form.name" class="form-control">
                                        <span class="form-control-feedback">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <label class="col-md-12 control-label">
                                    Slug
                                    <span class="text-danger">*</span>
                                </label>
                                <div class="col-md-12">
                                    <ValidationProvider rules="" v-slot="{ errors }" name="slug">
                                        <input type="text" v-model="nameSlug"  class="form-control">
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
    import MyDrawer from "../../../components/MyDrawer";

    export default {
        props:{
          type:{
              default:'button'
          }
        },
        components: {
            MyDrawer,
            ValidationObserver,
        },
        mixins: [alertMixins,tableMixinsAction],
        data() {
            return {
                showDialog: true,
                showModal:false,
                form: {
                    name: null,
                    slug: null
                },
            };
        },
        computed:{
            nameSlug(){
                return _.kebabCase(this.form.name);
            }
        },
        methods: {
            addShipment() {
                this.form.slug = this.nameSlug;

                let url = '/api/shipments',
                    data = this.form,
                    serviceName = 'shipment';

                this.addRecord(url, data, serviceName).then((response)=>{
                    this.form = {};
                    this.showModal = false;
                });
            }
        },
        mounted() {

        }
    }
</script>