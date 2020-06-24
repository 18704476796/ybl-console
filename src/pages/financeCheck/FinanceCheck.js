import ScreenBox from './components/ScreenBox'
import Tables from './components/Tables'
import Paging from './components/Paging'
import Request from './Request.js' // 接口文件
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import DetailTables from './components/detailTable'
import PagingTwo from './components/PagingTwo'
export default {
  name: 'FinanceCheck',
  components: {
    ScreenBox,
    Tables,
    Paging,
    DetailTables,
    PagingTwo
  },
  mounted () { // 钩子函数
    Request.getInfo(this, this.pageSize, this.current, this.status, this.searchType, this.searchValue)
  },
  methods: {
    getInfo (size) { // 更新分页单页显示条数
      this.pageSize = size
      Request.getInfo(this, this.pageSize, this.current, this.status, this.searchType, this.searchValue)
    },
    getInfo_current (size) { // 更新每页页码函数
      this.current = size
      Request.getInfo(this, this.pageSize, this.current, this.status, this.searchType, this.searchValue)
    },
    search (searchType, searchValue) { // 搜索查询
      this.searchType = searchType
      this.searchValue = searchValue
      Request.getInfo(this, this.pageSize, this.current, this.status, this.searchType, this.searchValue)
    },
    changeStatusValue (val) { // 账户状态查询
      this.status = val
      Request.getInfo(this, this.pageSize, this.current, this.status, this.searchType, this.searchValue)
    },
    handleClose (done) { // 抽屉弹出关闭
      done()
    },
    getInfoTwo (size) { // 更新详情页分页单页显示条数
      this.pageSizeTwo = size
      Request.lookUser(this, this.financeId, this.pageSizeTwo, this.currentTwo)
    },
    getInfo_currentTwo (size) { // 更新详情页每页页码函数
      this.currentTwo = size
      Request.lookUser(this, this.financeId, this.pageSizeTwo, this.currentTwo)
    },
    lookUser (id) {
      Request.lookUser(this, id, this.pageSizeTwo, this.currentTwo)
      this.centerDialogVisible = true
      this.financeId = id
    },
    //定义导出Excel表格事件
    exportExcel () {
    /* 从表生成工作簿对象 */
    var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"))
    /* 获取二进制字符串作为输出 */
    var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
    });
    try {
        FileSaver.saveAs(
        //Blob 对象表示一个不可变、原始数据的类文件对象。
        //Blob 表示的不一定是JavaScript原生格式的数据。
        //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
        //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
        new Blob([wbout], { type: "application/octet-stream" }),
        //设置导出文件名称
        "sheetjs.xlsx"
        );
    } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
    }
    return wbout;
    }
  },
  data () {
    return {
      centerDialogVisible: false, // 实名认证详情对话框
      tableData: [{
        id: 1
      }],
      finance: {}, // 财务详情对象
      searchValue: '',
      searchType: null,
      totalRows: null, // 分页数据总条数
      pageSize: 20, // 分页单页显示条数
      status: null,
      current: 1, // 每页页码
      ruleForm: { // 新增导航抽屉弹层所收集的表单数据，用于将数据提交至axios
      },
      totalRowsTwo: null, // 分页数据总条数
      pageSizeTwo: 20, // 分页单页显示条数
      currentTwo: 1, // 每页页码
      financeId: null, // 金融id
      financeFlowList: [], // 流水号列表
      dialogFormVisible: false, // 对话框的展开隐藏
      tableHeight: this.$store.state.mainHeight - 170 // 76为main顶部及填充值
    }
  }
}
