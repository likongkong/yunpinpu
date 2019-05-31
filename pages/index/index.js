//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    text: '这是一条会滚动的文字',
    marqueePace: .5, //滚动速度
    marqueeDistance: 200, //初始滚动距离
    size: 13,  //字体大小
    orientation: 'left', //滚动方向
    interval: 10 // 时间间隔
  },
  onLoad: function () {
    // 页面显示
    let vm = this;
    let length = vm.data.text.length * vm.data.size; //文字长度
    let windowWidth = wx.getSystemInfoSync().windowWidth; // 屏幕宽度
    vm.setData({
      length: length,
      windowWidth: windowWidth
    });
    vm.run(); // 水平一行字滚动完了再按照原来的方向滚动
  },
  onShow:function(){
    
  },
  run: function () {
    let vm = this;
    let interval = setInterval(function () {
      if (-vm.data.marqueeDistance < vm.data.length) {
        vm.setData({
          marqueeDistance: vm.data.marqueeDistance - vm.data.marqueePace,
        });
      } else {
        clearInterval(interval);
        vm.setData({
          marqueeDistance: vm.data.windowWidth
        });
        vm.run();
      }
    }, vm.data.interval);
  }
})
