<!-- 财务管理 -->
<template>
  <div class="box">
    <screen-box
      @search="search"
      @changeStatusValue='changeStatusValue'
      @exportExcel='exportExcel'>
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      @lookUser='lookUser'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-dialog
      title="公司流水"
      :visible.sync="centerDialogVisible"
      width="90%"
      center>
      <div class="talentsDetal">
        <detail-tables
          :financeFlowList='financeFlowList'
          :tableHeight="tableHeight"
        >
        </detail-tables>
        <paging-two
        :totalRowsTwo="totalRowsTwo"
        :pageSizeTwo="pageSizeTwo"
        @getInfoTwo="getInfoTwo"
        @getInfo_currentTwo="getInfo_currentTwo"
        >
        </paging-two>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./FinanceCheck.js"></script>
<style lang="stylus" scoped src="./FinanceCheck.css"></style>
