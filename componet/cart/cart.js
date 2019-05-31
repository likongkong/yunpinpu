Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData: {
      type: Object,
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    amount:1,
    selected:'',
    mask: false,
    status:false
  },
  ready: function () {
    this.setData({ data: this.properties.propData, status: true, mask: true})
    let data = this.properties.propData;
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 加 减
    getInputNumber: function (e) {
      let n= e.detail.num;
      this.setData({amount: n})
    },
    getShopType(e){
      let id = e.currentTarget.dataset.id
      this.setData({selected: id})
    },
    //关闭弹出层
    hideCart:function(){
      this.setData({ status: false })
      setTimeout(() => {
        this.triggerEvent('hideCart', { isCart: false })
      }, 300);
    }
  }
})