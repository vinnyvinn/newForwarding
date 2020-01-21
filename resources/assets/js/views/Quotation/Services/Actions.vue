<template>
    <div>
        <button @click="removeService(service)" class="btn btn-xs btn-danger"><i
                class="fa fa-trash"></i>
        </button>

        <edit-quotation-service-component
                :quoteid="quoteid"
                :service="service"
                :services="services"
                :taxes="taxes"
                :rate="rate"
                :currency="currency"
                :serviceIndex="serviceIndex"
        ></edit-quotation-service-component>
    </div>
</template>

<script>
    import TableMixinsActions from '../../../mixins/table-mixins-actions';

    export default {
        mixins: [TableMixinsActions],
        props: {
            services: {
                required: false,
                type: Array,
                default: null
            },
            service: {
                default: null,
                type: Object
            },
            quoteid: {
                default: null,
                type: Number
            },
            taxes: {
                required: false,
                type: Array,
                default: null
            },
            rate: {
                required: false,
                type: Number,
                default: null
            },
            serviceIndex: {
                required: true,
                type: Number,
            },
            currency: {
                required: true,
            }
        },
        data() {
            return {
                showModal: false
            }
        },
        methods: {
            removeService(service) {
                if (!_.isNil(this.quoteid)) {

                    this.$swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {

                            Event.fire('show-loader', true);

                            let data = {
                                'service_id': service.id
                            };

                            return axios.post('/quotation-service-delete', data).then((response) => {
                                Event.fire('show-loader', false);

                                this.$toastr.s(
                                    "Service removed successfully"
                                );

                                this.$store.commit('DELETE_QUOTATION_SERVICES', service);

                            }).catch((error) => {
                                Event.fire('show-loader', false);

                                this.$toastr.e(
                                    "Service not removed "
                                );
                            });
                        }
                    });
                }else {
                    return this.$store.commit('DELETE_QUOTATION_SERVICES', service);

                }
            },

            editService(service) {
                alert("this is the service to be edited" + service);

            }
        }
    }
</script>