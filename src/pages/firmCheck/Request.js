import FirmCheckFn from '@/apis/interface-fn/FirmCheckFn.js' // 接口调用文件
import axios from 'axios' // axios
export default {
  getInfo (_this, pageSize, currentPage, locked, checkStatus, createTime, searchType, searchValue) { // 乘客用户管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      locked: locked,
      userAuthStatus: checkStatus,
      createTime: createTime,
      keyword: searchType,
      keywordValue: searchValue
    }
    FirmCheckFn.findSysUserList(_this, formData)
  },
  onlocked (_this, locked, id) { // 修改用户状态函数
    let formData = {
      locked: locked,
      userId: id
    }
    FirmCheckFn.updateSysUserStatus(_this, formData)
  },
  onSubmit (_this) { // 创建乘客用户函数
    let params = new FormData()
    params.append('roleId', 4) // 企业角色id
    params.append('enterpriseId', _this.ruleForm.id) // 企业id
    params.append('locked', _this.ruleForm.locked) // 状态值
    params.append('enterpriseName', _this.ruleForm.enterpriseName) // 企业名称
    params.append('industryId', _this.ruleForm.industryId) // 行业类型id
    params.append('comapnyNum', _this.ruleForm.comapnyNum) // 企业规模
    params.append('comapnyType', _this.ruleForm.comapnyType) // 企业类型
    params.append('address', _this.ruleForm.address) // 公司地址
    params.append('cityName', _this.ruleForm.cityName) // 公司市
    params.append('lng', _this.ruleForm.lng) // 经度
    params.append('lat', _this.ruleForm.lat) // 纬度
    params.append('legalPerson', _this.ruleForm.legalPerson) // 法人姓名
    params.append('legalPersonPhone', _this.ruleForm.legalPersonPhone) // 法人联系方式
    params.append('realName', _this.ruleForm.realName) // 管理员姓名
    params.append('phoneNum', _this.ruleForm.phoneNum) // 管理员手机号
    params.append('email', _this.ruleForm.email) // 管理员邮箱
    params.append('idcard', _this.ruleForm.idcard) // 管理员身份证号
    params.append('password', _this.ruleForm.pass) // 密码
    params.append('confirmPassword', _this.ruleForm.checkPass) // 确认密码
    params.append('businessLicenseId', _this.ruleForm.businessLicenseId) // 营业执照号
    params.append('businessLicenseFile', _this.ruleForm.imageUrlYyzz) // 营业执照
    params.append('handIdcardPicFile', _this.ruleForm.imageUrlSfz) // 手持身份证照片
    params.append('logoUrlFile', _this.ruleForm.imageUrlLogo) // 公司logo
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.post('/api/backEnterprise/saveOrUpdEnterprise.htm', params, config).then(function (result) {
      const data = result.data
      const dataToObj = JSON.parse(data)
      if (dataToObj.status === '1000') {
        _this.$message({
          showClose: true,
          message: '操作完成',
          type: 'success'
        })
        FirmCheckFn.findSysUserList(_this)
      } else if (dataToObj.status === '1005') {
        alert('管理员手机号已存在,请重新输入')
      } else {
        alert('上传失败,请联系管理员')
      }
    })
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
  }
}
