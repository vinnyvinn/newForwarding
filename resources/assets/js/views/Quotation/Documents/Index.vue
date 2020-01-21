<template>
    <div class="row m-0">
        <div class="col-sm-12 m-0">
            <div class="col-sm-12 mb-0">
                <h5><b>Add Require Documents</b></h5>
            </div>
            <ValidationObserver v-slot="{ valid, passes  }" class="col-sm-12 " ref="addDocument">
                <div class="row mt-0">
                    <div class="col-sm-10">
                        <div class="form-group pl-2 pt-2 ">
                            <ValidationProvider rules="required" v-slot="{ errors }" name="document">
                                <v-select
                                        label="name"
                                        @search:focus="clearDocInput"
                                        @input="getSelectedDocValue"
                                        :filterable="true"
                                        :options="filteredDocs"
                                        v-model="selectedDoc"
                                >
                                    <template slot="no-options">
                                        Select document
                                    </template>
                                    <template slot="option" slot-scope="option">
                                        <div class="d-center">
                                            {{option.name}} - ({{option.description}})
                                        </div>
                                    </template>
                                    <template slot="selected-option" slot-scope="option">
                                        <div class="selected d-center">
                                            {{option.name}} - ({{option.description}})
                                        </div>
                                    </template>
                                </v-select>
                                <span class="form-control-feedback">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                    </div>
                    <div class="col-sm-2  ">
                        <button class="btn btn-block btn-sm mt-2 btn-info p-2" :disabled="!valid" @click="addDocuments">
                            <i class="fa fa-check"></i> Add Document
                        </button>
                    </div>
                </div>
            </ValidationObserver>
        </div>
        <div class="col-sm-12">
            <simple-spiner></simple-spiner>
            <table class="table table-strpped">
                <tr>
                    <th>#</th>
                    <th>Document Name</th>
                    <th>Description</th>
                    <th class="text-center">Action</th>
                </tr>
                <tbody>

                <tr v-for="(doc, value, index) in docs">
                    <td>{{value+1}}</td>
                    <td>{{doc.name}}</td>
                    <td>{{doc.description}}</td>
                    <td class="text-center">
                        <button class="btn btn-xs btn-danger" @click="deleteQuotationDoc(doc)">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <hr/>
    </div>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            ValidationObserver
        },
        props: {
            quotation: {
                required: true,
                default: {}
            }
        },
        data() {
            return {
                docs: {},
                selectedDoc: null,
                form: {
                    id: '',
                    doc_id: '',
                    name: '',
                    description: '',
                },
                requireddocs: [],
                DCLink: this.quotation.id
            }
        },
        computed: {
            ...mapGetters({
                allRequiredQuotationDocs: 'allRequiredQuotationDocs'
            }),
            filteredDocs() {
                let docIds = _.map(this.docs, (val)=>{
                    return val.doc_id;
                });

                return _.filter(this.allRequiredQuotationDocs, (val) => {
                    return! _.includes(docIds,val.id);
                })
            }
        },
        methods: {
            clearDocInput() {
                this.selectedDocValue = null;
            },
            getSelectedDocValue(value) {
                this.selectedDoc = value;
            },
            getQuotationInfo() {
                Event.fire('show-loader', true);

                axios.get('/get-quotation-docs/' + this.quotation.id).then(({data}) => {
                    Event.fire('show-loader', false);

                    this.docs = data.data;

                    this.selectedDoc = null;

                }).catch((error) => {
                    Event.fire('show-loader', false);

                    console.log(error + "response from quotation");
                });
            },
            deleteQuotationDoc(doc) {
                Event.fire('show-loader', true);

                let data = {
                    'doc': doc
                };

                axios.post('/delete-quotation-doc/' + this.quotation.id, data).then(({data}) => {
                    Event.fire('show-loader', false);

                    this.docs = data.data;

                    this.$toastr.s(
                        "Document deleted successfully"
                    );
                }).catch((error) => {
                    Event.fire('show-loader', false);

                    this.$toastr.e(
                        "An error occurred document not added"
                    );
                });

            },
            saveDocs() {
                let data = {
                    'required_docs': this.requireddocs,
                    'selected_doc': this.selectedDoc,
                    'quotation': this.quotation,
                    'added_docs': this.docs
                };
                Event.fire('show-loader', true);

                axios.post('/add-quotation-docs', data).then(({data}) => {
                    Event.fire('show-loader', false);

                    this.selectedDoc = '';

                    this.$refs.addDocument.reset();

                    if (!_.isEmpty(data.data)) {
                        this.docs = data.data;

                        return this.$toastr.s(
                            "Document added successfully"
                        );
                    }

                    return this.$toastr.s(
                        "Document already exist"
                    );

                }).catch((response) => {
                    Event.fire('show-loader', false);

                    this.$toastr.e(
                        "An error occurred document not added"
                    );
                });
            },
            addDocuments() {
                this.saveDocs();
            }
        },
        created() {
            this.$store.dispatch('getAllRequiredQuotationDocs');

            this.getQuotationInfo();
        },
        mounted() {
        }
    }
</script>

<style lang="scss">
    button[disabled=disabled] {
        cursor: no-drop;
    }
    @import "~vue-select/src/scss/vue-select";


    .select2-container .select2-selection--single {
        height: 50px !important;
        padding: 2px;
    }

    .vs__search {
        padding: 2px !important;
    }


    .select2-container .select2-selection--single {
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        /* height: 28px; */
        user-select: none;
        /* -webkit-user-select: none; */
    }

    .size-modal-content {
        padding: 10px;
    }

    .v--modal-overlay[data-modal="example"] {
        background: rgba(0, 0, 0, 0.3);
    }

    .demo-modal-class {
        border-radius: 5px;
        background: #F7F7F7;
        box-shadow: 5px 5px 30px 0 rgba(46, 61, 73, 0.2);
    }
</style>