import RecruitmentCheckFn from '@/apis/interface-fn/RecruitmentCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, searchType, searchValue) { // 招聘管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      keyword: searchType,
      keywordValue: searchValue
    }
    RecruitmentCheckFn.findSysUserList(_this, formData)
  },
  lookUser (_this, userId, userResumeId, id) { // 查看招聘详情
    let formData = {
      userId: userId,
      userResumeId: userResumeId,
      recruitId: id
    }
    RecruitmentCheckFn.lookUser(_this, formData)
  }
}
