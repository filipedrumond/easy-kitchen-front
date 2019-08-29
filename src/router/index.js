import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloWorld2 from '../components/HelloWorld2'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/teste',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
