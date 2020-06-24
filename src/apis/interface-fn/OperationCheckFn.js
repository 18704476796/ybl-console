// 活动管理接口函数
import {FIND_ACTIVITY_LIST, DELET_ACTIVITY_BYID} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 企业管理初始化接口
    let res = await FIND_ACTIVITY_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.logo_path = [{name: '', url: ''}]
      _this.tableData = data.activityList.data
      _this.totalRows = data.activityList.totalRows // 总条数
      _this.pageSize = data.activityList.pageSize // 每页显示条数
    }
  },
  async deleteSysUser (_this, formData) { // 删除用户信息接口
    let res = await DELET_ACTIVITY_BYID(formData)
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
