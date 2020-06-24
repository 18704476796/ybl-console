// 数据接口
import req from './http.js'
// 登录模块接口
export const LOGIN_IMG = params => req('post', '/company/aboutusUs.htm', params) // 登录页面背景图片及logo接口
export const LOGIN = params => req('post', '/user/validateLogin.htm', params) // 登录验证接口
export const NAV_ONE = params => req('post', '/user/getIndex.htm', params) // 登录成功初始化一级导航
export const VALIDATE_BEFORE_LOGIN = params => req('post', '/user/validateBeforeLogin.htm', params) // 验证码登录接口
export const GO_PHONE_CODE = params => req('post', '/goPhoneCode.htm', params) // 注册发送验证码接口

// home导航交互接口
export const NAV_LEFT_CONTENT = params => req('post', '/user/getMenuList.htm', params) // 点击一级导航左侧导航及内容
export const PERSON_CENTER = params => req('post', '/user/getPersonCenter.htm', params) // 欢迎页接口

// 资源管理模块接口
export const FIND_MENU_ALL = params => req('post', '/menu/findMenuAll.htm', params) // 资源管理初始化
export const SAVE_UPDATE_MENU = params => req('post', '/menu/saveOrUpdateMenu.htm', params) // 资源管理保存和修改接口
export const DELETE_MENU = params => req('post', '/menu/deleteMenu.htm', params) // 资源管理删除数据接口

// 权限管理模块接口
export const FIND_ROLE_CONTROL = params => req('post', '/role/findRoleControl.htm', params) // 权限管理,角色权限切换数据接口
export const JURISDICTION_PRESERVATION_MODIFY = params => req('post', '/role/saveOrUpdateRoleControl.htm', params) // 权限管理，权限变化更新接口

// 角色管理模块接口
export const FIND_ROLE_LIST = params => req('post', '/role/findRoleList.htm', params) // 角色管理数据接口
export const SAVE_UPDATE_ROLE = params => req('post', '/role/saveOrUpdateRole.htm', params) // 角色创建保存角色信息数据接口
export const DELETE_ROLE = params => req('post', '/role/deleteRole.htm', params) // 角色管理删除角色数据接口
export const LOGOUT_SYS_USER = params => req('post', '/sysUser/logoutSysUser.htm', params) // 注销用户管理接口

// 用户管理模块接口
export const FIND_SYS_USER_LIST = params => req('post', '/sysUser/findSysUserList.htm', params) // 用户管理数据接口
export const UPDATE_SYS_USER_STATUS = params => req('post', '/sysUser/updateSysUserStatus.htm', params) // 用户管理修改用户状态数据接口
export const SAVE_UPDATE_SYS_USER = params => req('post', '/sysUser/saveOrUpdateSysUser.htm', params) // 创建用户数据接口
export const DELETE_SYS_USER = params => req('post', '/sysUser/deleteSysUser.htm', params) // 删除用户管理数据接口
export const HAS_SYS_USER = params => req('post', '/sysUser/isHasSysUser.htm', params) // 判断用户帐号是否占用接口
export const SAVE_UPDATE_COMPANY = params => req('post', '/company/saveAndUpdateCompany.htm', params) // 新增修改平台信息
export const FIND_ENTER_PRISE_LIST = params => req('post', '/backEnterprise/findEnterpriseList.htm', params) // 新增修改平台信息
export const FIND_INDUSTRY_POSITION_LIST = params => req('post', '/backIndustryPosition/findIndustryPositionList.htm', params) // 分类管理初始化接口
export const SAVE_UPDATE__INDUSTRY_POSITION_CLASSIFY = params => req('post', '/backIndustryPosition/saveOrUpdIndustryPositionClassify.htm', params) // 新增修改分类信息接口
export const DEL_INDUSTRY_POSITION_BYID = params => req('post', '/backIndustryPosition/delIndustryPositionById.htm', params) // 删除分类信息接口
export const FIND_CLASSIFY_LIST = params => req('post', '/backIndustryPosition/findClassifyList.htm', params) // 获取行业分类列表信息接口
export const UPD_ENTERPRISE_LOCKED = params => req('post', '/backEnterprise/updEnterpriseforLocked.htm', params) // 修改企业启用禁用状态表信息接口
export const FIND_RECRUIT_POSITION_LIST = params => req('post', '/backRecruitPosition/findRecruitPositionList.htm', params) // 岗位管理查询接口
// export const FIND_ENTERPRISE_FOR_LIST = params => req('post', '/backEnterprise/findEnterpriseForList.htm', params) // 所属公司查询接口
export const DETAILSRECRUIT_POSITION = params => req('post', '/backRecruitPosition/detailsRecruitPosition.htm', params) // 岗位招聘查看详情
export const FINDUSERS_RESUME_LIST = params => req('post', '/backUserResume/finduserResumeList.htm', params) // 人才管理初始化接口
export const DETAILS_USER_RESUMENT_LIST = params => req('post', '/backUserResume/detailsUserResumeList.htm', params) // 人才管理查看详情
export const FIND_WELFARE_LIST_TYPE = params => req('post', '/backWelfare/findWelfareListByType.htm', params) // 福利待遇查询初始化接口
export const SAVE_OR_UPD_WELFARE = params => req('post', '/backWelfare/saveOrUpdWelfare.htm', params) // 福利待遇新增修改接口
export const DELET_WELFARE_BTID = params => req('post', '/backWelfare/deletWelfareById.htm', params) // 福利待遇新增修改接口
export const FIND_WELFARE_LIST_BY_TYPE = params => req('post', '/backWelfare/findWelfareListByType.htm', params) // 获取薪资列表接口
export const FIND_FINANCE_LIST = params => req('post', '/backFinance/findFinanceList.htm', params) // 财务管理列表接口
export const FINANCE_DATAD = params => req('post', '/backFinance/financeData.htm', params) // 财务管理列表接口

