import { createApp } from 'vue'
import App from './App.vue'
import { defineAsyncComponent} from "vue";
// const store = defineAsyncComponent(() => import('./store'))
import store from './store'
// import router from './router'

// @ts-ignore
// import Store from 'Federation/Store.ts'

createApp(App).use(store).mount('#app')

// import './bootloader.tsx'
// declare function test(): any