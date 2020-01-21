<template>
    <div>
        <button data-toggle="modal" data-target=".bs-example-modal-details" class="btn btn-info" style="display: none">
            Edit Details
        </button>
        <div class="modal fade bs-example-modal-details" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
             aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myLargeModalLabel">Edit DSR</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="col-12">
                            <form class="form-material m-t-40" action="" method="post">
                                <div class="row">
                                    <input type="hidden" name="cargo_id" v-model="quotation.cargo.id">
                                    <input type="hidden" name="customer_id" v-model="quotation.customer.id">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="Name">Customer Name</label>
                                            <input type="text" required id="Name" name="Name" class="form-control"
                                                   v-model="quotation.customer.Name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="Contact_Person">Contact Person</label>
                                            <input type="text" required id="Contact_Person" name="Contact_Person"
                                                   class="form-control" v-model="quotation.customer.Contact_Person">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="Telephone">Phone</label>
                                            <input type="text" required id="Telephone" name="Telephone"
                                                   class="form-control" v-model="quotation.customer.Telephone">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="EMail">Email</label>
                                            <input type="text" required id="EMail" name="EMail" class="form-control"
                                                   v-model="quotation.customer.EMail">
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="bl_no">B/L NO</label>
                                            <input type="text" required id="bl_no" name="bl_no" class="form-control"
                                                   v-model="quotation.cargo.bl_no">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="cargo_name">CARGO</label>
                                            <input type="text" required id="cargo_name" name="cargo_name"
                                                   class="form-control" v-model="quotation.cargo.cargo_name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="vessel_name">VESSEL/DSTN</label>
                                            <input type="text" required id="vessel_name" name="vessel_name"
                                                   class="form-control" v-model="quotation.cargo.vessel_name">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="cargo_qty">QUANTITY</label>
                                            <input type="number" required id="cargo_qty" name="cargo_qty"
                                                   class="form-control" v-model="quotation.cargo.cargo_qty">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="cargo_weight">WEIGHT</label>
                                            <input type="text" required id="cargo_weight" name="cargo_weight"
                                                   class="form-control" v-model="quotation.cargo.cargo_weight">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="container_no">C'NER</label>
                                            <input type="text" required id="container_no" name="container_no"
                                                   class="form-control" v-model="quotation.cargo.container_no">
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <label for="consignee_name">CONSIGNEE</label>
                                            <input type="text" required id="consignee_name" name="consignee_name"
                                                   class="form-control" v-model="quotation.cargo.consignee_name">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input class="btn pull-right btn-primary" type="submit" value="Update">
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger waves-effect pull-left"
                                                    data-dismiss="modal" style="margin-top: -16px">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12">
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            quotationInfo: {
                required: true
            }
        },
        data() {
            return {
                quotation: {
                    cargo: {
                        id: '',
                        bl_no: '',
                        cargo_name: '',
                        vessel_name: '',
                        cargo_qty: '',
                        cargo_weight: '',
                        container_no: '',
                        consignee_name: ''
                    },
                    customer: {
                        id: '',
                        Name: '',
                        Contact_Person: '',
                        Telephone: '',
                        EMail: ''
                    }
                }
            }
        }
    }
</script>