import axios from 'axios'
import {
  Message
} from 'element-ui'
// const URL = 'http://112.74.105.6:8080/bishuiwan/api/'
const URL = 'http://112.74.105.6:8080/bishuiwan/api/'
// const URL = 'http://10.0.0.110:8080/bishuiwan/api/'

axios.defaults.baseURL = URL
// 超时时间
axios.defaults.timeout = 300000

// http请求拦截器
axios.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  Message.closeAll()
  Message.error({
    message: '加载超时',
    customClass: 'messageClass',
    center: true
  })
  return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(res => {
  console.log(res.request.responseURL);
  let lastUrl = res.request.responseURL.split('/')
  console.log(lastUrl);
  
  // 响应成功关闭loading
  if (lastUrl[lastUrl.length-1] == 'ifSettlement') {
    
    
  } else {
    
    Message.closeAll()
    if (res.data.code != 1 && res.data.code != null) {
      Message.error({
        message: res.data.desc,
        customClass: 'messageClass1',
        center: true
      })
    }
  }
  return res
}, error => {
  Message.closeAll()
  // Message.success({
  //   message: '服务器404',
  //   customClass: 'messageClass',
  //   center: true
  // })
  return Promise.reject(error)
})
// 	登录页图片接口
export const getLoginPic = obj => {
  return axios.get('configure/get', {
    params: obj
  }).then(res => res.data)
}

// 登录
export const checkLogin = params => axios.post('user/login', params).then(res => res.data)

// 用户退出
export const outLogin = params => axios.post('user/logout', params).then(res => res.data)

// 5.1.1	通知 information/getInformationList
export const getInformationList = params => axios.post('information/getInformationList', params).then(res => res.data)

// 5.1.1	跳转消息之前先调用这个接口  information/getInformation
export const getInformation = params => axios.post('information/getInformation', params).then(res => res.data)

// 5.1.1	气泡信息（9-28新增）user/getRecordNew
export const getRecordNew = params => axios.post('user/getRecordNew', params).then(res => res.data)

// 5.1.2	公告列表  notice/page
export const page = params => axios.post('notice/page', params).then(res => res.data)

// 5.1.3	公告详情（调用此接口才知道谁读取了公告） notice/get
export const getPage = params => axios.post('notice/get', params).then(res => res.data)

// 无图片列表 notice/pageNoImage
export const pageNoImage = params => axios.post('notice/pageNoImage', params).then(res => res.data)

// 6.1.1	表格录入事件主题验证  event/examineImportEvent
export const examineImportEvent = params => axios.post('event/examineImportEvent', params).then(res => res.data)

// 6.1.	导入表格  event/importEvent
export const getImportExcelEvent = params => axios.post('event/getImportExcelEvent', params).then(res => res.data)

// 不验证 
export const getImportEvent = params => axios.post('event/getImportEvent', params).then(res => res.data)

// 6.1.2	表格录入模板(11-5新增) exportEventExcel
export const exportEventExcel = params => axios.post('event/exportEventExcel', params).then(res => res.data)

// 6.1.2	表格录入事件主题 event/importEvent
export const importEvent = params => axios.post('event/importEvent', params).then(res => res.data)

// 6.1.3	表格录入成功事件主题 event/importSuccessEvent
export const importSuccessEvent = params => axios.post('event/importSuccessEvent', params).then(res => res.data)

// 6.1.13	获取常选人员列表  commonuser/getCommonUserList
export const getCommonUserList = params => axios.post('commonuser/getCommonUserList', params).then(res => res.data)

// 6.1.14	设为常选人员  commonuser/setCommonUser
export const setCommonUser = params => axios.post('commonuser/setCommonUser', params).then(res => res.data)

// 6.1.14	取消常选人员  commonuser/cancelCommonUser
export const cancelCommonUser = params => axios.post('commonuser/cancelCommonUser', params).then(res => res.data)

// 6.1.11	按层级获取部门
export const getDepartment = params => axios.post('department/getJsonDepartment', params).then(res => res.data)

// 6.1.11	按层级获取部门
export const getAllDepartment = params => axios.post('department/getAllJsonDepartment', params).then(res => res.data)

// 6.1.10	获取企业终审人列表或搜索终审人 user/getExamineUserByBusiness
export const getExamineUserByBusiness = params => axios.post('user/getExamineUserByBusiness', params).then(res => res.data)

// 6.1.3	表格录入事件主题验证 event/examineImportEvent
// export const examineImportEvent = params => axios.post('event/examineImportEvent', params).then(res => res.data)

// 6.2.2	初审人或终审人获取审核事件详情（更详细请查看6.1.3） eventTitle/getExamineEventTitle
export const getExamineEventTitle = params => axios.post('eventTitle/getExamineEventTitle', params).then(res => res.data)

// 批量审核 examiner/batchExamine
export const batchExamine = params => axios.post('examiner/batchExamine', params).then(res => res.data)

