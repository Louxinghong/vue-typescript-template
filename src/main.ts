import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './styles/main.less'

Vue.use(Antd)
const app = Vue.createApp(App)
app.use(store).use(router).mount('#app')
