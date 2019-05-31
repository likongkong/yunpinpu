Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propInd: {
      type: Number,
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    // input默认是1  
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled'  
  },
  ready: function () {
    this.setData({
      ind: this.properties.propInd
    })
  }, 
  /**
   * 组件的方法列表
   */
  methods: {
    /* 点击减号 */
    bindMinus: function (e) {
      var ind = e.currentTarget.dataset.index;
      var num = this.data.num;
      // 如果大于1时，才可以减  
      if (num > 1) {
        num--;
      }
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num <= 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
      let obj = { num: num, ind: ind}
      this.triggerEvent('getInputNumber', obj)
    },
    /* 点击加号 */
    bindPlus: function (e) {
      var ind = e.currentTarget.dataset.index;
      var num = this.data.num;
      // 不作过多考虑自增1  
      num++;
      // 只有大于一件的时候，才能normal状态，否则disable状态  
      var minusStatus = num < 1 ? 'disabled' : 'normal';
      // 将数值与状态写回  
      this.setData({
        num: num,
        minusStatus: minusStatus
      });
      let obj = { num: num, ind: ind }
      this.triggerEvent('getInputNumber', obj)
    },
    /* 输入框事件 */
    bindManual: function (e) {
      var ind = e.currentTarget.dataset.index;
      let num = e.detail.value;
      let n = num == '' ? '0' : num.replace(/\b(0+)/gi, "")
      // 将数值与状态写回 
      this.setData({
        num: n
      });
      let obj = { num: n, ind: ind }
      this.triggerEvent('getInputNumber', obj)
    }  
  }
})