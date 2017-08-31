/**
 * Created by xiekun on 2017/4/12 0012.
 */
export default {
    SET_DEFAULT_ROLE: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/setDefaultRole.do',//设置用户角色
    GET_HONORARY_INFO: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/getHonoraryInfo.do',//查询荣誉称号信息(奖项一览)
    GET_HONORARY_CONDITION_INFO: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/getHonoraryConditionInfo.do',//查询荣誉称号的资格条件
    VALIDATE_STUDENT_CAN_APPLY_HONORARY: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/validateStuCanApplyHonorary.do',//校验学生是否满足荣誉称号申请条件
    SAVE_STUDENT_APPLY_HONORARY: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/saveStuApplyHonorary.do',//荣誉称号申请保存
    GET_STUDENT_APPLIED_HONORARY: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/getStuApplyedHonoraryInfo.do',//查询学生已申请荣誉称号
    GET_STUDENT_HONORARY_DETAIL: WEBPACK_CONIFG_HOST + '/sys/rychapp/MobileHonoraryStuApply/getStuHonoraryDetailInfo.do'//查询申请的荣誉称号详情
}
