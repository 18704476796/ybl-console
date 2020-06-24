// 欢迎页面接口函数
import {PERSON_CENTER} from '../interface.js' // 接口调用文件
export default {
  async getWelcomeInfo (_this) { // 登录接口函数
    const formData = { // 请求数据
      menuId: 8, // 初始化显示主页id
      roleId: _this.$store.state.radioRole // 初始化显示主页id
    }
    let res = await PERSON_CENTER(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.department = data.department
      _this.job = data.job
      _this.nickName = data.nickName
      _this.realName = data.realName
      _this.userName = data.userName
      _this.roleName = data.roleName
      _this.currentLoginTime = data.currentLoginTime
      _this.lastLoginTime = data.lastLoginTime
    }
  }
}
