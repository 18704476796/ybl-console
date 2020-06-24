<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        size="small"
        class="searchInput"
        style="position: relative;top: 2px;"
        @blur="search">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="人才帐号" value="1"></el-option>
          <el-option label="人才名称" value="2"></el-option>
          <el-option label="工作地点" value="3"></el-option>
          <el-option label="岗位名称" value="4"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <!-- 工作状态查询 -->
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
      <!-- <el-badge :value="200" :max="99" class="item">
        <el-button size="small">短信群发</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">APP推送</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">设置标签</el-button>
      </el-badge> -->
      <el-select
        style="margin-left: 30px;"
        v-model="sortordValue"
        size="small"
        placeholder="请选择"
        class="statusSelect"
        @change="changeSortorValue">
        <el-option
          v-for="item in sortordOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  props: {
  },
  data () {
    return {
      statusOptions: [{ // 工作状态
        value: null,
        label: '工作状态'
      }, {
        value: 1,
        label: '求职'
      }, {
        value: 0,
        label: '在职'
      }, {
        value: 2,
        label: '离职'
      }],
      sortordOptions: [{ // 排序方式
        value: null,
        label: '排序方式'
      }, {
        value: 1,
        label: '生日'
      }, {
        value: 2,
        label: '薪资'
      }],
      sortordValue: null, // 排序方式值
      postName: '', // 岗位名称
      statusValue: null, // 工作状态状态
      searchType: '1', // 搜索框类型值
      searchValue: '' // 搜索框的值
    }
  },
  methods: {
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    },
    changeStatusValue () { // 工作状态查询
      this.$emit('changeStatusValue', this.statusValue)
    },
    changeSortorValue () { // 排序方式
      this.$emit('changeSortorValue', this.sortordValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .screenBox
    background: #F5F7FA
    border-radius: 3px
    padding: 6px
    display flex
    justify-content space-between
    .right
      flex 1
      display flex
      justify-content flex-end
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
      display flex
      margin-right 25px
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
.searchDateInpt>>>.el-input
  width 72%
.item
  margin-left 30px
</style>
