<script>
    import Vue from 'vue';
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    // Init plugin
    Vue.use(Loading);

    export default {
        data() {
            return {
                fullPage: false,
                isLoading:false
            }
        },
        methods: {
            submit() {
                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: true,
                    onCancel: this.onCancel,
                });
                // simulate AJAX
                setTimeout(() => {
                    loader.hide()
                },5000)
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        }
    }
</script>