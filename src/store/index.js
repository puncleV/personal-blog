import Vue from 'vue'
import Vuex from 'vuex'
import { topics } from './modules/topics'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  modules: {
    topics
  },
  strict: debug
})
