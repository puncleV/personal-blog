import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about'
import TopicsList from '../components/topics/topics-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/topics',
      name: 'Topics',
      component: TopicsList
    }
  ]
})
