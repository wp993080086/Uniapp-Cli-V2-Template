/**
 * 轻提示
 * @param {String} content 提示内容
 * @param {String} icon 成功 success 失败 error
*/
export const Toast = (content = '提示内容', icon = 'none') => {
  uni.showToast({
    title: content,
    icon,
    mask: true,
    duration: 1500
  })
}
/**
 * Loading 提示框
 * @param {String} content 提示内容
*/
export const Loading = {
  show: (content = '加载中') => {
    uni.showLoading({
      title: content,
      mask: true
    })
  },
  hide: () => {
    uni.hideLoading()
  }
}
/**
 * Alert 提示框
 * @param {String} content 提示内容
 * @param {String} title 标题
*/
export const Alert = (content, title = '温馨提示') => {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      showCancel: false,
      confirmColor: '#1677FF ',
      success(res) {
        if (res.confirm) resolve(res)
      },
      fail() {
        reject(new Error('Alert 调用失败 !'))
      }
    })
  })
}
/**
 * Confirm 确认框
 * @param {String} content 提示内容
 * @param {String} title 标题
*/
export const Confirm = (content, title = '温馨提示') => {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      cancelColor: '#1D2129',
      confirmColor: '#1677FF',
      success(res) {
        if (res.confirm) {
          resolve(res)
        } else if (res.cancel) {
          reject(res)
        }
      },
      fail() {
        reject(new Error('Alert 调用失败 !'))
      }
    })
  })
}
