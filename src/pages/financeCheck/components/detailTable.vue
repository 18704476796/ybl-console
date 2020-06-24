<template>
  <el-table
    :data="financeFlowList"
    style="width: 100%"
    border
    class="box">
    <el-table-column
      label="序号"
      width="50"
      type="index">
    </el-table-column>
    <el-table-column prop="createTime" label="操作时间"></el-table-column>
    <el-table-column prop="receivablesAccount" label="收款账号"></el-table-column>
    <el-table-column prop="paymentAccount" label="付款账号"></el-table-column>
    <el-table-column prop="type" label="类型">
      <template slot-scope="scope">
        <span v-if='scope.row.type == 1'>支出</span>
        <span v-if='scope.row.type == 2'>收入</span>
      </template>
    </el-table-column>
    <el-table-column prop="money" label="变动金额(元)"></el-table-column>
    <el-table-column prop="isPay" label="状态">
      <template slot-scope="scope">
        <span v-if='scope.row.isPay == 0'>未完成</span>
        <span v-if='scope.row.isPay == 1'>完成</span>
      </template>
    </el-table-column>
    <el-table-column prop="serialNum" label="流水号"></el-table-column>
    <el-table-column prop="transactionId" label="订单号"></el-table-column>
    <el-table-column prop="remarks" label="备注"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'DetailTables',
  props: {
    financeFlowList: Array,
    tableHeight: Number
  },
  data () {
    return {
    }
  },
  methods: {
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
