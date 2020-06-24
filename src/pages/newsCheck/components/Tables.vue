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
    <el-table-column prop="title" label="消息标题"></el-table-column>
    <el-table-column prop="releaseTime" label="发布时间"></el-table-column>
    <el-table-column prop="releaseUser" label="发布人员"></el-table-column>
    <el-table-column prop="receiveRole" label="接收角色"></el-table-column>
    <el-table-column prop="gotoNumber" label="接收人数(人)">
    </el-table-column>
    <el-table-column prop="" label="操作" width="200px">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-view" @click="lookUser(scope.row)">查看</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.id)">删除</el-button>
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
    deleteUser (id) {
      this.$emit('deleteUser', id)
    },
    lookUser (obj) { // 查看详情
      this.$emit('lookUser', obj)
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
