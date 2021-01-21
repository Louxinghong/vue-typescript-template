<template>
  <div class="layout">
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <main-container></main-container>
  </div>
</template>

<script lang="ts">
import SideBar from '@/components/layout/side-bar/SideBar.vue'
import NavBar from '@/components/layout/nav-bar/NavBar.vue'
import MainContainer from '@/components/layout/main-container/MainContainer.vue'

export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    MainContainer
  }
}
</script>
