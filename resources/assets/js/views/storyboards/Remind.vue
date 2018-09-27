<template>
    <div>
        <div class="uk-section">
            <div class="uk-grid-small uk-grid-match uk-child-width-expand" uk-grid>
                <div class="uk-visible@l">
                    <div class="uk-padding-large">
                        <h1 class=" text-white  padding-bottom-small">Remind your friends</h1>
                        <h3 class="text-white text-light">Automatically remind your friends ahead of time <br> before your event starts </h3>
                        <br>
                        <Button type="default" size="large" class="padding-medium"  ghost>Start an event </Button>
                    </div>

                </div>
                <div>
                    <div class="uk-hidden@s uk-text-center">
                        <!--<h3 class="text-white">Create your event</h3>-->
                        <!--<h4 class="text-light">Create and invite your friends all over the world in mins </h4>-->
                    </div>
                    <div class="uk-padding uk-margin-large uk-visible@l">
                        <img :src="'../images/svg/remind.svg'">
                    </div>
                    <div class="uk-padding uk-hidden@s">
                        <img :src="'../images/svg/remind.svg'">
                    </div>
                    <div class="uk-hidden@s uk-text-center">
                        <h3 class="text-white text-light">Remind your friends</h3>
                        <h5 class="text-light text-white">Automatically remind your friends without a hassle </h5>
                    </div>
                    <div class="navigation-holder-small uk-hidden@s">
                        <center>
                            <Button type="default" size="large" icon="md-arrow-back" ghost>Previous </Button>&emsp;
                            <Button type="default" size="large" icon="md-arrow-forward" ghost>Next </Button>
                        </center>
                    </div>
                    <div class="navigation-holder-large uk-visible@l">
                        <center>
                            <Button type="default" size="large" icon="md-arrow-back" ghost>Previous </Button>&emsp;
                            <Button type="default" size="large" icon="md-arrow-forward" ghost>Next </Button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Remind"
    }
</script>

<style scoped>
    .uk-section{
        height:100vh;
        background:#32bc9d;
    }
    .uk-padding-large{
        margin-top:180px;
        margin-left:100px;
        color:#fff;
    }
    .uk-margin-large{
        margin-top:100px;
    }

    .navigation-holder-small{
        position: absolute;
        bottom:40px;
        right:0;
        left:0;
    }
    .navigation-holder-large{
        position: absolute;
        bottom:50px;
        right:0;
        left:0;
    }
</style>
