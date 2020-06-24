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
    Request.getInfo(this)
  },
  methods: {
    welfareAdd () { // 新增锑度值弹层函数
      this.welfareButton = '立即创建'
      this.welfareTitle = '新增梯度值'
      this.ruleForm.id = null
      this.drawer = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      Request.onSubmit(this)
    },
    edit (obj) { // 编辑用户弹层函数
      this.welfareButton = '保存'
      this.welfareTitle = '编辑梯度值'
      this.drawer = true
      this.ruleForm.id = obj.id
      this.ruleForm.title = obj.rewardMoney
      this.ruleForm.status = obj.status
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
      drawer: false, // 控制新增导航抽屉弹层是否展开
      welfareButton: '立即创建', // 福利抽屉按钮
      welfareTitle: '新增梯度值', // 福利抽屉标题
      ruleForm: { // 新增修改福利，用于将数据提交至axios
        id: '', // id
        title: '', // 梯度值
        status: 1 // 状态值
      },
      rules: { // 表单验证.
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }] // 标题验证
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
