// componets/tip_seleted/tip-seleted.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemData:{
            type:Array,
            value:[{icon:"/images/home/home_hot.png","text":"今日爆款","id":"1"},{icon:"/images/home/home_foot.png","text":"精品果蔬","id":"2"},{icon:"/images/home/home_money.png","text":"现货捡漏","id":"3"}]
        }
        
    },

    /**
     * 组件的初始数据
     */
    data: {
     seleted_border_color:"#d81e06",
     normal_border_color:"#fff",
     item1Active:true,
     item2Active:false,
     item3Active:false,
     buttonClickTag:1,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeTip(e){
            console.log(e)
            var tag = e.currentTarget.id
            let link = e.currentTarget.dataset.link
            if (tag == 1) {
                if (!this.data.item1Active) {
                    this.setData({
                        item1Active:true,
                        item2Active:false,
                        item3Active:false,
                        buttonClickTag:link
                     
                    })
                }
            }else if (tag == 2) {
                if (!this.data.item2Active) {
                    this.setData({
                        item1Active:false,
                        item2Active:true,
                        item3Active:false,
                        buttonClickTag:link
                     
                    })
                }
            }else if (tag == 3){
                if (!this.data.item3Active) {
                    this.setData({
                        item1Active:false,
                        item2Active:false,
                        item3Active:true,
                        buttonClickTag:link
                     
                    })
                }
            }

            this.triggerEvent('tipSeletedClick',this.data.buttonClickTag)


        }
    }
})
