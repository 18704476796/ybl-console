import OperationCheckFn from '@/apis/interface-fn/OperationCheckFn.js' // 接口调用文件
import axios from 'axios' // axios
export default {
  getInfo (_this, pageSize, currentPage, advertisingName, advPosition, createTime) { // 广告管理初始化
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      name: advertisingName,
      advertisingLocation: advPosition,
      endTime: createTime
    }
    OperationCheckFn.findSysUserList(_this, formData)
  },
  onSubmit (_this) { // 创建乘客用户函数
    console.log(_this.logo_path[0] ? _this.logo_path[0].raw : '')
    let params = new FormData()
    params.append('activityId', _this.ruleForm.id) // 活动id
    params.append('name', _this.ruleForm.name) // 广告名称
    params.append('advertisingLocation', _this.ruleForm.position) // 广告位置
    params.append('pictureUrlFile', _this.ruleForm.imageUrlLogo) // 广告图片路径
    // params.append('pictureUrlFile', _this.ruleForm.logo_path)
    params.append('startTime', _this.ruleForm.startTime) // 活动开始时间
    params.append('endTime', _this.ruleForm.endTime) // 结束时间
    let status = null
    if (_this.ruleForm.goOut === '上线') {
      status = 1
    } else {
      status = 0
    }
    params.append('staues', status) // 上线下线
    params.append('type', _this.ruleForm.type) // 活动类型
    params.append('linkUrl', _this.ruleForm.address) // 链接地址
    params.append('fContent', _this.ruleForm.content) // 广告内容
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': localStorage.getItem('token')
      }
    }
    axios.post('/api/backActivity/saveOrUpdActivityList.htm', params, config).then(function (result) {
      const data = result.data
      const dataToObj = JSON.parse(data)
      if (dataToObj.status === '1000') {
        _this.$message({
          showClose: true,
          message: '操作完成',
          type: 'success'
        })
        OperationCheckFn.findSysUserList(_this)
      } else if (dataToObj.status === '1005') {
        alert('文件上传异常')
      } else {
        alert('上传失败,请联系管理员')
      }
    })
  },
  deleteUser (_this, id) { // 删除乘客用户函数
    _this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      let formData = {
        activityId: id // 用户帐号
      }
      OperationCheckFn.deleteSysUser(_this, formData)
    }).catch(() => {
      _this.$message({
        type: 'info',
        message: '已取消删除'
      })
    })
  }
}
