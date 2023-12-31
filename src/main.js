import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/globe.css'
import vant from 'vant'
import 'vant/lib/index.css'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vant)
app.use(ElementPlus)
app.mount('#app')
