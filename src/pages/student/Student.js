import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'Student',
  components: {
    ScreenBox,
    Tables,
    Paging
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.formData)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.formData.pageSize = size
      Request.getInfo(this, this.formData)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.formData.currentPage = size
      Request.getInfo(this, this.formData)
    },
    changeStatusValue (locked) { // 更新用户状态列表筛选函数
      this.formData.locked = locked
      Request.getInfo(this, this.formData)
    },
    search (type, val) { // 子组件筛选类型与值的返回函数
      this.formData.keyword = type
      this.formData.keywordValue = val
      Request.getInfo(this, this.formData)
    },
    onlocked (locked, userName) { // 修改用户是否锁定状态
      Request.onlocked(this, locked, userName)
    },
    passengerAdd () { // 新增用户弹层函数
      this.drawer = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      Request.onSubmit(this)
    },
    edit (locked, userName, realName, phoneNum) { // 编辑用户弹层函数
      this.formEdit.locked = locked
      this.formEdit.userName = userName
      this.formEdit.realName = realName
      this.formEdit.phoneNum = phoneNum
      this.dialogFormVisible = true
    },
    onSubmitEdit () { // 编辑帐号
      Request.onSubmitEdit(this)
    },
    deleteUser (userName) { // 注销帐号
      Request.deleteUser(this, userName)
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
      disabled: true, // 编辑状态下用户帐号不可编辑
      formData: { // 向用户列表数据接口传递数据
        roleId: 8, // 当前学员用户角色id
        pageSize: 20, // 分页单页显示条数
        currentPage: 1, // 每页页码
        locked: null, // 筛选用户状态值，是否锁定状态
        keyword: null, // 筛选搜索框类型值
        keywordValue: null // 筛选搜索框的值
      },
      tableData: [
        // { // 表格数据
        // // id: '',
        // // locked: '', // 用户锁定状态（默认：1正常, 0锁定, 2注销）
        // // loginTime: '', // 最后登录时间
        // // nickName: '', // 昵称
        // // phoneNum: '', // 手机号
        // // realName: '', // 真实姓名
        // // userName: '' // 帐号
        // },
      ],
      totalRows: null, // 分页数据总条数
      drawer: false, // 控制新增导航抽屉弹层是否展开
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        roleName: '', // 名称
        pass: '', // 密码
        checkPass: null,
        roleUser: null, // 姓名
        roleTel: null, // 手机号
        status: 1, // 状态 1 启用 0 禁用
        roleId: 8 // 角色Id
      },
      rules: { // 表单验证.
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
        roleName: [{ required: true, message: '请输入帐号', trigger: 'blur' }] // 帐号验证
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      formEdit: { // 编辑用户
        locked: null, // 状态
        userName: null, // 帐号
        realName: null, // 姓名
        phoneNum: null, // 手机号
        pass: null, // 密码
        checkPass: null, // 确认密码
        roleId: 8 // 角色id
      },
      ruless: { // 表单验证.
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }]
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
