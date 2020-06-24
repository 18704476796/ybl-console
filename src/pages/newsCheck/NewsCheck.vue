<!-- 消息管理 -->
<template>
  <div class="box">
    <screen-box
      @search="search"
      @changeCheckStatus='changeCheckStatus'
      @changeDate='changeDate'
      @sendMessage='sendMessage'
      :releaseUserList='releaseUserList'>
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      @lookUser='lookUser'
      @deleteUser='deleteUser'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-dialog
      title="消息详情"
      :visible.sync="centerDialogVisible"
      width="60%"
      center>
      <div class="border">
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">编号</div>
          <div class="financeCont">{{ruleForm.id}}</div>
        </div>
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">状态</div>
          <div class="financeCont">
            <span v-show="ruleForm.mark==0">未读</span>
            <span v-show="ruleForm.mark==1">已读</span>
          </div>
        </div>
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">接收角色</div>
          <div class="financeCont">{{ruleForm.receiveRole}}</div>
        </div>
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">消息来源</div>
          <div class="financeCont">
            <span v-show="ruleForm.type==1">平台推送</span>
            <span v-show="ruleForm.type==2">内推进度</span>
            <span v-show="ruleForm.type==3">岗位推送</span>
          </div>
        </div>
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">发布人</div>
          <div class="financeCont">{{ruleForm.releaseUser}}</div>
        </div>
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">发布时间</div>
          <div class="financeCont">{{ruleForm.releaseTime}}</div>
        </div>
        <div class="financeInfo border-bottom">
          <div class="financeTitle border-right">消息标题</div>
          <div class="financeCont">{{ruleForm.title}}</div>
        </div>
        <div class="financeInfo">
          <div class="financeTitle border-right">消息内容</div>
          <div class="financeCont">{{ruleForm.content}}</div>
        </div>
      </div>
    </el-dialog>
    <el-drawer
      title="发送消息"
      :visible.sync="drawer"
      direction="ltr"
      size="400px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="发送对象" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio :label="0" >企业</el-radio>
            <el-radio :label="2">候选人</el-radio>
            <el-radio :label="1">推荐人</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="消息标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入消息标题" clearable></el-input>
        </el-form-item>
        <el-form-item label="消息内容" prop="content">
          <el-input type="textarea" v-model="ruleForm.content" placeholder="请输入消息内容" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click='drawer == false'>取消</el-button>
          <el-button type="primary" @click="onSubmit">立即发送</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script src="./NewsCheck.js"></script>
<style lang="stylus" scoped src="./NewsCheck.css"></style>
