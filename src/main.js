import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import VueLodash from 'vue-lodash'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(VueLodash)
// Vue.use(Lodash);
Vue.use(BootstrapVue);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
