

<template>
  <div class="container">
    <van-tabs :color="'#1baeae'" :title-active-color="'#1baeae'" class="order-tab"
      v-model="menuIndex">
      <van-tab :title="item.name" :name='item.value' v-for="(item,index) in menuList" :key="index"></van-tab>
    </van-tabs>
    <component :is="componentName[menuIndex]" />
  </div>
</template>

<script>
import { MENU_LiST } from '@/utils/constants.js'
import Dashboard from '@/views/manage/dashboard/Dashboard.vue'
import ArticleMenu from '@/views/manage/articleMenu/ArticleMenu.vue'
export default {
  name: 'Manage',
  components: {Dashboard,ArticleMenu},
  data(){
    return {
      menuIndex:2,
      menuList: MENU_LiST,
      componentName:{
        1:'Dashboard',
        2:'ArticleMenu',
        3:'Dashboard',
      }
    }
  },
  methods:{
  }
}
</script>

<style lang="less" scoped >
.container {
  width: 100%;
}
</style>