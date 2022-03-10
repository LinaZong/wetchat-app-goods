// index.js
// 获取应用实例

const WXAPI = require('apifm-wxapi')
let httpRequst = require('../../httpUtils.js')
Page({
  data: {
    gidNum:'1',
    itemDataArr:[],
    searchValue:String,
    goodsList:[],
    userInfo:{}

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../scrollerView/scrollerView'
    })
  },
  
  onLoad() {
    this.getUserInfo()
    this.getGoodsTip()
    this.getGoodsData()
  },

  onShow(){
  },



getGoodsTip(){
  let url = ''
  var _this = this;
  var  listData = []

   httpRequst.getRequest(url,undefined,function(res){
     console.log('按钮tip' + res)
     listData = res.data
     console.log('listData' + listData)
     _this.setData({
       itemDataArr:listData
     })
   },function(err){
   })

},
  getGoodsData(){
   var  listData = []
   let gid = this.data.gidNum
   console.log('获取数据' + gid)
    let url = ''
    var _this = this;
    httpRequst.getRequest(url,undefined,function(res){
      console.log(res)
      listData = res.data["list"]
      console.log('listData' + listData)
      _this.setData({
        goodsList:listData
      })
    },function(err){
    })
  
  },
  // 输入框
  inputChange(e) {
      this.data.searchValue = e.detail.value
    },

    inputFinish:function(){
      console.log('完成' + this.data.searchValue)
      let word = this.data.searchValue
  
      wx.navigateTo({
        url: '/pages/searchGoodsList/goodsList?keyword=' + wo,
      })

      
    

    },

    clickTipChange(e){
      let gid = e.detail
      this.setData({goodsList:[],gidNum:gid})
      console.log(this.data.gidNum)
      this.getGoodsData()

    },

    //添加到购物车
    addGoodsToCar(e){
       let _goodsId =  e.currentTarget.dataset['goodId']
      var _this = this;
      let geturl = ''
      httpRequst.getRequest(geturl,undefined,function(ers){
        console.log(ers)
        _this.toAddCar(_goodsId)
        
     },function(err){

     })
    },
    toAddCar(goodId){
      let  parmar = {'controller':'car.add','token':'112d97a45485a74436a2581ddd0e7bbb','goods_id':'9313','ommunity_id':'243','quantity':'1','sku_str':'','buy_type':'dan','pin_id':'0','is_just_addcar':'1'}
    
      let url = ''
     
      httpRequst.postRequest(url,parmar,function(ers){
         console.log('加入购物车'+ers)
      },function(err){

      })

    },


    //获取团长信息
    getUserInfo:function(){
      var userData = {}
      var _this = this;
      var _app = getApp()
 let  url = ''


 httpRequst.getRequest(url,undefined,function(ers){
    userData = ers['list']
  _this.setData({
    userInfo:userData
  })

    console.log(_this.data.userInfo)
    _app.appData.teamInfo = userData;
 },function(error){

 })


    },

    gotoUsetLeader:function(){
      console.log('跳到团长信息也')
      wx.navigateTo({
        url: '/pages/teamLeader/leader',
      })
    }

   
})
