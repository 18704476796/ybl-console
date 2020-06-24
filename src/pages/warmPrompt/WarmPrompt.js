import Request from './Request.js' // 接口文件
import EditorBar from '@/common/wangEnduit/WangEnduit.vue'
export default {
  name: 'UserAgreement',
  components: {
    EditorBar
  },
  mounted () { // 钩子函数
    Request.getInfo(this)
  },
  methods: {
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmitEdit () {
      this.$refs.formEdit.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmit(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    edit (obj) { // 编辑企业信息弹层函数
      this.editDis = true
      this.disabled = false
    }
  },
  data () {
    return {
      isClear: false,
      drawer: false, // 控制新增导航抽屉弹层是否展开
      editDis: false, // 编辑按钮
      disabled: true, // 提交按钮
      formEdit: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        id: null,
        reminder: '' // 温馨提示
      },
      rules: { // 表单验证.
        reminder: [{ required: true, message: '请输入温馨提示', trigger: 'blur'}], // 协议
      }
    }
  }
}
