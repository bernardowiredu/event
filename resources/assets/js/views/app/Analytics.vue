<template>
    <div>
        <div class="bs-wrapper">
            <!--sidebar-->
            <div class="uk-visible@l">
                <Sidebar></Sidebar>
            </div>
            <!--main content-->
            <div class="bs-content">
                <Navbar title="Analytics"></Navbar>
                <div class="uk-text-center holder" v-if="this.noAnalytics">
                    <img class="svg-holder" :src="'../images/svg/007-computer-screen.svg'">
                    <div class="uk-hidden@s">
                        <h5 class="uk-text-strong">No data is available</h5>
                        <p class="uk-text-center" style="padding-left:10px; padding-right:10px;">Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <div class="uk-visible@m">
                        <h4 class="uk-text-strong" >No data is available</h4>
                        <p>Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <Button @click="changeContacts()" type="dashed">Create an event and monitor </Button>
                </div>

                <div v-else>
                <div class="bs-content-wrapper">
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from 'Components/sidebar/Sidebar.vue'
    import Navbar from 'Components/topbar/Navbar.vue'
    export default {
        name: "Analytics",
        components: {
            Sidebar,
            Navbar
        },
        data() {
            return {
                noAnalytics:true
            }
        }
    }
</script>

<style scoped>

</style>
