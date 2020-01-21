<template>
    <div class="filter-bar">
        <form class="form-inline pull-left">
            <div class="form-group ">
                <label>Show: &nbsp;</label>
                <select class=" per-drop-down" @change="setPerPage($event)">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </select>
                <label>&nbsp; entries</label>
            </div>
        </form>
        <slot name="search">
            <form class="form-inline pull-right" @submit.prevent="doFilter">
                <div class="form-group">
                    <label>Search for: &nbsp;</label>
                    <input type="text" @keyup="doFilter" v-model="filterText" class="form-control"
                           @keyup.enter="doFilter" :placeholder="placeholder">
                </div>
            </form>
        </slot>
        <slot name="filter3">

        </slot>

        <slot name="filter2">

        </slot>

        <slot name="filter1">

        </slot>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                default: 'name, nickname, or email'
            }
        },
        data() {
            return {
                filterText: ''
            }
        },
        methods: {
            search() {
                this.$events.fire('filter-set', this.filterText)
            },
            doFilter() {

                // clear timeout variable
                clearTimeout(this.timeout);

                var self = this;
                this.timeout = setTimeout(function () {
                    self.$events.fire('filter-set', self.filterText)
                }, 300);

            },
            resetFilter() {
                this.filterText = '';
                this.$events.fire('filter-reset')
            },
            setPerPage(event) {
                this.$events.fire('per-page-set', event.target.value)
            }
        }
    }
</script>
<style lang="scss">
    .filter-bar {
        padding: 5px 0 5px 0;
    }

    .per-drop-down {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ced4da;

    }

    .vdp-datepicker {
        input {
            display: block;
            width: 100%;
            height: calc(2.25rem + 2px);
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }

    }

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