import TalentsCheckFn from '@/apis/interface-fn/TalentsCheckFn.js' // 接口调用文件
import PostCheckFn from '@/apis/interface-fn/PostCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, searchType, searchValue, jobStatus, userSex, postClassSeach, birthdayStar, birthdayEnd, payValueId, sortType) { // 岗位管理初始化
    let industryName = null
    if (_this.postClassSeach.length > 1) {
      industryName = _this.postClassSeach[1]
    } else if (_this.postClassSeach.length === 1) {
      industryName = _this.postClassSeach[0]
    } else {
      industryName = _this.postClassSeach
    }
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      keyword: searchType,
      keywordValue: searchValue,
      industryId: industryName, // 期望行业id
      jobStatus: jobStatus,
      userSex: userSex,
      expectSalaryId: payValueId,
      birthdayStar: birthdayStar,
      birthdayEnd: birthdayEnd,
      sortType: sortType
    }
    TalentsCheckFn.findSysUserList(_this, formData)
  },
  getPostClass (_this) { // 获取岗位列表
    let formData = {
      type: 1,
      status: 1
    }
    PostCheckFn.getPostClass(_this, formData)
  },
  getPayOptions (_this) { // 获取薪资列表列表
    let formData = {
      type: 2
    }
    TalentsCheckFn.getPayOptions(_this, formData)
  },
  lookUser (_this, id, pageSize, currentPage) { // 查看岗位详情
    let formData = {
      userResumeId: id,
      currentPage: currentPage,
      pageSize: pageSize
    }
    TalentsCheckFn.lookUser(_this, formData)
  }
}
