// home页面接口函数
import {NAV_ONE, NAV_LEFT_CONTENT} from '../interface.js' // 接口调用文件
export default {
  async getIndex (_this, formData) { // 登录成功初始化页眉接口函数
    let res = await NAV_ONE(formData)
    const data = res.data
    switch (data.status) {
      case '1000':
        _this.headerData = data.data
        let formData = {menuId: 8, roleId: _this.$store.state.radioRole}
        this.getMenuList(_this, formData)
        break
      case '1001':
      case '1002':
        _this.$message({showClose: true, message: '请重新登录', type: 'info'})
        _this.$store.dispatch('changeToken', '')
        _this.$store.dispatch('changeRadioRole', '')
        _this.$router.push('/login')
        break
      default:
        _this.$message({showClose: true, message: '登录页面图片未知错误，请联系网站管理员。', type: 'error'})
        break
    }
  },
  async getMenuList (_this, formData) { // 左侧导航及右侧内容接口
    let res = await NAV_LEFT_CONTENT(formData)
    const data = res.data
    switch (data.status) {
      case '1000':
        console.log(data)
        _this.asideData = data.data.asideHomeNav
        _this.contentData = data.data.userInfo
        _this.unreadCount = data.data.unreadCount
        break
      case '1001':
      case '1002':
        _this.$message({showClose: true, message: '请重新登录', type: 'info'})
        // _this.$store.dispatch('changeToken', data.token)
        _this.$router.push('/login')
        break
      case '1006':
        _this.$message({showClose: true, message: '请联系系统管理员，错误码：1006，地址：NAV_LEFT_CONTENT', type: 'error'})
        break
      default:
        _this.$message({showClose: true, message: '请联系系统管理员，错误码：未知，地址：NAV_LEFT_CONTENT', type: 'error'})
        break
    }
  }
}
