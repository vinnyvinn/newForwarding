<template>
    <v-select
            label="name"
            @input="getValue"
            :filterable="false"
            :options="options"
            @search="onSearch"
            v-model="selectedValue"
            :required="!selectedValue"
            @search:focus="clearInput"
    >
        <template slot="no-options">
            {{text}}
        </template>
        <template slot="option" slot-scope="option">
            <div class="d-center">
                {{ option.Name }} | ( {{getCustomerCurrency(option.currency)}})
            </div>
        </template>
        <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
                {{ option.Name }} ( {{getCustomerCurrency(option.currency)}})
            </div>
        </template>
    </v-select>
</template>

<script>
    export default {
        props: {
            inputCurrency:{
                required:false,
                default:null
            },
            selectedCustomer:{
                required:false,
                default:null
            }
        },
        data() {
            return {
                options: [],
                selectedValue: null,
                text:""
            }
        },
        computed:{

        },
        methods: {
            onSearch(search, loading) {
                loading(true);
                this.search(loading, search, this);
            },
            search: _.debounce((loading, search, vm) => {
                fetch(
                    `/search-client?q=${escape(search)}&&currency=${vm.inputCurrency}`
                ).then(res => {
                    res.json().then((json) =>{
                        vm.options = json.data;
                        vm.text = _.isEmpty(json.data)?"No result found":'type to search customer..'
                    }) ;
                    loading(false);
                });
            }, 350),

            getValue() {
                this.$emit('selected-customer', this.selectedValue);
            },
            clearInput() {
                this.selectedValue = null;
            },
            getCustomerCurrency(value) {
               return  _.has(value, 'CurrencyCode')?value.CurrencyCode:'KES';
            },
            setSelectedValue(){
                this.selectedValue = this.selectedCustomer
            }
        },
        watch:{
            'inputCurrency'(){
                this.options=[];
            }
        },
        created() {
            this.setSelectedValue();
        }
    }

</script>

<style  lang="scss">
    .v-select .dropdown li {
        border-bottom: 1px solid rgba(112, 128, 144, 0.1);
    }

    .v-select .dropdown li:last-child {
        border-bottom: none;
    }

    .v-select .dropdown li a {
        padding: 10px 20px;
        width: 100%;
        font-size: 1.25em;
        color: #3c3c3c;
    }

    .v-select .dropdown-menu .active > a {
        color: #fff;
    }

</style>
