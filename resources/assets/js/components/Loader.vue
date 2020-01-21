<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage">

        </loading>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';


    export default {
        components: {
            Loading
        },
        data() {
            return {
                fullPage: true,
                isLoading: false
            }
        },
        methods: {
            onCancel() {

            }
        },
        created() {
            Event.listen('show-loader', (status) => {
                this.isLoading = status;
            });
        }
    }
</script>

<style>
    .velmld-spinner[data-v-1a4f1fc2] {
        top: 150px !important;
    }
</style>