import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about'
import TopicsList from '../components/topics/topics-list'
import Topic from '../components/topics/topic'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: TopicsList
    },
    {
      path: '/blog/:id',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
