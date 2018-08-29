import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

var VueCookie = require('vue-cookie')
Vue.use(VueCookie)

import './assets/css/base.css'
import './assets/js/jquery-1.7.2'//全局引入生产环境下的jquery
import router from './router.config'
import axios from 'axios'
Vue.prototype.$http = axios;

import filters from './filters'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key])); //注册全局过滤器

import * as types from './store/type.js'
axios.interceptors.request.use(function (config) {
  // 请求时的拦截
  // config == 请求时拦截下来的携带的数据
  store.dispatch(types.VIEW_LOADING,true);
  return config;  不返回会被拦截
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 响应时的拦截
  store.dispatch(types.VIEW_LOADING,false)
  return response;
}, function (error) {
  return Promise.reject(error);
});

import loading from './loading';//引入插件
Vue.use(loading);//Vue全局安装loading组件

import store from './store';
import store2 from './store2'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,store,store2
})
