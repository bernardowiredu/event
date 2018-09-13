
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import iView from  'iview'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import VCalendar from 'v-calendar'
import  locale from 'iview/dist/locale/en-US'
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'
import VueCharts from 'vue-chartjs'
import router from './router'


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(iView, {locale});
UIkit.use(Icons);
Vue.use(VCalendar, {
    firstDayOfWeek: 1 // set first day to sunday
});
// locale.use(lang);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});

const app = new Vue({
    el: '#app',
    router
});
