<template>
    <address class="mb-0">
        <table>
            <tr>
                <td colspan="2">
                    <img :src="'/'+companyInfo.logo_url" alt="" style="height:80px">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <p>{{companyInfo.company_tag_line}}</p>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h5 class="mt-2">{{companyInfo.building}}</h5>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h5> {{companyInfo.building_name}} </h5>
                </td>
            </tr>
            <tr>
                <td>
                    <h5> Email</h5>
                </td>
                <td>
                    <h5>: {{companyInfo.company_email}}</h5>
                </td>
            </tr>
            <tr>
                <td><h5>Web</h5></td>
                <td><h5>: {{companyInfo.company_domain}}</h5></td>
            </tr>
        </table>
    </address>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                address: {}
            }
        },
        computed: {
            ...mapGetters({
                companyInfo: 'companyInfo'
            })
        },
        mounted() {
            this.$store.dispatch('getCompanyInfo');
        }
    }
</script>