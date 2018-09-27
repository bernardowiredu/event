<template>
    <div>
        <div class="uk-padding-small">
            <h4 class="uk-text-strong">Notification</h4>
            <span class="uk-text-muted">
                Get updates,announcements from our plaform and from your events
            </span>
            <br><br>
            <hr style="border:1px dashed #f5f5f5;">

            <h5 class="uk-text-strong padding-medium"> Platform Notifications </h5>
            <p class="uk-text-muted">Recieve news and updates from the plaform</p>
            <br>
            <ul class="uk-list">
                <li class="padding-bottom-small">Updates about new features and announcements <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>
                <hr style="border:1px dashed #f5f5f5;">
                <li>Privacy and Policy changes <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>
            </ul>

            <br>
            <hr style="border:1px dashed #f5f5f5;">
            <br>
            <h5 class="uk-text-strong padiing-medium"> Event Notifications </h5>
            <p class="uk-text-muted">Recieve news and updates from your events</p>
            <br>
            <ul class="uk-list">
                <li class="padding-bottom-small">Contact accepts invitation <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>
                <hr style="border:1px dashed #f5f5f5;">
                <li class="padding-bottom-small">Contact views invitation <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>
                <hr style="border:1px dashed #f5f5f5;">
                <li class="padding-bottom-small">Contact declines invitation <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>
                <hr style="border:1px dashed #f5f5f5;">
                <li class="padding-bottom-small">Notify, me on event updates <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>
                <hr style="border:1px dashed #f5f5f5;">
                <li class="padding-bottom-small">Notify, when an event ends <span class="uk-float-right"><i-switch v-model="switch1" @on-change="change" /></span></li>

            </ul>

            <Button type="primary" size="large">Save Preferences</Button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Notification",
        data(){
            return{
                switch1:''
            }
        }
    }
</script>

<style scoped>

</style>
