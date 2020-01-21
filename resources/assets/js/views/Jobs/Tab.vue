<template>
    <div class="row ">
        <div class="col-lg-12 col-xlg-12 col-md-12 mb-0">
            <div class="card">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs profile-tab" role="tablist">

                    <li class="nav-item">
                        <router-link class="nav-link "  to="/jobs/active">
                            Active Jobs
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link "  to="/jobs/completed">
                            Completed Jobs
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "sampling done here"
            }
        }
    }
</script>