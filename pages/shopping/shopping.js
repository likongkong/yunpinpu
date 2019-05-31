Page({
  /**
   * 页面的初始数据
   */
  data: {
    paylen:0,
    totalPrices:0,
    CheckAll:false,
    isEdit:false
  },
  onShow: function () {
    let shopping = {
      'shoppingALL':[{
        'name':'科沃斯地宝扫地机器人扫地机科沃斯地宝扫地机器人扫地机…',
        'img':'http://a3.qpic.cn/psb?/V14CSJrO3tyZxX/ePG6KGHAJSvLs3nsj0GKmfrar0bIKKHOo*5ysbfymtY!/m/dLYAAAAAAAAAnull&bo=2ADYAAAAAAADByI!&rf=photolist&t=5',
        'selectArray': [{
          "id": "10",
          "text": "会计类"
        }, {
          "id": "21",
          "text": "工程类"
        }],
        'price':'100'
      },
        {
          'name': '科沃斯地宝扫地机器人扫地机科沃斯地宝扫地机器人扫地机…',
          'img': 'http://a3.qpic.cn/psb?/V14CSJrO3tyZxX/ePG6KGHAJSvLs3nsj0GKmfrar0bIKKHOo*5ysbfymtY!/m/dLYAAAAAAAAAnull&bo=2ADYAAAAAAADByI!&rf=photolist&t=5',
          'selectArray': [{
            "id": "10",
            "text": "会计类"
          }, {
            "id": "21",
            "text": "工程类"
            }, {
              "id": "22",
              "text": "工程类11"
            }],
          'price': '200'
        },
        {
          'name': '科沃斯地宝扫地机器人扫地机科沃斯地宝扫地机器人扫地机…',
          'img': 'http://a3.qpic.cn/psb?/V14CSJrO3tyZxX/ePG6KGHAJSvLs3nsj0GKmfrar0bIKKHOo*5ysbfymtY!/m/dLYAAAAAAAAAnull&bo=2ADYAAAAAAADByI!&rf=photolist&t=5',
          'selectArray': [{
            "id": "10",
            "text": "会计类"
          }, {
            "id": "21",
            "text": "工程类"
          }],
          'price': '300'
        }]
    }
    for (let i in shopping.shoppingALL) {
      shopping.shoppingALL[i].selected = false
      shopping.shoppingALL[i].num = 1
    }
    this.setData({
      shoppingList: shopping.shoppingALL,
    })
  },
  //编辑
  edit:function(){
    this.setData({isEdit: !this.data.isEdit})
  },
  //商品类选择
  getSelect: function (e) {
    let id = e.detail.id
    let ind = e.detail.index
    this.data.shoppingList[ind].labelId = id;
  },
  // 加 减
  getInputNumber: function (e) {
    let num = e.detail.num
    let ind = e.detail.ind
    this.data.shoppingList[ind].num = num;
    this.getsumTotal();
    this.shopAllLen();
  },
  //单选
  selectList: function (e) {
    var shoppingList = this.data.shoppingList   //获取购物车列表
    var index = e.currentTarget.dataset.index;  //获取当前点击事件的下标索引
    var selected = shoppingList[index].selected;    //获取购物车里面的value值

    //取反
    shoppingList[index].selected = !selected;
    this.setData({
      shoppingList: shoppingList
    })
    this.getsumTotal();
    this.judgmentAll();
    this.shopAllLen();
  },
  //全选
  select: function (e) {
    var CheckAll = this.data.CheckAll;
    CheckAll = !CheckAll
    var shoppingList = this.data.shoppingList

    for (var i = 0; i < shoppingList.length; i++) {
      shoppingList[i].selected = CheckAll
    }

    this.setData({
      shoppingList: shoppingList,
      CheckAll: CheckAll
    })
    this.getsumTotal()
    this.shopAllLen();
  },
  //合计
  getsumTotal: function () {
    var sum = 0
    for (var i = 0; i < this.data.shoppingList.length; i++) {
      if (this.data.shoppingList[i].selected) {
        sum += this.data.shoppingList[i].num * this.data.shoppingList[i].price
      }
    }
    // //更新数据
    this.setData({
      totalPrices: sum
    })
  },
  //判断是否为全选  
  judgmentAll: function () {
    let shoppingList = this.data.shoppingList,
      shoplen = shoppingList.length,
      lenIndex = 0;//选中的物品的个数    
    console.log(shoplen)
    for (let i = 0; i < shoplen; i++) {//计算购物车选中的商品的个数    
      shoppingList[i].selected && lenIndex++;
    }
    this.setData({
      CheckAll: lenIndex == shoplen//如果购物车选中的个数和购物车里货物的总数相同，则为全选，反之为未全选    
    });
  },
  //选中商品的数量
  shopAllLen: function () {
    let n=0;
    let shoppingList = this.data.shoppingList,
        shoplen = shoppingList.length;
    for(let i = 0; i<shoplen; i++) {
      if (shoppingList[i].selected){
        n += parseInt(shoppingList[i].num);
      }
    }
    this.setData({
      paylen: n
    });
  },
  //删除
  delete:function(){
    let shoppingList = this.data.shoppingList,
        i = shoppingList.length;
    while (i--) {
      if (shoppingList[i].selected) {
        shoppingList.splice(i, 1);
      }
    }
    this.setData({ paylen: 0, totalPrices:0 })
    if (shoppingList.length == 0){
      this.setData({ CheckAll: false})
    }
    this.setData({ shoppingList: shoppingList })
  }
})