// 6.4.2	是否已经结算 reward/ifSettlement
export const ifSettlement = params => axios.post('reward/ifSettlement', params).then(res => res.data)

// 6.4.1	结算 reward/settlement
export const settlement = params => axios.post('reward/settlement', params).then(res => res.data)

// 6.5.3	固定积分是否已经结算 steady/ifSettlement
export const steadyIfSettlement = params => axios.post('steady/ifSettlement', params).then(res => res.data)

// 6.5.4	固定积分结算 steady/settlement
export const steadySettlement = params => axios.post('steady/settlement', params).then(res => res.data)

//  steady/exportSteady
export const exportSteady = params => axios.post('steady/exportSteady', params).then(res => res.data)

// 6.4.3	导出报表（11-4增） reward/exportRewardTask
export const exportRewardTask = params => axios.post('reward/exportRewardTask', params).then(res => res.data)

// 6.5.1	下载Excel模板 steady/exportExcludeUserModelExcel
export const exportExcludeUserModelExcel = params => axios.post('steady/exportExcludeUserModelExcel', params).then(res => res.data)

// 6.5.2	XX月结算明细 steady/pageSteady
export const pageSteady = params => axios.post('steady/pageSteadyDetail', params).then(res => res.data)

// 6.5.6	排除人员 steady/pageExcludeUser
export const pageExcludeUser = params => axios.post('steady/pageExcludeUser', params).then(res => res.data)

// 6.5.7	添加排除人员 steady/addExcludeUser
export const addExcludeUser = params => axios.post('steady/addExcludeUser', params).then(res => res.data)

// 6.5.8	删除排除人员 steady/deleteExcludeUser
export const deleteExcludeUser = params => axios.post('steady/deleteExcludeUser', params).then(res => res.data)

// 6.5.1	导入Excel(会进行Excel验证,然后在回传) steady/importExcludeUserUserExcel
export const importExcludeUsersExcel = params => axios.post('steady/importExcludeUsersExcel', params).then(res => res.data)

// 6.3.1	获取全部事件类型名称 eventtype/getEventTypeName
export const getEventTypeName = params => axios.post('eventtype/getEventTypeName', params).then(res => res.data)

// 7.1.1	获取积分类型  score/getScoreType 
export const getScoreType = params => axios.post('score/getScoreType ', params).then(res => res.data)

// 7.1.2	(集团,子公司,部门)(月度,阶段性,累计)报表
export const scorePageScore = params => axios.post('score/pageScore', params).then(res => res.data)

// 7.1.3	(集团,子公司,部门)(月度,阶段性,累计)导出报表Excel  score/exportScorelExce
export const exportScorelExcel = params => axios.post('score/exportScorelExcel', params).then(res => res.data)

// 7.1.4	(集团,子公司,部门)月度分析 score/getScoreAnalysisByMonth
export const getScoreAnalysisByMonth = params => axios.post('score/getScoreAnalysisByMonth', params).then(res => res.data)

// 7.1.5	(集团,子公司,部门)阶段分析（10-24更改返回数据格式） score/getScoreAnalysisByStage
export const getScoreAnalysisByStage = params => axios.post('score/getScoreAnalysisByStage', params).then(res => res.data)

// 7.1.6	(集团,子公司,部门)累计分析  score/getScoreAnalysisByAccumulate
export const getScoreAnalysisByAccumulate = params => axios.post('score/getScoreAnalysisByAccumulate', params).then(res => res.data)

// 7.1.7	获取所有自定义报表
export const getAllReport = params => axios.post('report/getAllReport', params).then(res => res.data)

// 7.1.9	自定义(月度,阶段性,累计)报表 score/pageCustomizeScore
export const pageCustomizeScore = params => axios.post('score/pageCustomizeScore', params).then(res => res.data)

// 7.1.10	自定义(月度,阶段性,累计)导出报表  score/ exportCustomizeScorelExcel
export const exportCustomizeScorelExcel = params => axios.post('score/exportCustomizeScorelExcel', params).then(res => res.data)

// 7.1.11	自定义报表月度分析（10-24更改返回数据格式） score/getCustomizeScoreAnalysisByMonth
export const getCustomizeScoreAnalysisByMonth = params => axios.post('score/getCustomizeScoreAnalysisByMonth', params).then(res => res.data)

// 7.1.12	自定义报表阶段分析（10-24更改返回数据格式） score/getCustomizeScoreAnalysisByStage
export const getCustomizeScoreAnalysisByStage = params => axios.post('score/getCustomizeScoreAnalysisByStage', params).then(res => res.data)

// 7.1.13	自定义报表累计分析（10-24更改返回数据格式） score/getCustomizeScoreAnalysisByAccumulate
export const getCustomizeScoreAnalysisByAccumulate = params => axios.post('score/getCustomizeScoreAnalysisByAccumulate', params).then(res => res.data)

// 7.2.1	所有小组 
export const pageGroup = params => axios.post('group/pageGroup', params).then(res => res.data)

