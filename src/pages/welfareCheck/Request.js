import WelfareCheckFn from '@/apis/interface-fn/WelfareCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, type) { // 用户管理初始化
    let formData = {
      type: type // 新增用户的状态
    }
    WelfareCheckFn.findSysUserList(_this, formData)
  },
  onSubmit (_this) { // 新增编辑福利函数
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          welfareId: _this.ruleForm.id, // id
          type: 1, // 福利类型
          title: _this.ruleForm.title // 标题
        }
        WelfareCheckFn.saveOrUpdateSysUser(_this, formData)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  onSubmitEdit (_this) { // 新增编辑薪资函数
    let formData = {
      type: 2,
      welfareId: _this.formEdit.id, // id
      startSalary: _this.formEdit.startSalary, // 开始薪资
      endSalary: _this.formEdit.endSalary
    }
    WelfareCheckFn.saveOrUpdateSysUser(_this, formData)
  },
  deleteUser (_this, id) { // 删除
    _this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        welfareId: id // 用户帐号
      }
      WelfareCheckFn.deleteSysUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
