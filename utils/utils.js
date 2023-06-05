// 一、 用户输入校验器:
/**
 * 1. 无值返回 false
 * 2. 有值且 key 处于 customValidationList 则进行下一步校验并返回校验结果
 */
function customInputValidation(key, value) {
  var checkResult = true
  const customValidationList = ['userName', 'age', 'phone', 'address']

  // console.log(`key:${key}, value:${value}, type:${typeof(value)}`)
  if (!value || value === undefined || typeof (value) === "string" ? value.trim().length === 0 : value.length === 0) {
    checkResult = false
  } else if (value && customValidationList.indexOf(key) >= 0) {
    const validationFunctionMap = new Map()
    const userNameRegCheck = (userName) => {
      // 中文姓名正则字符串
      if (userName === '微信用户') {
        return false
      }
      const userNameReg = /^([\u4e00-\u9fa5·]{2,20})$/
      const userNameRegExp = new RegExp(userNameReg)
      return userNameRegExp.test(userName)
    }

    const ageRegCheck = (age) => {
      // 年龄正则字符串
      const ageReg = /^1[2-9]|[2-9]\d|1[01]\d$|^120$|^[1-9][2-9]$/
      const ageRegExp = new RegExp(ageReg)
      return ageRegExp.test(age)
    }

    const phoneRegCheck = (phone) => {
      // 手机号正则字符串
      const phoneReg = '^1(?:3\\d|4[4-9]|5[0-35-9]|6[67]|7[0-8]|8\\d|9\\d)\\d{8}$'
      const phoneRegExp = new RegExp(phoneReg)
      return phoneRegExp.test(phone)
    }

    const addressRegCheck = (address) => {
      // 联系地址正则字符串
      const addressReg = /^.{4,40}$/
      const addressRegExp = new RegExp(addressReg)
      return addressRegExp.test(address)
    }

    validationFunctionMap.set('userName', userNameRegCheck)
    validationFunctionMap.set('age', ageRegCheck)
    validationFunctionMap.set('phone', phoneRegCheck)
    validationFunctionMap.set('address', addressRegCheck)

    checkResult = validationFunctionMap.get(key)(value)
  }
  console.log(`key: ${key}`, `value: ${value}`, `checkResult: ${checkResult}`)
  return checkResult
}


// 二、3层多选器初始化数组
const initThreeLayerPickerDefaultArray = (totalThreeLayerPickerData) => {
  let defautThreeLayerPickerArray = [
    [],
    [],
    []
  ]
  let firstColumnIndex = 0
  for (const firstColumnValue in totalThreeLayerPickerData) {
    defautThreeLayerPickerArray[0].push(firstColumnValue)
    let secondColumnIndex = 0
    for (const secondColumnValue in totalThreeLayerPickerData[firstColumnValue]) {
      let thirdColumnValue = totalThreeLayerPickerData[firstColumnValue][secondColumnValue]
      if (firstColumnIndex === 0) {
        defautThreeLayerPickerArray[1].push(secondColumnValue)
        if (secondColumnIndex === 0) {
          defautThreeLayerPickerArray[2] = thirdColumnValue
        }
      }
      secondColumnIndex += 1
    }
    firstColumnIndex += 1
  }
  console.log('init defautThreeLayerPickerArray: ', defautThreeLayerPickerArray)
  return defautThreeLayerPickerArray
}


// 三、 3层多选器更新函数
/* 
data sample:
{
  multiArray: [
    ['A 区', 'B 区'],
    ['a1 街道', 'a2 街道'],
    ['a1-1 社区', 'a1-2 社区'],
  ],
  multiIndex: [0, 0, 0]
}

totalMultiArrayData sample:
{
  'A 区': {
    'a1 街道': [
      'a1-1 社区'
      ]
  }
}
*/
function changeMultiArrayData(data, column, value, totalMultiArrayData) {
  data.multiIndex[column] = value

  const multiPickerFunctionMap = new Map()
  multiPickerFunctionMap.set(0, () => {
    const firstVolumnValue = data.multiArray[0][data.multiIndex[0]]
    const secondVolumnArray = Object.keys(totalMultiArrayData[firstVolumnValue])
    const thirdVolumnArray = totalMultiArrayData[firstVolumnValue][secondVolumnArray[0]]
    data.multiArray[1] = secondVolumnArray
    data.multiArray[2] = thirdVolumnArray
    data.multiIndex[1] = 0
    data.multiIndex[2] = 0
  })

  multiPickerFunctionMap.set(1, () => {
    const firstVolumnIndex = data.multiIndex[0]
    const secondVolumnIndex = data.multiIndex[1]
    const firstVolumnValue = data.multiArray[0][firstVolumnIndex]
    const secondVolumnValue = data.multiArray[1][secondVolumnIndex]
    const thirdVolumnArray = totalMultiArrayData[firstVolumnValue][secondVolumnValue]
    data.multiArray[2] = thirdVolumnArray
    data.multiIndex[2] = 0
  })

  if (column === 0 || column === 1) {
    multiPickerFunctionMap.get(column)()
  }

  return data
}


module.exports = {
  customInputValidation,
  initThreeLayerPickerDefaultArray,
  changeMultiArrayData,
}