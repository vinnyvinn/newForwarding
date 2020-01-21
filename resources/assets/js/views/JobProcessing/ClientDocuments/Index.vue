<template>
    <div class="card mb-2">
        <job-processing-add-clients-docs
                :jobId="jobId"
                @document-added="getUploadedDocs"
        >

        </job-processing-add-clients-docs>

        <div v-for="(doc,key) in docs" class="mb-2">
            {{key+1}} . <a :href="'/'+doc.doc_path" target="_blank">{{ doc.name }}</a>
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
                docs:null,
            }
        },
        methods: {
            getUploadedDocs(){

                let url = '/client/get-uploaded-docs/' + this.jobId;

                this.getRecord(url).then(({data}) => {
                    this.docs = data.data;
                })

            }

        },
        mounted() {
            this.jobId = this.$route.params.jobId;

            this.getUploadedDocs();
        }
    }
</script>