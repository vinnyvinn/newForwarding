<template>
    <div class="row">
        <div class="col-sm-12 mb-2">
            <div class="text-left">
                <h5 style="margin-top: 4px"><b>Account Name: &nbsp;&nbsp;&nbsp;&nbsp;</b> Freightwell Express Limited Nyali, Mombasa </h5>
                <h5 style="margin-top: 4px"><b>Bank:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                    Ecobank Kenya Limited </h5>

                <h5 style="margin-top: 4px"><b>Account Detail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b> {{ currency }} Account : {{ currency === 'USD'
                    ? '0251015023806101' : '0250015023806101'}} </h5>

                <h5 style="margin-top: 4px"><b>Swift Adrress: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> ECOCKENA </h5>
            </div>
            <br/>
            <div style="text-align: left !important;">
                <h5 style="margin-top: 4px" ><b>PAYMENT TERMS: </b> INVOICE DUE ON DEMAND</h5>
                <h5 style="margin-top: 4px">ANY OVERDUE AMOUNT WILL ATTRACT 3% INTEREST PER MONTH</h5>
                <h5 style="margin-top: 4px">ALL TRANSACTIONS ARE GOVERNED BY OUR STANDARD TRADING CONDITIONS AVAILABLE UPON REQUEST</h5>
            </div>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currency: {
                required: true
            }
        },
        data() {
            return {}
        }
    }
</script>