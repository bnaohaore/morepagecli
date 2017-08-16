/**
 * Created by hasee on 2017/4/25.
 */


 ajaxCall({
     url:'http://cdwh.org/wh_portal/service/CW9033',
     data:{'url':location.href.split('#')[0]},
     success:function (data) {

         wx.config({
             debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
             appId: 'wx1be598756de0b905', // 必填，公众号的唯一标识
             timestamp: data.body.timestamp, // 必填，生成签名的时间戳
             nonceStr: data.body.nonceStr, // 必填，生成签名的随机串
             signature: data.body.signature,    // 必填，签名，见附录1
             jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
         });
     }
 });


wx.ready(function () {



    window.weixinJs(wxs);


});

var wxs= function() {
    /*分享到朋友圈*/
    wx.onMenuShareTimeline({
        title: wx.share.title,
        link: wx.share.link,
        imgUrl: wx.share.img,
        desc:wx.share.desc,
        success: function () {
            /*成功回调*/
            if (wx.shareSuccess) {
                wx.shareSuccess();
            }
        },
        cancel: function () {
            /*失败回调*/
        }
    });
    /*分享给朋友*/
    wx.onMenuShareAppMessage({
        title: wx.share.title,
        desc: wx.share.desc,
        link: wx.share.link,
        imgUrl: wx.share.img,
        type: 'link',
        success: function () {
            /*成功回调*/
            if (wx.shareSuccess) {
                wx.shareSuccess();
            }
        },
        cancel: function () {
            /*失败回调*/
        }
    });
    /*分享到QQ*/
    wx.onMenuShareQQ({
        title: wx.share.title,
        desc: wx.share.desc,
        link: wx.share.link,
        imgUrl: wx.share.img,
        success: function () {
            /*成功回调*/
            if (wx.shareSuccess) {
                wx.shareSuccess();
            }
        },
        cancel: function () {
            /*失败回调*/
        }
    });
    /*分享到腾讯微博*/
    wx.onMenuShareWeibo({
        title: wx.share.title,
        desc: wx.share.desc,
        link: wx.share.link,
        imgUrl: wx.share.img,
        success: function () {
            /*成功回调*/
            if (wx.shareSuccess) {
                wx.shareSuccess();
            }
        },
        cancel: function () {
            /*失败回调*/
        }
    });
    /*分享到QQ空间*/
    wx.onMenuShareQZone({
        title: wx.share.title,
        desc: wx.share.desc,
        link: wx.share.link,
        imgUrl: wx.share.img,
        success: function () {
            /*成功回调*/
            if (wx.shareSuccess) {
                wx.shareSuccess();
            }
        },
        cancel: function () {
            /*失败回调*/
        }
    });
}

/*屏蔽掉微信分享*/
//    function onBridgeReady() {
//        WeixinJSBridge.call('hideOptionMenu');
//    }
//    if (typeof WeixinJSBridge == "undefined") {
//        if (document.addEventListener) {
//            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//        } else if (document.attachEvent) {
//            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
//            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//        }
//    } else {
//        onBridgeReady();
//    }