// 7.2.1	新建小组 group/createGroup
export const createGroup = params => axios.post('group/createGroup', params).then(res => res.data)

// 7.2.1	修改小组 group/editGroup
export const editGroup = params => axios.post('group/editGroup', params).then(res => res.data)

// 7.2.1	删除小组 group/deleteGroup
export const deleteGroup = params => axios.post('group/deleteGroup', params).then(res => res.data)

// 7.2.1	小组详情 group/groupDetails
export const groupDetails = params => axios.post('group/groupDetails', params).then(res => res.data)

// 7.2.1	删除小组成员  group/deleteGroupUser
export const deleteGroupUser = params => axios.post('group/deleteGroupUser', params).then(res => res.data)

// 7.2.1	添加小组成员 addGroupUser
export const addGroupUser = params => axios.post('group/addGroupUser', params).then(res => res.data)

// 7.2.2	导出小组模板 group/exportGroupModelExcel
export const exportGroupModelExcel = params => axios.post('group/exportGroupModelExcel', params).then(res => res.data)

// 7.2.3	导入Excel小组(会进行Excel验证,然后在回传) group/importGroupUserExcel
export const importGroupUserExcel = params => axios.post('group/importGroupUserExcel', params).then(res => res.data)

// 7.3.1	所有报表 report/pageReport
export const pageReport = params => axios.post('report/pageReport', params).then(res => res.data)

// 7.3.2	新建自定义报表 report/createReport
export const createReport = params => axios.post('report/createReport', params).then(res => res.data)

// 7.3.3	修改自定义报表 report/editReport
export const editReport = params => axios.post('report/editReport', params).then(res => res.data)

// 7.3.4	删除自定义报表 report/deleteReport
export const deleteReport = params => axios.post('report/deleteReport', params).then(res => res.data)

// 7.3.2	添加报表小组  report/addReportGroup
export const addReportGroup = params => axios.post('report/addReportGroup', params).then(res => res.data)

// 7.3.3	删除报表的小组 report/deleteReportGroup
export const deleteReportGroup = params => axios.post('report/deleteReportGroup', params).then(res => res.data)

// 7.3.1	报表详情 group/groupDetails
export const reportDetails = params => axios.post('report/reportDetails', params).then(res => res.data)

// 8.1.1	任务大厅任务列表 task/taskList
export const taskList = params => axios.post('task/taskList', params).then(res => res.data)

// 8.1.2	抢任务 task/grabTask 
export const grabTask = params => axios.post('task/grabTask', params).then(res => res.data)

// 8.1.3	查看任务大厅任务详情 task/getTask
export const getTask = params => axios.post('task/getTask', params).then(res => res.data)

// 8.1.4	查看我的任务列表  task/getCurrentTaskList
export const getCurrentTaskList = params => axios.post('task/getCurrentTaskList', params).then(res => res.data)

// 8.1.5	查看我的任务详情 task/getMyTask
export const getMyTask = params => axios.post('task/getMyTask', params).then(res => res.data)

// 8.1.6	发布任务 task/publishTask
export const publishTask = params => axios.post('task/publishTask', params).then(res => res.data)

// 8.1.8	获取进行中或已结束的任务列表 task/getPublishTaskList
export const getPublishTaskList = params => axios.post('task/getPublishTaskList', params).then(res => res.data)

// 8.1.9	查看我的草稿任务列表 task/getDraftTask
export const getDraftTask = params => axios.post('task/getDraftTask', params).then(res => res.data)

// 8.1.10	获取进行中或已结束的任务详情 task/getPublishTaskDetail
export const getPublishTaskDetail = params => axios.post('task/getPublishTaskDetail', params).then(res => res.data)

// 8.1.11	获取草稿箱任务详情  task/getDraftTaskDetail
export const getDraftTaskDetail = params => axios.post('task/getDraftTaskDetail', params).then(res => res.data)

// 8.1.12	编辑草稿箱任务 task/updateDraftTask
export const updateDraftTask = params => axios.post('task/updateDraftTask', params).then(res => res.data)

// 8.1.13	删除草稿箱任务 task/deleteDraftTask
export const deleteDraftTask = params => axios.post('task/deleteDraftTask', params).then(res => res.data)

// 8.1.15	提交任务 task/submitTask
export const submitTask = params => axios.post('task/submitTask', params).then(res => res.data)

// 8.1.16	撤回任务 task/recallTask
export const recallTask = params => axios.post('task/recallTask', params).then(res => res.data)

// 9.4.1	我的资料 user/personal
export const personal = params => axios.post('user/personal', params).then(res => res.data)

// 9.4.3	设置推荐头像 user/setHead
export const setHead = params => axios.post('user/setHead', params).then(res => res.data)

// 9.4.4	设置上传头像 user/updateHead
export const updateHead = params => axios.post('user/updateHead', params).then(res => res.data)

export default axios
