<!-- 岗位管理 -->
<template>
  <div class="box">
    <screen-box
      :postClass='postClass'
      :firmList='firmList'
      @refreshPostList='refreshPostList'
      @refreshFirmList='refreshFirmList'
      @postNameSearch="postNameSearch"
      @postClassSeachs='postClassSeachs'
      @firmListSeachs='firmListSeachs'>
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
      title="新增企业信息"
      :visible.sync="drawer"
      direction="ltr"
      size="680px"
      :before-close="handleClose"
      class="drawerBox">
    </el-drawer>
    <el-dialog
      title="岗位详情"
      :visible.sync="centerDialogVisible"
      width="70%"
      center>
      <div class="postDetil">
        <div class="postTitle" style="margin-top: 50px;">
          <i class="iconfont">&#xe8a0;</i><span>基本信息</span>
        </div>
        <div class="postCont">
          <div class="postName">{{companyRecruitPosition.positionName}}</div>
          <div class="postList">
            <div class="listTitle">岗位编号</div>
            <div class="listCont">{{companyRecruitPosition.id}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">岗位类别</div>
            <div class="listCont">{{companyRecruitPosition.industryName}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">薪资待遇</div>
            <div class="listCont">
              {{companyRecruitPosition.startSalary}}-{{companyRecruitPosition.endSalary}}
            </div>
          </div>
          <div class="postList">
            <div class="listTitle">福利待遇</div>
            <div class="listCont">
              {{companyRecruitPosition.welfare}}
              <!-- <span class="daiyu">xxx</span>
              <span class="daiyu">xxx</span> -->
            </div>
          </div>
          <div class="postList">
            <div class="listTitle">所属企业</div>
            <div class="listCont">{{companyRecruitPosition.enterpriseName}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">工作地点</div>
            <div class="listCont">{{companyRecruitPosition.iaddressd}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">岗位要求</div>
            <div class="listCont" v-html="companyRecruitPosition.requirements">
            </div>
          </div>
          <div class="postList">
            <div class="listTitle">岗位职责</div>
            <div class="listCont" v-html="companyRecruitPosition.duty">
            </div>
          </div>
        </div>
      </div>
      <div class="postDetil">
        <div class="postTitle">
          <i class="iconfont">&#xe750;</i><span>限制要求</span>
        </div>
        <div class="postCont">
          <div class="postList">
            <div class="listTitle">学历要求</div>
            <div class="listCont">{{companyRecruitPosition.educationCondition}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">工作经验要求</div>
            <div class="listCont">
              {{companyRecruitPosition.positionCondition}}
            </div>
          </div>
          <div class="postList">
            <div class="listTitle">性别要求</div>
            <div class="listCont">
              {{companyRecruitPosition.genderCondition}}
            </div>
          </div>
          <div class="postList">
            <div class="listTitle">其他要求</div>
            <div class="listCont">
              <div class="listCont">
                {{companyRecruitPosition.otherCondition}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="postDetil">
        <div class="postTitle">
          <i class="iconfont">&#xe61d;</i><span>岗位统计</span>
        </div>
        <div class="postCont">
          <div class="postList">
            <div class="listTitle">需求数量(个)</div>
            <div class="listCont">{{companyRecruitPosition.recruitNum}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">总赏金(元)</div>
            <div class="listCont">{{companyRecruitPosition.rewardMoney}}</div>
          </div>
          <div class="postList">
            <div class="listTitle">招聘进度</div>
            <div class="listCont">
              <div v-show = 'companyRecruitPosition.staues == 0'>未发布</div>
              <div v-show = 'companyRecruitPosition.staues == 1'>已发布</div>
              <div v-show = 'companyRecruitPosition.staues == 2'>已完成</div>
              <div v-show = 'companyRecruitPosition.staues == 3'>失效</div>
            </div>
          </div>
        </div>
      </div>
      <div class="postDetil">
        <div class="postTitle">
          <i class="iconfont">&#xe664;</i><span>推荐人</span>
        </div>
        <div class="postCont">
          <ul class="postPhone">
            <li v-for="(item, index) of recommenderList" :key='index'>
              <img :src='api + item.headPath'/>
              <div>{{item.realName}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="postDetil">
        <div class="postTitle">
          <i class="iconfont">&#xe601;</i><span>候选人</span>
        </div>
        <div class="postCont">
          <ul class="postPhone">
            <li v-for="(item, index) of candidateList" :key='index'>
              <img :src='api + item.headPath'/>
              <div>{{item.realName}}</div>
            </li>
          </ul>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./PostCheck.js"></script>
<style lang="stylus" scoped src="./PostCheck.css"></style>
