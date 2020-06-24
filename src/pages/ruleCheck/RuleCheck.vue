<!-- 规则管理 -->
<template>
  <div class="box">
    <screen-box
      @welfareAdd="welfareAdd">
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      @edit="edit"
      @deleteUser="deleteUser">
    </tables>
    <el-drawer
      :title="welfareTitle"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" style="padding: 0 10px;">
        <el-form-item label="状态">
          <el-switch
            slot-scope="scope"
            v-model="ruleForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
            active-text="显示"
            inactive-text="隐藏">
          </el-switch>
        </el-form-item>
        <el-form-item label="梯度值(元)" prop="title">
          <el-input type="number" v-model="ruleForm.title" placeholder="请输入梯度值" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{welfareButton}}</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script src="./ruleCheck.js"></script>
<style lang="stylus" scoped src="./ruleCheck.css"></style>
