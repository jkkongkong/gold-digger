

<template>
  <div class="container">
    <div class="actions">
      <van-search v-model.trim="searchKey" placeholder="请输入搜索关键词" class="search"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleMenu',
  components: {},
  data(){
    return {
      searchKey:''
    }
  }
}
</script>

<style lang="less" scoped >
  .container {
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    .actions{
      height: 40px;
      padding: 10;
      box-sizing: border-box;
    }
    .search{
      border:1px solid black;
    }
  }
</style>