<!-- 用户协议 -->
<template>
  <div class="info">
    <div class="title">用户协议：（点击第一行输入）</div>
    <el-form ref="formEdit" :model="formEdit" :rules="rules" style="width: 100%;">
      <el-form-item prop="userAgreement">
        <editor-bar v-model="formEdit.userAgreement" :isClear="isClear" :editDisable='editDisable'></editor-bar>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click='edit()' :disabled="editDis">编辑</el-button>
      <el-button type="primary" :disabled="disabled" @click="onSubmitEdit">提交</el-button>
    </div>
  </div>
</template>

<script src="./UserAgreement.js"></script>
<style lang="stylus" scoped src="./UserAgreement.css"></style>
