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
    <el-table-column prop="locked" label="账号状态" width="80">
      <template slot-scope="scope">
        <span v-if = "scope.row.locked == 1">启用</span>
        <span v-if = "scope.row.locked == 0">锁定</span>
        <span v-if = "scope.row.locked == 2">注销</span>
      </template>
    </el-table-column>
    <el-table-column prop="userName" label="帐号"></el-table-column>
    <el-table-column prop="realName" label="姓名" width="100"></el-table-column>
    <el-table-column prop="userSex" label="性别" width="80">
      <template slot-scope="scope">
        <span v-if = "scope.row.userSex == 0">保密 </span>
        <span v-if = "scope.row.userSex == 1">男</span>
        <span v-if = "scope.row.userSex == 2">女</span>
      </template>
    </el-table-column>
    <el-table-column prop="age" label="年龄" width="80"></el-table-column>
    <el-table-column prop="shareNum" label="分享次数(次)"></el-table-column>
    <el-table-column prop="recommenderSuccessNum" label="成功推荐人数(个)">
    </el-table-column>
    <el-table-column prop="enterpriseName" label="企业名称">
    </el-table-column>
    <el-table-column prop="userAuthStatus" label="审核状态">
      <template slot-scope="scope">
        <span v-if = "scope.row.userAuthStatus == 1">审核通过</span>
        <span v-if = "scope.row.userAuthStatus == -2">审核失败</span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作" width="80">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-view" @click="lookUser(scope.row.recommenderId)">查看</el-button>
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
