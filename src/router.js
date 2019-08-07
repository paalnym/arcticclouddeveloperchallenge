import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Agenda from '@/components/Agenda'
import LastYear from '@/components/LastYear'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/LastYear',
      name: 'LastYear',
      component: LastYear
    }
  ]
})
