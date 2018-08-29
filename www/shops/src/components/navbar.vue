<template>
    <header>
        <div class="header">
            <a class="logo" href="#"><img src="../assets/images/index/logo.png" width="30" ></a>
            <span class="selectinput"><input type="text" value="智能闹钟"><i class="icon_sel"></i></span>
            <a class="message"><span>消息</span></a>
            <div class="clearx"></div>
        </div>
    </header>
</template>
<style scoped>
    header{width:100%; height:4rem;position: fixed;top:0;left:0; z-index:9999; background: -webkit-gradient(linear, 0 0, 0 bottom, from(#333), to(transparent));
        background: -webkit-linear-gradient(#333, transparent);
        background: -moz-linear-gradient(#333, transparent);
        background: -ms-linear-gradient(#333, transparent);
        background: -o-linear-gradient(#333, transparent);
        background: linear-gradient(#333, transparent);}
    .header a.logo { display:block; width:30px; text-align:center; height:4rem; line-height:4rem;position:absolute; top:10px; left:10px;}
    .header .selectinput { display:block;width:75%; border:1px solid #fff; border-radius:3px; position:absolute; left:50px; margin-top:0.8rem; position:relative}
    .selectinput input { padding-top:0.5rem; height:1.5rem; padding-bottom:0.5rem; border:none; width:85%; background:none; color:#fff; font-size:1.5rem; display:block;margin-left:15%;}
    .selectinput .icon_sel { display:block; width:11%; height:2.5rem; background:url(../assets/images/index/icon_sel.png) no-repeat center; position:absolute; top:0; left:0.2rem; float:left }
    .header a.message { display:block; width:30px; height:4rem; position:absolute; top:15px; right:10px; background:url(../assets/images/index/icon_mes.png) no-repeat center 3px; background-size:22px 22px }
    .header a.message img { width:2.4rem}
    .header a.message span { display:block; color:#fff; text-align:center; font-size:1rem; padding-top:27px}
</style>
