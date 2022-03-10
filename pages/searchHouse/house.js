// pages/searchHouse/house.js
let httpRequst = require('../../httpUtils.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchValue:String,
        city:String,
        dataList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        console.log( 'option' + options.city)
        this.setData({
            city:options.city
        })

    },

  //搜索
  searhHouse:function(e){
    var  listData = []
 let  url = ""

 let parmer = {'inputValue':e}
 var _this = this;
 httpRequst.getRequest(url,parmer,function(res){
    listData = res['list']
    console.log(listData)
    _this.setData({
      dataList:listData
    })
 },function(error){})
  

  },

   // 输入框
   inputChange(e) {
    this.data.searchValue = e.detail.value
  },


  inputFinish:function(e){
      
    console.log('完成' + this.data.searchValue)
    this.searhHouse(this.data.searchValue)


  },


  chooseTeam:function(e){
    let teamList =  e.currentTarget.dataset['leader'];
    this.setData({
        userInfo:teamList
    })
   var pages = getCurrentPages();
var currPage = pages[pages.length - 1];   //当前页面
var prevPage = pages[pages.length - 3];  //上一个页面
//直接调用上一个页面的 setData() 方法，把数据存到上一个页面中去
prevPage.setData({
   userInfo:teamList
})
wx.navigateBack({
  delta: 6,
})
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