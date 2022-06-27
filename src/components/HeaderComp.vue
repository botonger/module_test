<template>
  <header>
    <div @click="pop" class="logo">🦄</div>
    <ul class="header-menu">
      <li v-for="m in navMenu" :key="m">
        <router-link :to="{ name: m.toLowerCase()}">{{ m }}</router-link>
      </li>
    </ul>
    <button style="display: inline; margin-left: 50px;" @click="store.commit('User/IncreaseCount')">store test</button>
    <div style="display: inline" >{{ store.state.User.count }}</div>
  </header>
</template>
<script setup>
import {defineAsyncComponent, ref} from "vue"
import { useStore} from "vuex"
const store = useStore()
const navMenu = ref(['YoWork', 'Repositories', 'Projects', 'More'])
function pop(){
  alert('❤️')
}

</script>
<style scoped>
.logo {
  background: aquamarine;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  margin-left: 10px;
  margin-top: 5px;
  cursor: pointer;
}
header {
  position: fixed;
  /*left: 0;*/
  /*top: 0;*/
  width: 100%;
  height: 50px;
  box-shadow: 1px 1px 2px 1px lightgray;
  display: flex;
  background-color: white;
}
.header-menu {
  margin: 0;
  list-style: none;
  display: flex;
  height: 100%;
  line-height: 50px;
}
.header-menu li {
  margin-left: 1rem;
  font-size: 0.9rem;
}
.header-menu li * {
  color: #484848;
  text-decoration: none;
}
/*.create-button {*/
/*  background: rgba(49, 104, 176, 0.63);*/
/*  border-radius: 3px;*/
/*  width: 60px;*/
/*  height: 30px;*/
/*  border: none;*/
/*  color: white;*/
/*}*/
</style>