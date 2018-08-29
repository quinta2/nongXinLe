<template>
    <div class="scrollpic">
      <div class="tit1"><img src="../assets/images/index/tit1.jpg" ></div>
      <div class="scrollul">
        <ul>
            <li 
              v-for=" item of list" 
              :key="item.id"
            >
            <!-- 配置路由路径 -->
              <router-link
                :to="'/detail/'+item.id+'?dataName='+dataName"
              > 
                <img :src="item.href" />
                <span>{{item.title}}</span>
                <b>{{item.price}}</b>
              </router-link>
            </li>                
          </ul>
      </div>
    </div>
</template>
<script>
export default {
  props:['list','dataName']//props是route身上的专有属性，还有ref，slot:插槽  
}
</script>
<style scoped>
.tit1 { height:5rem; line-height:5rem}
.tit1 img { width:50%; padding-left:1.8rem;}

.scrollpic{width:100%;margin: auto; position:relative; background:#fff; padding:0 0 1rem 0rem;overflow:hidden;}
.scrollul { width:90%; margin:0 auto}
.scrollul li {width:33.3%; float:left; background:#fff}
.scrollul li a { display:block; width:90%; margin:0 auto }
.scrollul li a span { display:block; font-size:1.3rem; height:2rem; line-height:2rem; overflow:hidden; text-overflow:ellipsis;color:#252021;}
.scrollul li a>b { font-size:1.5rem; color:#fb2b49; font-weight:normal}
</style>
