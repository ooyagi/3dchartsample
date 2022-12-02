import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/3d-scatter',
    name: '3DScatter',
    component: () => import('@/views/3DScatter.vue'),
  },
  {
    path: '/3d-stackbar',
    name: '3DStackBar',
    component: () => import('@/views/3DStackBar.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
