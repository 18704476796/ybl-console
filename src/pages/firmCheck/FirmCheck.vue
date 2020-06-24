<!-- 企业信息 -->
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
      size="920px"
      :before-close="handleClose"
      class="drawerBox">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" style="padding:10px;">
        <div class="list-item">
          <el-form-item label="状态">
            <el-switch
              slot-scope="scope"
              v-model="ruleForm.locked"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              active-text="启用"
              inactive-text="停用">
            </el-switch>
          </el-form-item>
          <el-form-item label="企业名称" prop="enterpriseName">
            <el-input v-model="ruleForm.enterpriseName" placeholder="请输入企业名称" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所属行业" prop="industryId">
            <el-select
              v-model="ruleForm.industryId"
              placeholder="请选择"
              class="statusSelect">
              <el-option
                v-for="item in options"
                :key="item.name"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="list-item">
          <el-form-item label="企业类型" prop="comapnyType">
            <el-select
              v-model="ruleForm.comapnyType"
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
          <el-form-item label="企业规模" prop="comapnyNum">
            <el-select
              v-model="ruleForm.comapnyNum"
              placeholder="请选择"
              class="statusSelect">
              <el-option
                v-for="item in firmScale"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业地址" prop="address">
            <el-input v-model="ruleForm.address" placeholder="请输入企业地址" clearable autocomplete="off" @focus="mapShow"></el-input>
          </el-form-item>
        </div>
        <div class="list-item">
          <el-form-item label="法人姓名" prop="legalPerson">
            <el-input v-model="ruleForm.legalPerson" placeholder="请输入法人姓名" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="法人手机" prop="legalPersonPhone">
            <el-input v-model="ruleForm.legalPersonPhone" placeholder="请输入联系方式" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="营业执照号" prop="businessLicenseId">
            <el-input v-model="ruleForm.businessLicenseId" placeholder="请输入营业执照号" clearable autocomplete="off"></el-input>
          </el-form-item>
        </div>
        <div class="list-item">
          <el-form-item label="管理员姓名" prop="realName">
            <el-input v-model="ruleForm.realName" placeholder="请输入姓名" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="管理员手机号" prop="phoneNum">
            <el-input v-model="ruleForm.phoneNum" placeholder="请输入手机号" clearable></el-input>
          </el-form-item>
          <el-form-item label="管理员邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入管理员邮箱" clearable></el-input>
          </el-form-item>
        </div>
        <div class="list-item">
          <el-form-item label="管理员身份证号" prop="idcard">
            <el-input v-model="ruleForm.idcard" placeholder="请输入管理身份证号箱" clearable autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" clearable autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" clearable autocomplete="off" :disabled="disabled"></el-input>
          </el-form-item>
        </div>
        <div class="list-item">
          <el-form-item prop="imageUrlLogo">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :auto-upload="false"
              :drag="true"
              accept="image/png, image/jpeg"
              :on-change="(file, fileList)=>handlePictureCardPreview(file, fileList, 'imageUrlLogo')"
              list-type="picture-card"
              :disabled="disabledLogo">
              <div v-if="previewImgSrcLogo">
                <img :src="previewImgSrcLogo" class="avatar">
                <div class="img-btn hyb_tsn">
                  <span class="el-icon-zoom-in" @click="handlePreview('imageUrlLogo')"></span>
                  <span class="el-icon-delete" @click="handleRemove('imageUrlLogo')"></span>
                </div>
              </div>
              <span v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将Logo拖到此处<br/>或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
              </span>
            </el-upload>
          </el-form-item>
          <el-form-item prop="imageUrlYyzz">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :auto-upload="false"
              :drag="true"
              accept="image/png, image/jpeg"
              :on-change="(file, fileList)=>handlePictureCardPreview(file, fileList, 'imageUrlYyzz')"
              list-type="picture-card"
              :disabled="disabledYyzz">
              <div v-if="previewImgSrcYyzz">
                <img :src="previewImgSrcYyzz" class="avatar">
                <div class="img-btn hyb_tsn">
                  <span class="el-icon-zoom-in" @click="handlePreview('imageUrlYyzz')"></span>
                  <span class="el-icon-delete" @click="handleRemove('imageUrlYyzz')"></span>
                </div>
              </div>
              <span v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将营业执照拖到此处<br/>或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
              </span>
            </el-upload>
          </el-form-item>
          <el-form-item prop="imageUrlSfz">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :auto-upload="false"
              :drag="true"
              accept="image/png, image/jpeg"
              :on-change="(file, fileList)=>handlePictureCardPreview(file, fileList, 'imageUrlSfz')"
              list-type="picture-card"
              :disabled="disabledSfz">
              <div v-if="previewImgSrcSfz">
                <img :src="previewImgSrcSfz" class="avatar">
                <div class="img-btn hyb_tsn">
                  <span class="el-icon-zoom-in" @click="handlePreview('imageUrlSfz')"></span>
                  <span class="el-icon-delete" @click="handleRemove('imageUrlSfz')"></span>
                </div>
              </div>
              <span v-else>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">管理手持身份证拖到此处或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
              </span>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item style="text-align: center; margin-top: 30px;">
          <el-button type="primary" @click="onSubmit">{{addUpdateButton}}</el-button>
        </el-form-item>
      </el-form>
      <!-- 地图 -->
      <el-dialog :visible.sync="dialogFormVisible">
        <bmap :form='form'></bmap>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="selectAddress">确 定</el-button>
        </div>
      </el-dialog>
    </el-drawer>
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
    <el-drawer
      title=""
      :visible.sync="centerDialogVisibleDetail"
      direction="ltr"
      size="100%"
      :before-close="handleClose"
      class="drawerBox">
      <div class="tatWapper">
        <div class="talentsDetal">
          <div class="talentTitle">企业详情</div>
          <div class="border detailTables">
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">企业名称</div>
                <div class="teaCon">{{enterprise.enterpriseName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">所属行业</div>
                <div class="teaCon">
                  {{enterprise.industryName}}
                </div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">企业类型</div>
                <div class="teaCon">{{enterprise.comapnyType}}</div>
              </div>
              <div class="tatList">
                <div class="teaSpan border-right">企业规模</div>
                <div class="teaCon">{{enterprise.comapnyNum}}</div>
              </div>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">企业法人</div>
                <div class="teaCon">{{enterprise.legalPerson}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">法人联系方式</div>
                <div class="teaCon">{{enterprise.legalPersonPhone}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">营业执照号</div>
                <div class="teaCon">{{enterprise.businessLicenseId}}</div>
              </div>
              <div class="tatList">
                <div class="teaSpan border-right">管理员姓名</div>
                <div class="teaCon">{{sysUsePulse.realName}}</div>
              </div>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">管理员手机号</div>
                <div class="teaCon">{{sysUsePulse.phoneNum}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">管理员邮箱</div>
                <div class="teaCon">{{sysUsePulse.email}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">管理员身份证号</div>
                <div class="teaCon">{{sysUsePulse.idcard}}</div>
              </div>
              <div class="tatList">
                <div class="teaSpan border-right">企业邀请码</div>
                <div class="teaCon">{{sysUsePulse.inviteCode}}</div>
              </div>
            </div>
          </div>
          <div class="moreAddress border">
            <div class="teaSpan border-right">企业地址</div>
            <div class="teaCon">{{enterprise.address}}</div>
          </div>
          <div class="moreAddress border" style="margin-bottom: 30px;">
            <div class="imgdiv border-right">
              <div class="teaSpan border-right">企业logo</div>
              <div class="teaCon">
                <!-- <el-image
                  style="width: 120px; height: 120px"
                  :src="logo">
                </el-image> -->
                <img :src="logo" preview='1' preview-text="" style="width: 120px; height: 120px" />
              </div>
            </div>
            <div class="imgdiv border-right">
              <div class="teaSpan border-right">营业执照</div>
              <div class="teaCon">
                <img :src="businessLicense" preview='1' preview-text="" style="width: 120px; height: 120px" />
              </div>
            </div>
            <div class="imgdiv border-right">
              <div class="teaSpan border-right">管理员手持身份证照片</div>
              <div class="teaCon">
                <img :src="handIdcardPic" preview='1' preview-text="" style="width: 120px; height: 120px" />
              </div>
            </div>
          </div>
        </div>
        <div class="talentsDetal">
          <div class="talentTitle">统计信息</div>
          <ul class="tjInfo border">
            <li class="infoItem border-right">保证金余额(元)</li>
            <li class="infoItem border-right">岗位数量(个)</li>
            <li class="infoItem border-right">推荐人</li>
            <li class="infoItem border-right">候选人</li>
            <li class="infoItem border-right">招聘成功率</li>
            <li class="infoItem border-right">企业热度</li>
          </ul>
          <ul class="tjInfo border" style="margin-top: -1px;">
            <li class="infoItem border-right">{{EnterpriseData.balance}}</li>
            <li class="infoItem border-right">{{EnterpriseData.positionNum}}</li>
            <li class="infoItem border-right">{{EnterpriseData.recommenderNum}}</li>
            <li class="infoItem border-right">{{EnterpriseData.candidateNum}}</li>
            <li class="infoItem border-right">{{EnterpriseData.recruitSuccessRate }}</li>
            <li class="infoItem border-right">{{EnterpriseData.heatNum}}</li>
          </ul>
        </div>
        <div class="talentsDetal" style="margin-top: 30px;">
          <div class="talentTitle">招聘岗位</div>
          <detail-tables
            :companyRecruitPositionList='companyRecruitPositionList'
            :tableHeight="tableHeight"
            @lookdetil='lookdetil'
          >
          </detail-tables>
          <paging-two
          :totalRowsTwo="totalRowsTwo"
          :pageSizeTwo="pageSizeTwo"
          @getInfoTwo="getInfoTwo"
          @getInfo_currentTwo="getInfo_currentTwo"
          >
          </paging-two>
        </div>
      </div>
      <el-dialog
        width="900px"
        title="岗位详情"
        :visible.sync="innerVisible"
        append-to-body>
        <zp-detil :sysUserApproval='sysUserApproval'></zp-detil>
      </el-dialog>
    </el-drawer>
  </div>
</template>

<script src="./FirmCheck.js"></script>
<style lang="stylus" scoped src="./FirmCheck.css"></style>
