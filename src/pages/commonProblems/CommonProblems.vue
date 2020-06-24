<!-- 问题管理 -->
<template>
  <div class="box">
    <screen-box
      :positionList='positionList'
      @advertisingNameSearch="advertisingNameSearch"
      @advPositionSearch='advPositionSearch'
      @advAdd="advAdd"
      @classCheckShow='classCheckShow'>
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      :disabled="disabled"
      @edit="edit"
      @deleteUser="deleteUser"
      @lookUser='lookUser'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      :title="addUpdateTitle"
      :visible.sync="drawer"
      direction="ltr"
      size="1000px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="110px" style="padding: 0 10px;">
        <el-form-item label="发布设置">
          <el-switch
            slot-scope="scope"
            v-model="ruleForm.locked"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
            active-text="显示"
            inactive-text="隐藏">
          </el-switch>
        </el-form-item>
        <el-form-item label="问题标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入问题标题" clearable autocomplete="off" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="问题分类" prop="type">
          <el-select
            v-model="ruleForm.type"
            placeholder="请选择"
            class="statusSelect"
            :disabled="disabled">
            <el-option
              v-for="item in positionList"
              :key="item.id"
              :label="item.classifyText"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <div class="titleCon">
            请编辑问题内容：<span style="color: #CACACA">(点击第一行进行输入)</span>
          </div>
          <editor-bar v-model="ruleForm.content" :isClear="isClear"></editor-bar>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled='disabled' @click="onSubmit">{{addUpdateButton}}</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-drawer
      title="分类管理"
      :visible.sync="centerDialogVisible"
      direction="rtl"
      size="60%"
      :before-close="handleClose"
      class='classify'>
      <div>
       <class-check
         :classTableData='classTableData'
         @addClassify='addClassify'
         @classEdit='classEdit'
         @classDelete='classDelete'
       >
       </class-check>
       <el-drawer
         :title="classifyTitle"
         :append-to-body="true"
         :before-close="handleClose"
         :visible.sync="innerDrawer"
         direction="rtl"
         class="drawerBox">
         <el-form ref="classForm" :model="classForm" :rules="ruless" label-width="80px" style="padding: 0 10px;">
           <el-form-item label="分类名称" prop="name">
             <el-input v-model="classForm.name" placeholder="请输入分类名称" clearable autocomplete="off"></el-input>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmitClass">{{classButton}}</el-button>
           </el-form-item>
         </el-form>
       </el-drawer>
      </div>
    </el-drawer>
  </div>
</template>

<script src="./CommonProblems.js"></script>
<style lang="stylus" scoped src="./CommonProblems.css"></style>
