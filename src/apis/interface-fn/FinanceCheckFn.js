// 财务管理接口函数
import {FIND_FINANCE_LIST, FINANCE_DATAD} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 企业管理初始化接口
    let res = await FIND_FINANCE_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.findFinanceList.data
      _this.totalRows = data.findFinanceList.totalRows // 总条数
      _this.pageSize = data.findFinanceList.pageSize // 每页显示条数
    }
  },
  async lookUser (_this, formData) { // 查看财务详情接口
    let res = await FINANCE_DATAD(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.financeFlowList = data.financeFlowList.data
      _this.pageSizeTwo = data.financeFlowList.pageSize
      _this.currentTwo = data.financeFlowList.currentPage
    }
  }
}
