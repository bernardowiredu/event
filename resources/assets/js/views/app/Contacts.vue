<template>
    <div>
        <div class="bs-wrapper">
            <!--sidebar-->
            <div class="uk-visible@l">
                <Sidebar></Sidebar>
            </div>

            <div class="bs-content">
                 <!--navbar -->
                <Navbar title="Contacts"></Navbar>
                <div class="uk-text-center holder" v-if="this.noContacts">
                    <img class="svg-holder" :src="'../images/svg/006-user.svg'">
                    <div class="uk-hidden@s">
                        <h5 class="uk-text-strong">No contacts added</h5>
                        <p class="uk-text-center" style="padding-left:10px; padding-right:10px;">Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <div class="uk-visible@m">
                        <h4 class="uk-text-strong" >No contacts added</h4>
                        <p>Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <Button @click="changeContacts()" type="dashed">Add a new contact</Button>
                </div>

                <div v-else>

                <div class="bs-content-wrapper">
                    <!--content goes here-->
                    <div style="padding-top:25px;">

                        <Row :gutter="16">
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
                                    <span>
                                     <Button type="dashed" icon="ios-search">Import from Excel</Button>&emsp;
                                     <Button type="dashed" icon="logo-google">Import Contacts from Google</Button>
                                    </span>
                                </div>
                                <div class="uk-section uk-padding-small">
                                    <div class="uk-overflow-auto">
                                        <div class="uk-overflow-auto">
                                            <table class="uk-table uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                                <thead>
                                                <tr>
                                                    <th><input class="uk-checkbox" type="checkbox"></th>
                                                    <th>Name</th>
                                                    <th>Mobile</th>
                                                    <th>Email</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="contact, index in contacts" :key="index" @mouseover="display = index" @mouseleave="display = null" >
                                                    <td><input class="uk-checkbox" type="checkbox"></td>
                                                    <td>{{contact.name}}</td>
                                                    <td>{{contact.mobile}}</td>
                                                    <td class="uk-text-nowwrap">{{contact.email}}</td>
                                                    <td v-if="display === index">
                                                        <ButtonGroup>
                                                            <Button type="text" size="i6" icon="md-trash"></Button>
                                                            <Button type="text" size="i6" icon="md-create"></Button>
                                                        </ButtonGroup>
                                                    </td>
                                                    <td v-else>
                                                        <ButtonGroup>
                                                            <Button type="text" size="i6" icon="md-trash"  disabled></Button>
                                                            <Button type="text" size="i6" icon="md-create"  disabled></Button>
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
    export default {
        name: "Contacts",
        components: {
            Sidebar,
            Navbar
        },
        data(){
            return {
                display:null,
                noContacts:true,
                contacts: [
                    {
                        name: 'John Brown',
                        mobile: '024424317',
                        email: 'John22@gmail.com',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        mobile: '0243822669',
                        email: 'jimgreen@yahoo.com',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        mobile: '0243243810',
                        email: 'joeblack@gmail.com',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        mobile: '0553508641',
                        email: 'jonsnow@gmail.com',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        mobile: '0553508641',
                        email: 'jonsnow@gmail.com',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        mobile: '0553508641',
                        email: 'jonsnow@gmail.com',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow',
                        mobile: '0553508641',
                        email: 'jonsnow@gmail.com',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            changeContacts() {
                this.noContacts = !this.noContacts;
            },
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }

        }

    }
</script>

<style scoped>
.uk-list li a{
  color:#515a6e;
}
.uk-list li a:hover{
    color:#619fe8;
}
.uk-table thead tr th{
    text-transform:captialize;
}
</style>
