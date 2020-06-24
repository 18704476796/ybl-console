<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    border
    :height="tableHeight + 'px'"
    class="box">
    <el-table-column
      label="序号"
      type="index"
      width="55">
    </el-table-column>
    <el-table-column prop="realName" label="候选人名称"></el-table-column>
    <el-table-column prop="requirements" label="性别" width="60px">
      <template slot-scope="scope">
        <span v-show="scope.row.userSex == 0">保密</span>
        <span v-show="scope.row.userSex == 1">男</span>
        <span v-show="scope.row.userSex == 2">女</span>
      </template>
    </el-table-column>
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="expectSalary" label="期望薪资(元)"></el-table-column>
    <el-table-column prop="workingYears" label="工作年限"></el-table-column>
    <el-table-column prop="enterpriseName" label="应聘企业"></el-table-column>
    <el-table-column prop="positionName" label="求职岗位"></el-table-column>
    <el-table-column prop="recommenderName" label="推荐人"></el-table-column>
    <el-table-column prop="expectAddr" label="求职匹配度"></el-table-column>
    <el-table-column prop="recruitStatus" label="求职进度">
      <template slot-scope="scope">
        <span v-show="scope.row.recruitStatus == 0">获取岗位</span>
        <span v-show="scope.row.recruitStatus == 1">完善简历</span>
        <span v-show="scope.row.recruitStatus == 2">接受岗位</span>
        <span v-show="scope.row.recruitStatus == 3">拒绝岗位</span>
        <span v-show="scope.row.recruitStatus == 4">企业审评</span>
        <span v-show="scope.row.recruitStatus == 5">邀请面试</span>
        <span v-show="scope.row.recruitStatus == 6">未通过审评</span>
        <span v-show="scope.row.recruitStatus == 7">接受面试</span>
        <span v-show="scope.row.recruitStatus == 8">拒绝面试</span>
        <span v-show="scope.row.recruitStatus == 9">线下面试</span>
        <span v-show="scope.row.recruitStatus == 10">通过面试</span>
        <span v-show="scope.row.recruitStatus == 11">未通过面试</span>
        <span v-show="scope.row.recruitStatus == 12">邀请入职</span>
        <span v-show="scope.row.recruitStatus == 13">接受入职</span>
        <span v-show="scope.row.recruitStatus == 14">拒绝入职</span>
        <span v-show="scope.row.recruitStatus == 15">线下入职</span>
        <span v-show="scope.row.recruitStatus == 16">确认入职</span>
        <span v-show="scope.row.recruitStatus == 17">平台审核</span>
        <span v-show="scope.row.recruitStatus == 18">审核通过</span>
        <span v-show="scope.row.recruitStatus == 19">审核未通过</span>
        <span v-show="scope.row.recruitStatus == 20">获取赏金</span>
        <span v-show="scope.row.recruitStatus == 21">催办</span>
      </template>
    </el-table-column>
    <el-table-column prop="" label="操作">
      <template slot-scope="scope">
        <el-button-group>
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
    return {
    }
  },
  methods: {
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
