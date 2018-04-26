import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/pages/login.page'
import ServerSelectPage from '@/pages/server_select.page'
import Launcher from '@/pages/launcher.page'
import HomePage from '@/pages/home.page'
import HomeStartPage from '@/pages/home.start.page'
import HomeVersionPage from '@/pages/home.version.page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LoginPage
    },
    {
      path: '/server_select',
      component: ServerSelectPage
    },
    {
      path: '/launcher',
      component: Launcher,
      children: [
        {
          path: '',
          component: HomePage,
          children: [
            {
              path: '',
              component: HomeStartPage
            },
            {
              path: 'version',
              component: HomeVersionPage
            },
            {
              path: 'video'
            },
            {
              path: 'luckypolo'
            }
          ]
        }
      ]
    }
  ]
})
