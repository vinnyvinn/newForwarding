<template>
    <div class="text-right">
        {{customPagination.from}} - {{customPagination.to}} of {{customPagination.total}} &nbsp;&nbsp;
        <button class=" cursor-pointer" @click="loadPage('prev')"
           :class="['btn-nav', css.linkClass, isOnFirstPage ? css.disabledClass : '']">
            <i class="fa fa-angle-left"></i>
        </button>

        <button class=" cursor-pointer" @click="loadPage('next')"
           :class="['btn-nav', isOnLastPage ? css.disabledClass : '']">
            <i class="fa fa-angle-right"></i>
        </button>
    </div>
</template>

<script>
    import PaginationMixin from 'vuetable-2/src/components/VuetablePaginationMixin.vue'

    export default {
        mixins: [PaginationMixin],
        props:{
            customPagination:{
                default:{}
            }
        },
        created() {
            this.tablePagination = this.customPagination;
        }
    }
</script>