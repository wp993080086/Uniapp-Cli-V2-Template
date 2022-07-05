<script>
const env = __wxConfig.envVersion
let base = ''
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
    console.log(`${env}：${this.globalData.baseURL}`)
    const _this = this
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
    userInfo: {},
    systemInfo: {}
  }
}
</script>

<style lang="scss">
@import '../src/static/style/reset.css';
@import 'uview-ui/index.scss';
</style>
