<template>
    <div class="row">
        <div class="col-lg-12 col-xlg-12 col-md-12">
            <div class="card">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item">
                        <router-link class="nav-link "  to="/company/profile">
                            Company Profile
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link "  to="/settings/countries">
                            Locations
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