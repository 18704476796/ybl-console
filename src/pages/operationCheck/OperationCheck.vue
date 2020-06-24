<!-- 活动管理 -->
<template>
  <div class="box">
    <screen-box
      :positionList='positionList'
      @advertisingNameSearch="advertisingNameSearch"
      @advPositionSearch='advPositionSearch'
      @changeDate='changeDate'
      @advAdd="advAdd">
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
        <div class="form-wapper">
          <div class="form-left">
            <el-form-item label="广告名称" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入广告名称" clearable autocomplete="off" :disabled="disabled"></el-input>
            </el-form-item>
            <el-form-item label="广告位置" prop="position">
              <el-select
                v-model="ruleForm.position"
                placeholder="请选择"
                class="statusSelect"
                :disabled="disabled">
                <el-option
                  v-for="item in positionList"
                  :key="item.lable"
                  :label="item.value"
                  :value="item.label">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间" prop="startTime">
              <el-date-picker
                :disabled='disabled'
                v-model="ruleForm.startTime"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <div class="timeTip" v-if='timeTo'>开始时间不能大于结束时间</div>
            <el-form-item label="结束时间" prop="endTime">
              <el-date-picker
                :disabled='disabled'
                v-model="ruleForm.endTime"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="上线/下线">
               <el-radio-group v-model="ruleForm.goOut">
                 <el-radio label="上线" :disabled='disabled'></el-radio>
                 <el-radio label="下线" :disabled='disabled'></el-radio>
               </el-radio-group>
             </el-form-item>
          </div>
          <div class="form-right">
            <el-form-item label="广告类型" prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择"
                class="statusSelect"
                :disabled="disabled"
               >
                <el-option
                  v-for="item in typeList"
                  :key="item.lable"
                  :label="item.value"
                  :value="item.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="广告图片" prop="imageUrlLogo">
              <el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :auto-upload="false"
                :drag="true"
                accept="image/png, image/jpeg"
                :on-change="(file, fileList)=>handlePictureCardPreview(file, fileList, 'imageUrlLogo')"
                list-type="picture-card">
                <div v-if="previewImgSrcLogo">
                  <img :src="previewImgSrcLogo" class="avatar">
                </div>
                <span v-else>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将图片拖到此处或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">请上传750*300,jpg/png,大小不能超过100kb文件</div>
                </span>
              </el-upload>
            </el-form-item>
            <el-form-item label="广告链接" prop="address">
              <el-input v-model="ruleForm.address" placeholder="请输入链接" clearable autocomplete="off" :disabled='disabled'></el-input>
            </el-form-item>
          </div>
        </div>
        <el-form-item>
          <div>请编辑广告内容：（点击第一行输入）</div>
          <editor-bar v-model="ruleForm.content" :isClear="isClear" :editDisable='editDisable'></editor-bar>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :disabled='disabled' @click="onSubmit">{{addUpdateButton}}</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="centerDialogVisibles"
      width="50%"
      min-width="900px"
      height="300px"
      center
      :close-on-click-modal="false">
      <img :src="previewImg" v-if="dialogIf" style="width: 100%;">
      <div v-else style="width: 100%; height: 300px;">
        <vueCropper
          ref="cropper"
          :img="option.img"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :centerBox="option.centerBox"
          :fixed="option.fixed"
          :info="option.info"
          :enlarge="option.enlarge"
        >
        </vueCropper>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisibles = false">取 消</el-button>
        <el-button type="primary" @click="realTime" v-if="!dialogIf">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="广告信息"
      :visible.sync="centerDialogVisible"
      width="70%"
      center>
      <div class="border-wapper">
        <div class="checkTable border">
          <div class="border-bottom">
            <label class="border-right">广告名称</label>
            <span>{{enterprise.name}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">广告位置</label>
            <span v-if='enterprise.advertisingLocation == 1'>app首页活动</span>
            <span v-if='enterprise.advertisingLocation == 2'>赏金活动</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">广告类型</label>
            <span v-if='enterprise.type == 1'>赏金活动</span>
            <span v-if='enterprise.type == 2'>岗位首页活动</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">广告链接</label>
            <span>{{enterprise.linkUrl}}</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">上线/下线</label>
            <span v-if='enterprise.staues == 0'>下线</span>
            <span v-if='enterprise.staues == 1'>上线</span>
          </div>
          <div class="border-bottom">
            <label class="border-right">开始时间</label>
            <span>{{enterprise.startTime}}</span>
          </div>
          <div class="">
            <label class="border-right">到期时间</label>
            <span>{{enterprise.endTime}}</span>
          </div>
        </div>
        <div class="checkTable border">
          <div class="border-bottom">
            <label class="border-right imgDiv">广告内容</label>
            <span v-html="enterprise.fContent"></span>
          </div>
          <div class="border-bottom">
            <label class="border-right imgDiv">广告图片</label>
            <span><img :src='api + enterprise.pictureUrl' :class="{'active':isChooseFace}" @click="imgScc"/></span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./OperationCheck.js"></script>
<style lang="stylus" scoped src="./OperationCheck.css"></style>
