// pages/searchGoodsList/goodsList.js
let httpRequst = require('../../httpUtils.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        keyword:'',
        goodsList:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options['keyword'])
        let keyword =  options['keyword']
     

     console.log('要搜索的关键字' + keyword)

      this.getGoodsList(keyword)

    },

    getGoodsList:function(e){
        var  listData = []
        /**
         * %E9%B8%A1%E8%9B%8B0
         */
        let url = ''
        let pramer = {'keyword':e}
        var _this = this;
        httpRequst.getRequest(url,pramer,function(res){
          console.log(res)
          listData = res['list']
          console.log(listData)
          _this.setData({
            goodsList:listData
          })
        },function(err){
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