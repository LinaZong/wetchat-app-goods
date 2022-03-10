// pages/teamLeader/leader.js
let httpRequst = require('../../httpUtils.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:{},
        nearList:[],
        city:'北京市',
        team:'请输入社区名称',

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getLeaderInfo()
        this.getNearTeam()

    },


    getLeaderInfo:function(){
        var userData = {}
        var _this = this;
    let url = ''

    httpRequst.getRequest(url,undefined,function(ers){
        console.log(ers)
        userData = ers['list']
      _this.setData({
        userInfo:userData,
        team:userData['communityName'],
        city:userData['city']
      })
       
    
     },function(error){
    
     })


    },

    chooseCity:function(e){
        wx.navigateTo({
          url: '/pages/city/city',
        })

    },

    getNearTeam:function(e){
        var userData = []
        var _this = this;
    let url = ''

    httpRequst.getRequest(url,undefined,function(ers){
        
        userData = ers['list']
        console.log('附近社区' + userData)
      _this.setData({
        nearList:userData,
      })
       
    
     },function(error){
    
     })


    },

    chooseTeam:function(e){
        wx.navigateTo({
            url: '/pages/searchTeam/searchTeam',
          })
    },
    chooseHouse:function(e){
        let city = e.currentTarget.dataset['index']
    wx.navigateTo({
      url: '/pages/searchHouse/house?city=' + city,
    })

    },

 chooseTeam:function(e){
     let teamList =  e.currentTarget.dataset['leader'];
     this.setData({
         userInfo:teamList
     })
    var pages = getCurrentPages();
var currPage = pages[pages.length - 1];   //当前页面
var prevPage = pages[pages.length - 2];  //上一个页面
//直接调用上一个页面的 setData() 方法，把数据存到上一个页面中去
prevPage.setData({
    userInfo:teamList
})

wx.navigateBack()
},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    }
})