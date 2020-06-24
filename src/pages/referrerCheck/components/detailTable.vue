<template>
  <el-table
    :data="companyRecruitPositionList"
    style="width: 100%"
    border
    class="box">
    <el-table-column
      label="序号"
      width="50"
      type="index">
    </el-table-column>
    <el-table-column prop="positionName" label="岗位名称"></el-table-column>
    <el-table-column prop="industryName" label="所属行业"></el-table-column>
    <el-table-column prop="candidateName" label="候选人"></el-table-column>
    <el-table-column prop="rewardMoney" label="薪资 (元)">
      <template slot-scope="scope">
        <span>{{scope.row.startSalary}} -- {{scope.row.endSalary}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="recommenderMone" label="赏金 (元)"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'DetailTables',
  props: {
    companyRecruitPositionList: Array,
    tableHeight: Number
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .inputSort
    width: 30px
  .inputSort >>> input
    padding: 0 10px
    height: 30px
    line-height: 30px
  .inputAll >>> input
    padding: 0 10px
    height: 30px
    line-height: 30px
  .el-button
    padding: 8px
    font-size: 12px
  .box >>> td, .box >>> th
    padding: 6px 0
  .box >>> .cell
    white-space nowrap
</style>
