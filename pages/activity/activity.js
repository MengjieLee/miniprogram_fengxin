import {
  totalRegionArrayData,
  totalStateArrayData,
  totalActivityData,
} from '../../services/data'

const app = getApp()

Page({
  data: {
    activityDetailDialogVisible: false,
    activityDetailShowItem: {},
    signupSuccess: false,
    defaultActivityData: totalActivityData,
    state: {
      value: 'all',
      options: totalStateArrayData
    },
    recruited_sort: 'sort',
    reward_sort: 'sort',
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {
    app.globalData.resultInstance = {}
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
  showActivityDialog(e) {
    const {
      item
    } = e.currentTarget.dataset
    this.setData({
      activityDetailDialogVisible: true,
      activityDetailShowItem: item
    })
  },
  confirmActivityDetailDialog() {
    this.setData({
      activityDetailDialogVisible: false,
    })
    app.globalData.resultInstance = {
      theme: 'success',
      title: '报名成功',
      description: '感谢您的参与，后续请留意活动时间及活动注意事项'
    }
    wx.navigateTo({
      url: '/pages/result/result',
    })
  },
  closeActivityDetailDialog() {
    this.setData({
      activityDetailDialogVisible: false,
    })
  },
  // handleColSpanChange(e) {
  //   let newSwitchVal = !this.data.defaultSwitchVal
  //   this.setData({
  //     defaultSwitchVal: newSwitchVal
  //   })
  //   let newColSpan
  //   switch (this.data.defaultSwitchVal) {
  //     case true:
  //       newColSpan = 12
  //       break
  //     default:
  //       newColSpan = 24
  //       break
  //   }
  //   this.setData({
  //     colSpan: newColSpan
  //   })
  // },
  handleFilterSelect(e) {
    const {
      key
    } = e.currentTarget.dataset
    const searchVal = e.detail.value
    const defaultActivityList = totalActivityData

    console.log('searchVal', searchVal)
    let filteredList = []
    if (searchVal === 'all') {
      filteredList = defaultActivityList
    } else {
      filteredList = defaultActivityList.filter(item => item[`${key}`].includes(searchVal))
    }
    this.setData({
      [`${key}.value`]: searchVal,
      defaultActivityData: filteredList
    })
  },
  handleFilterSort(e) {
    const {
      key
    } = e.currentTarget.dataset
    let curSortVal = this.data[key + '_sort']
    let newSortVal = ''
    let sortedList = []
    console.log(key, curSortVal)

    const defaultActivityList = this.data.defaultActivityData
    switch (curSortVal) {
      case 'sort':
        newSortVal = 'asc'
        sortedList = defaultActivityList.sort((a, b) => a[`${key}`] - b[`${key}`]);
        break
      case 'asc':
        newSortVal = 'desc'
        sortedList = defaultActivityList.sort((a, b) => b[`${key}`] - a[`${key}`]);
        break
      case 'desc':
        newSortVal = 'asc'
        sortedList = defaultActivityList.sort((a, b) => a[`${key}`] - b[`${key}`]);
        break
      default:
        break
    }
    this.setData({
      [`${key}_sort`]: newSortVal,
      defaultActivityData: sortedList
    })
  },
  searchValueChangeFilter(e) {
    const searchVal = e.detail.value
    const defaultActivityList = totalActivityData
    if (!searchVal) {
      this.setData({
        defaultActivityData: defaultActivityList
      })
      return
    }
    const filteredList = defaultActivityList.filter(item => item.task_name.includes(searchVal))
    this.setData({
      defaultActivityData: filteredList
    })
  },
  searchValueClearFilter(e) {
    const defaultActivityList = totalActivityData
    this.setData({
      defaultActivityData: defaultActivityList
    })
  }
})