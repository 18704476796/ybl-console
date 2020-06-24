<!-- 招聘管理 -->
<template>
  <div class="box">
    <screen-box
      @search='search'>
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      @lookUser='lookUser'>
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-drawer
      title=""
      :visible.sync="drawer"
      direction="ltr"
      size="70%"
      :before-close="handleClose"
      class="drawerBox">
      <div class="tatWapper">
        <div class="talentsDetal">
          <div class="talentTitle">招聘详情</div>
          <div class="border detailTables">
            <div class="detPhoto">
              <div style="margin-bottom: 30px;">
                <img :src='api + sysUsers.headPath'>
              </div>
              <span>{{sysUsers.userName}}</span>
              <div>
                <span class="tatStutas">
                  <span v-show="userResume.status==0">在职</span>
                  <span v-show="userResume.status==1">求职</span>
                  <span v-show="userResume.status==2">离职</span>
                </span>
              </div>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">候选人姓名</div>
                <div class="teaCon">{{sysUsers.realName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">性别</div>
                <div class="teaCon">
                    <span v-show='sysUsers.userSex == 0'>保密</span>
                    <span v-show='sysUsers.userSex == 1'>男</span>
                    <span v-show='sysUsers.userSex == 2'>女</span>
                </div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">年龄</div>
                <div class="teaCon">{{sysUsers.age}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">城市</div>
                <div class="teaCon">{{sysUsers.address}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">学历</div>
                <div class="teaCon">{{userResume.educationalLevel}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">工作经验</div>
                <div class="teaCon">{{userResume.workingYears}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">期望薪资（元）</div>
                <div class="teaCon">{{userResume.expectSalary}}</div>
              </div>
              <div class="tatList">
                <div class="teaSpan border-right">期望行业类别</div>
                <div class="teaCon">{{userResume.industryName}}</div>
              </div>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">期望岗位</div>
                <div class="teaCon">{{userResume.positionName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">期望工作地点</div>
                <div class="teaCon">{{userResume.expectAddr}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">手机号</div>
                <div class="teaCon">{{sysUsers.phoneNum}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">邮箱</div>
                <div class="teaCon">{{sysUsers.email}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">推荐人</div>
                <div class="teaCon">{{recommenderName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">求职匹配度</div>
                <div class="teaCon"></div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">简历发布状态</div>
                <div class="teaCon">
                  <span v-show='userResume.resumeStatus == 0'>未发布</span>
                  <span v-show='userResume.resumeStatus == 1'>已发布</span>
                  <span v-show='userResume.resumeStatus == 2'>删除</span>
                </div>
              </div>
              <div class="tatList">
                <div class="teaSpan border-right">简历发布时间</div>
                <div class="teaCon">{{userResume.releaseTime}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="talentsDetal">
          <div class="talentTitle">求职进度（应聘企业：{{enterpriseName}}）</div>
           <el-timeline style='margin-left: 30px;'>
            <el-timeline-item
              v-for="(activity, index) in companyRecruitRecord"
              :key="index"
              :timestamp="activity.createTime">
              {{activity.recruitStatusText}}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script src="./RecruitmentCheck.js"></script>
<style lang="stylus" scoped src="./RecruitmentCheck.css"></style>
