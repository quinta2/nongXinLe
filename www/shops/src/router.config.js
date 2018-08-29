import Vue from 'vue'
import VueRoute from 'vue-router'
Vue.use(VueRoute)

import home from './components/home.vue'
import classify from './components/classify.vue'
import shopcar from './components/shopcar.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import user from './components/user.vue'
import error from './components/error.vue'
import detail from './components/detail.vue'
 
const routes = [
  {path:'/home',component:home},
  {path:'/classify',component:classify},
  {path:'/shopcar',component:shopcar},
  {path:'/login',component:login},
  {path:'/register',component:register},
  {path:'/user',component:user},
  {path:'/detail/:aid',component:detail},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
]

export default new VueRoute({
  routes:routes
})

