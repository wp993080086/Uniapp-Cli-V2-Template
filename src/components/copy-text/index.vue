<template>
  <view class="copy_content" @click.stop="handleClipboard">
    <text :style="{ fontSize: `${size}rpx`, marginRight: `${space}rpx` }">
      {{ text || '-' }}
    </text>
    <u-icon name="attach" :size="`${size}rpx`" :color="color" />
  </view>
</template>

<script>
export default {
  name: 'CopyText',
  props: {
    text: { default: '', required: true },
    size: { default: 24 },
    color: { default: '#1677FF' },
    space: { default: 6 }
  },
  data() {
    return {}
  },
  methods: {
    // 操作粘贴板
    handleClipboard() {
      if (!this.text) {
        console.error('copy文本为空 !')
        return
      }
      uni.setClipboardData({
        data: this.text,
        success() {
          console.log('复制成功 !')
        }
      })
    }
  }
}
</script>
<style lang="scss">
.copy_content {
  & ::v-deep .u-icon {
    display: inline-block !important;
  }
}
</style>
