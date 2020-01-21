<template>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body mt-0 pl-0 pr-0 pt-0">
                        <div class="row mt-0">
                            <div class="col-12 pt-0 mt-1 mb-2 bg-light-warnig  ">
                                <div class="pull-left">
                                    <add-step-to-job-processing
                                            :jobStages="jobStages.data"
                                            :jobId="jobId"
                                    ></add-step-to-job-processing>
                                </div>
                                <div class="float-right mt-2 mr-1">
                                    <span class="btn-circle btn-sm btn-warning ">{{jobStages.total}}</span>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0">
                        <div class="m-0 p-0" style="max-height: 400px; overflow-y: scroll;overflow-x:hidden">
                            <div v-for="(data,key) in jobStages.data">
                                <div class="job-step row" :class="{'active-job-step':data.id===activeJobStep.id}"
                                     @click.prevent="loadStepDetails(data)">
                                    <div class="col-md-2">
                                        <div class="bg-light-info btn-circle btn ">{{key+jobStages.from}}</div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="row">
                                            <div class="col-md-12">
                                                {{data.name}}
                                            </div>
                                            <div class="col-md-12 mt-1 mb-2">
                                            <span class="text-muted  w-100 pt-3 mt-3 mb-2 pb-2">
                                            {{data.type}}
                                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="text-right p-2">
                        {{jobStages.from}} - {{jobStages.to}} of {{jobStages.total}} &nbsp;&nbsp;
                        <button :class="disablePrevPage?'cursor-pointer disabled':'cursor-pointer'"
                                @click="loadPage('prev')">
                            <i class="fa fa-angle-left"></i>
                        </button>

                        <button :class="disableNextPage?'cursor-pointer disabled':'cursor-pointer'"
                                @click="loadPage('next')">
                            <i class="fa fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="card">
                    <div>
                        <div class="pull-left pt-3 pl-2">
                            <p><b>{{activeJobStep.name}}</b></p>
                        </div>
                        <div class="pull-right pt-1">
                            <job-processing-add-checklist-step-to-stage
                                    :stageid="activeJobStep.stage_id"
                                    :stagename="activeJobStep.name"
                                    :stage="activeJobStep"
                            ></job-processing-add-checklist-step-to-stage>
                        </div>
                    </div>
                    <hr class="mt-0 mb-0">

                    <div class="card-body">
                        <transition>
                            <keep-alive>
                                <router-view></router-view>
                            </keep-alive>
                        </transition>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                jobStages: {},
                params: {
                    url: '/?page=1',
                },
                selectedStage: null,
            }
        },
        computed: {
            disableNextPage() {
                return this.jobStages.to === this.jobStages.current_page
            },
            disablePrevPage() {
                return this.jobStages.from === this.jobStages.current_page
            },
            activeJobStep() {
                if (_.isEmpty(this.selectedStage)) {
                    let step = this.getFirstStep();

                    this.selectedStage = step;

                    return step;
                } else {
                    return this.selectedStage;
                }
            },
            jobId() {
                return this.$route.params.jobId;
            },
            stepId() {
                return this.$route.params.stepId;
            }
            ,
            ...mapGetters({
                selectedJobStage: 'selectedJobStage'
            })
        },
        methods: {
            getFirstStep() {
                let firstStepDetails = _.take(this.jobStages.data, 1).reduce((a, b) => Object.assign(a, b), {});

                console.log(firstStepDetails);

                let stepDetails = {
                    jobId: this.jobId,
                    stepId: _.isNil(this.stepId) ? firstStepDetails.id : this.stepId,
                };

                this.selectedStage = firstStepDetails;

                this.$store.commit('SET_SELECTED_JOB_INFO', stepDetails);

                return firstStepDetails;
            },
            loadFirstStepDetails() {

                if ((this.$route.path !== `/job-processing/step-details/${this.$route.params.jobId}/job-step/${this.$route.params.stepId}`)) {

                    this.getFirstStep();

                    this.$router.push({
                        name: 'job_processing_step_details_job_step_step_details',
                        params: {jobId: this.$route.params.jobId, stepId: this.$route.params.stepId}
                    });
                }
            },
            getJobStepDetails() {
                Event.fire('show-loader', true);

                axios.get('/get-job-stages/' + this.$route.params.jobId + '/' + this.params.url,{
                    params:{
                        perPage:'20'
                    }
                }).then((response) => {
                    this.jobStages = response.data;

                    this.getFirstStep();

                    Event.fire('show-loader', false)
                }).catch(() => {
                    Event.fire('show-loader', false)
                })
            },
            loadPage(type) {

                if (type === 'next' && !this.disableNextPage) {
                    this.params.url = this.jobStages.next_page_url;
                    this.getJobStepDetails();
                }

                if (type === 'prev' && !this.disablePrevPage) {
                    this.params.url = this.jobStages.prev_page_url;
                    this.getJobStepDetails();
                }

            },
            loadStepDetails(data) {
                this.selectedStage = data;
                let stepDetails = {
                    jobId: this.jobId,
                    stepId: data.id,
                };

                this.$store.commit('SET_SELECTED_JOB_INFO', stepDetails);

                if ((this.$route.path !== `/job-processing/step-details/${this.jobId}/job-step/${data.id}`)) {
                    this.$router.push({
                        name: 'job_processing_step_details_job_step_step_details',
                        params: {jobId: this.jobId, stepId: data.id}
                    });
                }

            }
        },
        watch: {
            'selectedJobStage'() {
                if (!_.isNil(this.selectedJobStage.stepId) && (this.$route.path !== `/job-processing/step-details/${this.jobId}/job-step/${this.selectedJobStage.stepId}`)) {
                    this.$router.push({
                        name: 'job_processing_step_details_job_step_step_details',
                        params: {jobId: this.jobId, stepId: this.selectedJobStage.stepId}
                    });
                }

                if (!_.isNil(this.selectedJobStage.stepId) && (this.$route.path === `/job-processing/step-details/${this.jobId}/job-step/${this.selectedJobStage.stepId}`)) {
                    Event.fire('load-checklist', this.selectedJobStage.stepId)
                }
            }
        },
        created() {
            this.getJobStepDetails();
        },
        mounted() {

            Event.listen('load-first-step-details', () => {
                if (!_.isNil(this.selectedJobStage.stepId) && this.$route.path !== `/job-processing/step-details/${this.jobId}/job-step/${this.$route.params.stepId}`) {
                    this.getFirstStep();
                }
            });

            Event.listen('job-stage-added', (id) => {
                this.getJobStepDetails();

                this.$router.push({
                    name: 'job_processing_step_details_job_step_step_details',
                    params: {jobId: this.jobId, stepId: id}
                });

            });
        }
    }
</script>

<style lang="scss">
    .job-step {
        cursor: pointer;
        padding: 5px;
    }

    .job-step:hover {
        background: #ebf3f5;
    }

    .active-job-step {
        background: #ebf3f5;
    }

</style>