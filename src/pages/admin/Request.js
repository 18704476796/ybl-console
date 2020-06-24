import Student from '@/apis/interface-fn/AdminFn.js' // 接口调用文件
export default {
  getInfo (_this, formData) { // 用户管理初始化
    Student.findSysUserList(_this, formData)
  },
  onlocked (_this, locked, userName) { // 修改用户状态函数
    let formData = {
      locked: locked,
      userName: userName
    }
    Student.updateSysUserStatus(_this, formData)
  },
  getRoleList (_this) { // 角色列表查询
    let formData = {
      type: 2
    }
    Student.getRoleList(_this, formData)
  },
  onSubmit (_this) { // 创建用户函数
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          saveOrUpdateStatus: 'save', // 新增用户的状态
          userName: _this.ruleForm.roleName, // 帐号
          realName: _this.ruleForm.roleUser, // 姓名
          password: _this.ruleForm.pass, // 密码
          confirmPassword: _this.ruleForm.checkPass, // 确认密码
          phoneNum: _this.ruleForm.roleTel, // 手机号
          email: _this.ruleForm.email, // 邮箱
          locked: _this.ruleForm.status, // 用户状态
          roleId: _this.ruleForm.roleId // 角色id
        }
        Student.saveOrUpdateSysUser(_this, formData)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  onSubmitEdit (_this) { // 编辑保存乘客用户函数
    let formData = {
      saveOrUpdateStatus: 'update', // 编辑用户状态
      id: _this.formEdit.id, // 用户id
      userName: _this.formEdit.userName, // 帐号
      realName: _this.formEdit.realName, // 姓名
      password: _this.formEdit.pass, // 密码
      confirmPassword: _this.formEdit.checkPass, // 确认密码
      phoneNum: _this.formEdit.phoneNum, // 手机号
      email: _this.formEdit.email, // 邮箱
      locked: _this.formEdit.locked, // 用户状态
      roleId: _this.formEdit.roleId, // 角色id
      type: 2
    }
    Student.saveOrUpdateSysUser(_this, formData)
  },
  deleteUser (_this, userName) { // 删除乘客用户函数
    _this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        userName: userName // 用户帐号
      }
      Student.deleteSysUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  },
  isHasSysUser (_this, _val) { // 判断输入的用户账户是否被占用
    let formData = {
      userName: _val // 用户帐号
    }
    Student.isHasSysUser(_this, formData)
  }
}
