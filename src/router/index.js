import { createRouter, createWebHistory } from 'vue-router';
import home from './home';
import notFoundComponent from '@/components/Controls/notFound.vue';

const routes = [
  { path: '/:pathMatch(.*)*', redirect: { name: '/notFound' } },
  { path: '/404', name: 'notFound', component: notFoundComponent },

  ...home,

]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
