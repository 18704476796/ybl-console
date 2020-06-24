import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import ClassCheck from './components/ClassCheck'
import Request from './Request.js' // 接口文件
import EditorBar from '@/common/wangEnduit/WangEnduit.vue'
export default {
  name: 'CommonProblems',
  components: {
    ScreenBox,
    Tables,
    Paging,
    EditorBar,
    ClassCheck
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition)
    Request.getClassifyList(this)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime)
    },
    advertisingNameSearch (locked) { // 问题标题查询
      this.advertisingName = locked
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition)
    },
    advPositionSearch (locked) { // 分类查询
      this.advPosition = locked
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition)
    },
    advAdd () { // 新增广告弹层函数
      this.disabled = false
      this.addUpdateTitle = "新建问题"
      this.addUpdateButton = '立即创建'
      this.ruleForm.id = ''
      this.drawer = true
    },
    classCheckShow () { // 分类管理弹出
      this.centerDialogVisible = true
    },
    addClassify () { // 分类管理添加按钮
      this.classForm.id = null
      this.innerDrawer = true
      this.classifyTitle = '添加分类'
      this.classButton = '立即创建'
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () { // w问题的提交
      this.$refs.ruleForm.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmit(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    onSubmitClass () { // 分类管理提交
      this.$refs.classForm.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmitClass(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    classEdit (obj) { // 分类管理编辑
      this.classForm.id = obj.id
      this.classForm.name = obj.classifyText
      this.classifyTitle = '编辑分类'
      this.classButton = '保存'
      this.innerDrawer = true
    },
    edit (obj) { // 编辑问题信息弹层函数
      this.ruleForm.id = obj.id // 问题id
      this.ruleForm.type = obj.parentId // 分类id
      this.ruleForm.locked = obj.status // 显示隐藏
      this.ruleForm.content = obj.answerHelp // 问题内容
      this.ruleForm.title = obj.title // 问题内容
      this.addUpdateTitle = "编辑问题"
      this.addUpdateButton = '保存'
      this.drawer = true
      this.disabled = false
    },
    classDelete (id) { // 分类管理删除
      Request.deleteUser(this, id)
    },
    deleteUser (id) { // 问题删除
      Request.deleteUser(this, id)
    },
    lookUser (obj) { // 问题详情查看
      this.ruleForm.id = obj.id // 问题id
      this.ruleForm.type = obj.parentId // 分类id
      this.ruleForm.locked = obj.status // 显示隐藏
      this.ruleForm.content = obj.answerHelp // 问题内容
      this.ruleForm.title = obj.title // 问题内容
      this.addUpdateTitle = "问题详情"
      this.addUpdateButton = '保存'
      this.drawer = true
      this.disabled = true
    }
  },
  data () {
    return {
      isClear: false,
      addUpdateTitle: '新增问题',
      addUpdateButton: '立即创建',
      disabled: false, // 表单为true则不可编辑
      tableData: [{
      }],
      classTableData: [{ // 分类管理表格
      }],
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      advertisingName: '', // 问题标题
      advPosition: null, // 分类
      drawer: false, // 控制新增导航抽屉弹层是否展开
      innerDrawer: false,
      centerDialogVisible: false, // 分类管理弹框
      classifyTitle: '', // 分类管理添加修改标题
      classButton: '', // 分类提交按钮
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        id: null,
        locked: '0', // 显示隐藏
        title: '', // 问题标题
        type: null, // 问题分类
        content: '' // 问题内容
      },
      positionList: [{ // 问题分类列表
        id: 1,
        classifyText: 'app首页活动'
      }, {
        id: 2,
        classifyText: '赏金活动'
      }],
      classTypeList: [{ // 分类类型
        label: 0,
        value: '分类'
      }, {
        label: 1,
        value: '数据'
      }],
      rules: { // 表单验证.
        title: [{ required: true, message: '请输入问题标题', trigger: 'blur' }],
        type: [{ required: true, message: '请选择问题分类', trigger: 'blur'}]
      },
      classForm: { // 新增修改分类管理数据
        id: null,
        name: '' // 分类名称
      },
      ruless: { // 表单验证.
        name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }]
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
