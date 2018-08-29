<template>
    <div class="home">                
        <navbar></navbar>
        <banner></banner>
        <navlist></navlist>
        <scrollpic :list="list" ></scrollpic>
        <activity></activity>
        <ypdiv></ypdiv>
        <hdiv></hdiv>
        <guess></guess>
    </div>
</template>
<script>
import navbar from './navbar'
import banner from './banner'
import navlist from './navlist'
import scrollpic from './scrollpic'
import activity from './activity'
import ypdiv from './ypdiv'
import hdiv from './hdiv'
import guess from './guess'

// import '../assets/js/jquery-1.7.2.js'
export default {  
  //响应式渲染
  data(){
    return {
      list:[]
    }
  }, 
  components: {
    navbar, banner, navlist, scrollpic,activity,ypdiv,hdiv,guess
  },
  //挂载数据
  mounted(){  
    this.$root.$data.bLoading = true;  
    setTimeout(()=>{
      //跨域请求 axios
      this.$http({
        url:`http://localhost:3000/index`
      }).then(
        res=>{          
          this.$root.$data.bLoading = false;
          this.$root.$data.bFooter = true;
          this.list=res.data;
        }       
      )
    },1000)
  }
}
</script>
<style>
body{background:#fff;}
</style>
