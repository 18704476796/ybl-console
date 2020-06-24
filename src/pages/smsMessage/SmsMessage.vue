<!-- 短信管理 -->
<template>
  <div class="box">
    <screen-box
      @changeCheckStatus='changeCheckStatus'
      @changeDate='changeDate'
      @sendMessage='sendMessage'
      :releaseUserList='releaseUserList'>
    </screen-box>
    <ul class="message-wapper">
      <li class="item-info" v-for="(item, index) of tableData" :key='index'>
        <div class="border-bottom top-info">
          <div class="top-left">
            <strong>发布人员：</strong><span>{{item.releaseUser}}</span>
            <strong>发送时间：</strong><span>{{item.releaseTime}}</span>
            <strong>接收角色：</strong><span>{{item.receiveRole}}</span>
            <strong>接收人数：</strong><span>{{item.gotoNumber}}人</span>
            <strong>推送类型：</strong>
            <span v-if='item.type == 1'>平台消息</span>
            <span v-if='item.type == 2'>内推进度</span>
            <span v-if='item.type == 3'>岗位推送</span>
          </div>
          <div class="top-right" style="margin-bottom: 3px;">
            <el-button type="info" style="padding: 5px;" icon="el-icon-delete" circle @click='deleteMessage(item.id)'></el-button>
          </div>
        </div>
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      title="发送短信"
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
        <el-form-item label="短信内容" prop="content">
          <el-input type="textarea" v-model="ruleForm.content" placeholder="请输入短信内容" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click='drawer == false'>取消</el-button>
          <el-button type="primary" @click="onSubmit">立即发送</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script src="./SmsMessage.js"></script>
<style lang="stylus" scoped src="./SmsMessage.css"></style>
