import ReferrerCheckFn from '@/apis/interface-fn/ReferrerCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, locked, searchType, searchValue, userAuthStatus) { // 推荐人用户管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      locked: locked,
      userAuthStatus: userAuthStatus,
      keyWord: searchType,
      keyValue: searchValue
    }
    ReferrerCheckFn.findSysUserList(_this, formData)
  },
  lookUser (_this, id, pageSize, currentPage) {
    let formData = {
      recommenderId: id,
      currentPage: currentPage,
      pageSize: pageSize
    }
    ReferrerCheckFn.lookUser(_this, formData)
  }
}
