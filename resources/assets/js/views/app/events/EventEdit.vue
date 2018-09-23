<template>
<div>
    <div class="uk-offcanvas-content">

        <div class="uk-container">

        <!--navbar goes here-->
            <Navbar name="Edit" icon="md-create"></Navbar>
        <!---->
            <div class="uk-section padding-custom">
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Navbar from 'Components/events/navbar/Navbar.vue'
    export default {
        name: "EventEdit",
        components: {
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

</style>
