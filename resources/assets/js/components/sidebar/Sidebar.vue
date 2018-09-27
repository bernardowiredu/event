<template>
  <div>
      <aside>
          <div class="logo">
              <a  class="uk-text-primary" href=""><Icon type="logo-sass" size="70"/></a>
          </div>
          <nav>
              <li><router-link to="/" class="nav-link" active-class="active">Dashboard </router-link></li>
              <li><router-link to="/event" active-class="active">Events <span class="uk-float-right"><Icon type="md-arrow-dropdown"/></span></router-link></li>
              <li><router-link to="/analytics">Analytics</router-link></li>
              <li><router-link to="/settings">Settings</router-link></li>
              <li><router-link to="/contacts" active-class="active">Contacts <span class="uk-float-right"><span class="uk-text-muted" style="font-size:13px;"> <Icon type="md-person-add" /> 245 Added</span>
              </span></router-link></li>

              <!--bottom links-->
              <div class="bottom-links">
                  <p class="subscribed uk-text-primary"><Icon type="md-person" size="16"/> Subscribed user</p>
                  <hr>
                  <li>
                      <a href="#modal-center" uk-toggle>Personal Plan <span class="uk-float-right" type="button"><Icon type="ios-arrow-forward" /></span></a>
                       <span class="funds">Balance 0.00 <span class="uk-text-right uk-text-primary">&emsp;&emsp;Add funds</span></span>
                  </li>
                  <!-- This is the modal -->
                  <div id="modal-center" class="uk-flex-top" uk-modal style="font-size:14px;">
                      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-border-rounded">

                          <button class="uk-modal-close-default" type="button" uk-close></button>
                            <p>You currently on the<span class="uk-text-primary"> personal plan</span> . <br>
                                Do you consider upgrading to <span class="uk-text-primary" >premium plan</span> enjoy all features and discounts ? <br>
                                <span><a href="">Read more about plans..</a></span>
                            </p>
                          <br>

                          <Button size="large" class="padding-medium" type="primary">Upgrade Now</Button>

                      </div>
                  </div>
              </div>
          </nav>
      </aside>
  </div>
</template>
<script>
    export default {
        name:"Sidebar"
    }
</script>

<style scoped>

</style>
