import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'TalentsCheck',
  components: {
    ScreenBox,
    Tables,
    Paging
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.searchValue, this.postClassSeach)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue)
    },
    postClassSeachs (postClassSeach) { // 岗位名称查询
      this.postClassSeach = postClassSeach
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue)
    },
    search (type, val) { // 查询
      this.searchType = type
      this.searchValue = val
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    lookUser (obj) {
        this.recommenderName = obj.recommenderName
      Request.lookUser(this, obj.userId, obj.userResumeId, obj.id)
      this.drawer = true
    }
  },
  data () {
    return {
      api: this.$store.state.httpUrl, // 图片前缀
      tableData: [{
        id: 1,
        positionName: '名称',
        enterpriseName: '测试',
        startSalary: '8000',
        endSalary: '10000'
      }],
      enterpriseName: '', // 应聘企业名称
      companyRecruitRecord: [], // 流程对象
      searchType: null, // 搜索框类型值
      searchValue: '', // 搜索框的值
      userResume: {}, // 人才信息
      sysUsers: {}, // 用户信息
      recommenderName: '', // 推荐人姓名
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      drawer: false, // 控制新增导航抽屉弹层是否展开
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
