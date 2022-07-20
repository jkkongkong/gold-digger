

<template>
  <div class="container">
    <h1>ArticleMenu</h1>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from 'vue'
export default {
  name: 'ArticleMenu',
  components: {},
  setup() {
    const state = reactive({
      swiperList: [], // 轮播图列表
    })
    onMounted(() => {})

    nextTick(() => {

    })

    const goToDetail = () => {}

    return {
      ...toRefs(state),
      goToDetail
    }
  },
}
</script>

<style lang="less" scoped >
  .container {
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
  }
</style>