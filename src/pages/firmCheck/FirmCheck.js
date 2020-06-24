import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import DetailTables from './components/detailTable'
import Paging from './components/Paging'
import PagingTwo from './components/PagingTwo'
import ZpDetil from './components/ZpDetil'
import Request from './Request.js' // 接口文件
import Bmap from './components/Bmap'
export default {
  name: 'FirmCheck',
  components: {
    ScreenBox,
    Tables,
    DetailTables,
    Paging,
    PagingTwo,
    ZpDetil,
    Bmap
  },
  computed: {
    // 是否禁用logo图片上传
    disabledLogo: function () { if (this.ruleForm.imageUrlLogo) { return true } else { return false } },
    // 是否禁用营业执照图片上传
    disabledYyzz: function () { if (this.ruleForm.imageUrlYyzz) { return true } else { return false } },
    // 是否禁用身份证照图片上传
    disabledSfz: function () { if (this.ruleForm.imageUrlSfz) { return true } else { return false } },
   logo () {
      return this.api + this.enterprise.logo
      console.log(this.logos)
    },
    businessLicense () {
       return '/api/' + this.enterprise.businessLicense
     },
     handIdcardPic () {
        return '/api/' + this.enterprise.handIdcardPic
      }
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
  },
  methods: {
    handlePreview (type) { // 放大预览照片
      this.centerDialogVisible = true
      this.dialogIf = true
      if (type === 'imageUrlLogo') {
        this.dialogTitle = '预览Logo'
        this.previewImg = this.previewImgSrcLogo
      } else if (type === 'imageUrlYyzz') {
        this.dialogTitle = '预览营业执照'
        this.previewImg = this.previewImgSrcYyzz
      } else if (type === 'imageUrlSfz') {
        this.dialogTitle = '预览身份证照'
        this.previewImg = this.previewImgSrcSfz
      }
    },
    handleRemove (type) { // 删除照片
      let _this = this
      setTimeout(function () { // 如果不设置延时，执行删除照片会继续执行上传照片
        if (type === 'imageUrlLogo') {
          _this.ruleForm.imageUrlLogo = ''
          _this.previewImgSrcLogo = ''
        } else if (type === 'imageUrlYyzz') {
          _this.ruleForm.imageUrlYyzz = ''
          _this.previewImgSrcYyzz = ''
        } else if (type === 'imageUrlSfz') {
          _this.ruleForm.imageUrlSfz = ''
          _this.previewImgSrcSfz = ''
        }
      }, 100)
    },
    handlePictureCardPreview (file, fileList, url) { // 上传图片时执行函数
      console.log(file.raw)
      if (url === 'imageUrlLogo') {
        this.centerDialogVisible = true // 打开剪切弹层
        this.dialogTitle = '裁剪Logo'
        this.dialogIf = false
        this.option.img = file.url
      } else if (url === 'imageUrlYyzz') {
        this.ruleForm.imageUrlYyzz = file.raw
        this.previewImgSrcYyzz = file.url
      } else if (url === 'imageUrlSfz') {
        this.ruleForm.imageUrlSfz = file.raw
        this.previewImgSrcSfz = file.url
      }
    },
    realTime () { // 点击确定，获取截图的blob 数据
      this.$refs.cropper.getCropBlob((data) => {
        let Data = window.URL.createObjectURL(data)
        this.ruleForm.imageUrlLogo = data
        this.previewImgSrcLogo = Data
        this.centerDialogVisible = false
      })
    },
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.locked, this.checkStatus, this.createTime, this.searchType, this.searchValue)
    },
    getInfoTwo (size) { // 更新详情页分页单页显示条数
      this.pageSizeTwo = size
      Request.lookUser(this, this.enterpriseId, this.pageSizeTwo, this.currentTwo)
    },
    getInfo_currentTwo (size) { // 更新详情页每页页码函数
      this.currentTwo = size
      Request.lookUser(this, this.enterpriseId, this.pageSizeTwo, this.currentTwo)
    },
    changeStatusValue (locked) { // 更新用户状态列表筛选函数
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
    onlocked (locked, id) { // 修改状态
      Request.onlocked(this, locked, id)
    },
    driverAdd () { // 新增管理员弹层函数
      Request.getClassifyList(this) // 获取行业分类列表
      this.disabled = false
      this.addUpdateTitle = "新增企业信息"
      this.addUpdateButton = '立即创建'
      this.ruleForm.id = ''
      this.drawer = true
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    onSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmit(this)
        } else {
          return false // 表单验证不通过
        }
      })
    },
    edit (obj, email) { // 编辑企业信息弹层函数
      Request.getClassifyList(this) // 获取行业分类列表
      // this.ruleForm.id = obj.id
      this.ruleForm.id = obj.id
      this.ruleForm.locked = obj.locked
      this.ruleForm.enterpriseName = obj.enterpriseName
      this.ruleForm.industryId = obj.industryId
      this.ruleForm.comapnyType = obj.comapnyType
      this.ruleForm.comapnyNum = obj.comapnyNum
      this.ruleForm.address = obj.address
      this.ruleForm.cityName = obj.cityName // 市
      this.ruleForm.lng = obj.bdlng // 经度
      this.ruleForm.lat = obj.bdlat // 纬度
      this.ruleForm.legalPerson = obj.legalPerson
      this.ruleForm.legalPersonPhone = obj.legalPersonPhone
      this.ruleForm.realName = obj.realName
      this.ruleForm.idcard = obj.idcard // 身份证号
      this.ruleForm.phoneNum = obj.phoneNum
      this.ruleForm.email = obj.email // 邮箱
      this.ruleForm.pass = obj.pass
      this.ruleForm.checkPass = obj.pass
      this.ruleForm.businessLicenseId = obj.businessLicenseId
      this.previewImgSrcLogo = this.api + obj.logo // logo
      this.ruleForm.imageUrlLogo = this.api + obj.logo // logo
      this.previewImgSrcSfz = this.api + obj.handIdcardPic // 手持身份证照片
      this.ruleForm.imageUrlYyzz = this.api + obj.handIdcardPic // logo
      this.previewImgSrcYyzz = this.api + obj.businessLicense // 营业执照照片
      this.ruleForm.imageUrlSfz = this.api + obj.businessLicense // logo
      this.addUpdateTitle = "编辑企业信息"
      this.addUpdateButton = '保存'
      this.drawer = true
      this.disabled = true
      console.log(this.ruleForm.email)
      console.log(email)
    },
    onSubmitEdit () { // 编辑帐号
      Request.onSubmitEdit(this)
    },
    // deleteUser (userName) { // 注销帐号
    //   Request.deleteUser(this, userName)
    // },
    lookUser (id) { // 查看实名认证详情
      this.centerDialogVisibleDetail = true
      this.enterpriseId = id
      Request.lookUser(this, id, this.pageSizeTwo, this.currentTwo)
    },
    changeCheckType (val, id) { // 修改审核状态
      Request.changeCheckType(this, val, id)
    },
    lookdetil (obj) {
      this.innerVisible = true
      this.sysUserApproval = obj
    },
    selectAddress () { // 选择地址
      this.dialogFormVisible = false
      this.ruleForm.lng = this.form.addrPoint.lng
      this.ruleForm.lat = this.form.addrPoint.lat
      this.ruleForm.address = this.form.address
      this.ruleForm.cityName = this.form.cityName
    },
    mapShow () { // 地图显示
      this.dialogFormVisible = true
    },
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
        return callback(new Error('请输入手机号'));
      } else {
        const reg = /^([1]\d{10}|([\(（]?0[0-9]{2,3}[）\)]?[-]?)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?)$/
        console.log(reg.test(value))
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的号码'))
        }
      }
    }
    // 身份证号码校验
    var checkIdcard = (rule, value, callback) => {
      if (value && (!(/\d{17}[\d|x]|\d{15}/).test(value) || (value.length !== 15 && value.length !== 18))) {
        return callback(new Error('身份证号码不符合规范'))
      } else {
        callback()
      }
    }
    return {
      centerDialogVisible: false, // 剪裁框弹层，默认关闭
      dialogFormVisible: false, // 地图对话框
      form: { // 地图信息
        address: '', // 详细地址
        addrPoint: { // 详细地址经纬度
          lng: 0,
          lat: 0
        },
        cityName: '' // 市
      },
      disabledImg: false, // 是否上传图片
      dialogTitle: '', // 弹层标题
      dialogIf: false, // false 显示裁切， true 显示预览
      previewImg: '', // 预览图片路径
      previewImgSrcLogo: '', // logo回显路径
      previewImgSrcYyzz: '', // 营业执照回显路径
      previewImgSrcSfz: '', // 身份证回显路径
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        autoCrop: true, // 是否生成截图框
        autoCropWidth: 200, // 截图框宽度
        autoCropHeight: 200, // 截图框高度
        centerBox: true, // 截图框是否限制在图片内
        fixed: true, // 宽高比例固定
        info: false, // 裁剪框大小的信息
        enlarge: 2 // 裁剪图片放大倍数
      },
      api: this.$store.state.httpUrl,
      upload_url: '/api/company/saveAndUpdateCompany.htm', // 上传地址,
      upload: '',
      logo_path: [{name: '', url: ''}],
      addUpdateTitle: '新增企业信息',
      addUpdateButton: '立即创建',
      isChooseBack: false,
      isChooseFace: false, // 图片是否放大
      centerDialogVisibleDetail: false, // 实名认证详情对话框
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
      enterprise: {}, // 企业信息对象
      sysUsePulse: {}, // 企业用户对象
      EnterpriseData: {}, // 信息对象
      companyRecruitPositionList: [], // 招聘岗位集合
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      current: 1, // 每页页码
      totalRowsTwo: null, // 分页数据总条数
      pageSizeTwo: 20, // 分页单页显示条数
      currentTwo: 1, // 每页页码
      enterpriseId: null, // 企业id
      dialogFormVisible: false, // 对话框的展开隐藏
      sysUserApproval: {}, // 招聘详情对象
      locked: null, // 筛选用户状态值
      checkStatus: null, // 筛选审核状态
      createTime: '', // 搜索日期
      searchType: null, // 搜索框类型值
      searchValue: null, // 搜索框的值
      drawer: false, // 控制新增导航抽屉弹层是否展开
      innerVisible: false, // 详情中的查看详情
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
        id: null,
        locked: null, // 状态
        userName: null, // 管理员账号
        realName: '', // 管理员姓名
        idcard: '', // 管理员身份证号
        phoneNum: '', // 管理员手机号
        email: '', // 管理员邮箱
        pass: null, // 密码
        checkPass: null, // 确认密码
        enterpriseName: '', // 企业名称
        industryId: '', // 所属行业id
        comapnyType: '', // 企业类型
        comapnyNum: '', // 企业规模
        address: '', //地址
        cityName: '', // 城市
        lat: '', // 纬度
        lng: '', // 经度
        legalPerson: '', // 法人
        legalPersonPhone: '', // 法人联系方式
        businessLicenseId: '', // 营业执照号
        imageUrlLogo: '', // logo图片blob地址logoFile
        imageUrlYyzz: '', // 营业执照blob地址businessLicenseFile
        imageUrlSfz: '' // 管理员手持身份证blob地址handIdcardPicFile
      },
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
      rules: { // 表单验证.
        pass: [{ required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [{ required: true, validator: validatePass2, trigger: 'blur' }],
        enterpriseName: [{ required: true, message: '请输入企业名称', trigger: 'blur' }],
        legalPerson: [{ required: true, message: '请输入法人名称', trigger: 'blur' }],
        legalPersonPhone: [{ required: true,validator: checkPhone, trigger: 'blur' }],
        phoneNum: [{ required: true, validator: checkPhone, trigger: 'blur' }], // 管理员手机号
        realName: [{ required: true, message: '请输入管理员名称', trigger: 'blur'}], // 管理员姓名
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ], // 管理员邮箱
        idcard: [{ required: true,validator: checkIdcard, trigger: 'blur' }], // 身份证号码校验
        businessLicenseId: [{ required: true, message: '请输入营业执照号', trigger: 'blur'}],
        industryId: [{ required: true, message: '请输入管理员名称', trigger: 'blur'}] ,// 所属企业id校验
        imageUrlLogo: [{ required: true, message: '请上传企业logo', trigger: 'blur'}], // 企业Logo校验
        imageUrlYyzz: [{ required: true, message: '请上传营业执照', trigger: 'blur'}], // 营业执照校验
        imageUrlSfz: [{ required: true, message: '请上传管理员手持身份证照片', trigger: 'blur'}] // 手持身份证照片校验
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
