<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column
      label="序号"
      width="60"
      type="index">
    </el-table-column>
    <!-- <el-table-column prop="id" label="编号"></el-table-column> -->
    <el-table-column prop="name" label="岗位名称"></el-table-column>
    <el-table-column prop="positionName" label="岗位分类"></el-table-column>
    <el-table-column prop="positionCondition" label="经验要求"></el-table-column>
    <el-table-column prop="recruitNum" label="需求数量(个)"></el-table-column>
    <el-table-column prop="" label="薪资待遇(元)">
      <template slot-scope="scope">
        <span>{{ scope.row.startSalary }} - {{ scope.row.endSalary }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="enterpriseName" label="所属公司"></el-table-column>
    <el-table-column prop="" label="操作">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-view" @click="lookUser(scope.row.id)">查看</el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    tableData: Array,
    tableHeight: Number
  },
  data () {
    return {
    }
  },
  methods: {
    onlocked (locked, userName) {
      this.$emit('onlocked', locked, userName)
    },
    lookUser (id) { // 查看详情
      this.$emit('lookUser', id)
      console.log(1)
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
