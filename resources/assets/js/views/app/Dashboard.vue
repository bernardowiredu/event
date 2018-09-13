<template>
    <div>
        <FloatButton></FloatButton>

        <div class="bs-wrapper">
            <!--sidebar-->
             <div class="uk-visible@l">
               <Sidebar></Sidebar>
             </div>
            <!--main content-->
            <div class="bs-content">

             <!--navbar-->
             <Navbar title="Dashboard"></Navbar>
                <!--holds main content-->
                <div class="uk-text-center holder" v-if="this.noEvents">
                    <img class="svg-holder" :src="'../images/svg/008-newspaper.svg'">
                    <div class="uk-hidden@s">
                        <h5 class="uk-text-strong">No Events have been created</h5>
                        <p style="padding-left:10px; padding-right:10px;">Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                    <div class="uk-visible@m">
                        <h4 class="uk-text-strong" >No Events have been created</h4>
                        <p>Create and invite friends or contacts to your events without hassle</p><br>
                    </div>
                     <Button @click="changeEvent()" type="dashed">Create a new event</Button>
                </div>

                <div v-else>
                 <transition name="el-zoom-in-top">
                <div class="bs-content-wrapper">


                  <!--summaries-->
                  <div style="padding-top:10px;" class="uk-grid-small uk-child-width-expand@s" uk-grid>
                      <div>
                          <div class="uk-card-small uk-border-radius-small uk-card-body">
                              <div class="uk-flex">
                                  <div>
                                      <Icon type="md-paper-plane" size="40"/>
                                  </div>
                                  <div style="padding-left:15px;">
                                      <span class="uk-text-strong">INVITATION SENT</span><br>
                                      <span class="uk-text-muted">You have 4 assignmnents</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="uk-card-small uk-border-radius-small uk-card-body">
                              <div class="uk-flex">
                                  <div>
                                      <Icon type="md-paper" size="40"/>
                                  </div>
                                  <div style="padding-left:15px;">
                                      <span class="uk-text-strong">ATTENDING</span> <br>
                                      <span class="uk-text-muted">You have 4 messages</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="uk-card-small uk-border-radius-small uk-card-body">
                              <div class="uk-flex">
                                  <div>
                                      <Icon type="md-eye" size="40"/>
                                  </div>
                                  <div style="padding-left:15px;">
                                      <span class="uk-text-strong">VIEWS</span> <br>
                                      <span class="uk-text-muted">You have 3 reminders</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="uk-card-small uk-border-radius-small uk-card-body">
                              <div class="uk-flex">
                                  <div>
                                      <Icon type="logo-euro" size="40" />
                                  </div>
                                  <div style="padding-left:15px;">
                                      <span class="uk-text-strong">AMOUNT SPENT</span> <br>
                                      <span class="uk-text-muted">You have 1 Todo</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!---->

                    <div class="uk-grid-small uk-grid-match uk-child-width-expand" uk-grid>
                      <div>
                          <h5 style="padding-bottom:10px; padding-top:15px;"> Event Analytics </h5>
                          <div class="uk-section uk-padding-small">
                             <BarCharts></BarCharts>
                          </div>
                      </div>
                      <div class="uk-width-large@s">
                          <h5 style="padding-bottom:10px; padding-top:15px;"> Attendees </h5>
                          <div class="uk-section uk-padding-small">
                             <Pie></Pie>
                              <br>
                              <hr>
                              <p style="padding-top:15px;"><b><Icon type="md-eye" size="15" /> INSIGHT</b>
                                  It is a long established fact that a reader will be
                                  looking at its layout</p>
                          </div>


                        </div>
                      </div>
                  <br>
                    <div class=" uk-grid-small uk-child-width-expand@s" uk-grid>
                      <div>

                          <div class="uk-section-small  uk-padding-small">
                              <h5 style="padding-bottom:10px;"> Recent Events
                                  <span class="uk-float-right"><Button size="small" class="uk-text-primary">View all</Button></span>
                              </h5>
                              <hr>
                              <div class="uk-overflow-auto">
                              <table class="uk-table uk-table-striped">
                                  <thead>
                                  <tr>
                                      <th>Table Heading</th>
                                      <th>Table Heading</th>
                                      <th>Table Heading</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                  </tr>
                                  <tr>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                  </tr>
                                  <tr>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                  </tr>
                                  </tbody>
                              </table>
                              </div>
                          </div>
                      </div>
                      <div>

                          <div class="uk-section-small uk-padding-small">
                              <h5 style="padding-bottom:10px;"> Live Feedbacks
                                  <span class="uk-float-right"><Button size="small" class="uk-text-primary">View all</Button></span>
                              </h5>
                              <hr>
                              <div class="uk-overflow-auto">
                              <table class="uk-table uk-table-striped">
                                  <thead>
                                  <tr>
                                      <th>Table Heading</th>
                                      <th>Table Heading</th>
                                      <th>Table Heading</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                  </tr>
                                  <tr>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                  </tr>
                                  <tr>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                      <td>Table Data</td>
                                  </tr>
                                  </tbody>
                              </table>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>

                 </transition>
              </div>
            </div>
        </div>

    </div>
</template>

<script>

    import Sidebar from 'Components/sidebar/Sidebar.vue'
    import Navbar from 'Components/topbar/Navbar.vue'
    import BarCharts from 'Components/charts/BarCharts.vue'
    import Pie from 'Components/charts/piecharts/PieChart.vue'
    import FloatButton from 'Components/FloatButton.vue'

    export default {
        name: "Dashboard",
        components: {
            Sidebar,
            Navbar,
            BarCharts,
            Pie,
            FloatButton
        },
        data() {

            return {
                loading:false,
                noEvents:true,
                tableColumn: [

                    {
                        title: 'Date',
                        key:'date',
                        sortable:true
                    },
                    {
                        title: 'Event',
                        key:'event',
                        sortable:true
                    },
                    {
                        title: 'Reactivity',
                        key:'reactivity',
                        sortable:true
                    },
                    {
                        title: 'Status',
                        key:'status',
                        sortable:true
                    }
                ],
                dataTable: [

                    {
                        date: '19-08-2018',
                        event: 'Event planning',
                        reactivity: '10 opened',
                        status: 'running'
                    },
                    {
                        date: '27-09-2018',
                        event: 'Event planning',
                        reactivity: '10 opened',
                        status: 'running'
                    },
                    {
                        date: '25-10-2018',
                        event: 'Event planning',
                        reactivity: '10 opened',
                        status: 'running'
                    },
                    {
                        date: '21-11-2018',
                        event: 'Event planning',
                        reactivity: '10 opened',
                        status: 'running'
                    },
                    {
                        date: '21-11-2018',
                        event: 'Event planning',
                        reactivity: '10 opened',
                        status: 'running'
                    }
                ]
            }
        },

        methods: {
            changeEvent(){
                this.noEvents = !this.noEvents;
            }
        }

    }
</script>

<style scoped>

 .uk-card-body{
    background:#fff;
 }
 .uk-text-strong{
     font-weight:500;
     color: #515a6e;;
 }
 /*.svg-holder {*/
     /*width: 40%;*/
    /*}*/

    /*.holder{*/
        /*top:35%;*/
        /*left: 45%;*/
        /*position:absolute;*/
    /*}*/
</style>
