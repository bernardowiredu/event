<template>
    <div>
        <div class="uk-section">
            <div class="uk-grid-small uk-grid-match uk-child-width-expand" uk-grid>
                <div class="uk-visible@l">
                    <div class="uk-padding-large">
                        <h1 class=" text-white  padding-bottom-small">Create your events</h1>
                        <h3 class="text-white text-light">Create events and invite million friends <br>all over the world in less than 5 mins</h3>
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
                        <img :src="'../images/svg/lovers.svg'">
                    </div>
                    <div class="uk-padding uk-hidden@s">
                        <img :src="'../images/svg/lovers.svg'">
                    </div>
                    <div class="uk-hidden@s uk-text-center">
                        <h3 class="text-white text-light">Create your event</h3>
                        <h5 class="text-light text-white">Create and invite million friends all over <br> the world in mins </h5>
                    </div>
                    <div class="navigation-holder">
                        <center>
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
        name: "Create"
    }
</script>

<style scoped>
    .uk-section{
        height:100vh;
        background:#4990e2
    }
    .uk-padding-large{
        margin-top:180px;
        margin-left:100px;
        color:#fff;
    }
    .uk-margin-large{
        margin-top:100px;
    }

    .navigation-holder{
        position: absolute;
        bottom:40px;
        right:0;
        left:0;
    }
</style>
