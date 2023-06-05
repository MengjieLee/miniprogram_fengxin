import Toast from 'tdesign-miniprogram/toast/index';

const app = getApp()

const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  `/static/image/swiper1.png`,
  `/static/image/swiper2.png`,
  `/static/image/swiper2.png`,
];

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    notificationList: ['热烈欢迎 👏 “双进双服务”走进奉新', '共同欢庆 🎉 “共建共治”落地奉新'],
    current: 0,
    autoplay: true,
    duration: 5000,
    interval: 3500,
    swiperList,
    showScanCodeConfirm: false,
    confirmScanCodeBtn: {
      content: '确定',
      variant: 'base'
    },
    rawData: ''
  },
  onLoad() {},
  onReady() {},
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
          value: '/pages/home/home'
        })
      })
    }
  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
    };
  },
  patchUserInfo(e) {
    console.log(' home page 前往登录!')
    Toast({
      context: this,
      selector: '#t-toast',
      message: '正在跳转登录界面 ...',
      theme: 'loading',
      direction: 'column',
    });
    wx: wx.navigateTo({
      url: '/pages/userinfo/userinfo',
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  clickNotification(e) {
    console.log('home page 点击通知', e)
  },
  onClickSwiper(e) {
    const {
      index
    } = e.detail
    console.log(`home page 点击轮播图 ${index}`)
    var url = ''
    switch (index) {
      case 0:
        url = '/pages/sub-pointsGuide/sub-pointsGuide';
        break;
      case 1:
      case 2:
        url = '/pages/proposal/proposal';
        break;
      default:
        break;
    }
    wx: wx.navigateTo({
      url: url,
      success: (result) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  scanCode(e) {
    let that = this
    wx.scanCode({
      success(res) {
        console.log('扫码:', res)
        // TODO 这里去做一些事情
        that.setData({
          ['rawData']: res.rawData,
          ['showScanCodeConfirm']: true,
        })
      }
    })
  },
  scanCodeConfirmBtn() {
    wx.navigateToMiniProgram({
      appId: 'wx50b3ade52c9332c0',
      extraData: {
        key: this.data.rawData // 将rawData作为参数传递给跳转的小程序
      },
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
    this.setData({
      ['showScanCodeConfirm']: false
    })
  },
  closeDialog() {
    this.setData({
      ['showScanCodeConfirm']: false
    })
  }
});