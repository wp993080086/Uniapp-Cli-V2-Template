<template>
  <view class="home_box">
    <view class="head_box">
      <image src="../../static/images/index_bg.png" />
    </view>
    <view class="main">{{ title }}</view>

    <view class="line">文本组件</view>
    <copyText text="测试文本" />
  </view>
</template>

<script>
import copyText from '../../components/copy-text/index.vue'

export default {
  name: 'Home',
  components: {
    copyText
  },
  data() {
    return {
      title: '首页'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.home_box {
  height: 100%;
  background-color: #f7f8fa;
  .head_box {
    position: relative;
    width: 100%;
    height: 252rpx;
  }
  .main {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
  }
}
</style>
