

<template>
  <div class="container">
    <h3 class="title">{{title}}</h3>
      <p class="hot">123点热度  25人点赞  0人评论</p>
    <p class="menu" v-for="(item,index) in menus" :key='index'>{{index+1}}、{{item}}</p>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleDetails } from "@/service/product"
export default {
  name: 'ArticleMenu',
  components: {},
  setup() {
    const route = useRoute()
    const state = reactive({
      menus: ["目录1水水水水水水","目录1水水水水水水","目录1水水水水水水","目录1水水水水水水","目录1水水水水水水",], // 轮播图列表
      title:"这是一个测试这是一个测试这是一个测试这是一个测试这是一个测试",
      articleId:''
    })
    onMounted(async () => {
      console.log(route.query)
      state.articleId = route.query.id
      const re = await getArticleDetails(state.articleId)
      if(re.status=="success"){
        state.title = re.data.title;
        state.menus = re.data.menus.split(';')
      }
    })

    nextTick(() => {

    })

    const goToDetail = () => {}

    return {
      ...toRefs(state),
      goToDetail
    }
  },
  method:{
  }
}
</script>

<style lang="less" scoped >
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .title{
      text-align: center;
      margin-bottom: 5px;
    }
    .hot{
      font-size: 12px;
      margin-top: 0px;
      text-align: center;
    }
    .menu{
      font-size: 20px;
      margin:15px 0;
    }
  }
</style>