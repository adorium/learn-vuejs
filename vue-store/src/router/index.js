import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../components/LogIn.vue'
import TransactionList from '../components/TransactionList.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'root',
    redirect:'/transactionList'
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path:'/transactionList',
    name:'TransactionList',
    component:TransactionList
  },
  {
    path:'*',
    name:'NotFound',
    component:NotFound
  }
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes:routes
})

router.beforeEach((to,from,next) => {
  console.log('from:', from);
  console.log('to1:', to);
  if(localStorage.getItem('token') || to.path=='/logIn') {
  //if(localStorage.getItem('token')) {
    console.log('to2:', to);
    next();
  }
  //}
  //else next('false');
})

export default router
