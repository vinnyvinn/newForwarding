<template>
    <div class="row">
        <div class="col-sm-12">
            <table class="table table-strpped">
                <tr>
                    <th>#</th>
                    <th>Document Name</th>
                    <th>Description</th>
                </tr>
                <tbody>

                <tr v-for="(doc, value, index) in requireddocs">
                    <td>{{value+1}}</td>
                    <td>{{doc.name}}</td>
                    <td>{{doc.description}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <hr/>
    </div>
</template>

<script>
    export default {
        props: {
            requireddocs: {
                required: false,
                default: {}
            }
        },
    }
</script>
