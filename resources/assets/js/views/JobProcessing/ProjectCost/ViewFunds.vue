<template>
    <div class="pull-left mr-2">
        <button @click="showModal=true" class="btn btn-success">
            View Requested Fund
        </button>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
                width="80%"
        >
            <div slot="title"> Requested Fund</div>
            <div slot="body" class="p-2">
                <div class="card">
                    <job-processing-project-cost-request-fund
                            :jobId="jobId"
                    >
                    </job-processing-project-cost-request-fund>
                    <div class="card-body" style="height:300px;overflow-y:scroll;">
                        <table class="table table-stripped" >
                            <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Em NO/ID</th>
                                <th>Deadline</th>
                                <th>Reason</th>
                                <th>S/File</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cash in pettyCash">
                                    <td>{{cash.employee}}</td>
                                    <td>{{cash.employee_no}}</td>
                                    <td>{{cash.deadline}}</td>
                                    <td>{{cash.reason}}</td>
                                    <td>{{cash.file_path}}</td>
                                    <td>{{cash.status}}</td>
                                    <td>{{cash.amount}}</td>
                                    <td>
                                        <span v-if="cash.status_value === 0">
                                            <button @click="approve(cash.id)"
                                               class="btn btn-xs btn-primary">approve</button>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th colspan="6">Total</th>
                                <th>{{parseFloat(totalAmount).toFixed(2)}}</th>
                            </tr>
                            </tfoot>
                        </table>

                    </div>
                </div>
                <button @click="showModal=false" class="btn pull-right btn-danger mr-3">
                    Cancel
                </button>
            </div>
        </my-modal>
    </div>
</template>

<script>
    import tableMixinsAction from '../../../mixins/table-mixins-actions'
    import alertMixins from '../../../mixins/alert-mixins'

    export default {

        mixins: [alertMixins, tableMixinsAction],

        props:{
            jobId:{
                required:true
            }
        },
        data() {
            return {
                showModal:false,
                pettyCash:null
            }
        },
        computed:{
            totalAmount(){
                return (this.pettyCash.reduce(function (sum, obj) {
                    return sum + parseFloat(obj.amount);
                }, 0));
            }
        },
        methods:{
            getFunds(){
                let url = '/api/view-petty-cash/'+this.jobId;
                this.getRecord(url, {}, 'Petty Cash').then((response) => {
                    this.pettyCash = response.data;
                })
            },
            approve(id){
                let url = '/approve-project-cost-request/'+id;

                this.getRecord(url, {}, 'Petty Cash Approved successfully').then((response) => {
                    this.getFunds();
                    
                    this.$toastr.s(
                         " Approval successfully"
                    );
                }).catch(()=>{
                    this.$toastr.e(
                        " An error occured"
                    );
                })
            }
        },
        mounted(){
            this.getFunds();

            Event.listen('load-requested-funds',()=>{
                this.getFunds();
            })

        }
    }
</script>