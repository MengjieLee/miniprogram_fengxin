import {
  totalRegionData,
  totalJobData,
  totalPoliticsData,
} from '../../services/data'
import {
  customInputValidation,
  initThreeLayerPickerDefaultArray,
  changeMultiArrayData,
} from '../../utils/utils'
import Toast from 'tdesign-miniprogram/toast/index'

const app = getApp()

Page({
  data: {
    userInfo: {
      userName: '',
      gender: '',
    },
    regionMultiArray: [],
    regionMultiIndex: [0, 0, 0],
    regionValue: '',
    jobArray: totalJobData,
    jobValue: [],
    politicsArray: totalPoliticsData,
    politicsValue: [],
    genderList: [{
        label: '保密',
        value: ''
      },
      {
        label: '男',
        value: 'male'
      },
      {
        label: '女',
        value: 'female'
      },
    ]
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {
    this.setData({
      regionMultiArray: initThreeLayerPickerDefaultArray(totalRegionData)
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        regionValue: app.globalData.userInfo.regionValue,
        jobValue: [app.globalData.userInfo.jobValue],
        politicsValue: [app.globalData.userInfo.politicsValue],
      })
    }
    console.log('载入 userInfo 页后的 userInfo:', this.data.userInfo)
  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
    }
  },

  // Customer Func
  syncFormInputCurrentState(key, state, errMsg) {
    this.setData({
      [`${key}TipsVisible`]: true,
      [`${key}LayoutStyle`]: state === 'success' ? '' : 'border: 1rpx solid red;',
      [`${key}TipsStyle`]: state === 'success' ? 'color: green;' : 'color: red;',
      [`${key}TipsIcon`]: state === 'success' ? 'check-circle-filled' : 'close-circle-filled',
      // [`${key}Tips`]: state === 'success' ? '' : errMsg,
    })
    console.log(key, this.data[`${key}TipsStyle`])
  },
  formInputCommonBlur(e) {
    const {
      key
    } = e.currentTarget.dataset
    const {
      value
    } = e.detail
    this.syncFormInputCurrentState(key, customInputValidation(key, value) ? 'success' : 'error')
  },
  userNameReview(e) {
    console.log('获取昵称', e)
  },
  onChooseAvatar(e) {
    console.log(e)
    const {
      avatarUrl
    } = e.detail
    this.setData({
      'userInfo.avatarUrl': avatarUrl
    })
    Toast({
      context: this,
      selector: '#t-toast',
      message: '成功获取头像',
      theme: 'success',
      direction: 'column',
    })
    this.syncFormInputCurrentState('avatarUrl', customInputValidation('avatarUrl', avatarUrl) ? 'success' : 'error')
  },
  // TODO 目前 no permission
  getphonenumber(e) {
    console.log('获取用户手机信息: ', e)
  },
  bindRegionMultiPickerChange(e) {
    var regionPickerValue = e.detail.value
    console.log('regionPicker 发送选择改变，携带值为: ', regionPickerValue)
    this.setData({
      regionMultiIndex: e.detail.value,
      regionValue: this.data.regionMultiArray[0][regionPickerValue[0]] + this.data.regionMultiArray[1][regionPickerValue[1]] + this.data.regionMultiArray[2][regionPickerValue[2]]
    })
    const {
      key
    } = e.currentTarget.dataset
    this.syncFormInputCurrentState(key, customInputValidation(key, regionPickerValue) ? 'success' : 'error')
  },
  bindRegionMultiPickerColumnChange(e) {
    // console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const payload = {
      multiArray: this.data.regionMultiArray,
      multiIndex: this.data.regionMultiIndex
    }
    const newdata = changeMultiArrayData(payload, e.detail.column, e.detail.value, totalRegionData)
    this.setData({
      regionMultiArray: newdata.multiArray,
      regionMultiIndex: newdata.multiIndex,
    })
  },
  onPickerClose(e) {
    console.log('退出 picker: ', e)
    const {
      key,
      value
    } = e.currentTarget.dataset
    this.syncFormInputCurrentState(key, customInputValidation(key, value) ? 'success' : 'error')
  },
  onShowPicker(e) {
    console.log(e)
    const {
      key
    } = e.currentTarget.dataset
    this.setData({
      [`${key}Visible`]: true
    })
  },
  onPickerChange(e) {
    const {
      key,
    } = e.currentTarget.dataset
    const {
      value
    } = e.detail
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(' '),
    })
    console.log(`${key}picker change: ${value}`, e.detail)
    this.syncFormInputCurrentState(key, 'success')
  },
  onPickerCancel(e) {
    const {
      key,
      value
    } = e.currentTarget.dataset
    console.log('key', key)
    this.setData({
      [`${key}Visible`]: false,
    })
  },
  onGender(e) {
    this.setData({
      'userInfo.gender': e.detail.value
    })
  },
  formSubmit(event) {
    const isRequiredList = ['avatarUrl', 'userName', 'age', 'phone', 'address', 'region', 'job', 'politics']
    let userInfoFormData = event.detail.value

    console.log('submit userInfoFormData: ', userInfoFormData)

    userInfoFormData.avatarUrl = this.data.userInfo.avatarUrl ? this.data.userInfo.avatarUrl : ''
    userInfoFormData.regionValue = this.data.regionValue
    userInfoFormData.jobValue = this.data.jobValue[0]
    userInfoFormData.politicsValue = this.data.politicsValue[0]
    userInfoFormData.gender = this.data.userInfo.gender


    var submitPrechekPass = true
    for (const key in userInfoFormData) {
      typeof (userInfoFormData[key]) === "string" ? userInfoFormData[key] = userInfoFormData[key].trim(): ''
      if (userInfoFormData[key] !== undefined && isRequiredList.indexOf(key) >= 0) {
        const valuePrecheckResult = customInputValidation(key, userInfoFormData[key])
        this.syncFormInputCurrentState(key, valuePrecheckResult ? 'success' : 'error')
        if (!valuePrecheckResult) {
          submitPrechekPass = false
        }
      }
    }
    if (!submitPrechekPass) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '请完善红色提示区内容',
        theme: 'error',
        direction: 'column',
      })
      return
    }

    console.log('userInfo page submit 提交数据:', userInfoFormData)

    app.globalData.userInfo = userInfoFormData
    Toast({
      context: this,
      selector: '#t-toast',
      message: '用户信息修改成功',
      theme: 'success',
      direction: 'column',
    })
    // wx.redirectTo({
    //   url: '/pages/home/home',
    // })
  }
})