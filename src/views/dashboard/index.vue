<template>
  <div class="dashboard-container">
    <el-divider content-position="left">{{ title }}</el-divider>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Dashboard extends Vue {
  private title: string = 'Welcome. '
}
</script>
