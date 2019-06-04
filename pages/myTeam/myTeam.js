// pages/myTeam/myTeam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let teamArr = [{
      'level1':'13255555551'
    },{
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }, {
      'level1': '13255555551',
      'level2': '13255555552'
    }]

    for (let i in teamArr) {
      teamArr[i].isShow = false;
    }
    teamArr[0].isShow = true;
    console.log(teamArr)
    this.setData({
      teamArr: teamArr
    })
  },
  // 一键复制事件
  copyBtn: function (e) {
    var that = this;
    var code = e.currentTarget.dataset.code
    wx.setClipboardData({
      //准备复制的数据
      data: code,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  toggle:function(e){
    let ind = e.currentTarget.dataset.index;
    this.data.teamArr[ind].isShow = !this.data.teamArr[ind].isShow
    this.setData({
      teamArr: this.data.teamArr
    })
  }
})