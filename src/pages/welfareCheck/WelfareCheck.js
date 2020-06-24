import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Request from './Request.js' // 接口文件
export default {
  name: 'WelfareCheck',
  components: {
    ScreenBox,
    Tables
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.type)
  },
  methods: {
    changeStatusValue (type) { // 福利类型筛选函数
      this.type = type
      Request.getInfo(this, this.type)
    },
    welfareAdd () { // 新增福利弹层函数
      this.welfareButton = '立即创建'
      this.welfareTitle = '新增福利'
      this.ruleForm.id = null
      this.drawer = true
    },
    payAdd () { // 新增薪资弹层函数
      this.payButton = '立即创建'
      this.payTitle = '新增薪资'
      this.formEdit.id = null
      this.dialogFormVisible = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      Request.onSubmit(this)
    },
    edit (obj) { // 编辑用户弹层函数
      if (obj.type == 1) {
        this.welfareButton = '保存'
        this.welfareTitle = '编辑福利'
        this.ruleForm.id = obj.id
        this.ruleForm.title = obj.title
        this.drawer = true
      } else if (obj.type == 2) {
        this.payButton = '保存'
        this.payTitle = '编辑薪资'
        this.formEdit.id = obj.id
        this.formEdit.startSalary = obj.startSalary
        this.formEdit.endSalary = obj.endSalary
        this.dialogFormVisible = true
      }
    },
    onSubmitEdit () { // 新增,编辑薪资函数
      Request.onSubmitEdit(this)
    },
    deleteUser (id) { // 删除
      Request.deleteUser(this, id)
    }
  },
  data () {
    return {
      disabled: true, // 编辑状态下用户帐号不可编辑
      tableData: [
      ],
      type: '', // 福利类型
      drawer: false, // 控制新增导航抽屉弹层是否展开
      welfareButton: '立即创建', // 福利抽屉按钮
      welfareTitle: '新增福利', // 福利抽屉标题
      ruleForm: { // 新增修改福利，用于将数据提交至axios
        id: '', // id
        title: '', // 标题
      },
      rules: { // 表单验证.
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }] // 标题验证
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      payTitle: '新增薪资',
      payButton: '立即创建',
      formEdit: { // 编辑用户
        id: null, // id
        startSalary: '', // 开始薪资
        endSalary: '', // 结束薪资
      },
      ruless: { // 表单验证.
        startSalary: [{ required: true, message: '请输入标题', trigger: 'blur' }], // 薪资验证
        endSalary: [{ required: true, message: '请输入标题', trigger: 'blur' }] // 薪资验证
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
