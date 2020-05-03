import Vue from 'vue';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';
import VueSimpleMarkdown from 'vue-simple-markdown';
import Vuex from 'vuex';

import App from './App.vue';
import router from './router';
import { store } from './store';

Vue.use(VueSimpleMarkdown);
Vue.use(Vuex);

const DD = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

module.exports = DD;
