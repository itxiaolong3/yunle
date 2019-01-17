// 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
    // 这里警告框会阻塞当前页面继续加载
    // alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
    // 以下代码是用javascript强行关闭当前页面
    // var opened = window.open('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3bf0852b81d2e42f&redirect_uri=https%3A//wechat-service-auth.vmobel.cn/get_wechat_userinfo%3Fapp_id%3Daid_5aETPmmGqoCmchDpHgjqrR%26callback_url%3Dhttp%3A//sso2.vmobel.cn%3A80/prefix_callback%26business_key%3DVNiMbun7zP5bhjxnwQmKJW%26request_appid%3Daid_eDefXMoMkFt4n6NHZtrNsA%26collegecode%3Dsxalzx&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect', '_self');
    // opened.opener = null;
    // opened.close();
}

function isAndroid() {
    if (useragent.match(/Android/i) != 'Android') {
        return false;
    } else {
        return true;
    }
}

document.write("<script src=\"js/cookie.js\"></script>");
// document.write("<script src=\"js/mockdata.js\"></script>");

function getUrl(name) {
    //获取url方法 编辑传来的参数
    //     //之前decodeURI是用的unescape() 有时候会取汉字乱码
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

//全局禁用屏幕滑动
function noMove(event) {
    function JinZhiSX(event) {
        event.preventDefault();
    }
    document.addEventListener('touchmove', JinZhiSX);
}

//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
function accMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) {}
    try { m += s2.split(".")[1].length } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

function accAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

function accSubtr(arg1, arg2) {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//获取商铺ID
// const business = 1;
function getBusiness(){
    return 1;
}

//url地址
function getUrlParam(){
    var _that = this;
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var param = {};
        for(var i in u){
            var j = u[i].split("=");
            param[j[0]] = j[1];
        }
        return param;
    } else {
        return null;
    }
}

