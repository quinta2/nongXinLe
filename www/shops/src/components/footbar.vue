<template>
    <footer>
        <router-link class="pick" activeClass="home" to="./home">
            <i class="icon-f1"></i> 
            首页
        </router-link>
        <router-link class="classify" activeClass="home" to="./classify">
            <i class="icon-f2"></i>
            分类
        </router-link>
        <router-link class="pick" activeClass="home" to="./goods">
            <i class="icon-f3"></i>
            好货
        </router-link>
        <router-link class="pick" activeClass="home" to="./shopcar">
            <i class="icon-f4"></i>
            购物车
        </router-link>
        <router-link class="pick" activeClass="home" to="./user">
            <i class="icon-f5"></i>
            我的农芯乐
        </router-link>
    </footer>
</template>
<style>
.home{background:#ccc;}
.home a{margin-top:-10px;}
footer {position: fixed;right: 0; bottom: 0;left: 0; height:5rem; background-color: #fff; border-top: 1px solid #e6e6e6;}
footer a { display:inline-block; width:19%; height:4rem; padding:0.5rem 0; text-align:center;font-size:1.2rem;color:#171817; }
footer a i { display:block; width:20px; height:20px; margin:0 auto; background:url(../assets/images/index/icon.png) no-repeat center; background-size:30px auto; margin-bottom:0.5rem}
footer a:active i { background:url(../assets/images/index/icon_active.png) no-repeat center;background-size:30px auto;}
footer a i.icon-f1 { background-position:-5px -5px}
footer a i.icon-f2 { background-position:-5px -36px}
footer a i.icon-f3 { background-position:-5px -66px}
footer a i.icon-f4 { background-position:-5px -95.6px}
footer a i.icon-f5 { background-position:-5px -127.6px}
</style>
