<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    :height="tableHeight + 'px'"
    class="box"
    :tree-props="{children: 'childItems', hasChildren: 'hasChildren'}">
    <!-- <el-table-column
      label="序号"
      width="50"
      type="index">
    </el-table-column> -->
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="type" label="类型">
      <template slot-scope="scope">
        <span v-if = "scope.row.type == 1">行业</span>
        <span v-if = "scope.row.type == 2">岗位</span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="状态">
      <template slot-scope="scope">
        <span v-if = "scope.row.status == 0">未发布</span>
        <span v-if = "scope.row.status == 1">已发布</span>
      </template>
    </el-table-column>
    <!-- <el-table-column prop="classifyRank" label="分类级别"></el-table-column> -->
    <!-- <el-table-column prop="classifySort" label="排序"></el-table-column> -->
    <el-table-column prop="keyWord" label="关键词"></el-table-column>
    <el-table-column prop="classifyDescribe" label="分类描述"></el-table-column>
    <el-table-column prop="" label="操作" width="220">
      <template slot-scope="scope">
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.id)">删除</el-button>
          <el-button v-show = "scope.row.parentId == 0" type="primary" icon="el-icon-plus" @click="addChildList(scope.row.id)">添加岗位</el-button>
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
    onlocked (locked, userName) {
      this.$emit('onlocked', locked, userName)
    },
    edit (obj) {
      this.$emit('edit', obj)
    },
    deleteUser (id) {
      this.$emit('deleteUser', id)
    },
    addChildList (id) { // 添加岗位
      this.$emit('addChildList', id)
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
