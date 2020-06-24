<!-- 推荐人用户 -->
<template>
  <div class="box">
    <screen-box
      @changeStatusValue="changeStatusValue"
      @changeCheckStatus='changeCheckStatus'
      @search="search">
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      :disabled="disabled"
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
      :visible.sync="centerDialogVisible"
      direction="ltr"
      size="100%"
      :before-close="handleClose"
      class="drawerBox">
      <div class="tatWapper">
        <div class="talentsDetal">
          <div class="talentTitle">个人简介</div>
          <div class="border detailTables">
            <div class="detPhoto">
              <div>
                <img :src="api + sysUser.headPath">
              </div>
              <span>{{sysUser.realName}}</span>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">账号</div>
                <div class="teaCon">{{sysUser.userName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">审核状态</div>
                <div class="teaCon">
                  <span v-if='sysUser.userAuthStatus == 1'>审核通过</span>
                  <span v-if='sysUser.userAuthStatus == -2'>审核失败</span>
                </div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">姓名</div>
                <div class="teaCon">{{sysUser.realName}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">性别</div>
                <div class="teaCon">
                  <span v-show="sysUser.userSex == 0">保密</span>
                  <span v-show="sysUser.userSex == 1">男</span>
                  <span v-show="sysUser.userSex == 2">女</span>
                </div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">年龄</div>
                <div class="teaCon">{{sysUser.age}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">手机号</div>
                <div class="teaCon">{{sysUser.phoneNum}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">邮箱</div>
                <div class="teaCon">{{sysUser.email}}</div>
              </div>
            </div>
            <div class="detInfo border-left">
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">地址</div>
                <div class="teaCon">{{sysUser.address}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">状态</div>
                <div class="teaCon">
                  <span v-show="sysUser.locked == 0">锁定</span>
                  <span v-show="sysUser.locked == 1">启用</span>
                  <span v-show="sysUser.locked == 2">注销</span>
                </div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">最后登录时间</div>
                <div class="teaCon">{{sysUser.loginTime}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">部门</div>
                <div class="teaCon">{{sysUser.department}}</div>
              </div>
              <div class="tatList border-bottom">
                <div class="teaSpan border-right">身份证号</div>
                <div class="teaCon">{{sysUser.idcard}}</div>
              </div>
              <div class="tatList" style="height: 80px;">
                <div class="teaSpan border-right">个人简介</div>
                <div class="teaCon">{{sysUser.about}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="talentsDetal">
          <div class="talentTitle">统计信息</div>
          <el-table
            :data="userCount"
            style="width: 100%;"
            border
            class="box">
            <el-table-column prop="shareNum" label="各岗位分享次数(次)"></el-table-column>
            <el-table-column prop="recommenderSuccessNum" label="成功推荐人数(个)"></el-table-column>
            <el-table-column prop="recruitSuccessNum" label="成功入职人数(个)"></el-table-column>
            <el-table-column prop="totleMoney" label="赏金获取数量(元)"></el-table-column>
            <el-table-column prop="recruitSuccessRate" label="综合评分(分)">
              <template slot-scope="scope">
                <span v-if = "scope.row.recruitSuccessRate <= 0.1"> 1 </span>
                <span v-if = "scope.row.recruitSuccessRate > 0.1 && scope.row.recruitSuccessRate <= 0.2">2</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.2 && scope.row.recruitSuccessRate <= 0.3">3</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.3 && scope.row.recruitSuccessRate <= 0.4">4</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.4 && scope.row.recruitSuccessRate <= 0.5">5</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.5 && scope.row.recruitSuccessRate <= 0.6">6</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.6 && scope.row.recruitSuccessRate <= 0.7">7</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.7 && scope.row.recruitSuccessRate <= 0.8">8</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.8 && scope.row.recruitSuccessRate <= 0.9">9</span>
                <span v-if = "scope.row.recruitSuccessRate > 0.9">10</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="talentsDetal" style="margin-top: 30px;">
          <div class="talentTitle">内推记录</div>
          <detail-tables
            :companyRecruitPositionList='companyRecruitPositionList'
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

<script src="./ReferrerCheck.js"></script>
<style lang="stylus" scoped src="./ReferrerCheck.css"></style>
