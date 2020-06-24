<template>
  <div class="screenBox hyb_clear">
    <div class="left">
      <div class="searchDate searchDateInpt">
        <span>广告名称：</span>
        <el-input
          placeholder="请输入名称"
          suffix-icon="el-icon-search"
          v-model="advertisingName"
          @blur="advertisingNameSearch">
        </el-input>
      </div>
      <div class="searchDate">
        <span>广告位置</span>
        <el-select
          v-model="advPosition"
          size="small"
          clearable
          placeholder="请选择"
          class="statusSelect checkStatus"
          @change="advPositionSearch">
          <el-option
            v-for="item in positionList"
            :key="item.lable"
            :label="item.value"
            :value="item.label">
          </el-option>
        </el-select>
      </div>
      <div class="searchDate">
        <span>到期时间</span>
        <el-date-picker
          v-model="createTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          @change="changeDate">
        </el-date-picker>
      </div>
    </div>
    <div class="right">
      <el-button type="primary" icon="el-icon-plus" @click="advAdd">新建广告</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  props: {
    positionList: Array
  },
  data () {
    return {
      advertisingName: '', // 广告名称
      advPosition: '', // 广告位置搜索
      createTime: '' // 搜索日期
    }
  },
  methods: {
    advertisingNameSearch () { // 广告名称搜索
      this.$emit('advertisingNameSearch', this.advertisingName)
    },
    advPositionSearch () { // 广告位置搜索
      this.$emit('advPositionSearch', this.advPosition)
    },
    changeDate () { // 到期时间搜索
      this.$emit('changeDate', this.createTime)
    },
    advAdd () { // 新增广告
      this.$emit('advAdd')
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
