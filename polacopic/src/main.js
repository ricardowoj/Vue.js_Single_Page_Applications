import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.udr(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
