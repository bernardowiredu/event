<template>

    <div>
        <router-view></router-view>
        <FloatButton></FloatButton>

        <div class="bs-wrapper">
            <!--sidebar-->
            <div class="uk-visible@l">
                <Sidebar></Sidebar>
            </div>

            <div class="bs-content">
                <!--navbar -->


                <Navbar title="Events"></Navbar>
                <div class="uk-text-center holder" v-if="this.noEvents">
                    <img class="svg-holder" :src="'../images/svg/015-announcement.svg'">
                    <div class="uk-hidden@s">
                        <h5 class="uk-text-strong">No active events running</h5>
                        <p class="uk-text-center" style="padding-left:10px; padding-right:10px;">Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <div class="uk-visible@m">
                        <h4 class="uk-text-strong" >No active events running</h4>
                        <p>Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <Button @click="changeEvents()" type="dashed">Create a new event</Button>
                </div>


                <div v-else>
                  <div style="padding-top:25px;">

                    <div class="bs-content-wrapper">

                        <Row>
                            <Col span="24">
                                <div style="padding-bottom:10px;">
                                    <Dropdown>
                                        <Button type="dashed">
                                            Options
                                            <Icon type="ios-arrow-down"></Icon>
                                        </Button>
                                        <DropdownMenu slot="list">
                                            <DropdownItem @click="handleSelectAll(true)">Delete</DropdownItem>
                                            <DropdownItem  @click="handleSelectAll(false)">Edit</DropdownItem>
                                            <DropdownItem>Sync</DropdownItem>
                                            <DropdownItem>Export</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <span><Button type="dashed" to="/event/create">Add new event</Button></span>
                                </div>
                                <div class="uk-section uk-padding-small">
                                    <div class="uk-overflow-auto">
                                        <div class="uk-overflow-auto">
                                            <table class="uk-table uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                                <thead>
                                                <tr>
                                                    <th><input class="uk-checkbox" type="checkbox"></th>
                                                    <th>Event Name</th>
                                                    <th>Event Date</th>
                                                    <th>Contacts invited</th>
                                                    <th>Events Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="event, index in events" :key="index" @mouseover="display = index" @mouseleave="display = null" >
                                                    <td><input class="uk-checkbox" type="checkbox"></td>
                                                    <td>{{event.name}}</td>
                                                    <td>{{event.date}}</td>
                                                    <td>{{event.invite}}</td>
                                                    <td class="uk-text-success">{{event.status}}</td>
                                                    <td v-if="display === index">
                                                        <ButtonGroup>
                                                            <Button type="text"  icon="md-trash" to="/events/create"></Button>
                                                            <Button type="text" icon="md-create" :to="'/event/'+ 'party' + index   "></Button>
                                                        </ButtonGroup>
                                                    </td>
                                                    <td v-else>
                                                        <ButtonGroup>
                                                            <Button type="text"  icon="md-trash"  disabled></Button>
                                                            <Button type="text" icon="md-create"  disabled></Button>
                                                        </ButtonGroup>
                                                    </td>

                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Sidebar from 'Components/sidebar/Sidebar.vue'
    import Navbar from 'Components/topbar/Navbar.vue'
    import FloatButton from 'Components/FloatButton.vue'
    export default {
        name: "Events",
        components: {
            Sidebar,
            Navbar,
            FloatButton
        },
        data() {
            return{
                display: null,
                noEvents:true,
                events: [
                    {
                        name: 'MCcBerry Wedding',
                        date: '2016-10-03',
                        invite: '149 invited',
                        status: 'Active'
                    },
                    {
                        name: 'MCcBerry Wedding',
                        date: '2016-10-03',
                        invite: '179 invited',
                        status: 'Active'
                    },
                    {
                        name: 'MCcBerry Wedding',
                        date: '2016-10-03',
                        invite: '129 invited',
                        status: 'Active'
                    },
                    {
                        name: 'MCcBerry Wedding',
                        date: '2016-10-03',
                        invite: '109 invited',
                        status: 'Active'
                    },
                    {
                        name: 'MCcBerry Outdooring',
                        date: '2016-10-03',
                        invite: '90 invited',
                        status: 'Active'
                    },
                    {
                        name: 'Bernard Wedding',
                        date: '2016-10-03',
                        invite: '89 invited',
                        status: 'Active'
                    },
                    {
                        name: 'Grand Prix Party',
                        date: '2016-10-03',
                        invite: '209 invited',
                        status: 'Active'
                    }
                ]
            }
        },
        methods: {
            changeEvents(){
                this.noEvents = !this.noEvents;
            },

            createEvents(){
                this.$router.push('/events/create');
            }
        }
    }
</script>

<style scoped>

</style>
