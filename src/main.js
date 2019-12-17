import Vue from 'vue'
import App from './App.vue'
import router from './router'

const DD = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

module.exports = DD
