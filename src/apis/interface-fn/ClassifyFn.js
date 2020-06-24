// 行业分类管理接口函数
import {FIND_INDUSTRY_POSITION_LIST, SAVE_UPDATE__INDUSTRY_POSITION_CLASSIFY, DEL_INDUSTRY_POSITION_BYID} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 行业分类管理初始化接口
    let res = await FIND_INDUSTRY_POSITION_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.industryPositionList.data
      _this.totalRows = data.industryPositionList.totalRows // 总条数
      _this.pageSize = data.industryPositionList.pageSize // 每页显示条数
    }
  },
  async saveOrUpdateSysUser (_this, formData) { // 新增或修改分类信息接口
    let res = await SAVE_UPDATE__INDUSTRY_POSITION_CLASSIFY(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  },
  async deleteSysUser (_this, formData) { // 删除分类信息接口
    let res = await DEL_INDUSTRY_POSITION_BYID(formData)
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
