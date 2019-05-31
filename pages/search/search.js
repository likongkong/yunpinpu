
Page({
  data: {
    searchVal:'',
    HotLabel: ['小米只能音响', '水杯', '男士小脚裤', '棉羽绒服 男', '纸巾', '高帮帆布鞋', '帽子', '小米只能音响','高帮帆布鞋'],
    HistoryLable: ['小米只能音响', '水杯'],
    history:true,
    commodityData:false
  },
  onShow: function () {

  },
  bindLabel(e){
    let val = e.currentTarget.dataset.lable;
    this.setData({ searchVal:val})
  },
  deleteHistoryLable(){
    this.setData({ history: false })
  },
  cancel(){
    
  }
})