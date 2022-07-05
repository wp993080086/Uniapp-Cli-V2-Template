<template>
  <view class="my_box">
    <view class="head_box">
      <image src="../../static/images/index_bg.png" />
    </view>
    <view class="main">{{ title }}</view>
  </view>
</template>

<script>
export default {
  name: 'My',
  data() {
    return {
      title: '我的'
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss">
.my_box {
  height: 100%;
  background-color: #f7f8fa;
  .head_box {
    position: relative;
    width: 100%;
    height: 252rpx;
  }
  .main {
    @include set_w_h(fill, 100);
    line-height: 100rpx;
    text-align: center;
  }
}
</style>
