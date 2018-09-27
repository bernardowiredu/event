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
                <Navbar title="Settings"></Navbar>
                    <div class="bs-content-wrapper">
                        <div>
                            <ul class="uk-tab" uk-tab="connect: .component-tab;">
                                <li class="uk-active"><a href="#">Account</a></li>
                                <li><a href="#">Password</a></li>
                                <li><a href="#">Event </a></li>
                                <li><a href="#">Payments</a></li>
                                <li><a href="#">Notification</a></li>
                                <li><a href="#">Apps</a></li>
                            </ul>
                        </div>
                        <div class="uk-section-small uk-padding-small margin-medium">

                            <div class="uk-grid-small uk-grid-match uk-child-width-expand" uk-grid>
                                 <div>
                                     <ul class=" component-tab uk-switcher">
                                         <li>
                                             <Account></Account>
                                         </li>
                                         <li>
                                            <Password></Password>
                                         </li>
                                         <li>
                                            <EventSetting></EventSetting>
                                         </li>
                                         <li>
                                             <Payment></Payment>
                                         </li>
                                         <li>
                                            <Notification></Notification>
                                         </li>
                                         <li>
                                             <Apps></Apps>
                                         </li>
                                     </ul>
                                 </div>
                                 <div class="uk-width-medium@l uk-visible@l  ">
                                     <div class="uk-info padding-medium">
                                         <!--<h4 class="text-light">Personal Information</h4>-->
                                         <div class="padding-left-small margin-large uk-text-center">
                                             <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="avatar-img"/><br>
                                             <center><Button type="text" icon="md-camera" class="uk-text-primary" ghost>Change image</Button></center>
                                             <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    </span>
                                         </div>
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
    import Sidebar from 'Components/sidebar/Sidebar.vue'
    import Navbar from 'Components/topbar/Navbar.vue'
    import EventSetting from 'Views/app/settings/EventSetting.vue'
    import Account from 'Views/app/settings/Account.vue'
    import Password from 'Views/app/settings/Password.vue'
    import Payment from 'Views/app/settings/Payments.vue'
    import Apps from 'Views/app/settings/Apps.vue'
    import Notification from 'Views/app/settings/Notification.vue'
    import FloatButton from 'Components/FloatButton.vue'

    export default {
        name: "Settings",
        components:{
            Sidebar,
            Navbar,
            EventSetting,
            Account,
            Password,
            Payment,
            Apps,
            Notification,FloatButton
        },
        data(){
            return{
                swtich1:false,
                formItem:{
                    name:'',
                    date:'',
                    select:''
                }
            }
        }
    }
</script>

<style scoped>
    .uk-info{
        border-left: 1px dashed #eaeaea;
        height:75vh;
        padding-left:10px;
    }
    .avatar-img{
        width:100px;
        height:100px;
    }
    .uk-tab li a {
        font-size:13px;
    }
    @media  screen and (max-width: 600px) {
        .uk-section-small {
            margin: 0;
            padding:0;
            border-radius: 0;
        }
    }
</style>
