// 学员管理接口函数
import {FIND_SYS_USER_LIST, UPDATE_SYS_USER_STATUS, SAVE_UPDATE_SYS_USER, DELETE_SYS_USER} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 学员用户管理初始化接口
    let res = await FIND_SYS_USER_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.userList.data // 用户数据列表
      _this.totalRows = data.userList.totalRows // 总条数
      _this.pageSize = data.userList.pageSize // 每页显示条数
    }
  },
  async updateSysUserStatus (_this, formData) { // 修改用户状态接口
    let res = await UPDATE_SYS_USER_STATUS(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        showClose: true,
        message: '状态值修改成功',
        type: 'success'
      })
    }
  },
  async saveOrUpdateSysUser (_this, formData) { // 新增或修改用户信息接口
    let res = await SAVE_UPDATE_SYS_USER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
    }
  },
  async deleteSysUser (_this, formData) { // 删除接口
    let res = await DELETE_SYS_USER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.findSysUserList(_this, _this.formData)
    }
  }
}
