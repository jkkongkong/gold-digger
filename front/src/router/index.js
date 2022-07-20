import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/manage'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import( '@/views/Home.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( '@/views/user/Login.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( '@/views/About.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/category',
      name: 'category',
      component: () => import( '@/views/product/Category.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/productList',
      name: 'productList',
      component: () => import( '@/views/product/ProductList.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import( '@/views/product/ProductDetail.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import( '@/views/order/Cart.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: () => import( '@/views/order/CreateOrder.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import( '@/views/order/Order.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: () => import( '@/views/order/OrderDetail.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import( '@/views/user/User.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import( '@/views/user/Setting.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () => import( '@/views/user/Address.vue'),
      meta: {
        index: 2
      }
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: () => import( '@/views/user/AddressEdit.vue'),
      meta: {
        index: 3
      }
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import( '@/views/manage/Manage.vue'),
      meta: {
        index: 1
      }
    },
  ]
})

export default router