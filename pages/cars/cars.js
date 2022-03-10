// pages/cars/cars.js
let httpRequst = require('../../httpUtils.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        carts:[],               // 购物车列表
        hasList:false,          // 列表是否有数据
        totalPrice:0,           // 总价，初始为0
        selectAllStatus:true,   // 全选状态，默认全选
        totalNum:0 //商品数量
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
        this.getCarsList()

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

     /**
     * 获取数据
     */
     getCarsList:function(){
        var _this = this;
        var _totalCount = 0;
        var _totlalNum = 0;
         let url = '';
httpRequst.getRequest(url,undefined,function(esr){
    let cartsArr = esr.carts;
    for (const index in cartsArr) {
        let itemsGrood = cartsArr[index];
        let itemsArr = itemsGrood["shopcarts"]
        for (const index in itemsArr) {
            var good = itemsArr[index]
            good['isSeleted'] = true
            _totalCount += parseFloat(good['currntprice']);
            _totlalNum += parseFloat(good['goodsnum']);

        }
    }
    console.log(cartsArr);

    _this.setData({
        carts:cartsArr,
        totalPrice:_totalCount.toFixed(2),
        totalNum:_totlalNum

    })
    
},function(error){})


     },
     seletedClick:function(e){
         let  itemdata = e.currentTarget.dataset['itemdata']
         let seletedId = itemdata["id"]
         var newGoodsList = this.data.carts
         var  totalNewPrice = parseFloat(this.data.totalPrice);
         var totalCount = this.data.totalNum;
         for (const index in newGoodsList) {
             let  items = newGoodsList[index]
             var gooods = items["shopcarts"]
             for(const indexs in gooods){
                 var cell = gooods[indexs]
                  console.log(cell)
                 let cellId = cell['id']
                 let cellGoodsPrice =  parseFloat(cell['currntprice']);
                 let cellGoodsNum = parseInt(cell['goodsnum']);
                 let isSeleted =  cell['isSeleted']
               
                 
                  if(cellId == seletedId){
                     cell['isSeleted'] =  isSeleted ? false:true
                     if(!isSeleted){
                        totalCount = totalCount +  cellGoodsNum;
                        totalNewPrice = totalNewPrice + cellGoodsPrice
                      

                    }else{
                       totalCount = totalCount -  cellGoodsNum;
                       totalNewPrice =   totalNewPrice - cellGoodsPrice
                    }
                   
                     
                  }
             }
            
         }
         this.setData({
             carts:newGoodsList,
             totalPrice:totalNewPrice.toFixed(2),
             totalNum:totalCount
         })

     },

     seletedAllClick:function(){
         var totalCount = 0;
         var totalNewPrice = 0;
        let seleted = !this.data.selectAllStatus;
        let cartsArr = this.data.carts;
        for (const index in cartsArr) {
            let itemsGrood = cartsArr[index];
            let itemsArr = itemsGrood["shopcarts"]
            for (const index in itemsArr) {
                var good = itemsArr[index]
                good['isSeleted'] = seleted
                if(seleted){
                    totalNewPrice += parseFloat(good['currntprice']);
                    totalCount += parseFloat(good['goodsnum']);
                }else{
                    totalCount = 0;
                    totalNewPrice = 0;
                }
               
    
            }
        }
        this.setData({
            carts:cartsArr,
            totalPrice:totalNewPrice.toFixed(2),
            totalNum:totalCount,
            selectAllStatus:seleted
    
        })


     }



})