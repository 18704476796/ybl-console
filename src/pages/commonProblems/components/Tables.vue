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
    <el-table-column prop="title" label="问题标题"></el-table-column>
    <el-table-column prop="classifyText" label="问题分类"></el-table-column>
    <el-table-column prop="status" label="是否发布">
      <template slot-scope="scope">
        <span v-show="scope.row.status == 0">未发布</span>
        <span v-show="scope.row.status == 1">已发布</span>
      </template>
    </el-table-column>
    <el-table-column prop="createTime" label="发布时间"></el-table-column>
    <el-table-column prop="browseVolume" label="浏览量(次)"></el-table-column>
    <el-table-column prop="" label="操作" width="200">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.id)">删除</el-button>
          <el-button type="primary" icon="el-icon-view" @click="lookUser(scope.row)">查看</el-button>
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
    edit (obj) { // 编辑
      this.$emit('edit', obj)
    },
    deleteUser (userName) {
      this.$emit('deleteUser', userName)
    },
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
  .box >>> .cell
    white-space nowrap
</style>
