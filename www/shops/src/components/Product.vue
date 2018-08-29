<template>
    <div>
        <div class="swiper-container favor-list">
            <div class="swiper-wrapper">
                <div style="height:100%;" class="swiper-slide xq">
                    <div>
                    <div class="slidebox"><img :src="detail.pro_img" alt="" /></div>
                    <article class="mercText">
                        <a href="#">{{detail.title}}</a>
                        <p class="ad">
                            <a> {{detail.advertisement1}} </a>
                            <a> {{detail.advertisement2}} </a>
                        </p>
                        <b><em>￥</em> {{detail.price}} <i></i><b><a>佣金</a><i>￥</i>{{detail.commission}}</b></b>
                        <div class="clearx"></div>
                        <p class="merP_1"><a>快递：00.00</a><a>销量{{detail.sales_volume}}件</a><a class="num">山西太原</a></p>
                        <span class="sales">
                            <label>促销</label>
                            <span>
                                <p><a>满减</a>满198立减10元</p>
                                <p><a>加价购</a>满19.8另加9.9，即可在购物车换购</p>
                                <p><a>限制</a>此价格不与套装优惠同时享受</p>
                                <p><a>限制</a>此价格不与套装优惠同时享受</p>
                            </span>
                            <a class="more"></a>
                            <div class="clearx"></div>
                        </span>
                    </article>
                    <article class="mercOption">
                        <a class="opSort" href="#"><span>规格：千兆48口</span><i class="more"></i></a>
                        <a class="addr" href="#"><span>送至<span><em>山西省</em>><em>太原市</em>><em>杏花岭区</em>><em>城区</em></span><b class="redT">现货</b></span><i></i></a>
                    </article>
                    <article class="mercHouse">
                        <span class="houseimg"><img src="../assets/images/merchandise/house.jpg"></span>
                        <span class="housetex">
                            <h3>平遥供销特色馆</h3>
                            <p>主营商品：厨房电器 生活电器 智能家居 日用百货 化妆品</p>
                        </span>
                        <div class="clearx" style="height:1.5rem"></div>
                        <div class="mercHdata">
                            <span><b>123456</b><b class="mH_1">全部宝贝</b></span>
                            <span><b>4561564815</b><b class="mH_1">关注人数</b></span>
                            <span class="btn"><a href="#">进店逛逛</a></span>
                            <div class="clearx"></div>
                        </div>
                    </article>
                    
                </div>
            </div>


                <div class="swiper-slide margin19">
                    <div>
                        <div class="imgbox">
                            <img src="../assets/images/shop/pic_1.jpg">
                        </div>
                    </div>
                </div>


                <div class="swiper-slide">
                    <div>
                        <div class="clearx" style="height:6rem"></div>
                        <article class="evalue">
                            <div class="wrapevalue" >
                                <span class="ev_name"><i></i>gfhffgh12345<b>2017-03-15</b></span>
                                <div class="clearx" style="height:0.8rem"></div>
                                <p class="eva"><a class="like"></a><a class="like"></a><a class="nolike"></a><a class="nolike"></a><a class="nolike"></a></p>
                                <p class="evContex">外形高端大气上档次，操作简便，一看就会！很喜欢推荐购买！外形高端
                大气上档次，操作简便，一看就会！很喜欢推荐购买！</p>
                                <div class="ev_img">
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <div class="clearx"></div>
                                </div>
                                <p class="buy_time">购买日期：2017-03-01<a class="zan">1</a></p>
                            </div>                    
                        </article>
                        <article class="evalue">
                            <div class="wrapevalue" >
                                <span class="ev_name"><i></i>gfhffgh12345<b>2017-03-15</b></span>
                                <div class="clearx" style="height:0.8rem"></div>
                                <p class="eva"><a class="like"></a><a class="like"></a><a class="nolike"></a><a class="nolike"></a><a class="nolike"></a></p>
                                <p class="evContex">外形高端大气上档次，操作简便，一看就会！很喜欢推荐购买！外形高端
                大气上档次，操作简便，一看就会！很喜欢推荐购买！</p>
                                <div class="ev_img">
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <a><img src="../assets/images/merchandise/eva_1.jpg"></a>
                                    <div class="clearx"></div>
                                </div>
                                <span class="message">
                                    <i></i>
                                    <p>卖家回复：非常的感谢亲爱的对special 的支持与鼓励喔~~咱们每周四下午2点都有新品准时上新喔~~~您可以随时的过来选选喔~~~我们会做的越来越好噢~~~~希望亲能够见证我们的成长喔~~~亲亲么么</p>
                                </span>
                                <p class="buy_time">购买日期：2017-03-01<a class="zan">1</a></p>
                            </div>                    
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>