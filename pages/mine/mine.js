import Toast from 'tdesign-miniprogram/toast/index'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    coinGridBorder: {
      color: '#D2D2D2',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (app.globalData.userInfo && this.data.userInfo !== app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    this.setData({
      hasUserInfo: Object.keys(this.data.userInfo).length !== 0 ? true : false
    })
    if (typeof this.getTabBar === 'function') {
      this.getTabBar((tabBar) => {
        tabBar.setData({
          value: '/pages/mine/mine'
        })
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  patchUserInfo(e) {
    console.log(' mine page 前往登录!')
    Toast({
      context: this,
      selector: '#t-toast',
      message: '正在跳转登录界面 ...',
      theme: 'loading',
      direction: 'column',
    })
    wx: wx.navigateTo({
      url: '/pages/userinfo/userinfo',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  onLogout(e) {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '退出登录 ...',
      theme: 'loading',
      direction: 'column',
    })
    this.setData({
      userInfo: {},
      hasUserInfo: false
    })
    app.globalData = {}
    wx.navigateTo({
      url: '/pages/mine/mine.js',
    })
  },
})