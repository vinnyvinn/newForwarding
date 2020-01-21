<template>
    <div class="row">
        <div class="col-lg-12 col-xlg-12 col-md-12" style="border-top: 1px solid #dee2e6;">
            <div class="card">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item" @click="loadStepDetails()">
                        <router-link
                                class="nav-link"
                                :class="{'active':setActiveClassOnJobStep}"
                                :to="{name:'job_processing_job_steps', params:{jobId:jobid }}"
                        >
                            Job Processing
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                :to="{name:'job_processing_clients_documents', params:{jobId:jobid }}"
                        >
                            Clients Documents
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                :to="{name:'job_processing_cargo_images', params:{jobId:jobid }}"
                        >
                            Cargo Images
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                to="/job-processing/job-dsr"
                                :to="{name:'job_processing_job_dsr', params:{jobId:jobid }}"
                        >
                            DSR
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                to="/job-processing/job-delivery-docs"
                                :to="{name:'job_processing_job_delivery_docs', params:{jobId:jobid }}"
                        >
                            Delivery Docs
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                to="/job-processing/complete-job"
                                :to="{name:'job_processing_complete_job', params:{jobId:jobid }}"
                        >
                            Complete
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                to="/job-processing/project-cost"
                                :to="{name:'job_processing_project_cost', params:{jobId:jobid }}"
                        >
                            Project Cost
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                                class="nav-link "
                                to="/job-processing/purchase-order"
                                :to="{name:'job_processing_purchase_order', params:{jobId:jobid }}"
                        >
                            Purchase Order
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            jobid: {
                required: true,
                type: Number
            }
        },
        data() {
            return {
                currentPath: '',
                stepId: ''
            }
        },
        computed: {
            setActiveClassOnJobStep() {
                return this.$route.matched.some(route => route.name === 'job_processing_step_details_job_step_step_details') ||
                    this.$route.matched.some(route => route.name === 'job_processing_job_steps');
            }
        },
        methods: {
            loadStepDetails() {
                Event.fire('load-first-step-details')
            },
        },
        mounted() {
            this.currentPath = this.$route.path;
            this.stepId = this.$route.params.stepId;

            if(this.$route.path === '/'){
                this.$router.push({
                    name: 'job_processing_job_steps',
                    params: {jobId: this.jobid}
                });
            }

        }
    }
</script>