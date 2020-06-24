<template>
  <div>
    <el-submenu v-for="item of asideData" :key="item.id" v-if="menuList(item.menuList)">
      <template slot="title">
        <i class="iconfont" v-html="item.menuImgCode"></i>
        <span slot="title">{{item.tabName}}</span>
      </template>
      <navs :asideData="item.menuList"></navs>
    </el-submenu>
    <el-badge
      v-else
      class="item"
      :value="unreadCount"
      :max="99"
      :hidden='item.id!==58 || unreadCount == 0'>
      <el-menu-item @click="hrefUrlClick(item.tabName, item.menuUrl)">
        <i class="iconfont" v-html="item.menuImgCode"></i>
        <span slot="title">{{item.tabName}}</span>
      </el-menu-item>
    </el-badge>
  </div>
</template>

<script>
import Navs from './Navs'
export default {
  name: 'Navs',
  components: {
    Navs
  },
  props: {
    asideData: Array,
    unreadCount: Number
  },
  methods: {
    hrefUrlClick: function (_name, _url) {
      let asideNavData = {
        tabName: _name,
        menuUrl: _url
      }
      this.$emit('asideClick', asideNavData)
    },
    menuList (menuList) { // 判断是否含有子级
      if (menuList !== undefined && menuList.length > 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  width 100%
.item >>> .el-badge__content.is-fixed
  top 21px
  right 106px
</style>
