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
    <el-table-column prop="locked" label="状态" width="80">
      <el-switch
        slot-scope="scope"
        v-model="scope.row.locked"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="1"
        :inactive-value="0"
        active-text="启用"
        inactive-text="锁定"
        @change="onlocked(scope.row.locked, scope.row.userId)">
      </el-switch>
    </el-table-column>
    <el-table-column prop="userName" label="企业帐号"></el-table-column>
    <el-table-column prop="enterpriseName" label="企业名称"></el-table-column>
    <el-table-column prop="industryName" label="所属行业"></el-table-column>
    <el-table-column prop="comapnyType" label="企业类型"></el-table-column>
    <el-table-column prop="legalPerson" label="企业法人"></el-table-column>
    <el-table-column prop="legalPersonPhone" label="法人电话"></el-table-column>
    <el-table-column prop="createTime" label="注册时间" width="160"></el-table-column>
    <el-table-column prop="userAuthStatus" label="审核状态">
      <template slot-scope="scope">
        <span v-if = "scope.row.userAuthStatus == 0">未提交审核资料 </span>
        <span v-if = "scope.row.userAuthStatus == -1">已提交未审核</span>
        <span v-if = "scope.row.userAuthStatus == 1">审核通过</span>
        <span v-if = "scope.row.userAuthStatus == -2">审核失败</span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作" width="140">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row, scope.row.email)">编辑</el-button>
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
    onlocked (locked, id) {
      this.$emit('onlocked', locked, id)
    },
    edit (obj, email) { // 编辑
      this.$emit('edit', obj, email)
    },
    // deleteUser (userName) {
    //   this.$emit('deleteUser', userName)
    // },
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
