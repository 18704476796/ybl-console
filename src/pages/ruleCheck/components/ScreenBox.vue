<template>
  <div class="screenBox hyb_clear">
    <div class="right">
      <el-button type="primary" icon="el-icon-user" @click="welfareAdd">新建梯度值</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {}
  },
  methods: {
    welfareAdd () { // 新增梯度值
      this.$emit('welfareAdd')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .floatLeft
    float: left
  .screenBox
    background: #F5F7FA
    border-radius: 3px
    padding: 6px
    margin-bottom: 10px
    .left
      float: left
    .right
      float: right
    button
      font-size: 12px
      padding: 8px 10px
    .statusSelect
      width: 110px
      margin-right: 10px
    .searchInput
      width: 200px
    .searchInput >>> .el-input-group__prepend
      width: 22px
    .searchInput >>> .el-input__inner
      padding: 0 6px
</style>
