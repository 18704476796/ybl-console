import ScreenBoxHidden from './components/ScreenBoxHidden'
import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import DetailTables from './components/detailTable'
import Paging from './components/Paging'
import PagingTwo from './components/PagingTwo'
import Request from './Request.js' // 接口文件
export default {
  name: 'TalentsCheck',
  components: {
    ScreenBoxHidden,
    ScreenBox,
    Tables,
    DetailTables,
    Paging,
    PagingTwo
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.expectSalaryStar, this.expectSalaryEnd, this.sortType)
    Request.getPostClass(this)
    Request.getPayOptions(this)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    postClassSeachs (postClassSeach) { // 行业分类查询
      this.postClassSeach = postClassSeach
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    search (type, val) { // 搜索框查询
      this.searchType = type
      this.searchValue = val
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    changeStatusValue (val) { // 工作状态查询
      this.jobStatus = val
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    changeSortorValue (val) { // 排序方式
      this.sortType = val
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    changeSexValue (val) { // 性别查询
      this.userSex = val
      console.log(val)
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    changeAgeValue (val) { // 生日范围查询
      this.birthdayStar = val[0]
      this.birthdayEnd = val[1]
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    changePayValue (val) { // 薪资范围查询
      this.payValueId = val
      Request.getInfo(this, this.pageSize, this.current, this.searchType, this.searchValue, this.jobStatus, this.userSex, this.postClassSeach, this.birthdayStar, this.birthdayEnd, this.payValueId, this.sortType)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    lookUser (id) {
      Request.lookUser(this, id, this.pageSizeTwo, this.currentTwo)
      this.userResumeId = id
      this.drawer = true
    },
    getInfoTwo (size) { // 更新详情页分页单页显示条数
      this.pageSizeTwo = size
      Request.lookUser(this, this.userResumeId, this.pageSizeTwo, this.currentTwo)
    },
    getInfo_currentTwo (size) { // 更新详情页每页页码函数
      this.currentTwo = size
      Request.lookUser(this, this.userResumeId, this.pageSizeTwo, this.currentTwo)
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
      talentsInfoData: [{ // 统计信息表
      }],
      recordTableDate: [{ // 求职记录表
      }],
      searchType: null, // 搜索框类型值
      searchValue: '', // 搜索框的值
      jobStatus: null, // 工作状态
      userSex: null, // 性别
      birthdayStar: '', // 开始生日
      birthdayEnd: '', // 结束生日
      payOptions: [], // 薪资列表
      expectSalaryStar: '', // 开始薪资
      expectSalaryEnd: '', // 结束薪资
      payValueId: null, // 薪资范围id
      sortType: null, // 排序
      userResume: {}, // 人才信息
      sysUsers: {}, // 用户信息
      recruitCount: '', // 求职次数
      candidateMoney: '', // 求职奖励
      companyRecruitPosition: {}, // 岗位招聘信息
      recommenderList: [], // 推荐人
      candidateList: [], // 候选人
      postName: '', // 岗位名称搜索值
      postClass: [], // 岗位分类列表
      postClassSeach: [], // 岗位分类搜索值
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      totalRowsTwo: null, // 分页数据总条数
      pageSizeTwo: 20, // 分页单页显示条数
      currentTwo: 1, // 每页页码
      userResumeId: null, // 岗位id
      drawer: false, // 控制新增导航抽屉弹层是否展开
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
