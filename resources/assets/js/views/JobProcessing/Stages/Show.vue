<template>
    <div>
        <div style="max-height: 500px; overflow-y: scroll;overflow-x:hidden">
            <table class="table">
                <thead>
                <th>Name</th>
                <th>Notification</th>
                <th>Time</th>
                <th>Type</th>
                <th>Actions</th>
                </thead>
                <tbody>
                <tr v-for="step in data.data">
                    <td>
                        <job-processing-complete-stage-step
                                :step="step"
                                :jobId="jobId"
                        ></job-processing-complete-stage-step>
                    </td>
                    <td>
                        <i class="fa fa-bell" v-if="step.notification"></i>
                        <i class="fa fa-bell-slash" v-else></i>
                    </td>
                    <td>
                        {{step.timing}}
                    </td>
                    <td>
                        {{step.type}}
                    </td>
                    <td>
                        <button type="submit" class="btn btn-sm btn-danger"
                                @click="deleteStep(step.id)">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <my-drawer>
                <div slot="content">
                    sampling {{stepDetails}}
                </div>
            </my-drawer>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import MyDrawer from "../../../components/MyDrawer";
    import TableMixinsActions from '../../../mixins/table-mixins-actions'

    export default {
        components: {MyDrawer},
        mixins: [TableMixinsActions],
        data() {
            return {
                checkedSteps: [],
                jobId: '',
                stepId: '',
                data: '',
                stepDetails: ''

            }
        },
        computed: {
            ...mapGetters({
                selectedJobStage: 'selectedJobStage'
            })

        },
        methods: {
            getStageComponents(id) {
                Event.fire('show-loader', true);

                axios.get('/api/billofLandingStageComponents/' + id).then((response) => {
                    this.data = response.data;

                    Event.fire('show-loader', false)
                }).catch(() => {
                    Event.fire('show-loader', false)
                })
            },
            showDrawer(stepDetails) {
                this.stepDetails = stepDetails;
                Event.fire('show-drawer', true);

            },
            deleteStep(id) {
                let url = "/api/delete-bl-StageComponents/" + id;

                this.removeRecord(url).then(() => {
                    this.getStageComponents(this.selectedJobStage.stepId);

                    Event.fire('reload-dsr');

                });
            }
        },

        watch: {
            '$route.params.stepId': function (stepId) {
                if (!_.isNull(stepId)) {
                    this.getStageComponents(stepId)
                }
            }
        },
        mounted() {
            this.jobId = this.$route.params.jobId;

            this.stepId = this.$route.params.stepId;

            this.getStageComponents(this.$route.params.stepId);

            console.log(this.$route.params.stepId);

            Event.listen('load-stage-checklist', (value) => {
                if (!_.isEmpty(value) && (this.$route.path !== `/job-processing/step-details/${value.jobId}/job-step/${value.stepId}`)) {
                    this.$router.push({
                        name: 'job_processing_step_details_job_step_step_details',
                        params: {jobId: value.jobId, stepId: value.stepId}
                    });
                } else {
                    this.getStageComponents(value.stepId);
                }
            });

            Event.listen('load-checklist',(stepId)=>{
                this.getStageComponents(stepId);

            })
        }
    }
</script>