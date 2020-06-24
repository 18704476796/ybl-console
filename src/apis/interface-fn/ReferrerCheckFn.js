// 推荐人候选人用户管理接口函数
import {FIND_RECOMMENDATION_LIST, FIND_RECOMMENDATION_DETAIL} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 推荐人用户初始化接口
    let res = await FIND_RECOMMENDATION_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.list.data
      _this.totalRows = data.list.totalRows // 总条数
      _this.pageSize = data.list.pageSize // 每页显示条数
    }
  },
  async lookUser (_this, formData) { // 查看推荐人详情接口
    let res = await FIND_RECOMMENDATION_DETAIL(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.sysUser = data.sysUser // 推荐人信息
      _this.userCount = data.userCount // 推荐人统计
      _this.companyRecruitPositionList = data.list.data // 推荐人统计记录
      _this.totalRowsTwo = data.list.totalRows // 总条数
      _this.pageSizeTwo = data.list.pageSize // 每页显示条数
    }
  }
}
