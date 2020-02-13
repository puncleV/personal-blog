import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.use(VueSimpleMarkdown);

const DD = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

module.exports = DD
