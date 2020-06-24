<!-- 招聘详情 -->
<template>
  <div class="border-wapper">
    <div class="checkTable border">
      <div class="border-bottom">
        <label class="border-right">岗位名称</label>
        <span>
          {{sysUserApproval.name}}
        </span>
      </div>
      <div class="border-bottom">
        <label class="border-right">岗位分类</label>
        <span>{{sysUserApproval.industryName}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">学历要求</label>
        <span>{{sysUserApproval.educationCondition}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">工作经验要求</label>
        <span>{{sysUserApproval.positionCondition}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">薪资待遇(元)</label>
        <span>{{sysUserApproval.startSalary}}--{{sysUserApproval.endSalary}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">福利待遇</label>
        <span>{{sysUserApproval.welfare}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">工作地点</label>
        <span>{{sysUserApproval.address}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">性别要求</label>
        <span v-if="sysUserApproval.genderCondition == 0">保密</span>
        <span v-if="sysUserApproval.genderCondition == 1">男</span>
        <span v-if="sysUserApproval.genderCondition == 2">女</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">其他要求</label>
        <span>{{sysUserApproval.otherCondition}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">招聘数量(个)</label>
        <span>{{sysUserApproval.recruitNum}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">岗位发布时间</label>
        <span>{{sysUserApproval.releaseTime}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">岗位职责</label>
        <span v-html="sysUserApproval.duty"></span>
      </div>
    </div>
    <div class="checkTable border">
      <div class="border-bottom">
        <label class="border-right">赏金总额度(元)</label>
        <span>{{sysUserApproval.rewardMoney}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">推荐人赏金(元)</label>
        <span>{{sysUserApproval.recommenderMoney}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">候选人赏金(元)</label>
        <span>{{sysUserApproval.candidateMoney}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">分享次数(次)</label>
        <span>{{sysUserApproval.shareNum}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">岗位热度</label>
        <span>{{sysUserApproval.heatNum}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">浏览次数(次)</label>
        <span>{{sysUserApproval.viewNum}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">招聘开始时间</label>
        <span>{{sysUserApproval.releaseStartTime}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">招聘截止时间</label>
        <span>{{sysUserApproval.releaseEndTime}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">招聘进度</label>
        <span v-show="sysUserApproval.staues==0">未发布</span>
        <span v-show="sysUserApproval.staues==1">已发布</span>
        <span v-show="sysUserApproval.staues==2">已完成</span>
        <span v-show="sysUserApproval.staues==3">已失效</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">招聘完成个数(个)</label>
        <span>{{sysUserApproval.recruitFinishNum}}</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">是否删除</label>
        <span v-show="sysUserApproval.isDelete==0">否</span>
        <span v-show="sysUserApproval.isDelete==1">是</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">是否收藏该岗位</label>
        <span v-show="sysUserApproval.positionCollectionId==0">否</span>
        <span v-show="sysUserApproval.positionCollectionId==1">是</span>
      </div>
      <div class="border-bottom">
        <label class="border-right">岗位要求</label>
        <span v-html="sysUserApproval.requirements"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZpDetil',
  props: {
    sysUserApproval: Object
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.border-wapper
  display: flex
  justify-content: space-between
  .checkTable
    width 50%
.checkTable
  div
    width 100%
    display flex
    min-height 30px
    label
      width 120px
      display block
      height auto
      line-height 35px
      text-align center
    span
      padding 5px
      line-height 30px
      width 310px
.checkButton
  margin-top 20px
  text-align center
</style>
