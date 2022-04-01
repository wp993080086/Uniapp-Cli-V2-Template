<script>
const env = __wxConfig.envVersion
let base = ''
console.log(`--- ${env} ---`)
switch (env) {
  case 'develop': // 本地
    base = 'https://dev.test.com'
    // base = 'https://test.com'
    // base = 'https://uat.com'
    break
  case 'trial': // 体验版
    base = 'https://dev.com'
    // base = 'https://test.com'
    // base = 'https://uat.com'
    break
  default:
    // 正式版
    // base = 'https://test.com'
    // base = 'https://uat.com'
    base = 'https://xxx.com'
}
export default {
  onLaunch() {
    console.log(`--- ${this.globalData.baseURL} ---`)
    const _this = this
    if (!this.globalData.user || !this.globalData.user.sToken) {
      console.log('无账号，请求缓存')
      _this.globalData.user = uni.getStorageSync('user') || {}
      _this.globalData.userInfo = uni.getStorageSync('userInfo') || {}
    }
    // 获取系统信息
    uni.getSystemInfo({
      success(res) {
        _this.globalData.systemInfo = res
      }
    })
  },
  onShow() {},
  onHide() {},
  globalData: {
    baseURL: base,
    user: {},
    userInfo: {},
    systemInfo: {}
  }
}
</script>

<style lang="scss">
@import '../src/static/style/base.css';
@import '../src/static/style/normalize.css';
@import 'uview-ui/index.scss';
</style>
