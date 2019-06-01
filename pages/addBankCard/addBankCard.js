Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    objectArray: [
      {
        id: 0,
        name: '交通银行'
      },
      {
        id: 1,
        name: '中国农业银行'
      },
      {
        id: 2,
        name: '招商银行'
      },
      {
        id: 3,
        name: '工商银行'
      }
    ],
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      index: e.detail.value
    })
  },
})