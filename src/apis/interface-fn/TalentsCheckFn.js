// 人才管理接口函数
import {FINDUSERS_RESUME_LIST, DETAILS_USER_RESUMENT_LIST, FIND_WELFARE_LIST_BY_TYPE} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 企业管理初始化接口
    let res = await FINDUSERS_RESUME_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.userResumeList.data
      _this.totalRows = data.userResumeList.totalRows // 总条数
      _this.pageSize = data.userResumeList.pageSize // 每页显示条数
    }
  },
  async getPayOptions (_this, formData) { // 获取薪资列表接口
    let res = await FIND_WELFARE_LIST_BY_TYPE(formData)
    const data = res.data
    if (data.status === '1000') {
      let optionsArry = data.findWelfareList
      for (var i = 0; i < optionsArry.length; i++) {
        let arry = {
          value: '',
          lable: ''
        }
        arry.label = optionsArry[i].id
        arry.value = optionsArry[i].startSalary + '-' + optionsArry[i].endSalary
        _this.payOptions.push(arry)
      }
      return _this.payOptions
    }
  },
  async lookUser (_this, formData) { // 人才管理查看详情接口
    let res = await DETAILS_USER_RESUMENT_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.recordTableDate = data.companyRecruitOrPositionList.data // 求职记录
      _this.userResume = data.userResume // 人才信息
      _this.sysUsers = data.sysUsers // 用户信息
      _this.recruitCount = data.recruitCount // 求职记录
      _this.candidateMoney = data.candidateMoney // 求职奖励
      _this.totalRowsTwo = data.companyRecruitOrPositionList.totalRows // 总条数
      _this.pageSizeTwo = data.companyRecruitOrPositionList.pageSize // 每页显示条数
    }
  }
}
