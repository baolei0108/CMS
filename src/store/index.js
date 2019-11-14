import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import { login } from '../api/index'



import Main from '@/components/Main'
import News from '@/components/News'
import Login from '@/components/pages/Login'
import Layout from '@/components/pages/Home'



import Permission from '@/components/Permission'


// const constantRoutes =[
//   // {
//   //   path: '/News',
//   //   name: 'News',
//   //   component: News
//   // }
// ]


const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },

  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },

  // {
  //       path: '/',
  //       name: 'Login',
  //       component: Login
  // },


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
        name: 'Table',
        component: () => import('@/views/future/index'),
        meta: { title: 'Table', icon: 'table' }
      }
    ]
  },



  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]


const asyncRoutes = [
  {
    path: '/folish',
    component: () => import('@/components/pages/Home'),
    redirect: '/folish/table',
    name: '权限测试',
    meta: { title: 'folish', icon: 'folish' },
    children: [
      {
        path: 'table',
        name: 'FoTable',
        component: () => import('@/views/folish/index'),
        meta: { title: 'folish', icon: 'folish' }
      }
    ]
  }
];



Vue.use(Vuex)

const store = new Vuex.Store({

state: {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  routes: [],
  addRoutes: []
},



mutations: {
  SET_TOKEN: (state, token) => {
    state.token = token
  },


  SET_ROLES: (state, roles) => {
    state.roles = roles
  },


  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }

},


getters: {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  // token: state => state.token,
  token: state => state.token,
  routes: state => state.routes,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
},



actions: {

  login({ commit }, userInfo) {
    // console.log('store  login')
    // console.log(userInfo);

      //应该用post请求  封装成一个promise 很有必要
      return new Promise((resolve, reject) => {
          axios.get('/user/userinfo')
              .then(({data})=>{
                    //打印mock data
                    console.log('数据')
                    console.log(data.data.token);
                    commit('SET_TOKEN', data.data.token)
                    // commit('SET_ROLES', data.data.roles)
                    // setToken(data.token)
                    localStorage.setItem('token', data.data.token);
                    resolve()
              })
              .catch( error => {
                  reject(error)
              })

        })


      // return new Promise((resolve, reject) => {
      //   login({ username: username.trim(), password: password }).then( (res)=> {
      //       console.log('res,,', res)
      //   })


      // })




    // return new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password }).then(response => {
    //     const { data } = response
    //     commit('SET_TOKEN', data.token)
    //     setToken(data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },



  getInfo({ commit }, userInfo) {
    // console.log('store  login')
    // console.log(userInfo);

      //应该用post请求  封装成一个promise 很有必要
      return new Promise((resolve, reject) => {
          axios.get('/user/userinfo')
              .then(({data})=>{
                    //打印mock data
                    console.log('数据')
                    console.log(data.data.roles);
                    commit('SET_ROLES', data.data.roles)

                    //将roles写入sessionStorage
                    sessionStorage.setItem("roles", data.data.roles);
                    resolve()
              })
              .catch( error => {
                  reject(error)
              })

        })


  },




  generateRoutes({ commit }, roles) {
     console.log('store generateRoutes  ')
    return new Promise(resolve => {
      let accessedRoutes = []
      if (roles.includes('admin')) {
        console.log('roles.includes(admin)')
        accessedRoutes = asyncRoutes || []
      }

      //将合并后的routes存入store
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }


}




})

export default store
