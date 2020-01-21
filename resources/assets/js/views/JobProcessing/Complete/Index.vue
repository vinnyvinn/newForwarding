<template>
    <div class="card">
        <div class="pull-right">
            <div class="col-sm-4 pull-right  mb-2">
                <a :href="'/complete-ctm/'+jobId" class="btn btn-danger">Are You Sure?</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                jobId: ''
            }
        },
        mounted() {
            this.jobId = this.$route.params.jobId;
        }
    }
</script>