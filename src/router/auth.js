const authRoutes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/auth/login.vue')
    }
]
  
export default authRoutes
  