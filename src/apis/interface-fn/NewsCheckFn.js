// 消息管理接口函数
import {FIND_PUSH_MESSAGE_LIST, FIND_RELEASE_USER_LIST, DELET_PUSH_MESSAGE_BYID, FIND_PHONE_MESSAGE_LIST, TO_PUSH_MESSAGE, TO_PHONE_MESSAGE} from '../interface.js' // 接口调用文件
export default {
  async findSysUserList (_this, formData) { // 消息管理初始化接口
    let res = await FIND_PUSH_MESSAGE_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.pushMessageList.data
      _this.totalRows = data.pushMessageList.totalRows // 总条数
      _this.pageSize = data.pushMessageList.pageSize // 每页显示条数
    }
  },
  async findSmsMessageList (_this, formData) { // 短信管理初始化接口
    let res = await FIND_PHONE_MESSAGE_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.tableData = data.pushMessageList.data
      _this.totalRows = data.pushMessageList.totalRows // 总条数
      _this.pageSize = data.pushMessageList.pageSize // 每页显示条数
    }
  },
  async getReleaseUserList (_this, formData) { // 获取发布人列表接口
    let res = await FIND_RELEASE_USER_LIST(formData)
    const data = res.data
    if (data.status === '1000') {
      console.log(data)
      _this.releaseUserList = data.releaseUserList
    }
  },
  async deleteUser (_this, formData) { // 删除短信
    let res = await DELET_PUSH_MESSAGE_BYID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.findSmsMessageList(_this)
    }
  },
  async deleteNews (_this, formData) { // 删除消息
    let res = await DELET_PUSH_MESSAGE_BYID(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '删除成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    }
  },
  async sendMessage (_this, formData) { // 发送短信
    let res = await TO_PHONE_MESSAGE(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '发送成功',
        type: 'success'
      })
      this.findSmsMessageList(_this)
    } else if (data.status === '1007') {
      _this.$message({
        message: '暂无人员角色',
        type: 'error'
      })
    }
  },
  async sendInfo (_this, formData) { // 发送消息
    let res = await TO_PUSH_MESSAGE(formData)
    const data = res.data
    if (data.status === '1000') {
      _this.$message({
        message: '发送成功',
        type: 'success'
      })
      this.findSysUserList(_this)
    } else if (data.status === '1007') {
      _this.$message({
        message: '暂无人员角色',
        type: 'error'
      })
    }
  }
}
