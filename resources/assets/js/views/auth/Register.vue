<template>
    <div>
        <div class="wrapper-login">
            <nav class="uk-navbar-container uk-box-shadow-small" uk-navbar>
                <div class="uk-navbar-center">
                    <a class="uk-navbar-item uk-logo" href="#"> <Icon type="logo-google" color="#619fe8" size="50"/> Logo</a>
                </div>
            </nav>

            <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
                <div class="uk-padding-large uk-visible@l">
                    <div>
                        <!--<img  :src="'../images/lovers.svg'" alt="lovers" class="image-holder">-->
                        <h5 class="padding-xsmall uk-text-center padding-left-large text-light">Invite your  friends to your event at the comfort of your home</h5>
                    </div>
                </div>
                <div class="form-holder">
                    <div class="uk-padding-large">
                        <div>
                            <span class="form-headers"> Register </span>
                            <div style="padding-top:20px;">
                                <Button size="large" type="error" icon="logo-google" class="form-holder">Register with Google</Button>
                            </div>
                            <Divider class="form-holder">or</Divider>
                            <div >

                                <Form :model="formItem" class="form-holder">
                                    <FormItem>
                                        <Input v-model="formItem.input" suffix="ios-person" size="large" placeholder="Enter your Full name" clearable></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Input v-model="formItem.input" suffix="ios-mail-outline" size="large" placeholder="Enter your email address" clearable></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Input v-model="formItem.input" suffix="ios-phone-portrait" size="large" placeholder="Enter your mobile number" clearable></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Input type="password" v-model="formItem.password" suffix="ios-lock-outline" size="large" placeholder="Enter your password" clearable></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Input type="password" v-model="formItem.password" suffix="ios-lock-outline" size="large" placeholder="Enter your password" clearable></Input>
                                    </FormItem>
                                    <span class="uk-text-muted">
                                        This page is protected by reCAPTCHA and Subject to the Google Privacy Policy and Terms of service
                                    </span>
                                    <div class="" uk-grid>
                                        <div class="uk-width-1-2">
                                            <FormItem>
                                                <Checkbox v-model="formItem.single"> <span style="padding-left:5px;">I Agree to Terms</span></Checkbox>
                                            </FormItem>
                                        </div>
                                        <div class="uk-width-1-2">
                                            <FormItem>
                                                <Button type="primary" size="large" long>Register</Button>
                                            </FormItem>
                                        </div>
                                    </div>
                                </Form><br>
                                <div class="padding-xsmall">
                                    <Button type="success" size="large" class="form-holder" long to="/login"> Already have an account ? </Button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="footer uk-visible@m">
                <p>Copyright © 2018 InviteBuddies. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                formItem: {
                    email: '',
                    password:'',
                    single:''
                }
            }
        }
    }
</script>

<style scoped>
    .wrapper-login{
        height:100vh;
        width:100%;
        background:#fff;
        /*position:relative;*/
    }
    .uk-navbar-container{
        border:1px solid #f5f5f5;
        background:#fff;
    }.uk-logo{
         padding-left:70px;
     }
    .form-holder{
        width: 70%;
    }
    .uk-right{
        padding-left:40%;
    }
    .form-headers{
        font-size:20px;
    }
    .footer{
        position:absolute;
        bottom:40px;
        left:0;
        right:0;
        display:block;
        text-align:center;
    }
    .image-holder{
        width:75%;
        margin-left:100px;
    }

    @media screen and (min-width: 1600px){
        .uk-padding-large{
            padding-top:90px;
        }
    }

    @media screen and (max-width:1366px){
        .form-holder{
            width:85%;

        }
        .uk-right{
            padding-left:53%;
        }

        .image-holder{
            width:85%;
            margin-left:90px;
            padding-top:20px;
        }

        .wrapper-login{
            height:auto;
        }
        .footer{
            display:none;
        }
    }
    @media screen and (max-width: 600px){
        .form-holder{
            width:100%;
        }

        .wrapper-login{
            height:100%;
            position:relative;
        }
    }
    @media screen and (device-width:1024px){
        .form-holder{
            width:50%;
            margin-left:150px;
        }
        .form-headers{
            margin-left:150px
        }
        .footer{
            position:relative
        }
        .wrapper-login{
            height:auto;
        }
    }
    @media screen and (device-width:960px) {
        .form-holder {
            width: 50%;
            margin-left: 150px;
        }

        .form-headers {
            margin-left: 150px
        }

        .footer {
            display: none;
        }

    }
</style>
