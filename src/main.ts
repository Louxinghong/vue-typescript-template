import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/styles/main.less'

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(store).use(router).use(Antd).mount('#app')
