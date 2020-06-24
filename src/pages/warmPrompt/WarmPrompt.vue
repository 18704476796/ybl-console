<!-- 温馨提示 -->
<template>
  <div class="info">
    <div class="title">温馨提示：</div>
    <el-form ref="formEdit" :model="formEdit" :rules="rules" style="width: 100%;">
      <el-form-item prop="reminder">
        <editor-bar v-model="formEdit.reminder" :isClear="isClear"></editor-bar>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click='edit()' :disabled="editDis">编辑</el-button>
      <el-button type="primary" :disabled="disabled" @click="onSubmitEdit">提交</el-button>
    </div>
  </div>
</template>

<script src="./WarmPrompt.js"></script>
<style lang="stylus" scoped src="./WarmPrompt.css"></style>
