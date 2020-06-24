<template>
  <div class="screenBox hyb_clear">
    平台信息
  </div>
</template>

<script>
export default {
  name: 'ScreenBox',
  data () {
    return {
      statusOptions: [{
        value: 'null',
        label: '全部状态'
      }, {
        value: '1',
        label: '启用状态'
      }, {
        value: '0',
        label: '锁定状态'
      }],
      statusValue: 'null',
      searchType: '1', // 搜索框类型值
      searchValue: '' // 搜索框的值
    }
  },
  methods: {
    changeStatusValue (locked) { // 状态筛选函数
      let Val = null
      if (locked !== 'null') {
        Val = locked
      }
      this.$emit('changeStatusValue', Val)
    },
    search () { // 搜索筛选
      this.$emit('search', this.searchType, this.searchValue)
    },
    passengerAdd () { // 新增乘客用户
      this.$emit('passengerAdd')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .screenBox
    background: #F5F7FA
    border-radius: 3px
    padding: 15px
    margin-bottom: 10px
</style>
