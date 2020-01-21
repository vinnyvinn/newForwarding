<template>
    <div class="pull-left mr-2 ">
        <button @click="showModal=true" class="btn btn-success">
            Project Statement
        </button>

        <my-modal
                @close-modal="showModal = false"
                v-if="showModal"
                id="add-stage-checklist"
                width="80%"
        >
            <div slot="title"> Project Statement</div>
            <div slot="body" class="p-2">
                <div class="card">
                    <job-processing-project-cost-add-project-service-cost
                            :jobId="jobId"
                    >
                    </job-processing-project-cost-add-project-service-cost>
                    <div class="card-body">
                        <table class="table table-stripped">
                            <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Receipt</th>
                                <th>Selling Price</th>
                                <th>Cost</th>
                                <th>Profit</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="cash in projectStatement">
                                <td>{{cash.name}}</td>
                                <td><a :href="cash.receipt" target="_blank" v-if="cash.receipt!==''"> Download</a></td>
                                <td>{{cash.selling_price}}</td>
                                <td>{{cash.cost}}</td>
                                <td>{{cash.profit}}</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th colspan="2">Total</th>
                                <th>{{parseFloat(totalSellingPrice).toFixed(2)}}</th>
                                <th>{{parseFloat(totalCost).toFixed(2)}}</th>
                                <th>{{parseFloat(totalProfit).toFixed(2)}}</th>
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

        props: {
            jobId: {
                required: true
            }
        },
        data() {
            return {
                showModal: false,
                projectStatement: null
            }
        },
        computed: {
            totalSellingPrice() {
                return (this.projectStatement.reduce(function (sum, obj) {
                    return sum + parseFloat(obj.selling_price);
                }, 0));
            },
            totalCost() {
                return (this.projectStatement.reduce(function (sum, obj) {
                    return sum + parseFloat(obj.cost);
                }, 0));
            },
            totalProfit() {
                return (this.projectStatement.reduce(function (sum, obj) {
                    return sum + parseFloat(obj.profit);
                }, 0));
            }
        },
        methods: {
            getProjectStatement() {
                let url = '/api/project-statement/' + this.jobId;
                this.getRecord(url, {}, 'Petty Cash').then((response) => {
                    this.projectStatement = response.data;
                })
            }
        },
        mounted() {
            this.getProjectStatement();

            Event.listen('load-project-statement', () => {
                this.getProjectStatement();
            })

        }
    }
</script>