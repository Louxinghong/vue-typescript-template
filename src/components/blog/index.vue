<template>
  <div class="blog-container">
    <h1 class="title">{{ post.title }}</h1>
    <p class="body">{{ post.body }}</p>
    <p class="author">{{ post.author }}</p>
    <p class="date">{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface Post {
  id: number
  title: string
  body: string
  author: string
  datePosted: Date
}

@Component
export default class Blog extends Vue {
  @Prop() private post!: Post

  get date() {
    return `${this.post.datePosted.getFullYear()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getDate()}`
  }
}
</script>

<style></style>
