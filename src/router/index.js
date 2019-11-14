import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import News from '@/components/News'
import Login from '@/components/pages/Login'
import Home from '@/components/pages/Home'

import Layout from '@/components/pages/Home'


import store from '../store'


Vue.use(Router)

const constantRoutes = [
  {
        path: '/',
        name: 'Login',
        component: Login
  },

  {
        path: '/Home',
        name: 'Home',
        component: Home
  },



  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'ExeTable',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree2/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },


  {
    path: '/future',
    component: Layout,
    redirect: '/future/table',
    name: 'Future',
    meta: { title: 'Future', icon: 'future' },
    children: [
      {
        path: 'table',
        name: 'FuTable',
        component: () => import('@/views/future/index'),
        meta: { title: 'Table', icon: 'table' }
      }
    ]
  },



  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]


const router = new Router({
  routes: constantRoutes

})

//路由拦截
//路由跳转之前
router.beforeEach((to, from, next) => {

  // console.log('store.getters.token',  store.getters.token);

  if (to.path === '/login') {

    return next('/')
  }  else {

    console.log('sessionStorage.getItem("roles")::: ',sessionStorage.getItem("roles"))
    const hasRoles = store.getters.roles && store.getters.roles.length > 0;

    //改成从sessionStorage里面读 刷新
    // const hasRoles = sessionStorage.getItem("roles");

    //第一次进去 无hasRoles  走的是 to.path !== '/login'
    if(hasRoles) {
      next();
    }  else {
      // console.log('999999999999999999999999999999')
      // console.log('store.getters.token: ', store.getters.token)
        //去获取roles  并获取动态路由
        store.dispatch('getInfo', store.getters.token)
               .then(() => {
                 console.log('yes getInfo')

                 store.dispatch('generateRoutes', store.getters.token)
                      .then( (accessRoutes) => {
                        console.log('执行  generateRoutes')
                        console.log(accessRoutes)

                        // accessRoutes 注意传过来的[]里面的components需要为component: () => import('@/components/pages/Home') 这种懒加载格式

                        router.addRoutes(accessRoutes)

                        next({ ...to, replace: true })
                      })





               })
               .catch( () => {
                 console.log('no getInfo');

               })


        console.log('无roles ')
    }





  }



})


export default router
