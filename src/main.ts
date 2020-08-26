import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import store from './core/store'

createApp(App).use(store).use(router).mount('#app')
