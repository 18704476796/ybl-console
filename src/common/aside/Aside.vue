<!-- 左侧导航组件 -->
<template>
  <el-menu
    background-color="#303133"
    text-color="#C0C4CC"
    active-text-color="#C0C4CC"
    class="el-menu"
    :collapse= "collapse"
  >
  <navs :asideData="asideData" :unreadCount='unreadCount' @asideClick="asideNavData"></navs>
  </el-menu>
</template>
<!--  :collapse="false" -->
<script>
import Navs from './components/Navs'
export default {
  name: 'Aside',
  components: {
    Navs
  },
  computed: { // 计算属性
    collapse: function () {
      if (parseInt(this.$store.state.navTs.val) === 1) {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    asideData: Array,
    unreadCount: Number
  },
  methods: {
    asideNavData (asideNavData) {
      this.$emit('asideClick', asideNavData)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-menu--collapse >>> .el-menu-item span, .el-menu--collapse >>> .el-submenu>.el-submenu__title span
    height: 0
    width: 0
    overflow: hidden
    visibility: hidden
    display: inline-block
  .el-menu--collapse >>> .el-menu-item .el-submenu__icon-arrow, .el-menu--collapse >>> .el-submenu>.el-submenu__title .el-submenu__icon-arrow
    display: none;
  .el-menu
    border: none
  .el-menu:not(.el-menu--collapse) {
    width: 200px
  }
  ul
    color: #fff
</style>
