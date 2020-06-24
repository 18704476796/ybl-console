<!-- 平台设置 -->
<template>
  <div>
    <screen-box>
    </screen-box>
    <div class="info">
      <div class="info-flex">
        <el-form ref="formEdit" :model="formEdit" :rules="rules" style="width: 400px;">
          <el-form-item label="平台名称" label-width="80px" prop="productName">
            <el-input v-model="formEdit.productName" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="平台标题" label-width="80px" prop='productTitle'>
            <el-input v-model="formEdit.productTitle" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="平台描述" label-width="80px" prop='productIntroduction'>
            <el-input v-model="formEdit.productIntroduction" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="关键词" label-width="80px" prop='productKeyword'>
            <el-input v-model="formEdit.productKeyword" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="收款账号" label-width="80px" prop="collectionAccount">
            <el-input v-model="formEdit.collectionAccount" type="text" placeholder="请输入银行卡账号" :maxlength="23" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="客服热线" label-width="80px" prop="tel">
            <el-input v-model="formEdit.tel" :disabled="disabled" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="客服邮箱" label-width="80px" prop="email">
            <el-input :disabled="disabled" v-model="formEdit.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="平台传真" label-width="80px" prop="hostUnit">
            <el-input type="number" v-model="formEdit.hostUnit" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="平台地址" label-width="80px" prop='webId'>
            <el-input v-model="formEdit.webId" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
        </el-form>
        <el-form ref="formEdit" :model="formEdit" :rules="rules" style="width: 400px;">
          <el-form-item label="平台邮编" label-width="80px" prop='icpNumb'>
            <el-input v-model="formEdit.icpNumb" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="技术支持" label-width="80px" prop='publicNetworkSecurity'>
            <el-input v-model="formEdit.publicNetworkSecurity" autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="产品logo" label-width="80px" prop="imageUrlLogo">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :auto-upload="false"
              :drag="true"
              accept="image/png, image/jpeg"
              :on-change="(file, fileList)=>handlePictureCardPreview(file, fileList, 'imageUrlLogo')"
              list-type="picture-card"
              :disabled="disabled">
              <div v-if="previewImgSrcLogo">
                <img :src="previewImgSrcLogo" class="avatar">
                <div class="img-btn hyb_tsn">
                  <span class="el-icon-zoom-in" v-if='bigDisabled' @click="handlePreview('imageUrlLogo')"></span>
                </div>
              </div>
              <span v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将Logo拖到此处<br/>或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
              </span>
            </el-upload>
          </el-form-item>
          <!-- <el-form-item label="背景图片" label-width="80px" prop="back_path">
            <el-upload
              class="upload-demo"
              ref="upload1"
              :action="upload_url"
              :on-change="back_path_file"
              accept=".jpg,.jpeg,.png"
              :auto-upload="false"
              list-type="picture"
              :file-list="back_path"
              :limit="1"
            >
              <el-button size="small" type="primary" :disabled="disabled" @click="clearUploadedImage('upload1')">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，文件不能超过50kb</div>
            </el-upload>
          </el-form-item> -->
          <el-form-item label="产品版本" label-width="80px" prop="productVersion">
            <el-input :disabled="disabled" v-model="formEdit.productVersion" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="其他" label-width="80px">
            <el-input type="textarea" :disabled="disabled" v-model="formEdit.otherInformation" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click='edit()' :disabled="editDis">编辑</el-button>
        <el-button type="primary" :disabled="disabled" @click="onSubmitEdit">提交</el-button>
      </div>
    </div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="centerDialogVisible"
      width="50%"
      min-width="300px"
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
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="realTime" v-if="!dialogIf">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./SetPlatform.js"></script>
<style lang="stylus" scoped src="./SetPlatform.css"></style>
