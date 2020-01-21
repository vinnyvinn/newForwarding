<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="col-sm-12 mb-0">
                <h5><b>Remarks</b></h5>
            </div>
            <hr>
        </div>
        <div class="col-sm-12">
            <table class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Remarks</th>
                    <th class="text-center">Date</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(remark, key) in remarks">
                    <td>{{parseInt(key)+1}}</td>
                    <td>{{remark.user.name}}</td>
                    <td>{{remark.remark}}</td>
                    <td class="text-center">{{remark.created_at }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <hr>
        <div class="col-md-12">
            <div class="pull-right m-t-30 text-right">
                <div class="col-sm-12">
                    <div class="text-right">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
          remarks:{
              required:true
          }
        },
        data() {
            return {}
        }
    }
</script>