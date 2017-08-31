<template>
    <div class="content">
        <div class="holder"></div>
        <div class="info-div">
            <div class="title-div">
                <span class="main-label">{{ honor.RYCHMC }}</span>
                <div @click="toInfo">
                    <span class="detail-label">查看申请信息</span>
                    <i class="iconfont detail-icon">&#xe79e;</i>
                </div>
            </div>
            <div class="sub-div">
                <span class="sub-label">开放时间</span>
                <span class="sub-text">{{ honor.SQKSRQ }} - {{ honor.SQJSRQ }}</span>
            </div>
            <div class="sub-div">
                <span class="sub-label">评定学期</span>
                <span class="sub-text">{{ honor.PDXQ_DISPLAY }}</span>
            </div>
            <div class="sub-div">
                <span class="sub-label">已申请人数/名额</span>
                <span class="sub-text">{{ honor.SQSL }}/{{ honor.ME }}</span>
            </div>
        </div>
        <div class="holder"></div>
        <div class="info-div">
            <span class="main-label">审核进度</span>
            <div class="check-steps-div">
                <div class="step-item-div" v-for="step in honor.SHRZ">
                    <div class="status-item-time">
                        <span v-if="step.SHYJ !== undefined && step.SHYJ.length > 0">{{ step.SHYJ[0].SHSJ }}</span>
                    </div>
                    <div class="status-item-left">
                        <img src="../../assets/waiting.png" v-if="step.DQZTDM === honor.SHZT">
                        <i class="iconfont status-icon-refused"
                           v-else-if="step.SHYJ !== undefined && step.SHYJ.length > 0 && refused">&#xe67a;</i>
                        <i class="iconfont status-icon-pass" v-else-if="step.DQZTDM < curPX || curPX === 0">&#xe68c;</i>
                        <i class="iconfont status-icon-dot" v-else>&#xe672;</i>
                    </div>
                    <div class="status-item-right">
                        <span class="step-text">{{ step.DQZTDM_DISPLAY }}</span>
                        <span class="opinion-text" v-if="step.SHYJ !== undefined && step.SHYJ.length > 0">审核人：{{ step.SHYJ[0].SHR }}</span>
                        <span class="opinion-text" v-if="step.SHYJ !== undefined && step.SHYJ.length > 0">审核意见：{{ step.SHYJ[0].SHYJ }}</span>
                    </div>
                </div>
                <div class="step-item-div">
                    <div class="status-item-time">
                        <span></span>
                    </div>
                    <div class="status-item-left-end">
                        <i class="iconfont status-icon-pass" v-if="honor.SHZT === '99'">&#xe68c;</i>
                        <i class="iconfont status-icon-dot" v-else>&#xe672;</i>
                    </div>
                    <div class="status-item-right">
                        <span class="step-text">已通过</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        height: 100%;
        background-color: white;
    }

    .holder {
        width: 100%;
        height: 20PX;
    }

    .info-div {
        padding: 10PX 0PX 10PX 10PX;
        border-top: solid 1PX #e8e8e8;
        border-bottom: solid 1PX #e8e8e8;
        background-color: white;
    }

    .title-div {
        position: relative;
    }

    .main-label {
        display: block;
        height: 35PX;
        font-size: 20PX;
        color: #000;
        margin-bottom: 15PX;
        border-bottom: solid 1PX #e8e8e8;
    }

    .detail-label {
        position: absolute;
        top: 3PX;
        right: 30PX;
        display: inline-block;
        font-size: 14PX;
        color: #92969c;
    }

    .detail-icon {
        position: absolute;
        top: 4PX;
        right: 10PX;
        display: inline-block;
        font-size: 20PX;
        color: #92969c;
    }

    .sub-div {
        margin-top: 5PX;
    }

    .sub-label {
        width: 100PX;
        display: inline-block;
        font-size: 12PX;
        color: #92969c;
    }

    .sub-text {
        display: inline-block;
        font-size: 12PX;
        color: #000;
    }

    .check-steps-div {
        width: 100%;
        background-color: white;
    }

    .step-item-div {
        width: 100%;
        height: 70PX;
        text-align: left;
    }

    .status-item-time {
        display: inline-block;
        vertical-align: top;
        text-align: right;
        width: 80PX;
        font-size: 12PX;
        color: #92969c;
    }

    .status-item-left {
        display: inline-block;
        height: 100%;
        padding-right: 15PX;
        border-right: solid 1PX #e8e8e8;
        position: relative;
    }

    .status-item-left i {
        position: absolute;
        right: -10PX;
        top: 0PX;
    }

    .status-item-left img {
        width: 20PX;
        height: 20PX;
        position: absolute;
        right: -10PX;
        top: 0PX;
    }

    .status-item-right {
        display: inline-block;
        margin-left: 10PX;
        vertical-align: top;
    }

    .step-text {
        display: block;
        text-align: left;
        font-size: 15PX;
    }

    .opinion-text {
        display: block;
        font-size: 12PX;
        color: #92969c;
    }

    .status-icon-pass {
        font-size: 20PX;
        color: #06c1ae;
        background-color: white;
    }

    .status-icon-refused {
        font-size: 20PX;
        color: #ff571a;
        background-color: white;
    }

    .status-icon-dot {
        font-size: 20PX;
        color: #e8e8e8;
        background-color: white;
    }

    .status-item-left-end {
        display: inline-block;
        height: 100%;
        padding-right: 15PX;
        position: relative;
    }

    .status-item-left-end i {
        position: absolute;
        right: -10PX;
        top: 0PX;
    }
</style>

<script type="text/javascript">
    import Api from '../../api';
    import {Indicator} from 'mint-ui';
    export default {
        data() {
            return {
                WID: this.$route.query.WID,
                honor: [],
                curPX: 0,
                refused: false
            }
        },
        created() {
            SDK.setTitleText('审核进度');
            Indicator.open();
            var params = '?WID=' + this.WID;
            this.$http.get(Api.GET_STUDENT_HONORARY_DETAIL + params)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.honor = res.datas;
                    this.getCurrentPX(this.honor.SHZT);
                    Indicator.close();
                });
        },
        components: {
            [Indicator.name]: Indicator
        },
        methods: {
            toInfo: function () {
                this.$router.push({path: '/applyInfo', query: {SQLY: this.honor.SQLY}})
            },
            getCurrentPX: function (curSHZT) {
                if (curSHZT.indexOf('-') === 0) {
                    this.refused = true;
                    curSHZT = curSHZT.substr(1, curSHZT.length);
                }
                for (var i = 0; i < this.honor.SHRZ.length; i++) {
                    if (curSHZT === this.honor.SHRZ[i].DQZTDM) {
//                        this.curPX = this.honor.SHRZ[i].PX;
                        this.curPX = this.honor.SHRZ[i].DQZTDM;
                    }
                }
            }
        }
    }
</script>