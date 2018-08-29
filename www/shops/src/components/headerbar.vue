<template> 
    <header class="header-bar">
        <a class="return_btn" href="#"></a>
        <span class="selbox"><input type="search" placeholder="搜索店内商品"/><a href="#" class="search"></a></span>
            <span class="dropD">
                <span class="dropdiv">
                    <span class="flag"></span>
                    <a class="hicon1" href="#">首页</a>
                    <a class="hicon2" href="#">消息</a>
                    <a class="hicon3" href="#">分享</a>
                    <a class="hicon4" href="#">我的收藏</a>
                </span>
            </span>
    </header>  
</template>
<style>
img {width:100%}
.header-bar{line-height:3rem;background-color: #fff;height:4rem; position:fixed; top:0; left:0; z-index:100; width:100%}
.return_btn { display:block; height:4rem; width:10%;background:url(../assets/images/merchandise/icon_1.png) center no-repeat;  position:absolute; top:0; left:0;text-align:center}
.dropD {display:block; height:4rem; width:15%;background:url(../assets/images/merchandise/icon_2.png) center no-repeat;  position:absolute; top:0; right:0; z-index:100;text-align:center;}
.dropdiv { display:none; position:absolute; top:4rem; right:5%; padding:1rem 1rem; background:url(../assets/images/bg.png); width:9rem;}
.flag { display:block; position:absolute; top:-16px; right:1rem; width:10px; height:9px; width:0;height:0;font-size:0;border:solid 8px;border-color:#fff #fff #000 #fff; opacity:0.7}
.header-bar a{font-size:1.4rem;color:#333;display:block;}
.header-bar .dropdiv a { height:3rem; line-height:3rem; color:#fff; font-size:1.4rem; border-bottom:1px solid #583b3f; text-align:left; padding-left:30px; background:url(../assets/images/merchandise/icons.png) no-repeat}
.header-bar .dropdiv a.hicon1 { background:url(../assets/images/icon_5.png) no-repeat left center}
.header-bar .dropdiv a.hicon2 { background:url(../assets/images/icon_6.png) no-repeat left center}
.header-bar .dropdiv a.hicon3 { background:url(../assets/images/icon_7.png) no-repeat left center}
.header-bar .dropdiv a.hicon4 { background:url(../assets/images/icon_8.png) no-repeat left center}
.selbox { display:block; width:70%; margin:0 auto; background:#e7e4e4; border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;-webkit-sborder-radius:3px; height:3rem; margin-top:0.5rem; position:relative}
.selbox input { width:80%; background:none; border:none; padding-left:5px; font-size:1.4rem}
.selbox a.search { height:3rem; width:50px; border-radius:0 3px 3px 0; background:url(../assets/images/shop/icon_sel.png) center no-repeat #f22d4f; background-size:20px auto; position:absolute; top:0; right:0}
</style>
