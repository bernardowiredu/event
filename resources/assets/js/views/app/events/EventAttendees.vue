<template>
    <div class="uk-offcanvas-content">

        <div class="uk-container">

            <!--navbar goes here-->
            <Navbar name="Manage Attendees" icon="md-people"></Navbar>

            <!---->
            <div class="uk-section padding-custom">

                <ul class="uk-breadcrumb uk-text-army">
                    <li><a href="">Events</a></li>
                    <li><a href="" class="active">Party</a></li>
                    <li><span>Attendees</span></li>
                </ul>
                <br>
                <div class="uk-grid-small uk-grid-match uk-child-width-expand  padding-xsmall" uk-grid>
                    <div>
                        <div>
                            <Alert type="warning" show-icon closable>
                               <strong>Helpful Tips</strong>
                                <span slot="desc">About 85% of your Attendees were invited through emails
                                    <Button class="uk-text-primary" size="small">Turn off </Button>
                                    <Button class="uk-text-primary" size="small"  uk-toggle="target: #modal-close-outside">View details </Button>
                                </span>
                                <span slot="close">close tips</span>
                            </Alert>

                            <div class="padding-top-small">
                                <ButtonGroup>
                                   <Button type="primary" icon="md-add"> Add Attendee</Button>
                                   <Button icon="md-mail"> Invite Attendees  <Badge :count="89"></Badge></Button>
                                   <Button icon="md-mail-open"> Message</Button>
                                   <Button icon="md-download"> Export Attendees</Button>
                                </ButtonGroup>
                                <span class="uk-float-right uk-visible@m">
                                    <div>
                                        <Input v-model="value" icon="md-search" placeholder="Enter something..." style="width: 300px" />
                                    </div>
                                </span>
                            </div>
                            <div class="uk-overflow-auto padding-top-medium">
                                <table class="uk-table uk-table-small uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                    <caption>Attendees</caption>
                                    <thead class="">
                                    <tr>
                                        <th><input class="uk-checkbox" type="checkbox"></th>
                                        <th>Event Name</th>
                                        <th>Contact</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr> <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr> <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr> <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr> <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr> <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr> <tr>
                                        <td><input class="uk-checkbox" type="checkbox"></td>
                                        <td>Desmond</td>
                                        <td>0245345679</td>
                                        <td>Kissidesmod#gmail.com</td>
                                        <td>Attending</td>
                                        <td>
                                            <Button type="dashed" :size="buttonSize" icon="md-create"> Edit</Button>
                                        </td>
                                    </tr>



                                    </tbody>
                                </table>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            <div>
                <ul class="uk-pagination uk-flex-right uk-margin-medium-top" uk-margin>
                    <li><a href="#"><span uk-pagination-previous></span></a></li>
                    <li><a href="#">1</a></li>
                    <li class="uk-disabled"><span>...</span></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li class="uk-active"><span>7</span></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#"><span uk-pagination-next></span></a></li>
                </ul>
            </div>
            <!--modal-->
            <div id="modal-close-outside" uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <button class="uk-modal-close-default" type="button" uk-close></button>
                    <h4 class="uk-text-army padding-bottom-small">Helpful Tips</h4>
                    <hr>
                    <p class="padding-xsmall">
                        About 85% percent of your attendees were invited through emails,
                        therefore we suggest you using emails to invite your contacts to increase attendance to your event
                    </p>
                </div>
            </div>
            <!--end of modal-->
        </div>
    </div>
</template>

<script>
    import Navbar from 'Components/events/navbar/Navbar.vue'
    export default {
        name: "EventAttendees",
        components:{
            Navbar
        },
        data(){
            return{
                buttonSize:'small'

            }
        }
    }
</script>

<style scoped>
    .uk-section{
        height:auto;
        position:relative;
        margin-top:15px;
        border-radius: 10px;

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
   table {
        /*border-radius:10%;*/
        /*border:1px solid #EDF0F2;*/
    }
    .table-classic{
        background: #f4f4f4;
    }
    .padding-custom{
        padding:20px 30px 20px 30px;
    }
    @media screen and (max-width:600px){
        .padding-custom{
            padding:6px 16px 6px 16px;
        }
    }
</style>
