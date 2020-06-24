import CommonProblemsFn from '@/apis/interface-fn/CommonProblemsFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, advertisingName, advPosition) { // 广告管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      title: advertisingName,
      classifyId: advPosition
    }
    CommonProblemsFn.findSysUserList(_this, formData)
  },
  getClassifyList (_this) { // 分类管理初始化函数
    let formData = {
    }
    CommonProblemsFn.getClassifyList(_this, formData)
  },
  onSubmit (_this) { // 编辑新增问题函数
    let formData = {
      title: _this.ruleForm.title, // 问题标题
      helpFeedbackId: _this.ruleForm.id, // 问题id
      classifyId: _this.ruleForm.type, // 姓名
      helpFeedStatus: _this.ruleForm.locked, // 显示隐藏
      answerHelp: _this.ruleForm.content // 问题内容
    }
    CommonProblemsFn.saveOrUpdateSysUser(_this, formData)
  },
  onSubmitClass (_this) { // 编辑新增分类管理函数
    let formData = {
      helpFeedbackId: _this.classForm.id, // 分类id
      classifyText: _this.classForm.name // 分类名称
    }
    CommonProblemsFn.onSubmitClass(_this, formData)
  },
  deleteUser (_this, id) { // 删除问题管理和分类管理
    _this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        helpFeedbackId: id // 用户帐号
      }
      CommonProblemsFn.deleteSysUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