// 消息管理模块
export const FIND_PUSH_MESSAGE_LIST = params => req('post', '/pushMessage/findPushMessageList.htm', params) // 消息管理初始化接口
export const FIND_PHONE_MESSAGE_LIST = params => req('post', '/pushMessage/findPhoneMessageList.htm', params) // 短信管理初始化接口
export const TO_PUSH_MESSAGE = params => req('post', '/pushMessage/toPushMessage.htm', params) // 发送消息接口
export const FIND_RELEASE_USER_LIST = params => req('post', '/pushMessage/findReleaseUserList.htm', params) // 获取发布人列表接口
export const DELET_PUSH_MESSAGE_BYID = params => req('post', '/pushMessage/deletPushMessageById.htm', params) // 删除消息、短信接口
export const TO_PHONE_MESSAGE = params => req('post', '/pushMessage/toPhoneMessage.htm', params) // 发送短信接口

// 活动管理模块
export const FIND_ACTIVITY_LIST = params => req('post', '/backActivity/findActivityList.htm', params) // 活动管理查询接口
export const DELET_ACTIVITY_BYID = params => req('post', '/backActivity/deletActivityById.htm', params) // 活动管理删除接口

// 问题管理模块
export const FIND_HELP_FEEDBACK_LIST = params => req('post', '/backHelpFeedback/findHelpFeedbackList.htm', params) // 问题管理初始化查询接口
export const DEL_HELP_FEEDBACK_BYID = params => req('post', '/backHelpFeedback/delHelpFeedbackById.htm', params) // 问题管理删除接口
export const SAVE_ORUP_HELP_FEEDBACK = params => req('post', '/backHelpFeedback/saveOrUpdHelpFeedback.htm', params) // 问题管理添加编辑接口
export const SAVE_AND_UPDATE_REMINDER = params => req('post', '/company/saveAndUpdateReminder.htm', params) // 温馨提示添加编辑接口

// 分类管理模块
export const FIND_HELP_FEEDBACK_FOR_CLASS = params => req('post', '/backHelpFeedback/findHelpFeedbackForClass.htm', params) // 分类管理初始化接口
export const SAVEORUPD_HELP_FEEDBACK_FOR_CLASS = params => req('post', '/backHelpFeedback/saveOrUpdHelpFeedbackForClass.htm', params) // 分类管理添加修改接口

// 规则管理模块
export const FIND_REWARD_LIST = params => req('post', '/backReward/findRewardList.htm', params) // 规则管理初始化接口
export const SAVE_ORUPD_REWARD = params => req('post', '/backReward/saveOrUpdReward.htm', params) // 规则管理添加修改接口
export const DEL_REWAR_BYID = params => req('post', '/backReward/delRewarById.htm', params) // 规则管理删除接口
export const SAVE_ANDUPDATE_AGREEMENT = params => req('post', '/company/saveAndUpdateAgreement.htm', params) // 用户协议编辑接口

// 招聘管理模块
export const FIND_USER_RESUME_COMPANY_RECRUITLIST = params => req('post', '/backUserResume/findUserResumeCompanyRecruitListForPage.htm', params) // 招聘管理初始化接口
export const DETAILS_RESUMECMPANY_RECRUIT = params => req('post', '/backUserResume/detailsUserResumeCompanyRecruit.htm', params) // 招聘管理查看详情接口

// 企业管理模块
export const ENTERPRISE_BYID = params => req('post', '/backEnterprise/enterpriseById.htm', params) // 企业信息查看详情接口
export const ENTERPRISW_TO_EXAMINE = params => req('post', '/backEnterprise/enterpriseToEexamine.htm', params) // 企业审核接口
export const FIND_ENTERPRISE_NAME = params => req('post', '/backUserResume/findEnterpriseName.htm', params) // 所属公司查询接口

// 平台初始化页面模块
export const COMPANY_DETAILY = params => req('post', '/company/companyDetaily.htm', params) // 平台初始化接口
export const UPLOAD_LOGO = params => req('post', '/company/uploadLogo.htm', params) // 上传图片接口
export const SAVE_LOGO_DETAILY = params => req('post', '/company/saveLogoDetaily.htm', params) // 上传logo信息接口

// 推荐人管理模块
export const FIND_RECOMMENDATION_LIST = params => req('post', '/backEnterprise/findRecommendationList.htm', params) // 推荐人初始化列表接口
export const FIND_RECOMMENDATION_DETAIL = params => req('post', '/backEnterprise/findRecommendationDetail.htm', params) // 查看推荐人详情接口

// 这里使用了箭头函数，转换一下写法：/
// export const LOGIN = function(req) {
//   return req('post', '/user/validateLogin.htm', params)
// }
