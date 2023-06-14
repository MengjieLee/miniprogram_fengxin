import {
  customInputValidation,
} from '../../utils/utils'


Page({
  data: {},
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

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
  onPhoneInput(e) {
    const {
      key,
    } = e.currentTarget.dataset
    const {
      value
    } = e.detail
    console.log(e)
    const phonePrecheckPass = customInputValidation(key, value)

  },
  getPhoneNumber(e) {
    console.log(e)
  },
  formSubmit(event) {
    let applyPartyFormData = event.detail.value
    console.log('入党申请表单:', applyPartyFormData)
  }
});