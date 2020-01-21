<template>
    <el-drawer
            :visible.sync="show"
            :direction="direction"
            :with-header="false"
            :size="size">
        <slot name="content"></slot>
    </el-drawer>
</template>

<script>
    export default {
        props:{
            size:{
                default:'50%'
            },
            direction:{
                default:'rtl'
            }
        },
        data(){
            return{
                show:false
            }
        },
        created() {
            Event.listen('show-drawer', (value)=>{
                this.show = value;
            })
        }
    }
</script>