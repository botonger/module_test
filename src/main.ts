import { createApp } from 'vue'
import App from './App.vue'
import '../public/index.css'

import { defineAsyncComponent} from "vue";
// const store = defineAsyncComponent(() => import('./store'))
import store from './store'
// @ts-ignore
import router from 'Federation/router'
// import router from './router'

// @ts-ignore
// import Store from 'Federation/Store.ts'

createApp(App).use(store).use(router).mount('#app')

// import './bootloader.tsx'
// declare function test(): any