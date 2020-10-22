<template>
  <div class="dashboard-container">
    <el-divider content-position="left">{{ title }}</el-divider>
    <el-button type="primary" @click="onShowBlog">查看博客</el-button>

    <el-dialog
      title="个人博客详情"
      :visible="dialogVisible"
      width="600px"
      :before-close="onClose"
    >
      <Blog v-for="blogPost in blogPosts" :key="blogPost.id" :post="blogPost" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Blog, { Post } from '@/components/blog/index.vue'

@Component({
  components: {
    Blog
  }
})
export default class Dashboard extends Vue {
  private title: string = 'Welcome. '
  private loading: boolean = false
  private dialogVisible: boolean = false
  private blogPosts: Post[] = [
    {
      id: 1,
      title: 'My first typescript vue blog',
      body: '她嚼着口香糖，对墙漫谈着理想',
      author: 'LGGLGGLGGL',
      datePosted: new Date(2020, 1, 22)
    },
    {
      id: 2,
      title: 'Ccc lxh',
      body: '分别总是在九月，回忆是思念的愁',
      author: 'LGGLGGLGGL',
      datePosted: new Date(2020, 2, 22)
    }
  ]

  private onShowBlog(): void {
    this.dialogVisible = true
  }
  private onClose(): void {
    this.dialogVisible = false
  }
}
</script>
