import RuleCheckFn from '@/apis/interface-fn/RuleCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, type) { // 规则管理初始化
    let formData = {
    }
    RuleCheckFn.findSysUserList(_this, formData)
  },
  onSubmit (_this) { // 新增编辑规则函数
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          rewardMoney: _this.ruleForm.title, // 梯度值
          rewardId: _this.ruleForm.id, // id
          status: _this.ruleForm.status // 状态值
        }
        RuleCheckFn.saveOrUpdateSysUser(_this, formData)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  deleteUser (_this, id) { // 删除
    _this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        rewardId: id
      }
      RuleCheckFn.deleteSysUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
