import FirmCheckFn from '@/apis/interface-fn/FirmCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, locked, checkStatus, createTime, searchType, searchValue) { // 企业审核初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      locked: locked,
      userAuthStatus: -1,
      createTime: createTime,
      keyword: searchType,
      keywordValue: searchValue
    }
    FirmCheckFn.findSysUserList(_this, formData)
  },
  getClassifyList (_this) { // 获取行业分类列表
    let formData = {
      type: 1,
      status: 1
    }
    FirmCheckFn.getClassifyList(_this, formData)
  },
  lookUser (_this, id, pageSize, currentPage) {
    let formData = {
      enterpriseId: id,
      currentPage: currentPage,
      pageSize: pageSize
    }
    FirmCheckFn.lookUser(_this, formData)
  },
  checkResult (_this, userId, userAuthStatus, authRemark) { // 修改审核状态
    let formData = {
      userId: userId,
      userAuthStatus: userAuthStatus,
      authRemark: authRemark
    }
    FirmCheckFn.checkResult(_this, formData)
  }
}
