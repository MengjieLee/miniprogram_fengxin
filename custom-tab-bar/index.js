import TabMenu from './data'
Component({
  data: {
    list: TabMenu,
    value: "/pages/mine/mine"
  },
  attached() {},
  methods: {
    switchTab(e) {
      const url = e.detail.value
      console.log('切换 tab 页: ', url)
      wx.switchTab({
        url
      })
      this.setData({
        value: url
      })
    },
  }
})