<template>
    <div>
        <div class="card-body">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-md-4 ">
                        <h4><strong class="pull-left">Date started : {{ dms.created_at | formatDate}}</strong></h4>
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                        <a :href="'/dsr/'+dms.Client_id" class="btn btn-warning pull-right">
                            View DSR
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12">
                <table class="table table-stripped border">
                    <tbody>
                    <tr>
                        <td><strong>ESL REF : </strong> {{ dms.file_number }}</td>
                        <td><strong>Client REF : </strong> {{ dms.ctm_ref }}</td>
                        <td><strong>BL NO : </strong> {{ dms.bl_number }}</td>
                    </tr>
                    <tr>
                        <td><strong>Cargo Weight : </strong> {{ dms.cargo_weight }} Tonne</td>
                        <td><strong>Shipper : </strong> {{ dms.shipper }}</td>
                        <td><strong>Shipping Lines : </strong> {{ dms.shipping_line}}</td>
                    </tr>
                    <tr>
                        <td><strong>Distance : </strong> {{ dms.distance }}</td>
                        <td><strong>Pick up Point : </strong> {{ dms.start }}</td>
                        <td><strong>Destination : </strong> {{ dms.destination}}</td>
                    </tr>
                    <tr>
                        <td colspan="3"><strong>Description : </strong> {{ dms.desc}}</td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td></td>
                        <td>
                            <job-processing-edit-dsr
                                    :dms="dms"
                                    :jobId="jobId"
                                    @dsr-update="getBillofLandingDetails"
                            ></job-processing-edit-dsr>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-12">
                <job-processing-dsr-stage-and-step
                        :jobId="jobId"
                >

                </job-processing-dsr-stage-and-step>
            </div>
        </div>
    </div>
</template>

<script>
    import tableMixinsAction from '../../../mixins/table-mixins-actions'

    export default {
        mixins: [tableMixinsAction],
        data() {
            return {
                jobId: '',
                dms: ''
            }
        },
        methods: {
            getBillofLandingDetails() {

                let url = '/bill-of-lading/' + this.jobId + '/show';

                this.getRecord(url).then(({data}) => {
                    this.dms = data;
                })
            }
        },
        mounted() {
            this.jobId = this.$route.params.jobId;

            this.getBillofLandingDetails();
        }
    }
</script>