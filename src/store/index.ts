import { createStore } from 'vuex'
import { defineAsyncComponent} from "vue";
// @ts-ignore
const User = defineAsyncComponent(()=> import('Federation/User'))
import {Test} from "@/store/modules/test";
// @ts-ignore
// import  User from 'Federation/User'

export default createStore({
    modules : { User, Test }
})
