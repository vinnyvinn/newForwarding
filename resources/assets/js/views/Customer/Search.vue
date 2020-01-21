<template>
    <v-select @input="selectedValue(value)">
        <template slot="option" slot-scope="option">
            <div class="d-center">
                {{ option.Name }}
            </div>
        </template>
        <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
                {{ option.Name }}
            </div>
        </template>
    </v-select>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                options: []
            }
        },
        methods: {
            onSearch(search, loading) {
                loading(true);
                this.search(loading, search, this);
            },
            search: _.debounce((loading, search, vm) => {
                fetch(
                    `/search-client?q=${escape(search)}`
                ).then(res => {
                    res.json().then(json => (vm.options = json.data));
                    loading(false);
                });
            }, 350),
            selectedValue(value){
                console.log(value+"this is the selected value")
            }
        }
    }

</script>

<style lang="scss">
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
