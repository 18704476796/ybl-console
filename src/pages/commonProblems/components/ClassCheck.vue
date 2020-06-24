<!-- 分类管理 -->
<template>
  <div class="wapper">
    <div class="right">
      <el-button type="primary" icon="el-icon-plus" @click="addClassify">新建问题分类</el-button>
    </div>
    <el-table
      :data="classTableData"
      style="width: 100%"
      border
      class="box">
      <el-table-column prop="id" label="编号" width="100"></el-table-column>
      <el-table-column prop="classifyText" label="分类名称"></el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
            <el-button type="primary" icon="el-icon-delete" @click="deleteUser(scope.row.id)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ClassCheck',
  props: {
    classTableData: Array,
    tableHeight: Number
  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    addClassify () {
      this.$emit('addClassify')
    },
    edit (obj) { // 编辑
      this.$emit('classEdit', obj)
    },
    deleteUser (id) {
      this.$emit('classDelete', id)
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
  .right
    text-align right
    margin-bottom 20px
  .wapper
    padding 0 20px
    overflow scroll
  .backgrounds
    position relative
    top 0
    left 0
    right 0
    bottom 0
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    z-index 9999
</style>
