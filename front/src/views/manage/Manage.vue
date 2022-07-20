

<template>
  <div class="container">
    <van-tabs @click="onChangeTab" :color="'#1baeae'" :title-active-color="'#1baeae'" class="order-tab"
      v-model="status">
      <van-tab :title="item.name" :name='item.value' v-for="(item,index) in menuList" :key="index"></van-tab>
    </van-tabs>
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from 'vue'
import { MENU_LiST } from '@/utils/constants.js'
import Dashboard from '@/views/manage/dashboard/Dashboard.vue'
export default {
  name: 'Manage',
  components: {Dashboard},
  setup() {
    const state = reactive({
      menuList: MENU_LiST,
      status:1
    })
    onMounted(() => {
    })

    nextTick(() => {

    })

    const goToDetail = () => { }

    return {
      ...toRefs(state),
      goToDetail,
    }
  },
  methods:{
    onChangeTab(name){
      this.status = name
    }
  }
}
</script>

<style lang="less" scoped >
.container {
  width: 100%;
}
</style>