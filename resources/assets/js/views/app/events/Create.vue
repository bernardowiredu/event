<template>
    <div>
        <div class="uk-container">
            <ActivityBar title="Create Event" class="uk-hidden@s"></ActivityBar>
            <div class="uk-section padding-custom">

                <div class="uk-grid-small uk-grid-match uk-child-width-expand" uk-grid>
                    <div>
                        <div>

                            <h1 v-if="active === 0" class="padding-medium"> Event Details
                                <span class="uk-float-right uk-visible@m ">
                                      <Button type="dashed" to="/event" icon="md-settings" :size="buttonSize" shape="circle">Advanced Settings</Button>
                                      <Button type="dashed" to="/event" icon="md-close" :size="buttonSize" shape="circle">Cancel</Button>
                                 </span>
                                <span>
                                     <!--<a class="uk-float-right uk-hidden@l nav-icon" href="#offcanvas-usage" uk-toggle><Icon type="md-menu" color="#4a4a4a"/></a>&emsp;&emsp;-->
                                    <div id="offcanvas-usage" uk-offcanvas="flip: true; overlay: true; bg-close:true;">
                                    <div class="uk-offcanvas-bar">

                                        <button class="uk-offcanvas-close" type="button" uk-close></button>

                                        <h3>Title</h3>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    </div>
                                </div>
                                </span>
                            </h1>

                            <h1 v-if="active === 1" class="padding-medium"> Create Invitation
                                <span class="uk-float-right uk-visible@m ">
                                      <Button type="dashed" icon="md-settings" :size="buttonSize" shape="circle">Advanced Settings</Button>
                                      <Button type="dashed" to="/event" icon="md-close" :size="buttonSize" shape="circle">Cancel</Button>
                                 </span>
                                <span class="uk-float-left uk-hidden@s padding-xsmall">
                                      <Button type="dashed" icon="md-settings" :size="buttonSize" shape="circle">Advanced Settings</Button>
                                      <Button type="dashed" icon="md-close" :size="buttonSize" shape="circle">Cancel</Button>
                                 </span>
                            </h1>

                            <h1 v-if="active === 2" class="padding-medium"> Invite Contacts
                                <span class="uk-float-right uk-visible@m ">
                                      <Button type="dashed" icon="md-settings" :size="buttonSize" shape="circle">Advanced Settings</Button>
                                      <Button type="dashed" to="/event" icon="md-close" :size="buttonSize" shape="circle">Cancel</Button>
                                 </span>
                                <span class="uk-float-left uk-hidden@s padding-xsmall">
                                      <Button type="dashed" icon="md-settings" :size="buttonSize" shape="circle">Advanced Settings</Button>
                                      <Button type="dashed" icon="md-close" :size="buttonSize" shape="circle">Cancel</Button>
                                 </span>
                            </h1>

                            <p class="uk-text-muted uk-visible@m">Fill out the details about the your event and invite friends</p>
                            <p class="uk-hidden@s uk-text-nowwrap padding-large">Fill out the details about the your event and invite friends</p>
                            <div class="uk-visible@m">
                                <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
                                    <el-step title="Step 1" ></el-step>
                                    <el-step title="Step 2" ></el-step>
                                    <el-step title="Step 3" ></el-step>
                                </el-steps>
                            </div>
                            <div class="uk-hidden@s">
                                <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
                                    <el-step title="1"></el-step>
                                    <el-step title="2"></el-step>
                                    <el-step title="3"></el-step>
                                </el-steps>
                            </div>
                            <br>
                            <!--Form Starts from here-->
                            <Form  ref="formValidate" :model="formValidate" label-position="top">
                                <div v-if="active === 0">
                                    <FormItem label="Event Name">

                                        <Input size="large" :spellcheck="spellCheck" suffix="ios-calendar-outline" placeholder="Event Name" v-model="formValidate.name" clearable></Input>

                                    </FormItem>
                                    <!--conditional forms-->
                                    <div v-if="address">
                                        <FormItem label="Event Address">
                                            <Input class="padding-bottom-small" suffix="ios-pin-outline" size="large" v-model="formValidate.venue" placeholder="Venue Name" clearable/>
                                            <Input class="padding-bottom-small" suffix="ios-navigate-outline" size="large" v-model="formValidate.address" placeholder="Address" clearable/>
                                            <Input class="padding-bottom-small" suffix="ios-locate-outline" size="large" v-model="formValidate.Gps" placeholder="Ghana Post GPS Address" clearable/>
                                           <span>
                                                <Button @click="onReset" type="text" icon="ios-undo">Reset Location</Button>
                                           </span>

                                        </FormItem>
                                    </div>
                                    <div v-else-if="online">
                                        <FormItem label="Website Address">
                                        <Input class="padding-bottom-small" type="url" suffix="ios-browsers-outline" size="large" v-model="formValidate.online" placeholder="Enter URL address" clearable/>
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
                                            <Input size="large" suffix="ios-pin-outline" placeholder="Event Location" v-model="formValidate.mail" clearable></Input>
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
                                    <FormItem>
                                        <Button @click="next()" class="uk-float-right" type="primary" :size="buttonSize" icon="md-arrow-forward">Next</Button>
                                    </FormItem>
                                </div>
                                <div v-if="active === 1">
                                    <FormItem label="Attach Image">

                                       <Test></Test>
                                        <div class="uk-alert-warning" uk-alert>
                                            <a class="uk-alert-close" uk-close></a>
                                            <p>We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than 10MB.</p>
                                        </div>

                                    </FormItem>
                                    <FormItem label="Invitation Message">
                                        <Input  :spellcheck="spellCheck" v-model="formValidate.description" type="textarea" placeholder="Enter something..." />
                                    </FormItem>
                                    <FormItem>
                                        <div>
                                            <Button type="dashed" @click="prev()" icon="md-eye" :size="buttonSize" >Preview invitation</Button>
                                        </div>
                                        <div class="uk-float-right">
                                            <Button type="primary" @click="prev()" icon="md-arrow-dropleft" :size="buttonSize" >Prev</Button>
                                            <Button type="primary" @click="next()" icon="md-arrow-dropright" :size="buttonSize" >Next</Button>
                                        </div>
                                    </FormItem>

                                </div>
                                <div v-if="active === 2">
                                    <FormItem>
                                        <Button type="dashed" :size="buttonSize" icon="md-person">
                                            Click to add contacts
                                        </Button>
                                        <Button type="dashed" :size="buttonSize" icon="md-people">
                                            Click to add groups
                                        </Button>
                                    </FormItem>
                                    <FormItem>
                                    <div class="uk-float-right">
                                        <Button type="primary" @click="prev()" icon="md-arrow-dropleft" :size="buttonSize" >Prev</Button>
                                        <Button type="success" @click="next()" icon="md-send" :size="buttonSize" >Send Invitation</Button>
                                    </div>
                                    </FormItem>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div class="uk-width-medium@l uk-visible@l  ">
                            <div class="uk-info padding-medium">

                                <div class="uk-alert-success margin-left-small" uk-alert>
                                    <a class="uk-alert-close" uk-close></a>
                                    <h5><span uk-icon="icon: calendar"></span> Event Guidelines</h5>
                                </div>
                                <br>
                                <div v-if="active === 0" class="padding-left-small margin-medium uk-text-center">
                                    <img class="svg-holder-small" :src="'../images/svg/008-newspaper.svg'">
                                    <h5 class="uk-text-center" style="font-weight:500">Event Information</h5>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    </span>
                                </div>
                                <div v-if="active === 1" class="padding-left-small margin-medium uk-text-center">
                                    <img class="svg-holder-small" :src="'../images/svg/005-email.svg'">
                                    <h5 class="uk-text-center" style="font-weight:500">Create Inviation</h5>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    </span>
                                </div>
                                <div v-if="active === 2" class="padding-left-small margin-medium uk-text-center">
                                    <img class="svg-holder-small" :src="'../images/svg/006-user.svg'">
                                    <h5 class="uk-text-center" style="font-weight:500">Add Contacts or Friends</h5>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    </span>
                                </div>

                                <div class="contact-us">
                                    <hr><br>
                                    <span class="uk-text-center">Are you stacked? Get assistance from our <a>help line</a></span>
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
    import ActivityBar from 'Components/topbar/ActivityBar.vue'
    export default {
        name: "Create",
        components:{
            Test, ActivityBar
        },
        data() {
            return {
                value2: '',
                data2: [],
                address:false,
                online:false,
                past:false,
                active:0,
                spellCheck:true,
                buttonSize:'large',
                formValidate: {
                    name: '',
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
        },
        methods: {
            next() {
                if (this.active === 2) {
                    this.active = 0;
                } else {
                    this.active += 1;
                }
            },

            prev() {
                if (this.active === 0) {
                    this.active = 0;
                } else {
                    this.active--
                }

            },
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
        height:90vh;
        position:relative;
        margin-top:30px;
        border-radius: 10px;

    }
    @media  screen and (max-width: 600px) {
        .uk-section{
            height:auto;
            position:relative;
            margin:0;
            border-radius:0;
        }

        .uk-container{
            margin:0;
            padding:0;
        }
    }

    .padding-custom{
        padding:20px 30px 20px 30px;
    }
    @media screen and (max-width:600px){
        .padding-custom{
            padding:6px 16px 6px 16px;
        }
    }
    .uk-info{
        border-left: 1px dashed #eaeaea;
        height:85vh;
        padding-left:10px;
    }
    .margin-left-small{
        margin-left:15px;
    }
    .contact-us{
        position: absolute;
        bottom:100px;
        color:#666;
        padding-left:15px;

    }

</style>
