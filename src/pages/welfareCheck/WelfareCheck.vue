<!-- 福利管理 -->
<template>
  <div class="box">
    <screen-box
      @changeStatusValue="changeStatusValue"
      @welfareAdd="welfareAdd"
      @payAdd='payAdd'>
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
        <el-form-item label="福利标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入福利标题" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{welfareButton}}</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-dialog :title="payTitle" :visible.sync="dialogFormVisible" width="500px" :rules="ruless">
      <el-form :model="formEdit">
        <el-form-item label="开始薪资(元)" label-width="100px" prop="startSalary">
          <el-input type="number" v-model="formEdit.startSalary" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="结束薪资(元)" label-width="100px" prop="endSalary">
          <el-input type="number" v-model="formEdit.endSalary" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitEdit">{{payButton}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./WelfareCheck.js"></script>
<style lang="stylus" scoped src="./WelfareCheck.css"></style>
