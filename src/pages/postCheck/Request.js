import PostCheckFn from '@/apis/interface-fn/PostCheckFn.js' // 接口调用文件
export default {
  getInfo (_this, pageSize, currentPage, postName, postClassSeach, firmListSeach) { // 岗位管理初始化
    // let industryName = null
    // if (_this.postClassSeach.length > 1) {
    //   industryName = _this.postClassSeach[1]
    // } else if (_this.postClassSeach.length === 1) {
    //   industryName = _this.postClassSeach[0]
    // } else {
    //   industryName = _this.postClassSeach
    // }
    let formData = {
      pageSize: pageSize,
      currentPage: currentPage,
      positionName: postName,
      industryId: postClassSeach,
      enterpriseName: firmListSeach
    }
    PostCheckFn.findSysUserList(_this, formData)
  },
  getPostClass (_this) { // 获取岗位列表
    let formData = {
      type: 2,
      status: 1
    }
    PostCheckFn.getPostClass(_this, formData)
  },
  firmList (_this) { // 获取公司列表
    let formData = {
    }
    PostCheckFn.firmList(_this, formData)
  },
  lookUser (_this, id) { // 查看岗位详情
    let formData = {
      recruitPositioId: id
    }
    PostCheckFn.lookUser(_this, formData)
  }
}
