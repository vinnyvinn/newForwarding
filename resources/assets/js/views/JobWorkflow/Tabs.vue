<template>
    <div class="row">
        <div class="col-lg-12 col-xlg-12 col-md-12">
            <div class="card">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs profile-tab" role="tablist">

                    <li class="nav-item">
                        <router-link class="nav-link "  to="/job-processing/workflow">
                            Job Workflow
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link "  to="/job-processing/stages">
                            Stages
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link "  to="/stage/required-documents">
                            Required Documents
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link "  to="/job-workflow/shipments">
                            Shipments
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link "  to="/job-workflow/shipments-types">
                            Shipment Types
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link "  to="/job-workflow/shipments-sub-types">
                            Shipment Sub Types
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "sampling done here"
            }
        },
        mounted(){
            if(this.$route.path === '/'){
                this.$router.push({
                    name: 'job_processing_workflow',
                });
            }

        }
    }
</script>