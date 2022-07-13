import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MarketAnalysis from '../components/MarketAnalysis.vue'
import CompetitiveAnalysis from '../components/CompetitiveAnalysis.vue'


const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        component: MarketAnalysis
      },
      {
        path: 'competitive',
        component: CompetitiveAnalysis
      }
    ]
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: loginView
  // },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: signupView
  // },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
