// 企业信息接口函数
import {FIND_ENTER_PRISE_LIST, FIND_CLASSIFY_LIST, UPD_ENTERPRISE_LOCKED, ENTERPRISE_BYID, ENTERPRISW_TO_EXAMINE} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 企业管理初始化接口
    let res = await FIND_ENTER_PRISE_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.userEnterpriseList.data
      _this.totalRows = data.userEnterpriseList.totalRows // 总条数
      _this.pageSize = data.userEnterpriseList.pageSize // 每页显示条数
    }
  },
  async updateSysUserStatus (_this, formData) { // 修改用户状态接口
    let res = await UPD_ENTERPRISE_LOCKED(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        showClose: true,
        message: '状态值修改成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  },
  async getClassifyList (_this, formData) { // 获取行业列表接口
    let res = await FIND_CLASSIFY_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.options = data.classifyList
      // this.getTreeData(_this.options)
    }
  },
  // getTreeData (data) {
  //   for (var i = 0; i < data.length; i++) {
  //     if (data[i].childItems.length < 1) {
  //       data[i].childItems = undefined
  //     } else {
  //       this.getTreeData(data[i].childItems)
  //     }
  //   }
  //   return data
  // },
  async lookUser (_this, formData) { // 查看企业详情接口
    let res = await ENTERPRISE_BYID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.enterprise = data.enterprise
      // _this.logo = data.enterprise.logo
      // _this.businessLicense = data.enterprise.businessLicense
      // _this.handIdcardPic = data.enterprise.handIdcardPic
      _this.sysUsePulse = data.sysUsePulse
      _this.EnterpriseData = data.EnterpriseData
      _this.companyRecruitPositionList = data.companyRecruitPositionList.data
      _this.totalRowsTwo = data.companyRecruitPositionList.totalRows // 总条数
      _this.pageSizeTwo = data.companyRecruitPositionList.pageSize // 每页显示条数
    }
  },
  async checkResult (_this, formData) { // 修改审核状态接口
    let res = await ENTERPRISW_TO_EXAMINE(formData)
    const data = res.data
    console.log(data)
    if (data.status === '1000') {
      _this.$message({
        message: '提交成功',
        type: 'success'
      })
      _this.centerDialogVisible = false
      _this.innerVisible = false
      let formData = {
        userAuthStatus: -1
      }
      this.findSysUserList(_this, formData)
    } else {
      _this.$message({
        message: '审核失败,请联系管理员'
      })
      _this.centerDialogVisible = false
      _this.innerVisible = false
    }
  }
}
