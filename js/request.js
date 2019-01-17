function fetchMemberInfo(ignoreJumpLogin){
    return new Promise((resolve,reject)=>{
        var userInfo = cookieManager.getCookie('username');
        if(userInfo == '' || userInfo == null || userInfo == undefined)
        {
            if(!ignoreJumpLogin){
                window.location.href = 'login.html?transferUrl='+encodeURI(window.location.href);
            }
            reject();
        }
        else {
            var userObj =  JSON.parse(userInfo);
            resolve(userObj);
        }
    });
}

function fn(){
    alert(1)
}