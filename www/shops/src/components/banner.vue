<template>
    <div class="m-slider" id="slider">
        <div class="ks_dbox ks_ts">
            <div class="ks_wrap">
            <img src="../assets/images/index/banner1.jpg" />
            </div>
            <div class="ks_wrap">
            <img src="../assets/images/index/banner1.jpg">
            </div>
            <div class="ks_wrap">
            <img src="../assets/images/index/banner1.jpg" />
            </div>
        </div>
        <div class="ks-circles"><ul class="ks_wt"></ul></div>
    </div>
</template>
<script>
    // import $ from '../assets/js/jquery-1.7.2.js';  //局部引入生产环境下的jquery 
    // import $ from 'jquery' //局部引入开发环境下的jquery
    import Swiper from '../assets/js/swiper.js'
    export default {  
        mounted() {
            console.log($)
            var mySwipe = new Swiper($(".m-slider")[0], {
                auto: 2000,
                continuous: true,
                stopPropation: true,
                callback: function(index, element) {
                    $(".m-slider .ks_dbox .ks_wrap").removeClass("active");
                    $(".m-slider .ks_dbox .ks_wrap")
                    .eq(index)
                    .addClass("active");
                }
            });
        },
    }
</script>
<style>
    body{ background-color: #eee;}
    h1,h2,h3,h4,h5,h6{ font-weight: 400;}
    img{ width: 100%; }
    span.icon-uniE918{ color: #60abff; }
    .Hnavbg { background:none; background:#fa1545}
    .m-slider {
        position: relative;
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
    }
    .ks_wrap {
        width: 100%;
    }
    .ks_ts {
        -webkit-transition: 500ms;
    }
    .ks_dbox {
        display: -webkit-box;
        width: 100%;
        text-align: left;
    }
    .ks_wt {
        display: -webkit-box;
        margin: 0;
        padding: 0;
        -webkit-box-pack: center;
    }
    .ks_wt li {
        list-style: none;
        text-align: center;
        color: #fff;
    }
    .ks-circles {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    .ks_wt_1 .ks_wt li {
        line-height: 35px;
        height: 35px;
        border-right: solid 1px #bbb;
        -webkit-box-flex: 1;
    }
    .ks-circles .ks_wt li {
        overflow: hidden;
        width: 12px;
        height: 3px;
        margin: 10px 5px;
        text-indent: 20px;
        background-color: #fff;
    }
    .ks_wt_1 .ks_wt .active {
        color: #000;
        background: -webkit-linear-gradient(top, #e7e7e7 0, #dfdfdf 100%);
    }
    .ks-circles .ks_wt .active {
        -webkit-animation: kt2 .8s ease-in-out;
        background: #fb2b49;
    }
    @-webkit-keyframes kt2 {
        0% {
            -webkit-transform: scale(1);
        }
        60% {
            -webkit-transform: scale(1.4);
        }
        100% {
            -webkit-transform: scale(1);
        }
    }
</style>
