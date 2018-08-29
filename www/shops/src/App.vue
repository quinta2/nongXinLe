<template>
  <div id="app"> 
    <!--非状态管理（控制导航显示)  this.$root.$data.根数据名; -->
    <loading v-show="bLoading"></loading>  
    <router-view></router-view>
    <footbar v-if="bFoot"></footbar>
  </div>
</template>
<script>
import footbar from './components/footbar'
import { mapGetters, mapActions } from 'vuex'
import * as types from './store/type.js'

export default {
  components:{
    footbar
  },
  computed: mapGetters([
    'bLoading', 'bFoot'
  ]),
  mounted() {    
    this.checkState(this.$route.path)    
  },
  // created() {
  //   this.$store.dispatch('VIEW_LOADING',true);
  //   setTimeout(()=>{
  //     this.$store.dispatch('VIEW_LOADING',false)
  //   },1000)
  // },
  watch: {
    $route(to){
      // console.log('路由监听',to);//to == 变化之后的 $route
      this.checkState(to.path)  
    }
  },
  methods: {
    checkState(path){//都需要footer
      if(/home|classify|shopcar|user/.test(path)){
        //this.$store.dispatch(type,payload)		-> actions	
        this.$store.dispatch(types.VIEW_FOOT,true)
        // mapActions(['VIEW_FOOT'])
      }
      if(/login|register|detail/.test(path)){
        this.$store.dispatch(types.VIEW_FOOT,false)
      }
    }
  }
}
</script>
