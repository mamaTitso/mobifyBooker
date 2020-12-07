import Vue from 'vue'
import Router from 'vue-router'
import loginPage from '../components/loginPage'
import techRegistration from '../components/techRegistration.vue'
import clientRegistration from '../components/clientRegistration.vue'
import bookInstallation from '../components/bookInstallation.vue'

Vue.use(Router)

export const router = new Router({
  mode:'history',
  routes: [
    {path: '/',name: 'loginPage',component: loginPage},
    {path: './clientRegistration',name: 'clientReg',component:clientRegistration},
    {path: './bookInstallation/:user',name: 'bookInstall',component: bookInstallation},
    {path: './techRegistration',name: 'techReg',component: techRegistration}
  ]
})

new Vue({
  router,
})
