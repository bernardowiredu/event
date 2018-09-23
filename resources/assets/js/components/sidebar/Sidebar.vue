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
              <li><a href="">Settings</a></li>
              <li><router-link to="/contacts" active-class="active">Contacts <span class="uk-float-right"><span class="uk-text-muted" style="font-size:13px;"> <Icon type="md-person-add" /> 245 Added</span>
              </span></router-link></li>

              <!--bottom links-->
              <div class="bottom-links">
                  <p class="subscribed uk-text-primary"><Icon type="md-person" size="16"/> Subscribed user</p>
                  <hr>
                  <li><a href="">Personal Settings <span class="uk-float-right"><Icon type="ios-arrow-forward" /></span></a>
                      <span class="funds">Balance 0.00 <span class="uk-text-right uk-text-primary">&emsp;&emsp;Add funds</span></span>
                  </li>

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
