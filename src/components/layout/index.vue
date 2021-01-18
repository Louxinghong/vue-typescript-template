<template>
  <div class="layout">
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <main-container></main-container>
  </div>
</template>

<script lang="ts">
import SideBar from './side-bar/SideBar.vue'
import NavBar from './nav-bar/NavBar.vue'
import MainContainer from './main-container/MainContainer.vue'

export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    MainContainer
  }
}
</script>
