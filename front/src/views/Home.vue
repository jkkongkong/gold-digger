

<template>
  <div>
    <img src="/img/1.jpg" class="home-header" />
    <div class="category-list">
      <van-skeleton title :row="7" :loading="loading">
        <div v-for="item in categoryList" class="item" v-bind:key="item.categoryId" @click="tips">
          <img :src="item.icon">
          <span>{{ item.name }}</span>
        </div>
      </van-skeleton>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getLocal } from '@/common/js/utils'
import { Toast } from 'vant'
import { useStore } from 'vuex'
import PageFooter from "@/components/common/PageFooter.vue"
export default {
  name: 'home',
  components: { PageFooter },
  setup() {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      isLogin: false, // 是否已登录
      headerScroll: false, // 滚动透明判断
      categoryList: [
        {
          title: '一条狗命',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100001
        }, {
          title: '一条冷冷的狗命',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100002
        }, {
          title: '一条无所谓的狗命',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100003
        }, {
          title: '一条有所谓的狗命',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100005
        }, {
          title: '一条爱要不要的狗命',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100006
        }, {
          title: '一条吊儿郎当的狗命',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100007
        }, {
          title: '一条狗和一只青蛙的爱情故事',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100008
        }, {
          title: '一条狗和一只蚊子不得不说的那些让人心碎的事情',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100009
        }, {
          title: '一条狗命不值钱',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100010
        }, {
          title: '一条狗命不知道值不值钱',
          desc: '一条狗行走在纽约的街头，冰冷的寒风呼呼的刮过脸庞，狗子冻得瑟瑟发抖，他多么希望有个温暖的家可以依靠，但是这一切都是幻象，他没有家，更没有家人，他唯一有的就是一个坚硬而冰冷的心！',
          icon: '/img/1.jpg',
          hot: parseInt(Math.random() * 1000),
          like: parseInt(Math.random() * 1000),
          comment: parseInt(Math.random() * 1000),
          courseId: 100011
        }
      ],
      loading: true
    })
    onMounted(async () => {
      const token = getLocal('token')
      if (token) {
        state.isLogin = true
        // 获取购物车数据.
        store.dispatch('updateCart')
      }
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      });
      state.loading = false
      Toast.clear()
    })

    nextTick(() => {
      window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 100 ? state.headerScroll = true : state.headerScroll = false
      })
    })

    const goToDetail = (item) => {
      router.push({ path: `/product/${item.goodsId}` })
    }

    const tips = () => {
      Toast('敬请期待');
    }

    return {
      ...toRefs(state),
      goToDetail,
      tips
    }
  },
}
</script>

<style lang="less" scoped >




@import '../common/style/mixin';

.category-list {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 13px;

  .item {
    display: flex;
    flex-direction: column;
  }
}

.home-header {
  width: 100%;
  object-fit: contain;
  margin-bottom: 20px;
  }
</style>