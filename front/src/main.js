import { createApp } from 'vue'
import { addVantCmp } from '@/plugins/vant'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式

const app = createApp(App) // 创建实例

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

addVantCmp(app)

app.use(router)
app.use(store)

app.mount('#app')