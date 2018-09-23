<template>
    <div>
        <div class="uk-offcanvas-content">

            <div class="uk-container">

                <!--navbar goes here-->
                <Navbar name="Reminders" icon="md-notifications"></Navbar>
                <!---->

                <div class="uk-section padding-custom">

                    <div class="uk-grid-small uk-grid-match uk-child-width-expand  padding-xsmall" uk-grid>
                        <div>
                            <div>
                                <ul class="uk-breadcrumb uk-text-army">
                                    <li><a href="">Events</a></li>
                                    <li><a href="" class="active">Party3</a></li>
                                    <li><span>Reminders</span></li>
                                </ul>
                                <br>
                                <!--<p class="text-info">Reminders help you automatically remind your invitees when your event is close</p>-->
                                <p>Use existing delivery option <span class="uk-float-right uk-text-muted">Switch to use option &emsp;<i-switch size="small" v-model="switch1" @on-change="change" /></span></p>

                                <div>
                                    <Form label-postion="top">
                                    <span class="padding-xsmall">
                                       <FormItem label="Delivery option:">
                                            <CheckboxGroup v-model="checkbox">
                                                <Checkbox label="Emails"></Checkbox>
                                                <Checkbox label="SMS"></Checkbox>
                                                <Checkbox label="Phone Calls"></Checkbox>
                                            </CheckboxGroup>
                                        </FormItem>
                                    </span>

                                        <h5 class="text-info">Event Details</h5>
                                        <hr>
                                        <FormItem label="Event name">
                                            <Input v-model="input"  size="large"  placeholder="Enter something..." clearable></Input>
                                        </FormItem>
                                        <FormItem label="Event location">
                                            <Input v-model="input"  size="large"  placeholder="Enter something..." clearable></Input>
                                        </FormItem>
                                        <h5 class="text-info">Reminder Message</h5>
                                        <hr>
                                        <FormItem label="Add Reminder Message">
                                            <Input v-model="value5" type="textarea" placeholder="Enter something..." />
                                            <span><Button type="text" icon="md-image">Add image</Button></span>
                                        </FormItem>

                                        <h5 class="text-info">Date ,Time and Frequency</h5>
                                        <hr>
                                        <p class="padding-xsmall padding-bottom-small">
                                            Select date to start reminding your invitees
                                        </p>
                                        <div class=" uk-grid-small uk-child-width-expand@s" uk-grid>
                                            <div>
                                                <FormItem label="Date" prop="date">
                                                    <DatePicker type="date" placeholder="Select date" v-model="date"></DatePicker>
                                                </FormItem>
                                            </div>
                                            <div>
                                                <FormItem label="Time" prop="time">
                                                    <TimePicker type="time" placeholder="Select time" v-model="time"></TimePicker>
                                                </FormItem>
                                            </div>
                                        </div>
                                        <FormItem label="Frequency" class="padding-xsmall">
                                            <Select v-model="select" size="large">
                                                <Option value="beijing">Daily</Option>
                                                <Option value="shanghai">Weekly</Option>
                                                <Option value="shenzhen">Monthly</Option>
                                            </Select>
                                        </FormItem>

                                        <FormItem>
                                            <Button  type="primary" size="large">Remind Invitees</Button>
                                        </FormItem>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div class="uk-width-large@l uk-visible@l ">
                            <div class="uk-info padding-medium">
                                <h4 class="text-light padding-left-small">Reminders History <span class="uk-text-small uk-text-muted uk-float-right"><Icon type="md-sync" />
                                    Update 1 hour ago</span></h4>
                                 <hr class="padding-left-small" style="margin-left:15px; border:1px dashed #f5f5f5">
                                <div class="uk-overflow-auto padding-xsmall padding-left-small">
                                    <table class="uk-table uk-table-small uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                        <thead class="">
                                        <tr>
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>status</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>12-09-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-success">Sent</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>23-09-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-success">Sent</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>09-11-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-success">Sent</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>09-11-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-danger">Failed</td>
                                        </tr> <tr>
                                            <th>3</th>
                                            <td>09-11-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-success">Sent</td>
                                        </tr> <tr>
                                            <th>3</th>
                                            <td>09-11-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-success">Sent</td>
                                        </tr> <tr>
                                            <th>3</th>
                                            <td>09-11-2018 </td>
                                            <td>12:45 </td>
                                            <td class="uk-text-success">Sent</td>
                                        </tr>
                                        </tbody>
                                    </table>
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
    import Navbar from 'Components/events/navbar/Navbar.vue'
    export default {
        name: "EventReminders",
        components:{
            Navbar
        },
        data() {
            return{
                wtich:true,
                input:'Mcwedding',
                date:'',
                time:'',
                select: '',
                checkbox:''
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

    .padding-custom{
        padding:20px 30px 20px 30px;
    }

    .uk-info{
        border-left: 1px dashed #eaeaea;
        height:80vh;
        padding-left:10px;
    }
</style>
