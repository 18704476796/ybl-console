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
      <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        size="small"
        class="searchInput"
        style="position: relative;top: 2px;"
        @blur="search">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="公司名称" value="1"></el-option>
          <el-option label="保证金余额" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <div class="right">
      <el-button @click="exportExcel">导出数据</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {
      statusOptions: [{ // 账户状态
        value: null,
        label: '全部状态'
      }, {
        value: 0,
        label: '已欠款'
      }, {
        value: 1,
        label: '正常'
      }, {
        value: 2,
        label: '注销'
      }],
      statusValue: null, // 状态
      searchType: '1', // 搜索框类型值
      searchValue: '' // 搜索框的值
    }
  },
  methods: {
    changeStatusValue () { // 状态筛选函数
      this.$emit('changeStatusValue', this.statusValue)
    },
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    },
    exportExcel () { // 导出数据
      this.$emit('exportExcel')
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
    .checkStatus
      width: 130px
    .searchInput
      width: 260px
    .searchInput >>> .el-input-group__prepend
      width: 50px
    .searchInput >>> .el-input__inner
      padding: 0 6px
.searchDate
      float right
      margin-left 25px
      line-height 32px
      span
        margin-right 5px
        color #5d5b5b
        font-size 14px
      .el-date-editor.el-input, .el-date-editor.el-input__inner
        width 160px
.searchDate>>>.el-input__inner
  height 32px !important
  line-height 32px !important
.searchDate>>>.el-input__icon
  height 32px !important
  line-height 32px !important
</style>
