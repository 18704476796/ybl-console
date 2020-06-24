import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
export default {
  name: 'FirmCheck',
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
    changelist () {
      console.log(this.ruleForm.industryName)
       let industryName = null
      if (this.ruleForm.industryName.length>1) {
        industryName = this.ruleForm.industryName[1]
      } else {
        industryName = this.ruleForm.industryName[0]
      }
      console.log(industryName)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    lookUser (id) { // 查看实名认证详情
      this.centerDialogVisible = true
      this.userId = id
      Request.lookUser(this, id)
    },
    // changeCheckType (val, id) { // 修改审核状态
    //   Request.changeCheckType(this, val, id)
    // },
    imgScc (val) { // 身份证图片放大
      if (val === 'isLogo') {
        this.isLogo = !this.isLogo
        this.isYyzz = false
        this.isFrsfz = false
      } else if (val === 'isYyzz') {
        this.isLogo = false
        this.isYyzz = !this.isYyzz
        this.isFrsfz = false
      } else {
        this.isLogo = false
        this.isYyzz = false
        this.isFrsfz = !this.isFrsfz
      }
    },
    onCheck () { // 点击审核通过
      this.userAuthStatus = 1
      Request.checkResult(this, this.enterprise.userId, this.userAuthStatus, this.ruleForm.authRemark)
    },
    failChexk () { // 点击审核失败
      this.innerVisible = true
      this.userAuthStatus = -2
    },
    submitForm(formName) { // 驳回提交
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Request.checkResult(this, this.enterprise.userId, this.userAuthStatus, this.ruleForm.authRemark)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) { // 取消
      this.$refs[formName].resetFields()
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
      api: this.$store.state.httpUrl,
      isLogo: false, // logo是否放大
      isYyzz: false, // 营业执照是否放大
      isFrsfz: false, // 手持身份证是否放大
      centerDialogVisible: false, // 实名认证详情对话框
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
      innerVisible: false, // 嵌套层
      authRemark: '', // 驳回备注
      enterprise: {}, // 企业信息对象
      sysUsePulse: {}, // 企业用户对象
      EnterpriseData: {}, // 信息对象
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      locked: null, // 筛选用户状态值
      checkStatus: null, // 筛选审核状态
      createTime: '', // 搜索日期
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      options: [ // 行业分类列表
      ],
      firmType: [{ // 企业类型列表
        value: '合资',
        label: '合资'
      }, {
        value: '独资',
        label: '独资'
      }, {
        value: '国有',
        label: '国有'
      }, {
        value: '央企',
        label: '央企'
      }, {
        value: '私营',
        label: '私营'
      }, {
        value: '全民所有制',
        label: '全民所有制'
      }, {
        value: '集体所有制',
        label: '集体所有制'
      }, {
        value: '股份制',
        label: '股份制'
      }, {
        value: '有限责任',
        label: '有限责任'
      }],
      firmScale: [{ // 企业规模列表
        value: '特大型',
        label: '特大型'
      }, {
        value: '大型',
        label: '大型'
      }, {
        value: '中型',
        label: '中型'
      }, {
        value: '小型',
        label: '小型'
      }, {
        value: '微型',
        label: '微型'
      }],
      userAuthStatus: null, // 审核状态
      userId: null, // 企业id
      ruleForm: {
        authRemark: ''
      }, // 备注
      rules: { // 表单验证.
        authRemark: [{ required: true, message: '请输入驳回备注', trigger: 'blur' }]
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
