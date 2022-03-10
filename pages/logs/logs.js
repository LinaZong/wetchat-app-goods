// logs.js
const WXAPI = require('apifm-wxapi')
WXAPI.init('zaxALee198812675wqre')

const util = require('../../utils/util.js')
Page({
  data: {
    name:String,
    password:String,
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },

  nameFinishInput(e){
      this.data.name = e.detail.value
      console.log(this.data.name)
  },
  passwordFinishInput(e){
    this.data.password = e.detail.value
    console.log(this.data.password)
  },
  user_login(e){
    console.log("点击了登录")
     if (this.data.name.length == 0) {
       wx.showToast({
         title: '请输入用户名',
       })
       return
     }

     if (this.data.password.length == 0) {
      wx.showToast({
        title: '请输入密码',
      })
      return
    }
    WXAPI.login_username({
      username:this.data.name,
      pwd:this.data.password,
      deviceId:'wxapp',
      deviceName:'lauch'
    }).then(res => {
      console.log(res)

    })

  },

  user_regist(e){

    if (this.data.name.length == 0) {
      wx.showToast({
        title: '请输入用户名',
      })
      return
    }

    if (this.data.password.length == 0) {
     wx.showToast({
       title: '请输入密码',
     })
     return
   }

    WXAPI.register_username({
      username:this.data.username,
      pwd:this.data.password
    }).then(res => {
      console.log('注册接口'+res)      
    })

  }

})
