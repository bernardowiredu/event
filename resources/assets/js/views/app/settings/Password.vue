<template>
    <div>
        <div class="uk-padding-small">
            <h4 class="uk-text-strong">Password Changes</h4>
            <span class="uk-text-muted">Change your password</span>
            <br><br>
            <hr style="border:1px dashed #f5f5f5;">
            <Form>
                <FormItem label="Existing password">
                    <Input v-model="formItem.name" type="password" size="large" placeholder="Enter something..."></Input>
                </FormItem>
                <hr style="border:1px dashed #f5f5f5;">
                <h5 class="padding-medium uk-text-strong">Reset Password</h5>
                <span class="uk-text-muted">Set a new password for your account</span>
                <FormItem label="New Password">
                    <Input v-model="formItem.name" type="password" size="large" placeholder="Enter something..."></Input>
                </FormItem>

                <FormItem label="Repeat Password">
                    <Input v-model="formItem.name" type="password" size="large" placeholder="Enter something..."></Input>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Password",
        data(){
            return {
                formItem: {
                    name:''
                }
            }
        }
    }
</script>

<style scoped>

</style>
