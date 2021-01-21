<template>
  <div class="dashboard">
    {{ obj.name }}

    <a-button type="primary" @click="onTestToRawData">{{ name }}</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRaw } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const name = ref<string>('12312312312')
    let obj = { name: 'ccc', age: 17 }
    let state = reactive(obj)
    let obj2 = toRaw(state)

    const onTestToRawData = () => {
      console.log(obj)
      obj2.name = 'dasdwqeqwew'
      console.log(obj)
    }
    return {
      obj,
      name,
      onTestToRawData
    }
  }
})
</script>
