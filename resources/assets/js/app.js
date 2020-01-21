/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

require('./components');

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vue from 'vue'
import VueEvents from 'vue-events'
import CustomActions from './components/Vuetable2/CustomActions'
import DetailRow from './components/Vuetable2/DetailRow'
import FilterBar from './components/Vuetable2/FilterBar'
import myrouter from './router/index'
import VueToastr from "vue-toastr"
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full';
import Vue2Filters from 'vue2-filters'
import mixins from './mixins/mixins'
import vmodal from 'vue-js-modal'
import store from './store/store';
import "./filters/filters";
import vSelect from  'vue-select';
import VueProgressBar from 'vue-progressbar';

import {Drawer} from 'element-ui';
import {DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Drawer, {locale});
Vue.use(DatePicker, {locale});
Vue.use(vmodal, {dynamic: true, dynamicDefaults: {clickToClose: false}, injectModalsContainer: true});
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueSweetalert2);
Vue.use(Vue2Filters);
window.Vue = require('vue');
Vue.use(VueEvents);
Vue.use(VueToastr);
Vue.component('custom-actions', CustomActions);
Vue.component('my-detail-row', DetailRow);
Vue.component('filter-bar', FilterBar);
Vue.component('v-select', vSelect);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueProgressBar, {
    color: '#FFFFFF',
    failedColor: 'red',
    height: '3px'
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */


// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    store,
    router: myrouter,
    mixins: [Vue2Filters.mixin, mixins],
    el: '#main-wrapper',
});


