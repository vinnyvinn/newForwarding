<template>
    <div>
        <div class="tab-pane mt-5 active show" id="checklist1" role="tabpanel" v-for="(value,index) in DSR">

            <h3>{{value.no}}. {{value.title}}</h3>
            <table class="table table-stripped border">
                <thead>
                <tr>
                    <th><b>Checklist</b></th>
                    <th><b>Type</b></th>
                    <th><b>Data</b></th>
                    <th><b>Notification</b></th>
                    <th><b>Timing</b></th>
                    <th><b>Time Taken</b></th>
                    <th class="text-right"><b>Date Added</b></th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="data in value.checklist_data">
                    <td>{{data.name}}</td>
                    <td>{{data.type}}</td>
                    <td>
                        <span v-if="data.type === 'file' && data.data_value !== ''">
                            <a :href="data.data_value" target="_blank"> view file</a>
                        </span>
                        <span v-else>{{data.data_value}}</span>
                    </td>
                    <td>
                        <i class="fa fa-bell" v-if="data.notification"></i>
                        <i class="fa fa-bell-slash" v-else></i>
                    </td>
                    <td>{{data.timing}}</td>
                    <td>{{data.time_taken}}</td>
                    <td class="text-right">{{data.created_at }}</td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<script>
    import alertMixins from '../../../mixins/alert-mixins'
    import tableMixinsAction from '../../../mixins/table-mixins-actions'

    export default {
        mixins: [alertMixins, tableMixinsAction],
        props: {
            jobId: {
                required: true
            }
        },
        data() {
            return {
                DSR: null
            }
        },
        methods: {
            getDSR() {
                let url = `/dms/edit/${this.jobId}/stage-step-details`;
                this.getRecord(url, {}, 'DSR', false).then((response) => {
                    this.DSR = response.data;
                })
            }
        },
        mounted(){
            this.getDSR();

            Event.listen('reload-dsr', ()=>{
                this.getDSR();
            })
        },
        created() {

        }
    }
</script>