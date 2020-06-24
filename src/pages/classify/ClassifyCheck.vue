<!-- 行业管理 -->
<template>
  <div class="box">
    <screen-box
      @changeStatusValue="changeStatusValue"
      @changeCheckStatus='changeCheckStatus'
      @changeDate='changeDate'
      @search="search"
      @driverAdd="driverAdd">
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      :disabled="disabled"
      @onlocked="onlocked"
      @edit="edit"
      @deleteUser="deleteUser"
      @addChildList='addChildList'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      :title="addOrUpdateTitle"
      :visible.sync="drawer"
      direction="ltr"
      size="300px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" style="padding: 0 10px;">
        <div class="form-wapper">
          <el-form-item label="排序" prop="classifySort">
            <el-input type="number" v-model="ruleForm.classifySort" placeholder="请输入排序" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入名称" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-select
              v-model="ruleForm.status"
              placeholder="请选择"
              class="statusSelect">
              <el-option
                v-for="item in firmType"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关键词" prop="keyWord">
            <el-input v-model="ruleForm.keyWord" placeholder="请输入关键词" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="分类描述" prop="classifyDescribe">
            <el-input v-model="ruleForm.classifyDescribe" placeholder="请输入分类描述" clearable autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{addOrUpdateButton}}</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script src="./ClassifyCheck.js"></script>
<style lang="stylus" scoped src="./ClassifyCheck.css"></style>
