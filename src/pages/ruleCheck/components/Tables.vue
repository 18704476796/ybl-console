<template>
  <el-table
    :data="tableData"
    style="width: 60%"
    row-key="id"
    border
    class="box">
    <el-table-column
      label="序号"
      width="60"
      type="index">
    </el-table-column>
    <el-table-column prop="status" label="状态" width="80">
      <el-switch
        slot-scope="scope"
        v-model="scope.row.status"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="1"
        :inactive-value="0"
        active-text="显示"
        inactive-text="隐藏"
        disabled>
      </el-switch>
    </el-table-column>
    <el-table-column prop="rewardMoney" label="梯度值(元)"></el-table-column>
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
