

<template>
  <div class="container">
    <h1>dashboard</h1>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from 'vue'
export default {
  name: 'home',
  components: {},
  setup() {
    const state = reactive({})
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
    color:gray;
  }
</style>