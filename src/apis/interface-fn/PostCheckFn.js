// 岗位管理接口函数
import {FIND_RECRUIT_POSITION_LIST, FIND_CLASSIFY_LIST, DETAILSRECRUIT_POSITION, FIND_ENTERPRISE_NAME} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 企业管理初始化接口
    let res = await FIND_RECRUIT_POSITION_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.tableData = data.recruitPositionList.data
      _this.totalRows = data.recruitPositionList.totalRows // 总条数
      _this.pageSize = data.recruitPositionList.pageSize // 每页显示条数
    }
  },
  async getPostClass (_this, formData) { // 获取岗位分类列表接口
    let res = await FIND_CLASSIFY_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.postClass = data.classifyList
      this.getTreeData(_this.postClass)
    }
  },
  getTreeData (data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].childItems.length < 1) {
        data[i].childItems = undefined
      } else {
        this.getTreeData(data[i].childItems)
      }
    }
    return data
  },
  async firmList (_this, formData) { // 获取岗位分类列表接口
    let res = await FIND_ENTERPRISE_NAME(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.firmList = data.enterpriseList
    }
  },
  async lookUser (_this, formData) { // 获取岗位分类列表接口
    let res = await DETAILSRECRUIT_POSITION(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.companyRecruitPosition = data.companyRecruitPosition
      _this.recommenderList = data.recommenderList
      _this.candidateList = data.candidateList
    }
  }
}
