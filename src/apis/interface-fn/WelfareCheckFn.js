// 福利管理接口
import {FIND_WELFARE_LIST_TYPE, SAVE_OR_UPD_WELFARE, DELET_WELFARE_BTID} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 企业管理初始化接口
    let res = await FIND_WELFARE_LIST_TYPE(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.findWelfareList
    }
  },
  async saveOrUpdateSysUser (_this, formData) { // 修改添加福利薪资接口
    let res = await SAVE_OR_UPD_WELFARE(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        showClose: true,
        message: '操作成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  },
  async deleteSysUser (_this, formData) { // 删除用户信息接口
    let res = await DELET_WELFARE_BTID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  }
}
