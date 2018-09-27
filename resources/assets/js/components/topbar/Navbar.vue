<template>
    <div>
        <div uk-sticky="sel-traget: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class="uk-navbar-container  uk-box-shadow-small +uk-con" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <a class="uk-navbar-toggle uk-text-default uk-hidden@s" uk-navbar-toggle-icon href="#offcanvas-usage" uk-toggle></a>
                <a class="uk-navbar-item uk-logo uk-text-default" href="#">{{title}}</a>

            </div>
            <div class="uk-navbar-right">
                <div class="uk-hidden@s">
                    <ul class="uk-navbar-nav">
                        <li></li>

                            <li>
                                <a href="#">
                                    <Badge dot>
                                        <Icon type="md-notifications" size="30" color="white"/>
                                    </Badge>
                                </a>
                                <div class="uk-navbar-dropdown">
                                    <ul class="uk-nav uk-navbar-dropdown-nav uk-list uk-list-divider" >
                                        <li class="uk-active"><a href="#">Notification access can be used to display </a></li>
                                        <li><a href="#">We have added phone calls to the delivery option</a></li>
                                        <li><a href="#">Your current event has ended</a></li>
                                        <li><a href="#">We have added phone calls to the delivery option</a></li>
                                    </ul>
                                </div>
                            </li>

                            <div id="offcanvas-usage" uk-offcanvas="overlay: true">
                                <div class="uk-offcanvas-bar">

                                    <button class="uk-offcanvas-close" type="button" uk-close></button>

                                    <ul class="uk-nav uk-nav-default">
                                        <li class="uk-nav-header">NAVIGATION</li>
                                        <li class="uk-active"><router-link to="/"><span class="uk-margin-small-right" uk-icon="icon: home"></span> Dashboard</router-link></li>
                                        <li class="uk-parent"><router-link to="/event"><span class="uk-margin-small-right" uk-icon="icon: calendar"></span> Events</router-link></li>
                                        <li class="uk-parent"><router-link to="/"><span class="uk-margin-small-right" uk-icon="icon: settings"></span>Analytics</router-link></li>
                                        <li class="uk-parent"><router-link to="/"><span class="uk-margin-small-right" uk-icon="icon: cog"></span>Settings</router-link></li>
                                        <li class="uk-parent"><router-link to="/contacts"><span class="uk-margin-small-right" uk-icon="icon: users"></span>Contacts</router-link></li>

                                        <li class="uk-nav-header">MY ACCOUNT</li>
                                        <li class="ps"><a href="#"><span class="uk-margin-small-right" uk-icon="icon: user"></span> Bernard Kissi</a></li>
                                        <li  class="ps"><a href="#"><span class="uk-margin-small-right" uk-icon="icon: credit-card"></span> Payments </a></li>
                                        <li class="ps"><a href="#"><span class="uk-margin-small-right" uk-icon="icon: cog"></span> Settings</a></li>
                                        <li class="uk-nav-divider"></li>
                                        <li  class="ps"><router-link to="/login"><span class="uk-margin-small-right" uk-icon="icon: sign-out"></span> Logout</router-link></li>
                                    </ul>

                                </div>
                            </div>

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
        name: "Navbar",
        props:{
            title:String
        },
        data() {
            return {
                buttonSize: 'large',
                input23:''
            }
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
            padding-left: 10px;
            padding-right:15px;
        }
    }
    .uk-text-default{
        color: #ffffff;
    }
    .uk-nav-default li a{
        display:block;
        padding-bottom:15px;
    }
    .uk-navbar-dropdown{
        border-radius:5px;
    }
    .uk-parent a, .ps a{
        color:#17233d;
    }
   uk-list .uk-list-divider{
        border-bottom:1px solid #f9f9f9;
    }
</style>
