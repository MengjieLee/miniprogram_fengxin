Page({
  data: {
    imageOriginFiles: [],
    imageSizeLimit: {
      size: 2,
      unit: 'MB',
      message: '图片大小不超过 2 MB'
    },
    imageGridConfig: {
      column: 3,
      width: 240,
      height: 240,
    },
    submitTimeVisible: false,
    submitTime: new Date().getTime(),
    submitTimeText: '',
  },
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
  handleImageUploadSuccess(e) {
    const {
      files
    } = e.detail;
    this.setData({
      imageOriginFiles: files,
    });
  },
  handleImageUploadRemove(e) {
    const {
      index
    } = e.detail;
    const {
      imageOriginFiles
    } = this.data;
    imageOriginFiles.splice(index, 1);
    this.setData({
      imageOriginFiles,
    });
  },
  handleImageUploadClick(e) {
    console.log(e.detail.file);
  },
  showSubmitTimePicker(e) {
    const {
      mode
    } = e?.currentTarget?.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const {
      mode
    } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const {
      value
    } = e?.detail;
    const {
      mode
    } = this.data;
    console.log('confim', value);
    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });

    this.hidePicker();
  },
  onColumnChange(e) {
    console.log('time pick', e?.detail?.value);
  },
  formSubmit(event) {
    let cameraContent = event.detail.value
    cameraContent.imageList = this.data.imageOriginFiles
    console.log('随手拍提交内容:', cameraContent)
  },
});