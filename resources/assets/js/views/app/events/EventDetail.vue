<template>
    <div>
        <div class="uk-offcanvas-content">

            <div class="uk-container">
                <!--insert navbar here-->
                <Navbar  icon="md-home" name="Event Dashboard"></Navbar>
                <!---->
                <div class="uk-section padding-custom">
                    <div class="uk-grid-small uk-grid-match uk-child-width-expand" uk-grid>
                        <div>
                            <div>
                                <h1 class="padding-medium uk-text-army"> {{id}}
                                    <span class="uk-float-right uk-visible@l ">
                                      <Button type="dashed" icon="md-settings" :size="buttonSize" shape="circle">Advanced Settings</Button>
                                      <Button type="dashed" to="/event" icon="md-close" :size="buttonSize" shape="circle">Cancel</Button>
                                 </span>
                                    <a class="uk-float-right uk-hidden@l nav-icon" href="#offcanvas-usage" uk-toggle><Icon type="md-menu" color="#4a4a4a"/></a>
                                    <div id="offcanvas-usage" uk-offcanvas="flip: true; overlay: true">
                                        <div class="uk-offcanvas-bar">

                                            <button class="uk-offcanvas-close" type="button" uk-close></button>

                                            <h3>Title</h3>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                        </div>
                                    </div>
                                </h1>
                                <p class="uk-text-muted  padding-xsmall">
                                    Dar es Salam | kariakoo Dar es Salam, Tanazania.<br/> Monday, 19 March 2018 from 19:00 to 22:00
                                </p>
                                <div class=" uk-grid-small uk-child-width-expand@s" uk-grid>
                                    <div>
                                        <!--<span class="text-small uk-text-muted"> updated 6 seconds ago </span><br>-->
                                        <div class="uk-section-muted uk-padding-small uk-border" style="margin-top:20px;">
                                            <center>
                                                <i-circle
                                                    :size="180"
                                                    :trail-width="4"
                                                    :stroke-width="5"
                                                    :percent="55"
                                                    stroke-linecap="square"
                                                    stroke-color="#43a3fb">
                                                    <Poptip trigger="hover" title="Attending" content="This shows people who are willing to come to your event"  word-wrap width="200" >
                                                        <div class="demo-Circle-custom">
                                                            <h1>350 Attend</h1>
                                                            <p> of 700 contacts</p>
                                                            <span>55%</span>
                                                        </div>
                                                    </Poptip>
                                                </i-circle>
                                            </center>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="uk-section-muted uk-padding-small uk-border" style="margin-top:20px;">
                                            <center>
                                                <i-circle
                                                    :size="180"
                                                    :trail-width="4"
                                                    :stroke-width="5"
                                                    :percent="75"
                                                    stroke-linecap="square"
                                                    stroke-color="#32bc9D">
                                                    <Poptip trigger="hover" title="Viewed" content="This shows people who have viewed your invitation"  word-wrap width="200" >
                                                        <div class="demo-Circle-custom">
                                                            <h1>654 Viewed</h1>
                                                            <p>Out of 700 contacts</p>
                                                            <span>75%</span>
                                                        </div>
                                                    </Poptip>
                                                </i-circle>
                                            </center>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="uk-section-muted uk-padding-small uk-border" style="margin-top:20px;">
                                            <center>
                                                <i-circle
                                                    :size="180"
                                                    :trail-width="4"
                                                    :stroke-width="5"
                                                    :percent="15"
                                                    stroke-linecap="square"
                                                    stroke-color="#ef5b50">
                                                    <Poptip trigger="hover" title="Unread" content="This shows people who have not opened your invitation"  word-wrap width="200" >
                                                        <div class="demo-Circle-custom">
                                                            <h1>12 unread</h1>
                                                            <p>Out of 700 Contacts</p>
                                                            <span>15%</span>
                                                        </div>
                                                    </Poptip>
                                                </i-circle>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <h5 class="uk-text-strong">Event Updates <span class="uk-float-right uk-text-muted text-small"> <Icon type="md-sync" /> updated seconds ago</span></h5>
                                <div class="uk-overflow-auto padding-xsmall">
                                    <table class="uk-table uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                        <thead class="table-classic">
                                        <tr>
                                            <th>Contact</th>
                                            <th>Status</th>
                                            <th>Time</th>
                                            <th>Channel</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>0245678990 </td>
                                            <td>Viewed </td>
                                            <td>12 seconds ago </td>
                                            <td>Email</td>
                                        </tr>
                                        <tr>
                                            <td>0245678990 </td>
                                            <td>Viewed </td>
                                            <td>2 days ago </td>
                                            <td>Email</td>
                                        </tr>
                                        <tr>
                                            <td>0245678990 </td>
                                            <td>Viewed </td>
                                            <td>30 minutes ago </td>
                                            <td>SMS</td>
                                        </tr>
                                        <tr>
                                            <td>0245678990 </td>
                                            <td>Viewed </td>
                                            <td>12 seconds ago </td>
                                            <td>SMS</td>
                                        </tr>
                                        <tr>
                                            <td>0245678990 </td>
                                            <td>Viewed </td>
                                            <td>12 seconds ago </td>
                                            <td>SMS</td>
                                        </tr>
                                        <tr>
                                            <td>0245678990 </td>
                                            <td>Viewed </td>
                                            <td>12 seconds ago </td>
                                            <td>SMS</td>
                                        </tr>
                                        </tbody>
                                        <Button class="uk-text-primary" type="text" :size="buttonSize">View all attendees list..</Button>
                                    </table>

                                </div>
                                <br>
                                <h5 class="uk-text-strong">Traffic by delivery <span class="uk-float-right uk-text-muted text-small"> <Icon type="md-sync" /> updated seconds ago</span></h5>
                                <div class="uk-overflow-auto padding-xsmall">
                                    <table class="uk-table uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                        <thead class="table-classic">
                                        <tr>
                                            <th>Category</th>
                                            <th>Views</th>
                                            <th> Attending </th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>SMS </td>
                                            <td>190 </td>
                                            <td>100 </td>
                                        </tr>
                                        <tr>
                                            <td>Email </td>
                                            <td>300 </td>
                                            <td>270 </td>
                                        </tr>
                                        <tr>
                                            <td>Phone Calls </td>
                                            <td>12 </td>
                                            <td>10</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-medium@l uk-visible@l">
                            <div class="uk-info padding-medium">
                                <h4 class="text-light" style="padding-left:5px; padding-top:5px;">Event Reminders
                                    <span class="uk-float-right uk-text-small"><i-switch v-model="switch1"  size="small" @on-change="change" /></span></h4>
                                <hr class="dashed">
                                <div class="padding-medium padding-left-small">
                                    <p class="padding-bottom-small">Simply remind your customers when your event is close</p>

                                    <p class="">Allow Voice Calls <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                </span><br><span class="uk-text-muted">Remind customers with voice calls</span></p>
                                    <br>
                                    <p class="">Allow Emails <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                </span><br><span class="uk-text-muted">Remind customers with emails</span></p>
                                    <br>
                                    <p class="">Allow SMS <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                </span><br><span class="uk-text-muted">Remind customers with SMS</span></p>
                                    <br>


                                </div>

                                <div class="">
                                    <h4 class="text-light" style="padding-left:5px; padding-top:5px;">Event Notification
                                        <span class="uk-float-right uk-text-small"><i-switch v-model="switch1"  size="small" @on-change="change" /></span></h4>
                                    <hr class="dashed">
                                    <div class="padding-medium padding-left-small">
                                        <p class="padding-bottom-small">Notification allows you to simply customized how you are updated with your event</p>

                                        <p class="">Notify, when a contact accepts invitation <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                        </span><br><span class="uk-text-muted">Remind customers with voice calls</span></p>
                                        <br>
                                        <p class="">Notify, when a contact views invitation <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                        </span><br><span class="uk-text-muted">Remind customers with emails</span></p>
                                        <br>
                                        <p class="">Notify, when an event ends <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                        </span><br><span class="uk-text-muted">Remind customers with SMS</span></p>
                                        <br>
                                        <p class="">Notify, when a contact declines invitation <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                        </span><br><span class="uk-text-muted">Remind customers with SMS</span></p>
                                        <br>
                                    </div>
                                </div>
                                <div class="">
                                    <h4 class="text-light" style="padding-left:5px; padding-top:5px;">Auto Appreciation
                                        <span class="uk-float-right uk-text-small"><i-switch v-model="switch1"  size="small" @on-change="change" /></span></h4>
                                    <hr class="dashed">
                                    <div class="padding-medium padding-left-small">
                                        <p class="">Automatically thank attendees after your event  <span class="uk-float-right"><i-switch v-model="switch1"  size="small" @on-change="change" />
                                        </span><br><span class="uk-text-muted">Appreciate your attendees</span></p>
                                    </div>
                                </div>

                                <div class="contact-us uk-visible@xl">
                                    <hr><br>
                                    <span class="uk-text-center">Are you stacked? Get assistance from our <a>help line</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pie from 'Components/charts/piecharts/PieEvent.vue'
    import BarCharts from 'Components/charts/BarCharts.vue'
    import Navbar from 'Components/events/navbar/Navbar.vue'
    export default {
        name: "EventDetail",
        components: {
            Pie,BarCharts,Navbar
        },
        data(){
            return{
                id: this.$route.params.id,
                buttonSize:'large',
                swtich1:false
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
        height:100vh;
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
    .dashed{
        border:1px dashed #f5f5f5;
    }
    .table-head, .table-head tr th{
        background:#f1f1f1;
        border-radius:5px;
    }.text-head{
         font-size:16px;
         font-weight:300;
     }
    .table-classic{
        background: #f1f1f1;
    }
    .uk-border{
        border-radius:5px;
    }
    .text-small{
        font-size:12px;
    }
    .uk-section-muted{
        background:white;
        border:1px solid #f5f5f5;
    }
    .demo-Circle-custom{
        word-wrap:break-word;
        width:180px;
    }


</style>
