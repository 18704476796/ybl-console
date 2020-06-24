// 招聘管理接口函数
import {FIND_USER_RESUME_COMPANY_RECRUITLIST, DETAILS_RESUMECMPANY_RECRUIT} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 招聘管理初始化接口
    let res = await FIND_USER_RESUME_COMPANY_RECRUITLIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.findUserResumeCompanyRecruitList.data
      _this.totalRows = data.findUserResumeCompanyRecruitList.totalRows // 总条数
      _this.pageSize = data.findUserResumeCompanyRecruitList.pageSize // 每页显示条数
    }
  },
  async lookUser (_this, formData) { // 招聘管理查看详情接口
    let res = await DETAILS_RESUMECMPANY_RECRUIT(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.userResume = data.userResume // 人才信息
      _this.sysUsers = data.sysUsers // 用户信息
      _this.companyRecruitRecord = data.companyRecruitRecord // 招聘流程
      _this.enterpriseName = data.enterpriseName
    }
  }
}
