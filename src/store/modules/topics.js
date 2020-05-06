/* eslint-disable no-param-reassign */
import { topicsApi } from '../../api';

const topicsState = () => ({
  all: [],
  currentTopic: null
});

const getters = {};

const actions = {
  getTopic: async ({ commit }, id) => {
    const topic = await topicsApi.getOne(id);

    commit('setTopic', topic);
  },

  getTopics: async ({ commit }) => {
    const topics = await topicsApi.getList();

    commit('setTopics', topics);
  }
};
const mutations = {
  setTopic: (state, topic) => {
    state.currentTopic = topic;
  },

  setTopics: (state, topics) => {
    state.all = topics;
  }
};

export const topics = {
  namespaced: true,
  state: topicsState,
  getters,
  actions,
  mutations
};
