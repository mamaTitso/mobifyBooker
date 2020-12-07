// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import loginPage from './components/loginPage'
import userRegistration from './components/userRegistration'
import clientDash from './components/clientDash'
import techDash from './components/techDash'
import inspectionSheet from './components/inspection'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: loginPage, name:'login'},
    {path:'/userReg', component: userRegistration, name:'userReg'},
    {path:'/client/:id', component:clientDash, name:'clientDash'},
    {path:'/technician/:id', component:techDash, name:'techDash'},
    {path:'/inspection/:id', component: inspectionSheet, name:'inspection'}
    // {path:'/view/:id', component: viewInspection,name:'view'},
    // //for the technician
    // {path:'/techReg', component: techRegistration, name:'techReg'}

  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
