Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    isCart:false,
    like:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = {
      "shopPic":'http://m.qpic.cn/psb?/V14CSJrO3tyZxX/zlS4*9hShjye0DanhWxBd1cfHwwlJJHgpZLtfE5I56k!/b/dLgAAAAAAAAA&bo=.wC1AQAAAAADB20!&rf=viewer_4',
      "price":"1998",
      "amount":"411221",
      "module": [{
        "name":"颜色分类",
        "data": [{ id: 1, name: '红色' }, { id: 2, name: '蓝色' }, { id: 3, name: '白色' }, { id: 4, name: '黑色' }]
      },{
        "name":'开关类型',
        "data": [{ id: 11, name: '你愁啥？' }, { id: 12, name: '瞅你咋地!' }]
      }]
    }
    this.setData({
      data: data
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //显示弹出层
  showCart: function () {
    this.setData({isCart: true})
  },
  //隐藏弹出层
  hideCart:function(e){
    this.setData({ isCart: e.detail.isCart })
  },
  // 收藏
  like:function(){
    this.setData({ like: !this.data.like })
  }
})