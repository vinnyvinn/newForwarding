<template>
    <div class="row">

        <p><b>{{setName | capitalizeFirst}} Details</b></p>
        <hr/>

        <table style="width:100%">
            <tr>
                <td class="pull-right"><h5><b>To</b></h5></td>
                <td><button class="btn btn-warning btn-xs pull-right" @click="editCargoDetails" ><i class="fa fa-pencil"></i></button></td>
            </tr>
            <tr>
                <td class="pull-right"><h4 id="client-name"> Name &nbsp;&nbsp;:&nbsp;&nbsp;</h4></td>
                <td><h5>{{customerDetails.Name}}</h5></td>
            </tr>
            <tr>
                <td class="pull-right" style="white-space: nowrap;"><h5 id="contact-person">Contact Person &nbsp;&nbsp;:&nbsp;&nbsp;</h5>
                </td>
                <td><h5>{{customerDetails.Contact_Person}}</h5></td>
            </tr>
            <tr>
                <td class="pull-right"><h5 id="contact-phone">Phone &nbsp;&nbsp;:&nbsp;&nbsp;</h5></td>
                <td><h5>{{customerDetails.Telephone}}</h5></td>
            </tr>
            <tr>
                <td class="pull-right"><h5 id="contact-email">Email &nbsp;&nbsp;:&nbsp;&nbsp;</h5></td>
                <td style="white-space: nowrap;"><h5> {{customerDetails.EMail}}</h5></td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            customerDetails: {
                required: false,
                type: Object
            },
            quotationType: {
                required: false,
                type: String,
                default: 'Customer'
            }
        },
        data() {
            return {
                title: 'Customer'
            }
        },
        computed: {
            setName() {
                if (this.quotationType === 'import') {
                    return this.title = 'Consignor';
                }

                if (this.quotationType === 'export') {
                    return this.title = 'Consignee'
                }
            }

        },
        methods:{
            editCargoDetails(){
                this.$store.commit('SET_CUSTOMER_DETAILS_SET', false);
            }
        },
        created() {

        }
    }
</script>

<style lang="scss">
    .vs__search {
        padding: 2px !important;
    }
</style>