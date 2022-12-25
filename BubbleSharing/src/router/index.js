import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import welcome from '../views/WelcomeView.vue'
import mypage from '@/views/MyPageView.vue'

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
      component: () => import('../views/WelcomeView.vue'),
      // component: welcome,
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
      component: () => import('../views/MyPageView.vue'),
      // component: mypage,
    },
    {
      path: '/reportviolation',
      name: 'reportViolation',
      component: () => import('../views/reportViolationView.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/Discover.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/createView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/Management.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/feedback.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/account.vue')
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import('../views/analysis.vue')
    },
    {
      path: '/design',
      name: 'design',
      component: () => import('../views/designView.vue')
    },
    {
      path: '/mybubblesharing',
      name: 'mybubblesharing',
      component: () => import('../views/MyBubbleSharingView.vue')
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('../views/pageView.vue')
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import('../components/test.vue')
    // },
  ],
scrollBehavior(to, from, savedPosition) {
  return { top: 0 }
},
})

export default router
