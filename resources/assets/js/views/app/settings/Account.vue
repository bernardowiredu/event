<template>
    <div>
        <div class="uk-padding-small">
            <h4 class="uk-text-strong">
                Personal Settings
                <span class="uk-float-right uk-hidden@s">
                  <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                     <span class="uk-text-small uk-text-primary">Edit Image</span>
                </span>
            </h4>
            <span class="uk-text-muted">Personalise your settings</span>
            <br><br>

            <Form :model="formItem" label-position="top">
                <div class="uk-child-width-expand@s" uk-grid >
                    <div>
                        <FormItem label="First Name">
                            <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Last Name">
                            <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                        </FormItem>
                    </div>
                </div>
                <br>
                <FormItem label="Email Address">
                    <!--<span class="uk-text-success uk-float-right">verified</span>-->
                    <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                </FormItem>
                <div class="uk-child-width-expand@s" uk-grid >
                    <div>
                        <FormItem label="Mobile Number">
                        <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                        </FormItem>
                    </div>
                    <div>
                        <FormItem label="Office Number">
                        <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                        </FormItem>
                    </div>
                </div>
                <br>
                <hr style="border:1px dashed #f5f5f5;">
                <br>
                <h5 class="padding-xsmall">Address</h5>
                <!--<span class="uk-text-muted">Change your password</span>-->
                <br>
                <FormItem label="Address">
                    <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                </FormItem>

                <FormItem label="City">
                    <Input v-model="formItem.name" size="large" placeholder="Enter something..."></Input>
                </FormItem>

            </Form>

            <h5>Delete Account</h5>
            <hr style="border:1px dashed #f5f5f5;">
            <p class="padding-medium">Delete my account <span class="uk-float-right"><Button type="" size="small">Delete Account</Button></span></p>
            <p class="uk-text-muted">If you delete your account, your data will be gone forever.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Account",
        data(){
            return {
                formItem: {
                    select:'',
                    name:'',


                }
            }
        }
    }
</script>

<style scoped>

</style>
