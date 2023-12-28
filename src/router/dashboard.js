const dashboardRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard/index.vue'),
  },
  {
    path: '/manageUser',
    name: 'manageUser',
    component: () => import('@/pages/dashboard/manageUser/index.vue'),
  },
  {
    path: '/manageMoney',
    name: 'manageMoney',
    component: () => import('@/pages/dashboard/manageMoney/index.vue'),
  },
]

export default dashboardRoutes
