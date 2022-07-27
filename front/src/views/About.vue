
<template>
  <div class="about">
    <s-header :name="'关于我们'"></s-header>
    <div class="about-body">
      <van-divider
        :style="{ color: 'rgb(137,192,178)', borderColor: 'rgb(137,192,178)', fontSize: '20px', fontWeight: 500 }">说明
      </van-divider>
      <div> 在支付的过程中遇到问题，或者有其他疑问请联系我们，微信号：lordtidu2018</div>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
export default {
  components: {
    sHeader
  },
}
</script>

<style lang="less" scoped>
  .about {
    box-sizing: border-box;
    padding: 20px;
    .intro-img {
      width: 100%;
    }
    .about-body {
      font-size: 16px;
      a {
        color: #007fff;
      }
    }
  }
</style>
