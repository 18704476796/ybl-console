// 用户协议接口函数
import {SAVE_ANDUPDATE_AGREEMENT, LOGIN_IMG, SAVE_AND_UPDATE_REMINDER} from '../interface.js' // 接口调用文件
export default {
  async saveOrUpdateSysUser (_this, formData) { // 新增或修改用户协议接口
    let res = await SAVE_ANDUPDATE_AGREEMENT(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      _this.editDis = false
      _this.disabled = true
      _this.editDisable = false
      this.findSysUserList(_this)
    }
  },
  async findSysUserList (_this, formData) { // 用户协议初始化接口
    let res = await LOGIN_IMG(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.formEdit = data.company
      _this.editDisable = false
    }
  },
  async saveOrUpdateReminder (_this, formData) { // 新增或修改温馨提示接口
    let res = await SAVE_AND_UPDATE_REMINDER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      _this.editDis = false
      _this.disabled = true
      this.findSysUserList(_this)
    }
  }
}
