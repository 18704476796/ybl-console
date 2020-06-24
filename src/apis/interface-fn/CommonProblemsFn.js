// 问题管理接口函数
import {FIND_HELP_FEEDBACK_LIST, DEL_HELP_FEEDBACK_BYID, SAVE_ORUP_HELP_FEEDBACK, FIND_HELP_FEEDBACK_FOR_CLASS, SAVEORUPD_HELP_FEEDBACK_FOR_CLASS} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 问题管理初始化接口
    let res = await FIND_HELP_FEEDBACK_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.helpFeedbackList.data // 用户数据列表
      _this.totalRows = data.helpFeedbackList.totalRows // 总条数
      _this.pageSize = data.helpFeedbackList.pageSize // 每页显示条数
    }
  },
  async getClassifyList (_this, formData) { // 分类管理初始化接口
    let res = await FIND_HELP_FEEDBACK_FOR_CLASS(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.classTableData = data.helpFeedback // 分类管理数据列表
      _this.positionList = data.helpFeedback
    }
  },
  async saveOrUpdateSysUser (_this, formData) { // 新增或修改问题管理信息接口
    let res = await SAVE_ORUP_HELP_FEEDBACK(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  },
  async onSubmitClass (_this, formData) { // 新增或修改分类管理信息接口
    let res = await SAVEORUPD_HELP_FEEDBACK_FOR_CLASS(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.getClassifyList(_this)
    }
  },
  async deleteSysUser (_this, formData) { // 删除接口
    let res = await DEL_HELP_FEEDBACK_BYID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.findSysUserList(_this, _this.formData)
      this.getClassifyList(_this, _this.formData)
    }
  }
}
