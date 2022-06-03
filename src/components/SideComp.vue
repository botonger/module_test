<template>
  <div class="side-container">
    <ul class="side-menu">
      <h3 class="side-title">Menu</h3>
      <li v-for="menu in sideMenus" :key="menu">{{ menu }}</li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const sideMenus = ref(['Source', 'Commits', 'Branches', 'Pull requests',
    'Pipelines', 'Deployments', 'Jira issues', 'Security', 'Downloads'])
</script>
<style scoped>
.side-container {
  position: fixed;
  z-index: -111;
  width: 220px;
  display:flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f0f0;
  box-shadow: 1px 1px 2px 1px lightgray;
}
.side-menu {
  list-style: none;
  margin-top: 70px;
}
.side-menu * {
  margin-bottom: 1.2rem;
  margin-left: -50%;
  transform: translate(10%, 0%);
}
</style>