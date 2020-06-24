// 管理员管理接口函数
import {
  FIND_SYS_USER_LIST,
  UPDATE_SYS_USER_STATUS,
  SAVE_UPDATE_SYS_USER,
  LOGOUT_SYS_USER,
  HAS_SYS_USER,
  FIND_ROLE_LIST
} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 用户管理初始化接口
    let res = await FIND_SYS_USER_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.userList.data // 用户数据列表
      _this.totalRows = data.userList.totalRows // 总条数
      _this.pageSize = data.userList.pageSize // 每页显示条数
    }
  },
  async getRoleList (_this, formData) { // 获取角色列表
    let res = await FIND_ROLE_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.roleList = data.roleList // 角色数据列表
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
      let formData = {
        roleId: 1
      }
      this.findSysUserList(_this, formData)
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
      let formData = {
        roleId: 1
      }
      this.findSysUserList(_this, formData)
    } else if (data.status === '1004') {
      _this.$message({
        message: '用户名已经存在',
        type: 'error'
      })
    } else if (data.status === '1005') {
      _this.$message({
        message: '手机号已经存在',
        type: 'error'
      })
    } else if (data.status === '1007') {
      _this.$message({
        message: '该角色已经存在，不能重复设置',
        type: 'error'
      })
    }
  },
  async deleteSysUser (_this, formData) { // 删除用户信息接口
    let res = await LOGOUT_SYS_USER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      let formData = {
        roleId: 1
      }
      this.findSysUserList(_this, formData)
    } else if (data.status === '1005') {
      _this.$message({
        message: '操作失败',
        type: 'error'
      })
    } else if (data.status === '1007') {
      _this.$message({
        message: '无法删除该角色',
        type: 'error'
      })
    }
  },
  async isHasSysUser (_this, formData) { // 判断用户账户是否被占用接口
    let res = await HAS_SYS_USER(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '帐号未占用，可以使用',
        type: 'success'
      })
    } else if (data.status === '1003') {
      _this.ruleForm.roleName = ''
      _this.$message({
        message: '您输入的帐号被占用，请重新输入',
        type: 'error'
      })
    }
  }
}
