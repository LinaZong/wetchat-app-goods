// app.js
let httpRequst = require('/httpUtils.js')
App({
  
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.getCarNum()


    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    keyword:'',
   
  },
  appData:{
    teamInfo:{},
  },
  getCarNum:function(){
    let url = ''
    httpRequst.getRequest(url,undefined,function(res){
      let num = res["data"]
      if(num > 0){
        wx.setTabBarBadge({
          index: 1,
          text: num.toString(),
        })
      }else{
        //移除角标
			wx.removeTabBarBadge({
				index: 1,
			})
      }
    },function(error){})
  }

})
