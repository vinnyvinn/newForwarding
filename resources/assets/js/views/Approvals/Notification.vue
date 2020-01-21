<template>
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <div class="ribbon ribbon-bookmark ribbon-right mb-3 ribbon-default" style="margin-bottom:0">
                    Notification
                </div>
                <h4 class="card-title">
                    <button class="btn-circle btn-sm btn-warning">10</button>
                </h4>
                <hr class="m-0"/>
                <ul class="feeds" v-for="data in tableData.data">
                    <li>
                        <div class="bg-light-info">
                            <i class="fa fa-bell-o"></i>
                        </div>
                        {{data.title}}
                        <a :href="'/notifications/'+data.id" class="btn btn-xs pull-right btn-primary">
                            <i class="fa fa-eye"></i>
                        </a>
                        <span class="text-muted  w-100 pl-5 mb-2" style="margin-top:-3px"> {{data.ago}}</span>
                    </li>
                </ul>
            </div>

            <hr/>

            <div class="text-right p-2">
                {{tableData.from}} - {{tableData.to}} of {{tableData.total}} &nbsp;&nbsp;
                <button :class="disablePrevPage?'cursor-pointer disabled':'cursor-pointer'" @click="loadPage('prev')">
                    <i class="fa fa-angle-left"></i>
                </button>

                <button :class="disableNextPage?'cursor-pointer disabled':'cursor-pointer'" @click="loadPage('next')">
                    <i class="fa fa-angle-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: {},
                params: {
                    url:''
                }
            }
        },
        computed: {
            disableNextPage() {
                return this.tableData.to === this.tableData.current_page
            },
            disablePrevPage() {
                return this.tableData.from === this.tableData.current_page
            }
        },
        methods: {
            getApprovalNotifications() {
                Event.fire('show-loader', true);

                axios.get('/unread-notifications/'+this.params.url).then((response) => {
                    this.tableData = response.data;
                    Event.fire('show-loader', false)
                }).catch(error=>{
                    console.log(error);
                    Event.fire('show-loader', false)
                })
            },
            loadPage(type) {
                console.log(type === 'next' + this.disableNextPage );

                if(type === 'next' && !this.disableNextPage){
                    this.params.url = this.tableData.next_page_url;
                    this.getApprovalNotifications();
                }

                if(type === 'prev' && !this.disablePrevPage) {
                    this.params.url = this.tableData.prev_page_url;
                    this.getApprovalNotifications();
                }

            },

        },
        created() {
            this.getApprovalNotifications()
        }
    }
</script>