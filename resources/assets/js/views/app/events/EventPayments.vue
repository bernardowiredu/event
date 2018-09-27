<template>
    <div class="uk-offcanvas-content">

        <div class="uk-container">

            <!--navbar goes here-->
            <Navbar name="Event Charges"  icon="md-card"></Navbar>
            <!---->
            <div class="uk-section padding-custom">
                <ul class="uk-breadcrumb uk-text-army">
                    <li><a href="">Events</a></li>
                    <li><a href="" class="active">Party</a></li>
                    <li><span>Charges</span></li>
                </ul>
                <br>
                <h4 class="text-light">Total Cost: <span class="uk-text-strong">GHS 32.00</span></h4><br>
                <Button> Print receipt</Button>
                <div class="uk-grid-small uk-grid-match uk-child-width-expand  padding-xsmall" uk-grid>
                    <div>
                        <div class="uk-overflow-auto padding-top-medium">
                            <table class="uk-table uk-table-small uk-table-striped uk-table-hover uk-table-middle uk-table-divider">
                                <caption>Attendees</caption>
                                <thead class="">
                                <tr>
                                    <th>Item Name</th>
                                    <th>Total cost</th>
                                    <th>Closed on</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Invitation</td>
                                    <td>GHS 27.00</td>
                                    <td>13-04-2018</td>
                                </tr>
                                <tr>
                                    <td>Reminders</td>
                                    <td>GHS 29.00</td>
                                    <td>13-04-2018</td>
                                </tr>
                                <tr>
                                    <td>Reminders</td>
                                    <td>GHS 29.00</td>
                                    <td>13-04-2018</td>
                                </tr><tr>
                                    <td>Reminders</td>
                                    <td>GHS 29.00</td>
                                    <td>13-04-2018</td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                    <div>
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
        name: "EventPayments",
        components:{
            Navbar
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
