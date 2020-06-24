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
          <el-option label="候选人姓名" value="2"></el-option>
          <el-option label="岗位名称" value="4"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
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
      searchType: '2', // 搜索框类型值
      searchValue: '' // 候选人姓名
    }
  },
  methods: {
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .screenBox
    background: #F5F7FA
    border-radius: 3px
    padding: 6px
    padding-top 20px
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
      width: 60px
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
  margin-right 30px
</style>
