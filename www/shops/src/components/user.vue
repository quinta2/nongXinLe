<template>
    <div class="user">
        <div class="mcenter">
            <!--<span class="membername"><router-link style="color:#fff;" activeClass="active" to="./login">登录/注册</router-link></span>-->
            <p><a class="icon_1" href="#"></a><a class="icon_2" href="#"><i>20</i></a></p>
            <a class="bg"><img src="../assets/images/Mcenter/bg.png"></a>
            <span class="member">
                <a class="headimg" href="#"><i></i></a>
                <span>会员名称:{{user.data[0].username}}<br/><b> 预存款余额：{{user.data[0].balance}}</b></span>
                <a class="gl" href="#" @click="logout">注销</a>
                <div class="clearx"></div>
            </span>
        </div>
        <div class="clearx" style="height:170px; display:none"></div>
        <article class="member">
            <h3>我的订单<a href="#">查看更多订单></a></h3>
            <span>
                <a class="mcon_1" href="#"><span>待付款</span></a>
                <a class="mcon_2" href="#"><span>待发货</span></a>
                <a class="mcon_3" href="#"><span>待收货</span></a>
                <a class="mcon_4" href="#"><span>待评价</span></a>
                <a class="mcon_5" href="#"><span>退换售后</span></a>
                <div class="clearx"></div>
            </span>
        </article>
        <article class="member custom">
            <h3>客户服务</h3>
            <span>
                <a href="#"><b>4516456</b><span>收藏商品</span></a>
                <a href="#"><b>23242</b><span>收藏店铺</span></a>
                <a href="#"><b>23432</b><span>浏览记录</span></a>
                <a class="mcon_6" href="#"><span>客服中心</span></a>
                <div class="clearx"></div>
            </span>
        </article>
        <div class="ad">
            <img src="../assets/images/Mcenter/ad_img.jpg">
        </div>
        <!--为您推荐-->
        <div class="guess">
            <div class="tit5"><h3>为您推荐</h3></div>
            <ul>
                <li>
                    <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <li>
                    <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <li>
                    <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                    
                </li>
                <li>
                    <a href="#"><img src="../assets/images/index/guess_1.jpg"><span>汇源100%橙汁 200ml*12盒 礼盒装健康早点喝汇源适当方式发给斯蒂芬</span><b>￥125</b></a>
                </li>
                <div class="clearx"></div>
            </ul>    
        </div>
        <div class="clearx" style="height:12rem"></div>
    </div>
</template>
<script>    
    import store from '../store/index.js'
    import {mapGetters} from 'vuex'
    export default {
        methods: {
            logout(){
                this.$store.dispatch('UPDATE_USER',{})
                this.$router.push('/home')//添加子路由
            }
        },
        computed:mapGetters([
            'user'
        ]),
        //前置路由守卫
        beforeRouteEnter (to, from, next) {
            if(store.state.user.auth){ //守卫
                //预载 
                // to.query.user=store.state.user // 01 
                // next(_this=>this.组件数据=store.state.user) //02
                // 直接在组件模板内部使用公共仓库(state) 03
                next();
            }else{
                next('/login')
            }
        }
    }
