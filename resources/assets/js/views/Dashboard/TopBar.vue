<template>
    <div class="row">
        <!-- Column -->
        <div class="col-md-4 mb-0">
            <div class="card">
                <div class="card-body mb-0 mt-0">
                    <div class="pull-left">
                        <h2 class="mb-0">
                            {{data.quotations}} <i class="ti-angle-up font-14 text-primary"></i>
                        </h2>
                        <small class="text-muted">Quotations</small>
                    </div>

                    <button @click="goToViewQuotations()" class="btn btn-outline- btn-rounded pull-right">View
                        All Quotations
                    </button>
                </div>
            </div>
        </div>


        <div class="col-lg-4 col-md-4  mb-0">
            <div class="card">
                <div class="card-body mb-0 mt-0">
                    <div class="pull-left">
                        <h2 class="mb-0">
                            {{data.jobs}} <i class="ti-angle-up font-14 text-success"></i>
                        </h2>
                        <small class="text-muted">Jobs</small>
                    </div>

                    <button @click="goToViewJobs()" class="btn btn-outline- btn-rounded pull-right">View
                        Jobs
                    </button>
                </div>
            </div>
        </div>
        <!-- Column -->
        <div class="col-lg-4 col-md-4  mb-0">
            <div class="card">
                <div class="card-body mb-0 mt-0">
                    <div class="pull-left">
                        <h2 class="mb-0">
                            {{data.approvals}} <i class="ti-angle-up font-14 text-warning"></i>
                        </h2>
                        <small class="text-muted">Approvals</small>
                    </div>

                    <button @click="goToViewApprovals()" class="btn btn-outline- btn-rounded pull-right">View
                        Approvals
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import vueTableMixin from '../../mixins/table-mixins-actions'

    export default {
        mixins:[vueTableMixin],
        props: {
            cangenerateguotation: {
                default: true
            },
        },
        data() {
            return {
                url: {
                    approval: '/forwarding',
                    quotations: '/quotations',
                    jobs: '/dsr#/jobs/active'
                },
                data:{}
            }
        },
        methods: {
            goToViewJobs() {
                return window.location.href = this.url.jobs
            },
            goToViewApprovals() {
                return window.location.href = this.url.approval
            },
            goToViewQuotations() {
                return window.location.href = this.url.quotations
            },
            getStats(){
                this.getRecord('/api/dashboard-stats',false).then((response)=>{
                    this.data = response.data;
                })
            }
        },
        created() {
            this.getStats();
        }
    }
</script>