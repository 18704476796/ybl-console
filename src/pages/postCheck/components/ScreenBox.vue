<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <div class="searchDate searchDateInpt">
        <template>
          <span>岗位名称：</span>
          <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="postName"
            @blur="postNameSearch">
          </el-input>
        </template>
      </div>
      <div class="searchDate">
        <template>
          <span>岗位分类:</span>
          <el-select
            v-model="postClassSeach"
            @change='postClassSeachs'
            @focus="refreshPostList"
            filterable
            clearable
            placeholder="请选择"
          >
            <el-option
              v-for="item in postClass"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </template>
      </div>
      <div class="searchDate">
        <template>
          <span>所属公司:</span>
          <el-select
          v-model="firmListSeach"
          @change='firmListSeachs'
          @focus="refreshFirmList"
          filterable
          clearable
          placeholder="请选择"
          >
            <el-option
              v-for="item in firmList"
              :key="item.id"
              :label="item.enterpriseName"
              :value="item.enterpriseName"
            >
            </el-option>
          </el-select>
        </template>
      </div>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  props: {
    firmList: Array,
    postClass: Array
  },
  data () {
    return {
      postName: '', // 岗位名称
      postClassSeach: [],
      firmListSeach: ''
    }
  },
  methods: {
    postNameSearch () { // 岗位名称搜索
      this.$emit('postNameSearch', this.postName)
    },
    postClassSeachs () { // 岗位分类查询
      this.$emit('postClassSeachs', this.postClassSeach)
    },
    firmListSeachs () { // 所属公司查询
      this.$emit('firmListSeachs', this.firmListSeach)
    },
    refreshPostList () { // 刷新岗位列表
      this.$emit('refreshPostList')
    },
    refreshFirmList () { // 刷新公司列表
      this.$emit('refreshFirmList')
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
      display flex
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
</style>
