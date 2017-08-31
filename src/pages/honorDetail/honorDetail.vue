<template>
    <div class="content">
        <div class="holder"></div>
        <div class="info-div">
            <span class="main-label">{{ honor.RYCHMC }}</span>
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
                <span class="sub-text">{{ honor.SQRS }}/{{ honor.FPSL }}</span>
            </div>
        </div>
        <div class="holder"></div>
        <div class="info-div">
            <span class="main-label">荣誉称号简介</span>
            <span class="sub-label full">{{ honor.JJ }}</span>
        </div>
        <div class="holder"></div>
        <div class="info-div mb-60">
            <span class="main-label">评定条件认定</span>
            <span class="sub-text full">{{ condition }}</span>
        </div>

        <mt-button v-if="disabled" class="apply-btn-disable" disabled>我要申请</mt-button>
        <mt-button v-else class="apply-btn" @click="toApply">我要申请</mt-button>
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
        background-color: white;
    }

    .info-div {
        padding: 10PX 0PX 10PX 10PX;
        border-top: solid 1PX #e8e8e8;
        border-bottom: solid 1PX #e8e8e8;
        background-color: white;
    }

    .main-label {
        display: block;
        height: 35PX;
        font-size: 20PX;
        color: #000;
        margin-bottom: 15PX;
        border-bottom: solid 1PX #e8e8e8;
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

    .sub-label.full {
        width: 100%;
        padding-right: 10PX;
    }

    .sub-text {
        display: inline-block;
        font-size: 12PX;
        color: #000;
    }

    .sub-text.full {
        width: 100%;
        padding-right: 10PX;
    }

    .apply-btn {
        width: 100%;
        color: white;
        background-color: #06c1ae;
        position: fixed;
        bottom: 0;
    }

    .apply-btn-disable {
        width: 100%;
        color: white;
        background-color: #aaa;
        position: fixed;
        bottom: 0;
    }

    .mb-60 {
        margin-bottom: 60PX;
    }
</style>

<script type="text/javascript">
    import Api from '../../api';
    import {Indicator, Button} from 'mint-ui';
    import Utils from '../../utils';

    export default {
        data() {
            return {
                honor: this.$route.query,
                condition: '',
                disabled: true
            }
        },
        created() {
            SDK.setTitleText('荣誉称号详情');
            Indicator.open();
            var params1 = '?RYCHDM=' + this.honor.RYCHDM;
            this.$http.get(Api.GET_HONORARY_CONDITION_INFO + params1)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    let ctemCon = res.datas.MSG;
                    this.condition = ctemCon.replace(/<br \/>/g, '');
                    Indicator.close();
                });
            Indicator.open();
            var params2 = '?IDENTITY_ID=' + this.honor.XSBH + '&RYCHDM=' + this.honor.RYCHDM + '&PDXN=' + this.honor.PDXN
                + '&PDXQ=' + this.honor.PDXQ;
            this.$http.get(Api.VALIDATE_STUDENT_CAN_APPLY_HONORARY + params2)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    if (res.datas) {
                        if (res.datas.FLAG === '1') {
                            this.disabled = false;
                        } else {
                            this.disabled = true;
                            let tip = res.datas.MSG;
                            tip = tip.replace(/<br \/>/g, '');
                            Utils.methods.showTip(tip);
                        }
                    } else {
                        Utils.methods.showTip(res.msg);
                    }
                    Indicator.close();
                });
        },
        components: {
            [Indicator.name]: Indicator,
            [Button.name]: Button
        },
        methods: {
            toApply: function () {
                this.$router.push({path: '/honorApply', query: this.honor});
            }
        }
    }
</script>