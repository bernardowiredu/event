<template>
<div>
    <div class="uk-offcanvas-content">

        <div class="uk-container">

        <!--navbar goes here-->
            <Navbar name="Edit" icon="md-create"></Navbar>
        <!---->
            <div class="uk-section padding-custom">
                <ul class="uk-breadcrumb uk-text-army">
                    <li><a href="">Events</a></li>
                    <li><a href="" class="active">Party</a></li>
                    <li><span>Charges</span></li>
                </ul>
                <br>
                <div class="uk-grid-small uk-grid-match uk-child-width-expand  padding-xsmall" uk-grid>
                    <div>
                        <Form label-position="top">
                            <FormItem label="Event Name">
                                <Input size="large" :spellcheck="spellCheck" suffix="ios-calendar-outline" placeholder="Event Name" v-model="formEdit.name" clearable></Input>
                            </FormItem>

                            <div v-if="address">
                                <FormItem label="Event Address">
                                    <Input class="padding-bottom-small" suffix="ios-pin-outline" size="large" v-model="formEdit.venue" placeholder="Venue Name" clearable/>
                                    <Input class="padding-bottom-small" suffix="ios-navigate-outline" size="large" v-model="formEdit.address" placeholder="Address" clearable/>
                                    <Input class="padding-bottom-small" suffix="ios-locate-outline" size="large" v-model="formEdit.Gps" placeholder="Ghana Post GPS Address" clearable/>
                                    <span>
                                                <Button @click="onReset" type="text" icon="ios-undo">Reset Location</Button>
                                           </span>

                                </FormItem>
                            </div>
                            <div v-else-if="online">
                                <FormItem label="Website Address">
                                    <Input class="padding-bottom-small" type="url" suffix="ios-browsers-outline" size="large" v-model="formEdit.online" placeholder="Enter URL address" clearable/>
                                    <span>
                                                <Button @click="onReset" type="text" icon="ios-undo">Reset Location</Button>
                                                <Button  @click="onAddress()" type="text" icon="md-laptop">Enter Address Manually</Button>
                                        </span>
                                </FormItem>
                            </div>
                            <div v-else-if="past">
                                <FormItem label="Past Location">
                                    <AutoComplete
                                        v-model="value2"
                                        size="large"
                                        @on-search="handleSearch2"
                                        placeholder="Pick a past location"
                                        clearable
                                        suffix="ios-pin-outline"
                                    >
                                        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
                                    </AutoComplete>
                                    <span>
                                                <Button @click="onReset" type="text" icon="ios-undo">Reset Location</Button>
                                                <Button @click="onOnline" type="text" icon="md-laptop">Online event</Button>
                                                <Button @click="onAddress()" type="text" icon="md-navigate">Enter Address Manually</Button>
                                           </span>
                                </FormItem>
                            </div>
                            <!--end of forms-->
                            <div v-else>
                                <FormItem label="Event Location">
                                    <Input size="large" suffix="ios-pin-outline" placeholder="Event Location" v-model="formEdit.mail" clearable></Input>
                                    <span>
                                                <Button  @click="onPast()" type="text" icon="md-search">Past Location</Button>
                                                <Button @click="onOnline()" type="text" icon="md-laptop">Online event</Button>
                                                <Button @click="onAddress()" type="text" icon="md-navigate">Enter Address Manually</Button>
                                            </span>
                                </FormItem>

                            </div>

                            <FormItem  label="Event Date and Time">
                                <div class=" uk-grid-small uk-child-width-expand@s" uk-grid>
                                    <div>
                                        <DatePicker type="date" size="large" placeholder="Start Date" class="uk-width-large@s"></DatePicker>
                                    </div>
                                    <div>
                                        <TimePicker confirm placeholder="Start Time" size="large" class="uk-width-large@s"></TimePicker>
                                    </div>
                                    <div>
                                        <DatePicker type="date" size="large" placeholder="End Date" class="uk-width-large@s"></DatePicker>
                                    </div>
                                    <div>
                                        <TimePicker confirm placeholder="End Time" size="large" class="uk-width-large@s"></TimePicker>
                                    </div>
                                </div>

                            </FormItem>
                            <FormItem label="Invitation Message">
                                <Input  :spellcheck="spellCheck" v-model="formEdit.description" type="textarea" placeholder="Enter something..." />
                            </FormItem>

                            <FormItem label="Invitation Image">

                                <Test></Test>
                                <div class="uk-alert-warning" uk-alert>
                                    <a class="uk-alert-close" uk-close></a>
                                    <p>We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB.</p>
                                </div>

                            </FormItem>
                        </Form>
                        <div>
                            <Button size="large" type="primary">Save Changes</Button>&emsp;<Button size="large" type="primary">Save and Resend</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






</div>
</template>

<script>
    import Test from  'Views/app/Test.vue'
    import Navbar from 'Components/events/navbar/Navbar.vue'
    export default {
        name: "EventEdit",
        components: {
            Navbar,Test
        },
        data(){
            return{
                value2: '',
                data2: [],
                address:false,
                online:false,
                past:false,
                active:0,
                spellCheck:true,
                buttonSize:'large',
                formEdit: {
                    name:'',
                    mail:'',
                    city:'',
                    time:'',
                    description: '',
                    venue:'',
                    address:'',
                    Gps:'',
                    online:''
                }
            }

        }, methods: {

            onAddress(){
                this.address = !this.address;
            },
            onOnline(){
                this.online = !this.online;
            },
            onPast(){
                this.past = !this.past;
            },
            onReset(){
                this.past = false;
                this.online = false;
                this.address =  false;
            },
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            }


        }
    }
</script>

<style scoped>
    .uk-section{
        height:auto;
        position:relative;
        margin-top:15px;
        /*border-radius: 10px;*/

    }
    @media  screen and (max-width: 600px) {
        .uk-section{
            height:auto;
            /*position:relative;*/
            margin:0;
            border-radius:0;
        }

        .uk-container{
            margin:0;
            padding:0;
        }
    }

    .uk-navbar-nav li a {
        text-transform: capitalize;
        font-size:15px;
    }
    .padding-custom{
        padding:20px 30px 20px 30px;
    }
</style>
