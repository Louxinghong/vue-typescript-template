<template>
  <div class="login-container">
    <p class="title">Demo for ts --Login</p>
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="account">
        <el-input v-model="form.account" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" :loading="loading" @click="onSubmit"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form as ElForm } from 'element-ui'

interface formOrigin {
  account: ''
  password: ''
}

@Component
export default class Login extends Vue {
  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error('密码长度不能小于6位'))
    } else {
      callback()
    }
  }

  private loading: boolean = false
  private form = {
    account: '',
    password: ''
  }
  private rules = {
    account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { validator: this.validatePassword, trigger: 'blur' }
    ]
  }

  private onSubmit() {
    ;(this.$refs.form as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        try {
          this.loading = true
          this.$router.replace({ name: 'Home' })
          this.loading = false
        } catch (error) {
          this.loading = false
        } finally {
          this.loading = false
        }
      }
    })
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .title {
    font-weight: 700;
  }

  .el-form {
    width: 400px;
  }
  .el-button {
    width: 400px;
  }
}
</style>
