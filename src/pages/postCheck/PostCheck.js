import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'PostCheck',
  components: {
    ScreenBox,
    Tables,
    Paging
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.postName, this.postClassSeach, this.firmListSeach)
    Request.getPostClass(this) // 岗位列表
    Request.firmList(this) // 公司列表
  },
  methods: {
    refreshPostList () { // 刷新岗位列表
      Request.getPostClass(this) // 岗位列表
    },
    refreshFirmList () { // 刷新公司列表
      Request.firmList(this) // 公司列表
    },
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.postName, this.postClassSeach, this.firmListSeach)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.postName, this.postClassSeach, this.firmListSeach)
    },
    postNameSearch (postName) { // 岗位名称搜索
      this.postName = postName
      Request.getInfo(this, this.pageSize, this.current, this.postName, this.postClassSeach, this.firmListSeach)
    },
    postClassSeachs (postClassSeach) {
      this.postClassSeach = postClassSeach
      Request.getInfo(this, this.pageSize, this.current, this.postName, this.postClassSeach, this.firmListSeach)
    },
    firmListSeachs (firmListSeach) {
      this.firmListSeach = firmListSeach
      console.log(this.firmListSeach)
      Request.getInfo(this, this.pageSize, this.current, this.postName, this.postClassSeach, this.firmListSeach)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    lookUser (id) {
      Request.lookUser(this, id)
      this.centerDialogVisible = true
      console.log(2)
    }
  },
  data () {
    return {
      api: this.$store.state.httpUrl,
      centerDialogVisible: false, // 实名认证详情对话框
      disabled: true, // 表单为true则不可编辑
      tableData: [{
        id: 1,
        positionName: '名称',
        enterpriseName: '测试',
        startSalary: '8000',
        endSalary: '10000'
      }],
      companyRecruitPosition: {}, // 岗位招聘信息
      recommenderList: [], // 推荐人
      candidateList: [], // 候选人
      postName: '', // 岗位名称搜索值
      postClass: [], // 岗位分类列表
      postClassSeach: null, // 岗位分类搜索值
      firmList: [], // 所属公司列表
      firmListSeach: '', // 所属公司搜索值
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
