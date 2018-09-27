<template>
    <div>
        <div class="uk-padding-small">
            <h4 class="uk-text-strong">Event Settings</h4>
            <span class="uk-text-muted">Personalise your event settings</span>
            <br>
            <hr style="border:1px dashed #f5f5f5;">
            <h6 class="padding-medium uk-text-strong">Auto Appreciation
                <span class="uk-float-right uk-text-muted">
                   Activate <i-switch v-model="switch1" @on-change="change" />
               </span>
            </h6>
            <span  class="uk-text-muted">Automatically appreciate your invitees</span>
            <br><br>
            <hr style="border:1px dashed #f5f5f5;">
            <h6 class="padding-medium uk-text-strong">Mode of Delivery</h6>
            <span class="uk-text-muted">Select the option to deliver invitation to your contacts</span>
            <br>
            <Form>
                <CheckboxGroup>
                    <Checkbox label="twitter">
                        <span>Emails</span>
                    </Checkbox>
                    <Checkbox label="facebook">
                        <span>SMS</span>
                    </Checkbox>
                    <Checkbox label="github">
                        <span>Phone Call</span>
                    </Checkbox>
                </CheckboxGroup>
            </Form>
            <br>
            <hr style="border:1px dashed #f5f5f5;">
            <h6 class="padding-medium uk-text-strong">Reminders</h6>
            <span class="uk-text-muted">
            Reminders your invitees when you event is close. <br>
            To activate reminders select the date and how often you want to start reminding your invitees</span>
            <br>
            <Form class="padding-xsmall" label-position="top">
                <FormItem label="Days to event">
                    <Select size="large" v-model="formItem.select">
                        <Option value="beijing">A Day</Option>
                        <Option value="shanghai">A week to event</Option>
                        <Option value="shenzhen">A month to the event</Option>
                        <Option value="shenzhen">Start immediately</Option>
                        <Option value="shenzhen">...</Option>
                    </Select>
                </FormItem>
                <FormItem label="Frequency">
                    <Select size="large" v-model="formItem.select">
                        <Option value="beijing">Daily</Option>
                        <Option value="shanghai">Twice Daily</Option>
                        <Option value="shenzhen">Weekly</Option>
                        <Option value="shenzhen">Monthly</Option>
                    </Select>
                    <span>Frequency is how often your your reminders should run from the timeframe selected above</span>
                </FormItem>

                <FormItem>
                    <Button type="primary" size="large">Save Preferences</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventSetting",

        data(){
            return {
                switch1:'',
                formItem: {
                    select:'',

                }
            }
        }
    }
</script>

<style scoped>

</style>
