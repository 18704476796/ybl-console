<!-- 企业审核 -->
<template>
  <div class="box">
    <screen-box
      @changeCheckStatus='changeCheckStatus'
      @changeDate='changeDate'
      @search="search">
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      :disabled="disabled"
      @lookUser='lookUser'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-dialog
      title="企业信息详情"
      :visible.sync="centerDialogVisible"
      width="60%"
      center>
      <div class="border-wapper">
        <div class="checkTable border">
          <div class="border-bottom">
            <label class="border-right">企业帐号</label>
            <span>{{sysUsePulse.userName}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">企业名称</label>
            <span>{{enterprise.enterpriseName}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">所属行业</label>
            <span>{{enterprise.industryName}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">企业类型</label>
            <span>{{enterprise.comapnyType}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">企业规模</label>
            <span>{{enterprise.comapnyNum}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">企业地址</label>
            <span>{{enterprise.address}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">营业执照号</label>
            <span>{{enterprise.businessLicenseId}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">法人姓名</label>
            <span>{{enterprise.legalPerson}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">法人联系方式</label>
            <span>{{enterprise.legalPersonPhone}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">管理员姓名</label>
            <span>{{sysUsePulse.realName}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">管理员手机号</label>
            <span>{{sysUsePulse.phoneNum}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">管理员邮箱</label>
            <span>{{sysUsePulse.email}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">管理员身份证号</label>
            <span>{{sysUsePulse.idcard}}</span>
          </div>
        </div>
        <div class="checkTable border">
          <div class="border-bottom">
            <label class="border-right">审核状态</label>
            <span>
              <div v-if='sysUsePulse.userAuthStatus == 0'>未提交审核资料</div>
              <div v-if='sysUsePulse.userAuthStatus == -1'>已提交审核资料</div>
              <div v-if='sysUsePulse.userAuthStatus == 1'>审核通过</div>
              <div v-if='sysUsePulse.userAuthStatus == -2'>审核失败</div>
            </span>
          </div>
          <div class="border-bottom">
            <label class="border-right">注册时间</label>
            <span>{{sysUsePulse.createTime}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right imgDiv">企业logo</label>
            <span><img :src='api + enterprise.logo' :class="{'active':isLogo}" @click="imgScc('isLogo')"/></span>
          </div>
          <div class="border-bottom">
            <label class="border-right imgDiv">营业执照</label>
            <span><img :src='api + enterprise.businessLicense' :class="{'active':isYyzz}" @click="imgScc('isYyzz')"/></span>
          </div>
          <div>
            <label class="border-right imgDiv" style="height: 160px;">法人手持身份证照</label>
            <span><img :src='api + enterprise.handIdcardPic' :class="{'active':isFrsfz}" @click="imgScc('isFrsfz')"/></span>
          </div>
        </div>
      </div>
      <div style="margin-top: 30px; text-align: center;">
        <el-button type="primary" @click='onCheck'>通过审核</el-button>
        <el-button type="danger" @click='failChexk'>驳回审核</el-button>
      </div>
      <el-dialog
        width="30%"
        title="驳回备注"
        :visible.sync="innerVisible"
        append-to-body>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="" prop="authRemark">
            <el-input type="textarea" v-model="ruleForm.authRemark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script src="./EnterpriseAudit.js"></script>
<style lang="stylus" scoped src="./EnterpriseAudit.css"></style>
