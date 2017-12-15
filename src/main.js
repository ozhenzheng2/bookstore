// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap-css'
import Swiper from '../node_modules/swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.config.productionTip = false;

var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    booklist: ''
  },

});
