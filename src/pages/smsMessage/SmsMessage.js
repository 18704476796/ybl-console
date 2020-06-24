import ScreenBox from './components/ScreenBox'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'NewsCheck',
  components: {
    ScreenBox,
    Paging
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.publisher, this.publicTime)
    Request.getReleaseUserList(this) // 查询发布人列表接口
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.publisher, this.publicTime)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.publisher, this.publicTime)
    },
    changeCheckStatus (val) { // 发布人查询
      this.publisher = val
      Request.getInfo(this, this.pageSize, this.current, this.publisher, this.publicTime)
    },
    changeDate (val) { // 发布时间查询
      this.publicTime = val
      Request.getInfo(this, this.pageSize, this.current, this.publisher, this.publicTime)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    deleteMessage (id) { // 删除
      Request.deleteMessage(this, id)
    },
    sendMessage () { // 打开发送短信弹窗
      this.drawer = true
    },
    onSubmit () { // 发送短信
      Request.onSubmit(this)
    }
  },
  data () {
    return {
      tableData: [],
      drawer: false,
      searchValue: '',
      searchType: null,
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      publisher: '', // 发布人
      releaseUserList: [], // 发布人列表
      publicTime: '', // 发布时间
      current: 1, // 每页页码
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        type: '', // 发送对象
        content: '', // 短信内容
      },
      rules: { // 表单验证.
        content: [{ required: true, message: '请输入内容', trigger: 'blur' }], // 内容验证
        type: [{ required: true, message: '请选择发送对象', trigger: 'blur' }] // 发送对象
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
