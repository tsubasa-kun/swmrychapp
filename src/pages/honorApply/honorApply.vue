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
        <div class="deed-div">
            <span class="deed-label">主要事迹</span>
            <textarea class="model-inst-input" placeholder="请输入内容" v-model="deed" maxlength="200"></textarea>
        </div>
        <div class="count-div">
            <span class="count-text">{{ count }}</span>
            <span class="count-max">/200</span>
        </div>
        <mt-button class="apply-btn" @click="toApply">提交</mt-button>
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

    .sub-text {
        display: inline-block;
        font-size: 12PX;
        color: #000;
    }

    .deed-div {
        position: relative;
        padding: 10PX;
        border-top: solid 1PX #e8e8e8;
        border-bottom: solid 1PX #e8e8e8;
        background-color: white;
    }

    .deed-label {
        vertical-align: top;
        display: inline-block;
        font-size: 20PX;
        color: #000;
    }

    .model-inst-input {
        display: inline-block;
        height: 150PX;
        margin-left: 10PX;
        resize: none;
        outline: none;
        border: 0;
        font-size: 15PX;
    }

    .count-div {
        width: 100%;
        padding-right: 10PX;
        text-align: right;
    }

    .count-text {
        display: inline-block;
        right: 36PX;
        color: #92969c;
        font-size: 10PX;
    }

    .count-max {
        display: inline-block;
        right: 10PX;
        color: #92969c;
        font-size: 10PX;
    }

    .apply-btn {
        width: calc(100% - 20PX);
        color: white;
        background-color: #06c1ae;
        margin: 20PX 10PX 10PX 10PX;
    }
</style>

<script type="text/javascript">
    import Api from '../../api';
    import {Indicator, Toast, Button} from 'mint-ui';
    export default {
        data() {
            return {
                honor: this.$route.query,
                deed: '',
                count: 0
            }
        },
        components: {
            [Indicator.name]: Indicator,
            [Button.name]: Button,
            [Toast.name]: Toast
        },
        methods: {
            toApply: function () {
                if (this.deed.length > 0) {
                    Indicator.open();
                    var params = '?RYCHDM=' + this.honor.RYCHDM + '&SQLY=' + encodeURI(encodeURI(this.deed));
                    this.$http.get(Api.SAVE_STUDENT_APPLY_HONORARY + params)
                        .then(res => {
                            return res.json();
                        })
                        .then(res => {
                            Indicator.close();
                            this.showTip(res.msg);
                            if (res.status === '200') {
                                this.$router.go(-2);
                            }
                        });
                } else {
                    Indicator.close();
                    this.showTip('请填写主要事迹');
                }
            },
            showTip: function (msg) {
                Toast({
                    message: msg,
                    position: 'bottom',
                    duration: 2000
                });
            }
        },
        watch: {
            deed: function () {
                this.count = this.deed.length;
            }
        },
        created() {
            SDK.setTitleText('申请荣誉称号');
        }
    }
</script>