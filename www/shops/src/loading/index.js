import loading from './components/loading.vue'
export default {
    //使用install函数注册子组件
    install:function(Vue){
        Vue.component('loading',loading)
    }
}