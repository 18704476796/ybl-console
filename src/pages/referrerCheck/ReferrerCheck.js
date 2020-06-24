import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import DetailTables from './components/detailTable'
import Paging from './components/Paging'
import PagingTwo from './components/PagingTwo'
import Request from './Request.js' // 接口文件
export default {
  name: 'FirmCheck',
  components: {
    ScreenBox,
    Tables,
    DetailTables,
    Paging,
    PagingTwo
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue, this.userAuthStatus)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue, this.userAuthStatus)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue, this.userAuthStatus)
    },
    getInfoTwo (size) { // 更新详情页分页单页显示条数
      this.pageSizeTwo = size
      Request.lookUser(this, this.recommenderId, this.pageSizeTwo, this.currentTwo)
    },
    getInfo_currentTwo (size) { // 更新详情页每页页码函数
      this.currentTwo = size
      Request.lookUser(this, this.recommenderId, this.pageSizeTwo, this.currentTwo)
    },
    changeStatusValue (locked) { // 更新用户账号状态列表筛选函数
      this.locked = locked
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue, this.userAuthStatus)
    },
    changeCheckStatus (locked) { // 更新用户审核状态列表筛选函数
      this.userAuthStatus = locked
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue, this.userAuthStatus)
    },
    search (type, val) { // 搜索框查询
      this.searchType = type
      this.searchValue = val
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.searchType, this.searchValue, this.userAuthStatus)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    lookUser (id) { // 查看推荐人详情
      this.centerDialogVisible = true
      this.recommenderId = id
      Request.lookUser(this, id, this.pageSizeTwo, this.currentTwo)
    }
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('号码'));
      } else {
        const reg = /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的号码'));
        }
      }
    }
    return {
      api: '/api/',
      addUpdateTitle: '新增企业信息',
      addUpdateButton: '立即创建',
      isChooseBack: false,
      isChooseFace: false, // 图片是否放大
      centerDialogVisible: false, // 实名认证详情对话框
      disabled: true, // 表单为true则不可编辑
      tableData: [{
      }],
      sysUser: {}, // 推荐人信息
      userCount: [], // 推荐人统计
      companyRecruitPositionList: [], // 推荐人统计记录
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      totalRowsTwo: null, // 分页数据总条数
      pageSizeTwo: 20, // 分页单页显示条数
      currentTwo: 1, // 每页页码
      recommenderId: null, // 推荐人id
      dialogFormVisible: false, // 对话框的展开隐藏
      sysUserApproval: {}, // 招聘详情对象
      locked: null, // 筛选用户状态值
      userAuthStatus: null, // 筛选审核状态
      createTime: '', // 搜索日期
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      innerVisible: false, // 详情中的查看详情
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      sysUserApproval: {}, // 审核信息
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
