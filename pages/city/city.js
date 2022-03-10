// pages/city/city.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        cityList:[{'title':'当前定位','list':[{'name':'北京'}]},{'title':'B','list':[{'name':'北京'},{'name':'上海'}]},{'title':'C','list':[{'name':'承德'}]},{'title':'H','list':[{'name':'邯郸'},{'name':'黑河'}]},{'title':'J','list':[{'name':'济宁'}]},{'title':'L','list':[{'name':'廊坊'}]},{'title':'T','list':[{'name':'天津'}]},{'title':'W','list':[{'name':'唐山'}]},{'title':'X','list':[{'name':'西安'}]}]
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    },
    // 点击城市
    chooseCity:function(e){
        let pages = getCurrentPages();
        let city =  e.currentTarget.dataset['city'];
        let currPage = pages[pages.length - 1];   //当前页面
        var prevPage = pages[pages.length - 2];  //上一个页面
        //直接调用上一个页面的 setData() 方法，把数据存到上一个页面中去
        prevPage.setData({
            city:city
        })
        wx.navigateBack()

    },



})