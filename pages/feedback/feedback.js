Page({
  data: {
    category: 'other_question',
    categoryList: [{
        label: '问题反馈',
        value: 'other_question'
      },
      {
        label: '社区建设',
        value: 'region_construction'
      },
      {
        label: '功能建议',
        value: 'app_function'
      },
    ]
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {},
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
    };
  },
  onCategoryChosen(e) {
    console.log('意见反馈选择类别:', e)
    this.setData({
      category: e.detail.value
    })
  },
  formSubmit(event) {
    let feedbackContent = event.detail.value
    console.log('意见反馈提交内容:', feedbackContent)
  },
});