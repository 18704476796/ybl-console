<!-- 人才管理 -->
<template>
  <div class="box">
    <screen-boxHidden
      @changeSexValue='changeSexValue'
      @changeAgeValue='changeAgeValue'
      @postClassSeachs='postClassSeachs'
      @changePayValue='changePayValue'
      :postClass='postClass'
      :payOptions='payOptions'
    >
    </screen-boxHidden>
    <screen-box
      @search='search'
      @changeStatusValue='changeStatusValue'
      @changeSortorValue='changeSortorValue'>
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
      size="100%"
      :before-close="handleClose"
      class="drawerBox">
      <div class="tatWapper">
        <div class="talentsDetal">
          <div class="talentTitle">人才详情</div>
          <div class="border detailTables">
            <div class="detPhoto">
              <div>
                <img :src='this.api + sysUsers.headPath'>
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
                <div class="teaSpan border-right">用户账号</div>
                <div class="teaCon">{{sysUsers.userName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">姓名</div>
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
                <div class="teaSpan border-right">生日</div>
                <div class="teaCon">{{sysUsers.birthday}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">城市</div>
                <div class="teaCon">{{sysUsers.address}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">工作经验</div>
                <div class="teaCon">{{userResume.workingYears}}</div>
              </div>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">期望薪资（元）</div>
                <div class="teaCon">{{userResume.expectSalary}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">期望行业类别</div>
                <div class="teaCon">{{userResume.industryName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">期望岗位类别</div>
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
            </div>
          </div>
        </div>
        <div class="talentsDetal">
          <div class="talentTitle">统计信息</div>
          <ul class="tjInfo border">
            <li class="infoItem border-right">求职次数（次）</li>
            <li class="infoItem border-right">求职奖励（元）</li>
            <!-- <li class="infoItem border-right">活跃度</li>
            <li class="infoItem border-right">综合评分</li> -->
          </ul>
          <ul class="tjInfo border" style="margin-top: -1px;">
            <li class="infoItem border-right">{{recruitCount}}</li>
            <li class="infoItem border-right">{{candidateMoney}}</li>
            <!-- <li class="infoItem border-right"></li>
            <li class="infoItem border-right"></li> -->
          </ul>
        </div>
        <div class="talentsDetal" style="margin-top: 30px;">
          <div class="talentTitle">求职记录</div>
          <detail-tables
            :recordTableDate='recordTableDate'
            :tableHeight="tableHeight"
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
    </el-drawer>
  </div>
</template>

<script src="./TalentsCheck.js"></script>
<style lang="stylus" scoped src="./TalentsCheck.css"></style>
