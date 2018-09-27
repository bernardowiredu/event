<template>
    <div>
        <div class="uk-padding-small">
            <h4 class="uk-text-strong">Payment Settings</h4>
            <span class="uk-text-muted">Manage your payment settings</span>
            <p>The preferred payment option selected will the default used on this plaform</p>
            <br>
            <hr style="border:1px dashed #f5f5f5;">
            <Form label-position="top" class="padding-medium">
                <FormItem label="Default Payment Gateway">
                    <Select size="large" v-model="formItem.select">
                        <Option value="beijing" selected>Credit Card</Option>
                        <Option value="shanghai">MTN Mobile Money</Option>
                        <Option value="shenzhen">Vodafone cash</Option>
                        <Option value="shenzhen">Airtel/Tigo cash</Option>
                    </Select>
                </FormItem>

                <div v-if="mobileM">
                    <FormItem label="Mobile Number">
                        <Input size="large" v-model="formItem.input1"></Input>
                    </FormItem>
                </div>

                <div v-else>
                    <div class="uk-child-width-expand@s" uk-grid >
                        <div>
                            <FormItem label="Credit Card">
                                <Input size="large" v-model="formItem.input1"></Input>
                            </FormItem>
                        </div>
                        <div>
                            <FormItem label="Card Holder">
                                <Input size="large" v-model="formItem.input1"></Input>
                            </FormItem>
                        </div>
                    </div>
                    <div class="uk-child-width-expand@s" uk-grid>
                        <div>
                            <FormItem label="Expiry Date">
                                <Input size="large" v-model="formItem.input1"></Input>
                            </FormItem>
                        </div>
                        <div>
                            <FormItem label="Pin">
                                <Input size="large" v-model="formItem.input1" width="200px;"></Input>
                            </FormItem>
                        </div>
                    </div>
                    <br>
                    <Button size="large" type="primary">Add Credit Card</Button>
                </div>

            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Payments",
        data(){
            return {
                mobileM: false,
                formItem: {
                    select:'',
                    input1:''
                }
            }
        }
    }
</script>

<style scoped>

</style>