</script>
<style>
.active{color:red;}
img {width:100%}
.guess .tit5 h3 { display:block; font-size:1.2rem; color:#666; margin:0 auto;line-height: 3rem; text-align:center; width:50px; background:#eee; font-weight:normal}
.guess .tit5 { width:30%; display:block; height:3rem; background:url(../assets/images/merchandise/dot.png) left center repeat-x; margin:0 auto }
.mcenter { height:170px; background-image: linear-gradient(to right, #ff6000,#f31049); background-image: -webkit-linear-gradient(to right, #ff6000,#f31049); position:relative}
.mcenter.zfloat {position:fixed; top:0; left:0; z-index:100; width:100%; height:50px; overflow:hidden }
.mcenter span.membername { font-size:1.4rem; color:#fff; position:absolute; top:15px; left:15px;}
.mcenter>p { padding:15px 15px 10px 15px; text-align:right}
.mcenter>p a { display:inline-block; width:25px; height:25px; margin-left:15px}
.mcenter>p a.icon_1 { background:url(../assets/images/Mcenter/icons_1.png) no-repeat center; background-size:25px 25px}
.mcenter>p a.icon_2 { background:url(../assets/images/Mcenter/icons_2.png) no-repeat center; background-size:25px 25px; position:relative}
.mcenter>p a.icon_2 i { display:inline-block; background:#fff; border:1px solid #f41642; color:#f41642; padding:2px; border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%;-webkit-border-radius:50%; font-style:normal; position:absolute; top:-5px; right:-6px; z-index:2; font-size:1rem; width: 15px;height: 15px; text-align:center}
.mcenter a.bg { display:block; width:30%; position:absolute; right:0; bottom:0; z-index:2}
.mcenter .member { display:block; padding:0 15px; position:relative}
.mcenter .member .headimg { display:inline-block; width:70px; height:70px; background:url(../assets/images/Mcenter/headimg.png) no-repeat center; background-size:70px auto; position:relative; float:left}
.mcenter .member .headimg i { display:block; width:30px; height:30px; background:url(../assets/images/Mcenter/icons_3.png) no-repeat center; background-size:30px auto; position:absolute; bottom:-8px; right:-5px; z-index:3}
.mcenter .member span { float:left; font-size:1.4rem; color:#fff; display:inline-block; width:60%; padding-left:10px; margin-top:15px}
.mcenter .member span b { font-size:1.2rem; color:#f82929; padding:2px 10px;background-image: linear-gradient(to right, #fdc62f,#fff6dd); background-image: -webkit-linear-gradient(to right, #fdc62f,#fff6dd); font-weight:normal; border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-border-radius:3px; }
.mcenter .member .gl { color:#fff; font-size:1.2rem; position:absolute; top:0px; right:15px}
article.member { padding:15px; background:#fff; margin-bottom:10px}
article.member h3 { display:block; height:30px; line-height:30px; font-weight:normal; font-size:1.4rem; color:#000; padding-left:40px; background:url(../assets/images/Mcenter/icons_4.png) left center no-repeat; background-size:30px auto; position:relative}
article.member h3 a { font-size:1.2rem; color:#6d6d6d; position:absolute; right:0px; top:0}
article.member>span { display:block; margin-top:10px;margin-left: -10px; margin-right: -10px;}
article.member>span a { width:20%; display:inline-block; float:left; padding-top:35px; text-align:center; font-size:1.3rem; color:#000}
article.member>span a.mcon_1 { background:url(../assets/images/Mcenter/m1.png) no-repeat top center; background-size:35px auto}
article.member>span a.mcon_2 { background:url(../assets/images/Mcenter/m2.png) no-repeat top center; background-size:30px auto}
article.member>span a.mcon_3 { background:url(../assets/images/Mcenter/m3.png) no-repeat top center; background-size:30px auto}
article.member>span a.mcon_4 { background:url(../assets/images/Mcenter/m4.png) no-repeat top center; background-size:30px auto}
article.member>span a.mcon_5 { background:url(../assets/images/Mcenter/m5.png) no-repeat top center; background-size:30px auto}
article.member.custom h3 { background:url(../assets/images/Mcenter/icons_5.png) left center no-repeat;background-size:30px auto;}
article.member.custom>span a {  width:25%; padding:0;}
article.member.custom>span a b {color:#f31148; font-size:1.3rem; display:block; font-weight:normal; height:35px; line-height:35px; }
article.member.custom>span a span { color:#000; display:block;}
article.member>span a.mcon_6 { padding-top:35px; height:25px; background:url(../assets/images/Mcenter/m6.png) no-repeat top center; background-size:30px auto}
article.member>span a.mcon_6 span { padding:0; margin:0}
.return_btn { display:block; width:15px; height:5rem; position:absolute; top:0; left:10px; background:url(../assets/images/icon_1.png) no-repeat center; background-size:25px auto}
header.setup{width:100%; height:5rem;position: fixed;top:0;left:0; z-index:9999; background:#fff; color:#191919; text-align:center; line-height:5rem; font-size:1.6rem; box-shadow:0 -5px 10px #000}
.checkway { background:#fff;}
.checkway a { display:block; height:4.4rem; line-height:4.4rem; position:relative; color:#000; font-size:1.4rem;border-bottom:1px solid #eee; padding:0 10px;}
.checkway a i { display:inline-block; height:4.4rem; width:10px; background:url(../assets/images/icon_10.png) no-repeat center; position:absolute; top:0; right:10px}
</style>
