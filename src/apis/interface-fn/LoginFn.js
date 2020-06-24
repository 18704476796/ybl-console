// 登录页面接口函数
import {LOGIN_IMG, LOGIN, VALIDATE_BEFORE_LOGIN, GO_PHONE_CODE} from '../interface.js' // 接口调用文件
export default {
  async loginImg (_this) { // 登录页面图片接口函数
    let res = await LOGIN_IMG()
    const data = res.data
    switch (data.status) {
      case '1000':
        _this.loginBack = data.backgroundUrl
        _this.loginLogo = data.logoUrl
        _this.$message({showClose: true, message: '欢迎进入亿伯乐平台管理系统。', type: 'success'})
        break
      default:
        _this.$message({showClose: true, message: '登录页面图片未知错误，请联系网站管理员。', type: 'error'})
        break
    }
  },
  async login (_this, formData) { // 登录接口函数
    let res = await LOGIN(formData)
    const data = res.data
    switch (data.status) {
      case '1000':
        _this.$store.dispatch('changeToken', data.token)
        _this.$store.dispatch('changeRadioRole', data.roleId)
        _this.$store.dispatch('changeHttpUrl', data.httpUrl)
        _this.$router.push('/')
        break
      case '1001':
        _this.$message({showClose: true, message: '您的验证码不正确，请重新输入', type: 'error'})
        break
      case '1002':
      case '1003':
        _this.$message({showClose: true, message: '您的帐号或密码不正确，请重新输入', type: 'error'})
        break
      case '1004':
        _this.$message({showClose: true, message: '该用户已锁定，请联系管理员', type: 'error'})
        break
      case '1005':
        _this.$message({showClose: true, message: '该用户已注销', type: 'error'})
        break
      case '1006':
        _this.$message({showClose: true, message: '帐号与密码为必填项', type: 'error'})
        break
      case '1008':
        _this.centerDialogVisible = true // 设置多角色弹窗打开
        _this.$message({showClose: true, message: '您有多角色，请选择登录角色', type: 'success'})
        _this.token = data.token
        _this.roleList = data.roleList
        break
      case '1009':
        _this.$message({showClose: true, message: '未绑定角色', type: 'error'})
        break
      case '1010':
        _this.$message({showClose: true, message: '非企业角色不能登录', type: 'error'})
        break
      case '1011':
        _this.$message({showClose: true, message: '非平台角色不能登录', type: 'error'})
        break
      default:
        _this.$message({showClose: true, message: '登录验证未知错误，请联系网站管理员。', type: 'error'})
        break
    }
  },
  async checkPhone (_this, formData) { // 验证码登录登录前校验
    let res = await VALIDATE_BEFORE_LOGIN(formData)
    const data = res.data
    switch (data.status) {
      case '1000':
        _this.codeDis = false
        _this.ruleForm.user = data.userName
        break
      case '1003':
        _this.codeDis = true
        _this.$message({showClose: true, message: '该用户不存在，请先注册', type: 'error'})
        break
      case '1006':
        _this.codeDis = true
        _this.$message({showClose: true, message: '必填参数为空', type: 'error'})
        break
      case '1010':
        _this.codeDis = true
        _this.$message({showClose: true, message: '非企业角色不能登录', type: 'error'})
        break
      case '1011':
        _this.codeDis = true
        _this.$message({showClose: true, message: '非平台角色不能登录', type: 'error'})
        break
      default:
        _this.codeDis = true
        _this.$message({showClose: true, message: '登录验证未知错误，请联系网站管理员。', type: 'error'})
        break
    }
  },
  async setCodeInfo (_this, formData) { // 发送验证码接口函数
    let res = await GO_PHONE_CODE(formData)
    const data = res.data
    switch (data.status) {
      case '1000':
        break
      default:
        _this.$message({showClose: true, message: '请输入手机号', type: 'error'})
        break
    }
  }
}
