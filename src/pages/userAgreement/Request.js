import UserAgreementFn from '@/apis/interface-fn/UserAgreementFn.js' // 接口调用文件
export default {
  getInfo (_this) { // 用户协议初始化
    let formData = {
    }
    UserAgreementFn.findSysUserList(_this, formData)
  },
  onSubmit (_this) { // 新增编辑用户协议函数
    let formData = {
      userAgreement: _this.formEdit.userAgreement
    }
    UserAgreementFn.saveOrUpdateSysUser(_this, formData)
  }
}
