let httpRequst = require('../../httpUtils.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        teamInfo:{},
        pageInfo:{},
        userInfo:{},
        itemList:[{'title':'待收货','imageUrl':"/images/mine/mine_pay.png"},{'title':'待配送','imageUrl':"/images/mine/mine_song.png"},{'title':'待提货','imageUrl':"/images/mine/mine_tihuo.png"},{'title':'已提货','imageUrl':"/images/mine/mine_get.png"},{'title':'售后服务','imageUrl':'/images/mine/mine_pay_server.png'}],
        cellList:[{'title':'优惠券','imageUrl':"/images/mine/mine_youhuiquan.png"},{'title':'申请成为团长','imageUrl':"/images/mine/mine_team.png"},{'title':'常见帮助','imageUrl':"/images/mine/mine_help.png"},{'title':'退出登录','imageUrl':"/images/mine/mine_login.png"}],

    

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var app = getApp();
        var user_info = app.appData.teamInfo;
        this.setData({
           teamInfo: user_info
       });
       console.log(user_info)
        this.getPageInfo()
        this.getUserInfo()

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // wx.setNavigationBarColor({
        //   backgroundColor: this.pageInfo[''],
        // })

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    getPageInfo:function(){
        let url = '';
        let _this = this;
        let newPageInfo = {}
          httpRequst.getRequest(url,undefined,function(ers){
           newPageInfo = ers['data']
           console.log(newPageInfo)
           _this.setData({
               pageInfo:newPageInfo
           })
          },function(error){})



    },

    getUserInfo:function(){
        let url = ''

        let _this = this;
        let newPageInfo = {}
          httpRequst.getRequest(url,undefined,function(ers){
           newPageInfo = ers['data']['data']
           console.log(newPageInfo)
           _this.setData({
               userInfo:newPageInfo
           })
          },function(error){})



    }

})