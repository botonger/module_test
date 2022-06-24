<template>
  <Header />
  <Side />
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import Header from '@/components/HeaderComp'
import Side from '@/components/SideComp'
const HelloWorld = defineAsyncComponent(() => import ('Federation/HelloWorld.vue'))
const Layout = defineAsyncComponent(() => import ('Federation/Layout.vue'))

export default defineComponent({
  components: {
    Header,
    Side,
    // HelloWorld,
  }
})
</script>
<style>
.ho{
  position: absolute;
  margin-top: 50px;
  left: 200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
