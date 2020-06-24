<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <el-select
        v-model="checkStatus"
        size="small"
        placeholder="请选择"
        class="statusSelect"
        @change="changeCheckStatus">
        <el-option
          v-for="item in checkStatusOptions"
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
          <el-option label="名称" value="1"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <div class="right">
      <el-button type="primary" icon="el-icon-plus" @click="driverAdd">新建行业</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {
      statusOptions: [{ // 类型
        value: 'null',
        label: '全部类型'
      }, {
        value: '1',
        label: '行业'
      }, {
        value: '2',
        label: '岗位'
      }],
      checkStatusOptions: [{ // 发布状态
        value: 'null',
        label: '全部状态'
      }, {
        value: '0',
        label: '未发布'
      }, {
        value: '1',
        label: '已发布'
      }],
      createTime: '', // 搜索日期
      statusValue: 'null', // 类型
      checkStatus: 'null', // 发布状态
      searchType: '1', // 搜索框类型值
      searchValue: '' // 搜索框的值
    }
  },
  methods: {
    changeStatusValue (locked) { // 类型
      let Val = null
      if (locked !== 'null') {
        Val = locked
      }
      this.$emit('changeStatusValue', Val)
    },
    changeCheckStatus (locked) { // 发布状态
      let Val = null
      if (locked !== 'null') {
        Val = locked
      }
      this.$emit('changeCheckStatus', Val)
    },
    changeDate (val) {
      this.$emit('changeDate', val)
    },
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    },
    driverAdd () { // 新增司机用户
      this.$emit('driverAdd')
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
      width: 32px
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
