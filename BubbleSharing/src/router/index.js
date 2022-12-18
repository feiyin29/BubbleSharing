import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutus',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/aboutUsView.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/WelcomeView.vue')
    },
    {
      path: '/termsofservice',
      name: 'TermsofService',
      component: () => import('../views/TermsofServiceView.vue')
    },
    {
      path: '/commustandards',
      name: 'CommuStandards',
      component: () => import('../views/CommuStandardsView.vue')
    },
    {
      path: '/privacy',
      name: 'privacyPolicy',
      component: () => import('../views/privacyPolicyView.vue')
    },
    {
      path: '/cookienotices',
      name: 'CookieNotices',
      component: () => import('../views/CookieNoticesView.vue')
      
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: mypage,
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('../views/pageView.vue')
    }
    ,
    {
      path: '/reportviolation',
      name: 'reportViolation',
      component: () => import('../views/reportViolationView.vue')
    }
  ],
scrollBehavior(to, from, savedPosition) {
  return { top: 0 }
},
})

export default router
