import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'Driver',
  components: {
    ScreenBox,
    Tables,
    Paging
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    changeStatusValue (locked) { // 类型筛选
      this.locked = locked
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    changeCheckStatus (locked) { // 审核状态查询
      this.checkStatus = locked
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    changeDate (val) { // 注册时间查询
      this.createTime = val
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    search (type, val) {
      this.searchType = type
      this.searchValue = val
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    onlocked (locked, userName) {
      Request.onlocked(this, locked, userName)
    },
    driverAdd () { // 新增管理员弹层函数
      this.ruleForm.id = null
      this.ruleForm.parentId = null
      this.ruleForm.type = 1
      this.addOrUpdateTitle = '新增行业列表'
      this.addOrUpdateButton = '立即创建'
      this.drawer = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () { // 添加、修改岗位行信息
      Request.onSubmit(this)
    },
    edit (obj) { // 编辑管理员弹层函数
      this.ruleForm.type = obj.type
      this.ruleForm.id = obj.id
      this.ruleForm.parentId = null
      this.ruleForm.name = obj.name
      this.ruleForm.classifySort = obj.classifySort
      this.ruleForm.status = obj.status
      this.ruleForm.keyWord = obj.keyWord
      this.ruleForm.classifyDescribe = obj.classifyDescribe
      if (obj.type == 1) {
        this.addOrUpdateTitle = '编辑行业信息'
      } else {
        this.addOrUpdateTitle = '编辑岗位信息'
      }
      this.addOrUpdateButton = '保存'
      this.drawer = true
    },
    addChildList (id) {
      this.ruleForm.id = null
      this.ruleForm.parentId = id
      this.ruleForm.type = 2
      this.addOrUpdateTitle = '新增岗位列表'
      this.addOrUpdateButton = '立即创建'
      this.drawer = true
    },
    deleteUser (id) { // 删除
      Request.deleteUser(this, id)
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
    return {
      disabled: true, // 表单为true则不可编辑
      tableData: [{
        id: '1',
        userName: '测试',
        enterpriseName: '测试',
        industryName: '测试',
        comapnyType: '',
        comapnyNum: '',
        loginTime: '',
        locked: 1,
        userAuthStatus: 0
      }],
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      locked: null, // 筛选用户状态值
      checkStatus: null, // 筛选审核状态
      createTime: '', // 搜索日期
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      addOrUpdateTitle: '新增行业列表',
      addOrUpdateButton: '立即创建',
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        type: 1, // 行业岗位类型
        id: null,
        classifySort: null, // 排序
        name: '', // 名称
        status: null, // 状态
        keyWord: '', // 关键词
        classifyDescribe: '', // 分类描述
        parentId: null // 父类id
      },
      firmType: [{ // 发布状态列表
        value: 0,
        label: '未发布'
      }, {
        value: 1,
        label: '已发布'
      }],
      rules: { // 表单验证.
        name: [{ required: true, message: '请输入名称', trigger: 'blur' }] // 帐号验证
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      sysUserApproval: {}, // 审核信息
      ruless: { // 表单验证.
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
