<template>
    <div>
        <div uk-sticky="sel-traget: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
            <nav class="uk-navbar-container  uk-box-shadow-small +uk-con" uk-navbar="mode: click">
                <div class="uk-navbar-left">
                    <router-link to="/"><Icon type="md-arrow-back" size="30" color="white"/></router-link>
                    <a class="uk-navbar-item uk-logo uk-text-default" href="#">{{title}}</a>

                </div>
                <div class="uk-navbar-right">
                    <div class="uk-hidden@s">
                        <ul class="uk-navbar-nav">
                            <li><a href=""></a> </li>
                        </ul>
                    </div>
                    <div class="uk-visible@m">
                        <ul class="uk-navbar-nav">
                            <div class="uk-navbar-item">
                                <!--<Button :size="buttonSize" type="info">Create new event</Button>-->
                            </div>
                            <div class="uk-navbar-item">
                                <el-input
                                    placeholder="Type something"
                                    v-model="input23"
                                    clearable>
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                            <li>
                                <a href="#">
                                    <Badge dot>
                                        <Icon type="md-notifications" size="30" color="white"/>
                                    </Badge>
                                </a>
                                <div class="uk-navbar-dropdown" style="width:350px;">
                                    <ul class="uk-nav uk-navbar-dropdown-nav uk-list uk-list-divider" >
                                        <li class="uk-active"><a href="#">Notification access can be used to display </a></li>
                                        <li><a href="#">We have added phone calls to the delivery option</a></li>
                                        <li><a href="#">Your current event has ended</a></li>
                                        <li><a href="#">We have added phone calls to the delivery option</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li>
                                <a href="#"> <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44EhXxtKEUCFMMgty3aWQ0CNxlHKD-ZKy2s1YIVjpYcdnPtR5ow" size="large" />
                                    <Icon type="md-arrow-dropdown" color="white"/></a>
                                <!--<Icon type="md-arrow-dropdown" color="white"/>-->
                                <div class="uk-navbar-dropdown" style="background:white">
                                    <ul class="uk-nav uk-navbar-dropdown-nav">
                                        <li class="uk-active"><a href="#">Bernard Kissi <span class="uk-float-right uk-text-muted">GHS 0.00</span></a></li>
                                        <li><router-link to="/settings"><Icon type="md-settings" /> Settings</router-link></li>
                                        <li><a href="#"><Icon type="md-card" /> Payments</a></li>
                                        <li><a href="#"><Icon type="md-appstore" /> Apps integration</a></li><br>
                                        <hr>
                                        <li><router-link to="/login">Log out <span class="uk-float-right uk-text-primary"><Icon type="md-exit" size="15"/></span></router-link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActivityBar",
        props:{
            title:String
        }
    }
</script>

<style scoped>
    .uk-navbar{
        background: #619fe8;
        padding-left:20px;
        padding-right:20px;
    }
    @media only screen and (max-width: 600px) {
       .uk-navbar {
           padding-left: 15px;
           padding-right:15px;
            }
    }
    .uk-text-default{
        color: #ffffff;
    }
</style>
