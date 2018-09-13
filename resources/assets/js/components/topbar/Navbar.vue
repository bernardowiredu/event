<template>
    <div>
        <div uk-sticky="sel-traget: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class="uk-navbar-container uk-con" uk-navbar>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-text-default" href="#">{{title}}</a>
            </div>
            <div class="uk-navbar-right">
                <div class="uk-hidden@s">
                    <ul class="uk-navbar-nav">
                        <div class="uk-navbar-item">
                            <a class="uk-navbar-toggle uk-text-default" uk-navbar-toggle-icon href=""></a>
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
                    <div class="uk-navbar-item">
                        <Badge dot>
                            <Icon type="md-notifications" size="30" color="white"/>
                        </Badge>
                    </div>
                    <li>
                        <a href="#"> <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44EhXxtKEUCFMMgty3aWQ0CNxlHKD-ZKy2s1YIVjpYcdnPtR5ow" size="large" />
                            <Icon type="md-arrow-dropdown" color="white"/></a>
                        <!--<Icon type="md-arrow-dropdown" color="white"/>-->
                        <div class="uk-navbar-dropdown" style="background:white">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Bernard Kissi <span class="uk-float-right uk-text-muted">GHS 0.00</span></a></li>
                                <li><a href="#"><Icon type="md-settings" /> Settings</a></li>
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
    .uk-text-default{
        color: #ffffff;
    }
    .uk-navbar-dropdown{
        border-radius:5px;
    }

</style>
