<!-- 筛选查询 -->
<template>
  <div class="screenBox">
    <el-collapse>
      <el-collapse-item title="筛选查询" name="1">
        <div class="left">
          <!-- 人才状态 -->
          <el-select
            v-model="talentsValue"
            size="small"
            placeholder="请选择"
            class="statusSelect"
            @change="changeTalentsValue">
            <el-option
              v-for="item in talentsOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- 性别查询 -->
          <el-select
            v-model="sexValue"
            size="small"
            placeholder="请选择"
            class="statusSelect"
            @change="changeSexValue">
            <el-option
              v-for="item in sexOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!-- 薪资范围查询 -->
          <template>
            <span>薪资范围:</span>
            <el-select
              v-model="payValue"
              size="small"
              placeholder="请选择"
              class="statusSelect"
              @change="changePayValue">
              <el-option
                v-for="item in payOptions"
                :key="item.label"
                :label="item.value"
                :value="item.label">
              </el-option>
            </el-select>
          </template>
          <!-- 行业类别 -->
          <template>
            <span>行业类别:</span>
            <el-cascader
              size="small"
              v-model="postClassSeach"
              placeholder="试试搜索：互联网"
              :props="{ value: 'id', label: 'name', children: 'childItems', checkStrictly: true}"
              :options="postClass"
              @change='postClassSeachs'
               clearable>
            </el-cascader>
          </template>
          <!-- 生日查询 -->
          <div class="block" style="margin-top: 10px;">
            <span>出生日期：</span>
            <el-date-picker
              size="small"
              v-model="ageValue"
              type="daterange"
              format="yyyy - MM - dd"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="changeAgeValue">
            </el-date-picker>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'ScreenBoxHidden',
  props: {
    postClass: Array,
    payOptions: Array
  },
  mounted () {
  },
  data () {
    return {
      talentsValue: 'null', // 人才状态
      talentsOptions: [{ // 人才状态
        value: 'null',
        label: '人才状态'
      }, {
        value: '0',
        label: '未被推荐'
      }, {
        value: '1',
        label: '正在求职'
      }, {
        value: '2',
        label: '已成功入职'
      }],
      sexValue: 'null', // 性别
      sexOptions: [{ // 性别
        value: 'null',
        label: '全部性别'
      }, {
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }, {
        value: '0',
        label: '保密'
      }],
      ageValue: [], // 生日
      payValue: '', // 薪资范围
      options: [],
      postClassSeach: [] // 期望行业类别
    }
  },
  methods: {
    changeTalentsValue () { // 人才状态
    },
    changeSexValue () { // 性别
      this.$emit('changeSexValue', this.sexValue)
    },
    changeAgeValue () { // 年龄
      this.$emit('changeAgeValue', this.ageValue)
      console.log(this.ageValue)
    },
    changePayValue () { // 薪资范围
      this.$emit('changePayValue', this.payValue)
    },
    postClassSeachs () { // 岗位分类查询
      this.$emit('postClassSeachs', this.postClassSeach)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .screenBox>>>.el-collapse-item__header
    height 35px
    line-height 35px
  .screenBox
    background: #F5F7FA
    border-radius: 3px
    padding: 6px
    button
      font-size: 12px
      padding: 8px 10px
    .statusSelect
      width: 110px
      margin-right: 10px
    .checkStatus
      width: 130px
    .searchInput
      width: 260px
    .searchInput >>> .el-input-group__prepend
      width: 50px
    .searchInput >>> .el-input__inner
      padding: 0 6px
.searchDate
      display flex
      margin-right 25px
      line-height 32px
      span
        margin-right 5px
        color #5d5b5b
        font-size 14px
      .el-date-editor.el-input, .el-date-editor.el-input__inner
        width 160px
.searchDate>>>.el-input__inner
  height 32px !important
  line-height 32px !important
.searchDate>>>.el-input__icon
  height 32px !important
  line-height 32px !important
.searchDateInpt>>>.el-input
  width 72%
</style>
