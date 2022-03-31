import { Toast, Alert } from '../utils/toast.js'

const app = getApp()
const { baseURL } = app.globalData
const headerOption = {
  'content-type': 'application/json;charset=utf-8',
  channel: '3'
}
// 清除信息并退出
const clearUserMsg = (message) => {
  uni.removeStorageSync('userInfo')
  uni.removeStorageSync('user')
  app.globalData.user = {}
  app.globalData.userInfo = {}
  Toast(message)
  setTimeout(() => {
    uni.reLaunch({ url: '../login/index' })
  }, 1000)
}

/**
 * Get参数处理
 * @param {String} url 接口地址
 * @param {Object} param 参数
 * @return {String} 处理后的接口地址
*/
const getParamDispose = (url, param) => {
  const keyArr = Object.keys(param)
  const valueArr = Object.values(param)
  const leng = keyArr.length
  let newUrl = url
  for (let i = 0; i < leng; i++) {
    if (i === 0) {
      newUrl += `?${keyArr[i]}=${valueArr[i]}`
    } else {
      newUrl += `&${keyArr[i]}=${valueArr[i]}`
    }
  }
  return newUrl
}

const Request = {
  /**
   * Post请求
   * @param {String} module 接口模块
   * @param {String} api 接口地址
   * @param {Object} param 参数
   * @param {Object} option 配置
   * @return {Promise}
  */
  post: (module, api, param = {}, option = { isToken: true }) => {
    const url = `${baseURL}${module}${api}`
    const Data = app.globalData
    if (Data.user && Data.user.sToken && Data.user.userToken && option.isToken) {
      headerOption.refreshToken = Data.user.sToken
      headerOption.token = Data.user.userToken
    }
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        data: { ...param },
        method: 'POST',
        timeout: 30000,
        header: headerOption,
        success: (res) => {
          if (res.statusCode === 200) {
            const key = ((res.data || {}).code || '').slice(-5)
            if (key !== '00000') {
              if (key === '99990') {
                clearUserMsg((res.data || {}).message)
                return
              }
              reject(res)
              setTimeout(() => {
                if (res.data.message.length > 7) {
                  if (res.data.message.length > 20) {
                    Alert(res.data.message)
                  } else {
                    Toast(res.data.message)
                  }
                } else {
                  Toast(res.data.message, 'error')
                }
              }, 0)
              return
            }
            resolve(res.data)
          } else {
            reject(res)
            setTimeout(() => {
              Toast(`${res.statusCode} 网络开小差了，请稍后重试 !`)
            }, 0)
          }
        },
        fail: (res) => {
          reject(res)
          setTimeout(() => {
            Toast('服务繁忙，请稍后重试 !')
          }, 0)
        }
      })
    })
  },
  /**
   * Get请求
   * @param {String} module 接口模块
   * @param {String} api 接口地址
   * @param {Object} param 参数
   * @param {Object} option 配置
   * @return {Promise}
  */
  get: (module, api, param = {}, option = { isToken: true }) => {
    const url = getParamDispose(`${baseURL}${module}${api}`, param)
    const Data = app.globalData
    if (Data.user && Data.user.sToken && Data.user.userToken && option.isToken) {
      headerOption.refreshToken = Data.user.sToken
      headerOption.token = Data.user.userToken
    }
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        data: {},
        method: 'GET',
        timeout: 30000,
        header: headerOption,
        success: (res) => {
          if (res.statusCode === 200) {
            const key = ((res.data || {}).code || '').slice(-5)
            if (key !== '00000') {
              if (key === '99990') {
                clearUserMsg((res.data || {}).message)
                return
              }
              reject(res)
              setTimeout(() => {
                Toast(res.data.message)
              }, 0)
              return
            }
            resolve(res.data)
          } else {
            reject(res)
            setTimeout(() => {
              Toast(`${res.statusCode} 网络开小差了，请稍后重试 !`)
            }, 0)
          }
        },
        fail: (res) => {
          reject(res)
          setTimeout(() => {
            Toast('服务繁忙，请稍后重试 !')
          }, 0)
        }
      })
    })
  }
}

export default Request
