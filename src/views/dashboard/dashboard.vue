<template>
  <div class="dashboard">
    {{ obj.name }}

    <a-button type="primary" @click="onTestToRawData">{{ name }}</a-button>

    <a-button type="primary" @click="onTestGet">get</a-button>
    <a-button type="primary" @click="onTestPost">post</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRaw } from 'vue'
import { getTestData, postTestData } from '@/api/test'

export default defineComponent({
  name: 'Dashboard',
  setup(context) {
    const name = ref<string>('12312312312')
    let obj = { name: 'ccc', age: 17 }
    let state = reactive(obj)
    let obj2 = toRaw(state)

    const onTestToRawData = () => {
      console.log(obj)
      obj2.name = 'dasdwqeqwew'
      console.log(obj)
    }
    const onTestGet = async () => {
      await getTestData(obj)
    }
    const onTestPost = async () => {
      await postTestData(obj)
    }

    return {
      obj,
      name,
      onTestToRawData,
      onTestGet,
      onTestPost
    }
  }
})
</script>
