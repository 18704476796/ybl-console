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
      width="50"
      type="index">
    </el-table-column>
    <!-- <el-table-column prop="id" label="企业ID" width="80"></el-table-column> -->
    <el-table-column prop="userName" label="企业帐号"></el-table-column>
    <el-table-column prop="enterpriseName" label="企业名称"></el-table-column>
    <el-table-column prop="industryName" label="所属行业"></el-table-column>
    <el-table-column prop="comapnyNum" label="企业规模"></el-table-column>
    <el-table-column prop="comapnyType" label="企业类型"></el-table-column>
    <el-table-column prop="createTime" label="注册时间" width="160"></el-table-column>
    <el-table-column prop="" label="操作" width="80">
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
    return {}
  },
  methods: {
    lookUser (id) { // 查看实名认证详情
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
</style>
