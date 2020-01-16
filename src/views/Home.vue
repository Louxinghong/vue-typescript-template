<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button type="success" @click="onTouchMe">戳我</el-button>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface labelValue {
  label: string
}

@Component
export default class Home extends Vue {
  // data
  // private _this: any = this
  private count: number = 100
  private list: string[] = []
  private output = this.identity<string>('lgglgglggl')
  private outputTwo = this.identity<number>(123)

  /**
   * methods
   */
  public async onTouchMe (count: number): Promise<void> {
    await this.$message.success('12')
    this.$notify.success({ title: '成功', message: '成功导出' })
    await this.$message.success(`${this.pubMethod(1, 2)}`)
    await this.$message.success(`${this.getNum(2)}`)
    await this.$message.success(`${this.optionalName('lgg', 'ice bear')}`)
    await this.$message.success(`${this.defaultName(undefined, 'ice bear')}`)
    await this.$message.success(
      `${this.listName('grizz', 'panda', 'iceBear', 'lgg')}`
    )
    await this.$message.success(`${this.printLabel({ label: 'size is 10' })}`)
    alert(this.output)
    alert(this.outputTwo)
  }

  public pubMethod: (one: number, two: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y
  }

  public getNum (x: number): number {
    return x * x
  }
  public optionalName (firstName: string, lastName?: string) {
    if (lastName) {
      return firstName + '' + lastName
    } else {
      return firstName
    }
  }
  public defaultName (firstName = 'Lgg', lastName: string) {
    return firstName + '' + lastName
  }
  public listName (firstName: string, ...restName: string[]) {
    return firstName + ' ' + restName.join(' ')
  }

  public printLabel (labelObj: labelValue): void {
    console.log(labelObj.label)
  }

  public identity<T> (arg: T): T {
    console.log('输入：' + arg)
    return arg
  }
}
</script>
