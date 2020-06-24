import Request from './Request.js' // 接口文件
import ScreenBox from './components/ScreenBox'
export default {
  name: 'SetPlatform',
  components: {
    ScreenBox
  },
  mounted () { // 钩子函数
    Request.getInfo(this)
  },
  watch: {
    ['formEdit.collectionAccount'](val) {
      this.$nextTick(() => {
        this.formEdit.collectionAccount = val.replace(/\D/g,'').replace(/....(?!$)/g,'$& ')
      })
    }
  },
  methods: {
    edit () {
      this.editDis = true
      this.disabled = false
      this.bigDisabled = false
    },
    onSubmitEdit () { // 编辑解决问题
      this.$refs.formEdit.validate((valid) => {
        if (valid) { // 表单验证通过
          Request.onSubmitEdit(this)
          this.editDis = false
          this.disabled = true
          this.bigDisabled = true
        } else {
          return false // 表单验证不通过
        }
      })
    },
    handlePreview (type) { // 放大预览照片
      this.centerDialogVisible = true
      this.dialogIf = true
      this.dialogTitle = '预览图片'
      this.previewImg = this.previewImgSrcLogo
    },
    handlePictureCardPreview (file, fileList, url) { // 上传图片时执行函数
      this.centerDialogVisible = true // 打开剪切弹层
      this.dialogTitle = '裁剪图片'
      this.dialogIf = false
      this.option.img = file.url
    },
    realTime () { // 点击确定，获取截图的blob 数据
      this.$refs.cropper.getCropBlob((data) => {
        let Data = window.URL.createObjectURL(data)
        this.formEdit.imageUrlLogo = data
        this.previewImgSrcLogo = Data
        this.centerDialogVisible = false
      })
    }
  },
  data () {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('客服热线不能为空'));
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
      upload_url: '/api/company/saveAndUpdateCompany.htm', // 上传地址,
      upload: '',
      upload1: '',
      back_path: [{name: '', url: ''}],
      logo_path: [{name: '', url: ''}],
      disabled: true, // 表单为true则不可编辑
      bigDisabled: true, // 图片放大按钮
      editDis: false, // 编辑按钮
      formEdit: { // 修改解决方案数据
        id: null,
        productName: '', // 名称
        productTitle: '', // 标题
        collectionAccount: '', // 收款账号
        productIntroduction: '', // 平台描述
        productKeyword: '', // 关键词
        back_path: this.back_path,
        imageUrlLogo: '', // logo
        tel: '', // 电话
        email: '', // 邮编
        hostUnit: '', // 传真
        webId: '', // 地址
        icpNumb: '', // 邮编
        publicNetworkSecurity: '', //技术支持
        userAgreement: '', // 用户协议
        backgroundUrl: '', // 背景图片
        productVersion: '', // 版本
        otherInformation: '' // 其他
      },
      centerDialogVisible: false, // 剪裁框弹层，默认关闭
      disabledImg: false, // 是否上传图片
      dialogTitle: '', // 弹层标题
      dialogIf: false, // false 显示裁切， true 显示预览
      previewImg: '', // 预览图片路径
      previewImgSrcLogo: '', // logo回显路径
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
      sysUserApproval: {}, // 审核信息
      rules: { // 表单验证.
        productName: [{ required: true, message: '请输入平台名称', trigger: 'blur'}], // 名称
        productTitle: [{ required: true, message: '请输入平台标题', trigger: 'blur'}], // 标题
        productIntroduction: [{ required: true, message: '请输入平台描述', trigger: 'blur'}], // 描述
        productKeyword: [{ required: true, message: '请输入关键词', trigger: 'blur'}], // 关键词
        collectionAccount: [{ required: true, message: '请输入收框账号', trigger: 'blur'}], // 收款账号
        imageUrlLogo: [{ required: true, message: '请上传logo', trigger: 'blur'}], // logo
        tel: [
          {validator: checkPhone, trigger: 'blur'},
          { required: true, message: '请输入客服热线', trigger: 'blur'},
        ], // 电话校验
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ] // 邮箱
      },
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
