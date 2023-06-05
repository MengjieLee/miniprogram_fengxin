// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log('临时登录凭证获取成功: ', res)
    //     if (res.code) {
    //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     }
    //   },
    //   fail: err => {
    //     console.log('临时登录凭证获取失败: ', err)
    //     wx.showToast({
    //       title: `登录失败: ${err.errMsg}`,
    //       icon: 'error'
    //     })
    //   }
    // })

    console.log('[Test] golobalData: ', this.globalData)
  },
  globalData: {
    userInfo: null,
    hasUserInfo: false
  }
})
