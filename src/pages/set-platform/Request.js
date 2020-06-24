import SetPlatform from '@/apis/interface-fn/SetPlatformFn.js' // 接口调用文件
import axios from 'axios' // axios
export default {
  getInfo (_this, formData) { // 用户管理初始化
    SetPlatform.findSysUserList(_this, formData)
  },
  onSubmitEdit (_this) { // 编辑保存平台信息
    let params = new FormData()
    params.append('id', _this.formEdit.id) // id
    params.append('productName', _this.formEdit.productName) // 名称
    params.append('productTitle', _this.formEdit.productTitle) // 标题
    params.append('collectionAccount', _this.formEdit.collectionAccount) // 收款账号
    params.append('productKeyword', _this.formEdit.productKeyword) // 关键字
    params.append('productIntroduction', _this.formEdit.productIntroduction) // 描述
    params.append('tel', _this.formEdit.tel) // 电话
    params.append('email', _this.formEdit.email) // 邮箱
    params.append('productLogoFile', _this.formEdit.imageUrlLogo) // logo
    params.append('backgroundUrlFile', _this.back_path[0] ? _this.back_path[0].raw : '') // 背景
    params.append('hostUnit', _this.formEdit.hostUnit) // 传真
    params.append('webId', _this.formEdit.webId) // 地址
    params.append('publicNetworkSecurity', _this.formEdit.publicNetworkSecurity) // 技术支持
    params.append('icpNumb', _this.formEdit.icpNumb) // 邮编
    params.append('userAgreement', _this.formEdit.userAgreement) // 用户协议
    params.append('otherInformation', _this.formEdit.otherInformation) // 其他
    params.append('productVersion', _this.formEdit.productVersion) // 产品版本
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.post('/api/company/saveAndUpdateCompany.htm', params, config).then(function (result) {
      const data = result.data
      const dataToObj = JSON.parse(data)
      if (dataToObj.status === '1000') {
        _this.$message({
          showClose: true,
          message: '操作完成',
          type: 'success'
        })
        SetPlatform.findSysUserList(_this)
        _this.editDis = false
        _this.disabled = true
      } else {
        alert('上传失败,请联系管理员')
      }
    })
  }
}
