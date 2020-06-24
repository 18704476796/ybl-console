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
    <el-table-column prop="name" label="广告名称"></el-table-column>
    <el-table-column prop="advertisingLocation" label="广告位置">
      <template slot-scope="scope">
        <span v-show="scope.row.advertisingLocation==1">app首页活动</span>
        <span v-show="scope.row.advertisingLocation==2">赏金活动</span>
      </template>
    </el-table-column>
    <el-table-column prop="pictureUrl" label="广告图片">
      <template slot-scope="scope">
        <img :src = 'api + scope.row.pictureUrl' preview='0' preview-text="描述" />
      </template>
    </el-table-column>
    <el-table-column prop="startTime" label="开始时间"></el-table-column>
    <el-table-column prop="endTime" label="到期时间"></el-table-column>
    <el-table-column prop="staues" label="上线/下线">
      <template slot-scope="scope">
        <span v-show="scope.row.staues==0">下线</span>
        <span v-show="scope.row.staues==1">上线</span>
      </template>
    </el-table-column>
    <el-table-column prop="browseVolume" label="点击次数(次)"></el-table-column>
    <el-table-column prop="conversion" label="转发(次)"></el-table-column>
    <el-table-column prop="type" label="活动类型">
      <template slot-scope="scope">
        <span v-show="scope.row.type==1">赏金活动</span>
        <span v-show="scope.row.type==2">岗位首页活动</span>
      </template>
    </el-table-column>
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
    return {
      api: this.$store.state.httpUrl
    }
  },
  methods: {
    edit (obj) { // 编辑
      this.$emit('edit', obj)
    },
    deleteUser (id) {
      this.$emit('deleteUser', id)
    },
    lookUser (obj) { // 查看实名认证详情
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
  .box >>> img
    width 100%
</style>
