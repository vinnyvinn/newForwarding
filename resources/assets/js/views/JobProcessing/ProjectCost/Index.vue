<template>
    <div class="card p-2">
        <div class="row offset-1">
            <div class="col-md-5">
                <job-processing-project-cost-request-fund
                        :jobId="jobId"
                >
                </job-processing-project-cost-request-fund>

                <job-processing-project-cost-request-view-funds
                        :jobId="jobId"
                >
                </job-processing-project-cost-request-view-funds>
            </div>
            <div class="col-md-5 ml-4">
                <job-processing-project-cost-add-project-service-cost
                        :jobId="jobId"
                >
                </job-processing-project-cost-add-project-service-cost>

                <job-processing-project-view-project-statement
                        :jobId="jobId"
                >
                </job-processing-project-view-project-statement>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobId: ''
            }
        },
        mounted() {
            this.jobId = this.$route.params.jobId;
        }
    }
</script>