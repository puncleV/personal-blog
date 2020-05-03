import { topicsApi } from '../../api'

const state = () => ({
  all: [],
  currentTopic: null
})

const getters = {
}

const actions = {
  getTopic: ({ commit }, id) => {
    const topic = topicsApi.getOne(id)

    commit('setTopic', topic)
  },

  getTopics: ({ commit }) => {
    const topics = topicsApi.getList()

    commit('setTopics', topics)
  }
}
const mutations = {
  setTopic: (state, topic) => {
    state.currentTopic = topic
  },

  setTopics: (state, topics) => {
    state.all = topics
  }
}

export const topics = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
