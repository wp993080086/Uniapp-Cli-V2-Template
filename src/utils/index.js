/**
 * 睡眠
 * @param  {Number} ms 等待
 */
export const sleep = (ms = 500) => {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}
/**
 * 判断变量的类型
 * @param {object} value 变量值
 */
function checkType(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
/**
 * 深拷贝（递归）
 * @param {*} sourceValue 需要拷贝的值
 */
export const deepClone = (sourceValue) => {
  // 如果传入的数据是简单类型（不是 {} & []），直接返回即可
  if (typeof sourceValue !== 'object') {
    return sourceValue
  }
  // 判断 传入参数的数据类型(object or array)
  const targetType = checkType(sourceValue)
  // 根据传入参数的数据类型，创建 初始存储结果的变量类型 {} or []
  const result = targetType === 'Object' ? {} : []
  // 遍历 sourceValue (for...in可以遍历数据和对象)
  // 避免数组内有自定义属性，遍历数组使用 for...of，遍历对象 for...in
  if (targetType === 'Array') {
    // 传入参数是数组时，次数使用的是 for...of 遍历，当然，也可以使用 数组的其他遍历方法
    for (const [key, value] of sourceValue.entries()) {
      const itemType = checkType(value)
      // 如果 value 是 数组 或 对象，则继续遍历
      if (itemType === 'Object' || itemType === 'Array') {
        result[key] = deepClone(value)
      } else {
        // 如果 value 是 基本数据类型 或者 函数，直接赋值即可
        result[key] = value
      }
    }
  } else {
    // 传入参数是对象时
    for (const key in sourceValue) {
      // 遍历数组时，key 为数组的 下标
      // 遍历对象时，key 为对象的 key
      // hasOwnProperty 只能检验对象自身的属性，不能检验继承属性，也不能检验原型链上的属性
      if (Object.prototype.hasOwnProperty.call(sourceValue, key)) {
        const item = sourceValue[key]
        const itemType = checkType(item)
        // 如果 value 是 数组 或 对象，则继续遍历
        if (itemType === 'Object' || itemType === 'Array') {
          result[key] = deepClone(item)
        } else {
          // 如果 value 是 基本数据类型 或者 函数，直接赋值即可
          result[key] = item
        }
      }
    }
  }
  return result
}
// 手机号码校验
export const validateMobile = (rule, value, callback) => {
  console.log(rule)
  const RegExp = /^1\d{10}$/
  if (value === '') {
    callback(new Error('请填写联系电话'))
  } else if (!RegExp.test(value)) {
    callback(new Error('手机号码格式有误'))
  } else {
    callback()
  }
}
/**
 * 节流
 * @param {Function} fn 事件
 * @param {Number} limit 触发间隔
 */
export const throttle = (fn, limit = 200) => {
  let wait = false
  // eslint-disable-next-line
  const _this = this
  // eslint-disable-next-line
  return function (_this, ...args) {
    if (wait === false) {
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
      return fn.apply(_this, args)
    }
    return null
  }
}
/**
 * 防抖
 * @param {Function} fn 事件
 * @param {Number} wait 触发间隔
 * @param {Number} immediate 是否立即触发一次
 */
export const debounce = (wait, fn, immediate = false) => {
  let timeout
  // eslint-disable-next-line
  const _this = this
  // eslint-disable-next-line
  const debounced = function (_this, ...args) {
    const later = () => {
      timeout
      if (immediate !== true) {
        fn.apply(_this, args)
      }
    }
    clearTimeout(timeout)
    if (immediate === true && timeout === undefined) {
      fn.apply(_this, args)
    }
    timeout = setTimeout(later, wait)
  }
  debounced.cancel = () => {
    clearTimeout(timeout)
  }
  return debounced
}
/**
 * 压缩图片
 * @param {Object} file { path: '', size: '' }
 * @param {Number} limitSize 压缩目标 MB
 */
export const imgCompress = {
  MB: 1024 * 1024,
  canvasId: 'imgCanvas',
  ctx: uni.createCanvasContext('imgCanvas'),
  // 获取可使用窗口宽度
  rpxToPx(number) {
    return (number / 750) * getApp().globalData.systemInfo.windowWidth
  },
  // 获取文件信息
  getFileInfo(path) {
    return new Promise((resolve, reject) => {
      uni.getFileInfo({
        filePath: path,
        success: (res) => {
          console.log('File Size =>', `${res.size / this.MB}MB`)
          resolve(res.size)
        },
        fail: (err) => reject(err)
      })
    })
  },
  // 获取图片信息
  getImageInfo(path) {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: path,
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      })
    })
  },
  // 判断是否达到压缩目标
  getCompressImage(file, limitSize) {
    if (file.size > this.MB * limitSize) {
      return this.calcImaeg(file.path, limitSize)
    }
    return file.url
  },
  // 递归
  async calcImaeg(url, limitSize) {
    const size = await this.getFileInfo(url)
    if (size > this.MB * limitSize) {
      const imageInfo = await this.getImageInfo(url)
      const maxSide = Math.max(imageInfo.width, imageInfo.height)
      const windowW = this.rpxToPx(750)
      let scale = 1
      if (maxSide > windowW) {
        scale = windowW / maxSide
      }
      const imageW = Math.floor(imageInfo.width * scale)
      const imageH = Math.floor(imageInfo.height * scale)
      const newPath = await this.getCanvasImage(url, imageW, imageH)
      return this.calcImaeg(newPath, limitSize)
    }
    return url
  },
  // 绘画
  getCanvasImage(imagePath, imageW, imageH) {
    return new Promise((resolve, reject) => {
      this.ctx.drawImage(imagePath, 0, 0, imageW, imageH)
      this.ctx.draw(false, () => {
        uni.canvasToTempFilePath({
          canvasId: this.canvasId,
          x: 0,
          y: 0,
          width: imageW,
          height: imageH,
          quality: 1,
          success: (res) => resolve(res.tempFilePath),
          fail: () => reject(imagePath)
        })
      })
    })
  }
}
