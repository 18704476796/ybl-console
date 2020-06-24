<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    id='out-table'
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column
      label="序号"
      width="50"
      type="index">
    </el-table-column>
    <el-table-column prop="enterpriseName" label="公司名称"></el-table-column>
    <el-table-column prop="changeMoney" label="保证金余额(元)"></el-table-column>
    <el-table-column prop="totalMoney" label="总额(元)"></el-table-column>
    <el-table-column prop="type" label="类型" width="100">
      <template slot-scope="scope">
        <span v-if="scope.row.type==1">企业</span>
        <span v-if="scope.row.type==2">推荐人</span>
        <span v-if="scope.row.type==3">候选人</span>
        <span v-if="scope.row.type==4">平台</span>
      </template>
    </el-table-column>
    <el-table-column prop="contacts" label="联系人" width="100"></el-table-column>
    <el-table-column prop="contactPhone" label="联系方式"></el-table-column>
    <el-table-column prop="staues" label="状态" width="100">
      <template slot-scope="scope">
        <span v-if="scope.row.staues==0">已欠款</span>
        <span v-if="scope.row.staues==1">正常</span>
        <span v-if="scope.row.staues==2">注销</span>
      </template>
    </el-table-column>
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
    return {
    }
  },
  methods: {
    onlocked (locked, userName) {
      this.$emit('onlocked', locked, userName)
    },
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
  // .box >>> .cell
  //   white-space nowrap
</style>
