<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column
      label="序号"
      width="50"
      type="index">
    </el-table-column>
    <!-- <el-table-column prop="userId" label="用户ID" width="80px"></el-table-column> -->
    <el-table-column prop="userName" label="用户账号"></el-table-column>
    <el-table-column prop="realName" label="人才名称"></el-table-column>
    <el-table-column prop="requirements" label="性别" width="60px">
      <template slot-scope="scope">
        <span v-show="scope.row.userSex == 0">保密</span>
        <span v-show="scope.row.userSex == 1">男</span>
        <span v-show="scope.row.userSex == 2">女</span>
      </template>
    </el-table-column>
    <el-table-column prop="birthday" label="生日"></el-table-column>
    <el-table-column prop="expectSalary" label="期望薪资(元)"></el-table-column>
    <el-table-column prop="industryName" label="行业"></el-table-column>
    <el-table-column prop="expectAddr" label="所在地"></el-table-column>
    <el-table-column prop="status" label="工作状态">
      <template slot-scope="scope">
        <span v-show="scope.row.status == 0">在职</span>
        <span v-show="scope.row.status == 1">求职</span>
        <span v-show="scope.row.status == 2">离职</span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-view" @click="lookUser(scope.row.userResumeId)">查看</el-button>
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
    lookUser (id) { // 查看详情
      this.$emit('lookUser', id)
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
