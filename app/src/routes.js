import Vue from 'vue';
import Router from 'vue-router';

import Layouts from './pages/Layouts';
import Intro from './pages/Intro';
import Request from './pages/Request';

import Admin from './pages/admin/Index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Layouts,
      children: [
        {
          path: '',
          component: Intro
        },
        {
          path: 'request',
          component: Request
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ],
});
