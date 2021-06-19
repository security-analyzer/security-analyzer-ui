import Vue from 'vue'
import App from './App.vue'
import VueFinalModal from 'vue-final-modal'
import VueRouter from 'vue-router'

import './assets/styles/tailwind.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueFinalModal())

new Vue({
  render: h => h(App),
}).$mount('#app')
