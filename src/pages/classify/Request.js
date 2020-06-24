import ClassifyFn from '@/apis/interface-fn/ClassifyFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, locked, checkStatus, createTime, searchType, searchValue) { // 行业分类初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      type: 1, // 行业岗位类型
      status: checkStatus, // 发布状态,0未发布,1发布
      name: searchValue // 名称
    }
    ClassifyFn.findSysUserList(_this, formData)
  },
  onSubmit (_this) { // 新建和编辑行业分类函数
    _this.$refs.ruleForm.validate((valid) => {
      if (valid) { // 表单验证通过
        let formData = {
          name: _this.ruleForm.name, // 名称
          type: _this.ruleForm.type, // 类型
          classifyId: _this.ruleForm.id,
          parentId: _this.ruleForm.parentId, // 父类id
          status: _this.ruleForm.status, // 状态
          keyWord: _this.ruleForm.keyWord, // 关键词
          classifyDescribe: _this.ruleForm.classifyDescribe, // 描述
          classifySort: _this.ruleForm.classifySort // 排序
        }
        ClassifyFn.saveOrUpdateSysUser(_this, formData)
      } else {
        return false // 表单验证不通过
      }
    })
  },
  deleteUser (_this, id) { // 删除行业分类函数
    _this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        classifyId: id // 用户帐号
      }
      ClassifyFn.deleteSysUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
