<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <el-select
        v-model="statusValue"
        size="small"
        placeholder="请选择"
        class="statusSelect"
        @change="changeStatusValue">
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="right">
      <el-button type="primary" icon="el-icon-user" @click="welfareAdd">新建福利</el-button>
      <el-button type="primary" icon="el-icon-user" @click="payAdd">新建薪资</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {
      statusOptions: [{
        value: '',
        label: '全部类型'
      }, {
        value: '1',
        label: '福利'
      }, {
        value: '2',
        label: '薪资'
      }],
      statusValue: ''
    }
  },
  methods: {
    changeStatusValue () { // 类型筛选函数
      this.$emit('changeStatusValue', this.statusValue)
    },
    welfareAdd () { // 新增福利
      this.$emit('welfareAdd')
    },
    payAdd () { // 新增薪资
      this.$emit('payAdd')
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
