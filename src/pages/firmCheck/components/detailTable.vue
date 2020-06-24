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
    <el-table-column prop="name" label="岗位名称"></el-table-column>
    <el-table-column prop="industryName" label="岗位分类"></el-table-column>
    <el-table-column prop="educationCondition" label="学历要求"></el-table-column>
    <el-table-column prop="positionCondition" label="工作经验要求"></el-table-column>
    <el-table-column prop="ecruitNum" label="需求数量(个)"></el-table-column>
    <el-table-column prop="" label="薪资待遇(元)">
      <template slot-scope="scope">
        <span>{{scope.row.startSalary}} - {{scope.row.endSalary}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-view" @click="lookUser(scope.row)">查看</el-button>
        </el-button-group>
      </template>
    </el-table-column>
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
    lookUser (obj) { // 查看详情
      this.$emit('lookdetil', obj)
    }
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
