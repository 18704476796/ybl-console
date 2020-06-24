import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
import EditorBar from '@/common/wangEnduit/WangEnduit.vue'
export default {
  name: 'OperationCheck',
  components: {
    ScreenBox,
    Tables,
    Paging,
    EditorBar
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime)
    },
    advertisingNameSearch (locked) { // 广告名称查询
      this.advertisingName = locked
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime, this.searchType, this.searchValue)
    },
    advPositionSearch (locked) { // 广告位置查询
      this.advPosition = locked
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime)
    },
    changeDate (val) { // 到期时间查询
      this.createTime = val
      Request.getInfo(this, this.pageSize, this.current, this.advertisingName, this.advPosition, this.createTime)
    },
    advAdd () { // 新增广告弹层函数
      this.previewImgSrcLogo = ''
      this.disabled = false
      this.addUpdateTitle = "新增广告信息"
      this.addUpdateButton = '立即创建'
      this.ruleForm.id = ''
      this.drawer = true
      this.editDisable = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) { // 表单验证通过
          if (this.ruleForm.startTime >= this.ruleForm.endTime) {
            this.timeTo = true
          } else {
            Request.onSubmit(this)
            this.timeTo = false
          }
        } else {
          return false // 表单验证不通过
        }
      })
    },
    edit (obj) { // 编辑活动信息弹层函数
      this.editDisable = true
      this.ruleForm.id = obj.id
      this.ruleForm.name = obj.name // 广告名称
      this.ruleForm.position = obj.advertisingLocation // 广告位置
      this.ruleForm.startTime = obj.startTime // 开始时间
      this.ruleForm.endTime = obj.endTime // 结束时间
      if (obj.staues == 0) {
        this.ruleForm.goOut = '下线'
      } else {
        this.ruleForm.goOut = '上线'
      }
      this.ruleForm.type = obj.type // 广告类型
      this.ruleForm.address = obj.linkUrl // 广告链接id
      this.previewImgSrcLogo = this.api + obj.pictureUrl // 广告图片
      this.ruleForm.imageUrlLogo = this.api + obj.pictureUrl // 广告图片
      this.ruleForm.content = obj.fContent // 广告内容
      this.addUpdateTitle = "编辑广告信息"
      this.addUpdateButton = '保存'
      this.drawer = true
      this.disabled = false
    },
    deleteUser (id) { // 注销帐号
      Request.deleteUser(this, id)
    },
    lookUser (obj) { // 查看详情
      this.centerDialogVisible = true
      this.enterprise = obj
    },
    imgScc () {
      this.isChooseFace = !this.isChooseFace
    },
    logo_path_file (file, fileList) {
      // logo上传组件 on-change 事件
      this.logo_path = fileList
      this.ruleForm.logo_path = fileList[0]
    },
    clearUploadedImage (type) {
      if (type === 'upload') {
        this.$refs.upload.clearFiles()
        this.logo_path = []
      } else {
        this.$refs.upload1.clearFiles()
        this.back_path = []
      }
      console.log(type)
    },
    handlePreview (type) { // 放大预览照片
      this.centerDialogVisibles = true
      this.dialogIf = true
      this.dialogTitle = '预览图片'
      this.previewImg = this.previewImgSrcLogo
    },
    handleRemove (type) { // 删除照片
      let _this = this
      setTimeout(function () { // 如果不设置延时，执行删除照片会继续执行上传照片
        _this.ruleForm.imageUrlLogo = ''
        _this.previewImgSrcLogo = ''
      }, 100)
    },
    handlePictureCardPreview (file, fileList, url) { // 上传图片时执行函数
      this.centerDialogVisibles = true // 打开剪切弹层
      this.dialogTitle = '裁剪图片'
      this.dialogIf = false
      this.option.img = file.url
    },
    realTime () { // 点击确定，获取截图的blob 数据
      this.$refs.cropper.getCropBlob((data) => {
        let Data = window.URL.createObjectURL(data)
        this.ruleForm.imageUrlLogo = data
        this.previewImgSrcLogo = Data
        this.centerDialogVisibles = false
      })
    }
  },
  data () {
    return {
      isClear: false,
      editDisable: true, // 编辑框是否可编辑
      api: this.$store.state.httpUrl,
      upload_url: '/api/backActivity/saveOrUpdActivityList.htm', // 上传地址,
      upload: '',
      logo_path: [{name: '', url: ''}],
      addUpdateTitle: '新增企业信息',
      addUpdateButton: '立即创建',
      isChooseFace: false, // 图片是否放大
      centerDialogVisible: false, // 详情对话框
      enterprise: {}, // 详情对象
      disabled: false, // 表单为true则不可编辑
      tableData: [{
      }],
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      advertisingName: '', // 广告名称
      advPosition: '', // 广告位置
      createTime: '', // 搜索到期日期
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      timeTo: false, // 校验开始时间和结束时间
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        autoCrop: true, // 是否生成截图框
        autoCropWidth: 750, // 截图框宽度
        autoCropHeight: 300, // 截图框高度
        centerBox: true, // 截图框是否限制在图片内
        fixed: false, // 宽高比例固定
        info: false, // 裁剪框大小的信息
        enlarge: 1 // 裁剪图片放大倍数
      },
      centerDialogVisibles: false, // 剪裁框弹层，默认关闭
      dialogTitle: '', // 弹层标题
      dialogIf: false, // false 显示裁切， true 显示预览
      previewImg: '', // 预览图片路径
      previewImgSrcLogo: '', // logo回显路径
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        id: null,
        name: '', // 广告名称
        imageUrlLogo: '',
        position: '', // 广告位置
        startTime: '', // 开始时间
        endTime: '', // 结束时间
        goOut: '', // 上线下线
        address: '', // 广告链接
        desc: '', // 广告备注
        content: '',
        type: null // 广告类型
      },
      typeList: [{ // 广告类型
        label: 1,
        value: '赏金活动'
      }, {
        label: 2,
        value: '岗位首页活动'
      }],
      positionList: [{ // 广告位置列表
        label: '1',
        value: 'app首页活动'
      }, {
        label: '2',
        value: '赏金活动'
      }],
      rules: { // 表单验证.
        name: [{ required: true, message: '请输入广告名称', trigger: 'blur' }],
        goOut: [{ required: true, message: '请选择上线/下线', trigger: 'blur' }],
        imageUrlLogo: [{ required: true, message: '请上传图片', trigger: 'blur' }],
        position: [{ required: true, message: '请选择广告位置', trigger: 'blur'}],
        content: [{ required: true, message: '请输入广告内容', trigger: 'blur'}],
        startTime: [{ required: true, message: '请选择开始时间', trigger: 'blur'}],
        endTime: [{ required: true, message: '请选择结束时间', trigger: 'blur'}],
        address: [{ required: true, message: '请输入广告链接', trigger: 'blur'}],
        content: [{ required: true, message: '请输入广告内容', trigger: 'blur'}]
      },
      dialogFormVisible: false, // 对话框的展开隐藏
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
