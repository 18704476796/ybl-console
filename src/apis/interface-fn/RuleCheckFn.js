// 规则管理
import {FIND_REWARD_LIST, SAVE_ORUPD_REWARD, DEL_REWAR_BYID} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 规则管理初始化接口
    let res = await FIND_REWARD_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.rewardList
    }
  },
  async saveOrUpdateSysUser (_this, formData) { // 新增或修改规则管理信息接口
    let res = await SAVE_ORUPD_REWARD(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '操作成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  },
  async deleteSysUser (_this, formData) { // 删除规则管理接口
    let res = await DEL_REWAR_BYID(formData)
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
