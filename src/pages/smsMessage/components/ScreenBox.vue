<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <!-- <el-input
        placeholder="请输入内容"
        v-model="searchValue"
        size="small"
        class="searchInput"
        style="position: relative;top: 2px;"
        @blur="search">
        <el-select v-model="searchType" slot="prepend" placeholder="请选择">
          <el-option label="消息标题" value="1"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input> -->
      <div class="searchDate">
        <span>发布时间</span>
        <el-date-picker
          v-model="value1"
          format="yyyy - MM - dd"
          value-format="yyyy-MM-dd"
          placeholder="选择日期时间"
          @change="changeDate">
        </el-date-picker>
      </div>
      <div class="searchDate">
        <span>发布人</span>
        <el-select
          v-model="checkStatus"
          size="small"
          placeholder="请选择"
          class="statusSelect checkStatus"
          clearable
          @change="changeCheckStatus">
          <el-option
            v-for="item in releaseUserList"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="right">
      <el-button type="primary" @click='sendMessage'>发送短信</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  props: {
    releaseUserList: Array
  },
  data () {
    return {
      checkStatus: '', // 发布人
      searchType: '1', // 搜索框类型值
      searchValue: '', // 消息标题
      value1: '' // 发布时间
    }
  },
  methods: {
    changeCheckStatus () { // 发布人
      this.$emit('changeCheckStatus', this.checkStatus)
    },
    changeDate () { // 发布时间查询
      this.$emit('changeDate', this.value1)
    },
    // search () { // 消息标题查询
    //   this.$emit('search', this.searchType, this.searchValue)
    // },
    sendMessage () { // 发送短信
      this.$emit('sendMessage')
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
