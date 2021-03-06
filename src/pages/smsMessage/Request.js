import NewsCheckFn from '@/apis/interface-fn/NewsCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, publisher, publicTime) { // 岗位管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      releaseUser: publisher,
      releaseTime: publicTime
    }
    NewsCheckFn.findSmsMessageList(_this, formData)
  },
  getReleaseUserList (_this) { // 查询发布人列表接口
    let formData = {
    }
    NewsCheckFn.getReleaseUserList(_this, formData)
  },
  deleteMessage (_this, id) { // 删除
    _this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        pushMessageId: id
      }
      NewsCheckFn.deleteUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  },
  onSubmit (_this) { // 发送短信
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          content: _this.ruleForm.content,
          pushType: _this.ruleForm.type
        }
        NewsCheckFn.sendMessage(_this, formData)
      } else {
        return false // 表单验证不通过
      }
    })
  }
}
