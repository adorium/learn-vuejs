import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '@/views/LogIn.vue'
import TransactionList from '@/views/TransactionList.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'root',
    redirect:'/tras'
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn,
    meta: { noAuthRequired: true }
  },
  /*{
    path:'/tras',
    name:'TransactionList',
    component:()=>import('../views/TransactionList.vue'),
  },*/
  {
    path:'/tras',
    name:'TransactionList',
    component:TransactionList,
    children: [
      {
        path:'',
        component:()=>import('@/components/SearchTras.vue')
      },
      {
        path:':tid',
        name:'TransactionDetail',
        component: ()=>import('@/components/TransactionDetail.vue')
      }
    ]
  },
  {
    path:'*',
    name:'NotFound',
    component:NotFound,
    meta: { noAuthRequired: true }
  }
]

const router = new VueRouter({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes:routes
})
router.beforeEach((to,from,next) => {
  console.log('A.', 'from:', from);
  console.log('to1:', to);
  console.log('require auth?:', !to.matched.some(rInfo=>rInfo.meta.noAuthRequired));
  //if(localStorage.getItem('token') || to.path=='/logIn') {
  if(localStorage.getItem('token') || to.matched.some(rInfo=>rInfo.meta.noAuthRequired)) {
    console.log('B.','to2:', to);
    next();
  }
  else { console.log('C.','logIn next time'); 
    if(from.path!='/logIn') { next('/logIn'); 'D.'} 
  }
})

export default router
