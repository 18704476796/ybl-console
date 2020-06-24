import FinanceCheckFn from '@/apis/interface-fn/FinanceCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, status, searchType, searchValue) { // 岗位管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      status: status,
      keyword: searchType,
      keywordValue: searchValue
    }
    FinanceCheckFn.findSysUserList(_this, formData)
  },
  lookUser (_this, id, pageSize, currentPage) { // 查看岗位详情
    let formData = {
      financeId: id,
      pageSize: pageSize,
      currentPage: currentPage
    }
    FinanceCheckFn.lookUser(_this, formData)
  }
}
