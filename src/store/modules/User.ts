import {defineAsyncComponent} from "vue";

// @ts-ignore
export default defineAsyncComponent(()=> import('Federation/User'))
