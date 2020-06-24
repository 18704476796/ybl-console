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
    <el-table-column prop="title" label="福利标题"></el-table-column>
    <el-table-column prop="type" label="福利类型">
      <template slot-scope="scope">
        <span v-if = "scope.row.type == 1">福利 </span>
        <span v-if = "scope.row.type == 2">薪资</span>
      </template>
    </el-table-column>
    <el-table-column prop="startSalary" label="开始薪资(元)">
      <template slot-scope="scope">
        <span v-show="scope.row.startSalary == 0"> --- </span>
        <span v-show="scope.row.startSalary !== 0"> {{scope.row.startSalary}} </span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="结束薪资(元)">
      <template slot-scope="scope">
        <span v-show="scope.row.endSalary == 0"> --- </span>
        <span v-show="scope.row.endSalary !== 0"> {{scope.row.endSalary}} </span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作" width="200">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
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
  methods: {
    onlocked (locked, userName) {
      this.$emit('onlocked', locked, userName)
    },
    edit (obj) {
      this.$emit('edit', obj)
    },
    deleteUser (id) {
      this.$emit('deleteUser', id)
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
