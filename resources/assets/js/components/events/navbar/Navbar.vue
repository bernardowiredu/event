<template>
    <div>
        <nav class="uk-navbar-container uk-visible@m " style=" height:70px;" uk-navbar>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-text-white" href="#"> <span><Icon class="icon-mv" :type="icon" :color="color" size="32" /> {{name}}</span></a>
            </div>
            <div class="uk-navbar-right">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><router-link :to="'/event/' + $route.params.id"> Event Dashboard</router-link></li>
                    <li><router-link :to="'/event/' + $route.params.id + '/edit'"  active-class="active">  Edit</router-link></li>
                    <li><router-link :to="'/event/' + $route.params.id + '/attendees'">  Attendees</router-link></li>
                    <li><router-link :to="'/event/' + $route.params.id + '/reminders'"> Reminders </router-link></li>
                    <li><router-link :to="'/event/' + $route.params.id + '/payments'"> Charges</router-link></li>
                </ul>
            </div>
            <!--<div class="uk-navbar-right">-->
                <!--<ul class="uk-navbar-nav">-->
                    <!--&lt;!&ndash;<li><router-link class="uk-active" to="/event"><span class="uk-margin-small-right" uk-icon="arrow-left"></span> Back</router-link></li>&ndash;&gt;-->
                <!--</ul>-->
            <!--</div>-->
        </nav>
        <nav class="uk-navbar-container uk-hidden@s" style=" height:70px;" uk-navbar>
            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                </ul>

            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li><router-link class="uk-active" to="/event"><span class="uk-margin-small-right" uk-icon="arrow-left"></span> Back</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            name: String,
            icon: String,
            color: String
        }
    }
</script>

<style scoped>
    .uk-navbar-nav li a {
        text-transform: capitalize;
        font-size:15px;


    }
    .uk-navbar{
        background:none;
    }
    .icon-mv{
        margin-bottom:7px;
    }
    .uk-text-army{
       color: #515a6e
    }
    .uk-text-white{

    }
</style>
