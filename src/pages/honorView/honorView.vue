<template>
    <div>
        <v-empty-view v-if="honors.length <= 0"></v-empty-view>
        <div v-else class="content">
            <div v-for="honor in honors" class="content-item">
                <div class="title-div">
                    <span class="main-label">{{ honor.RYCHMC }}</span>
                    <div @click="toDetail(honor)">
                        <span class="detail-label">查看详情</span>
                        <i class="iconfont detail-icon">&#xe79e;</i>
                    </div>
                </div>
                <div class="sub-div">
                    <span class="sub-label">开放时间</span>
                    <span class="sub-text">{{ honor.SQKSRQ }} - {{ honor.SQJSRQ }}</span>
                </div>
                <div class="sub-div">
                    <span class="sub-label">已申请人数/名额</span>
                    <span class="sub-text">{{ honor.SQRS }}/{{ honor.FPSL }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        margin-top: 3PX;
    }

    .content-item {
        position: relative;
        margin-top: 20PX;
        width: 100%;
        background-color: white;
        padding: 10PX 0PX 10PX 10PX;
        border-top: solid 1PX #e8e8e8;
        border-bottom: solid 1PX #e8e8e8;
    }

    .title-div {
        border-bottom: solid 1PX #e8e8e8;
    }

    .main-label {
        display: block;
        font-size: 20PX;
        color: #000;
        margin-bottom: 15PX;
    }

    .sub-div {
        margin-top: 10PX;
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

    .detail-label {
        position: absolute;
        top: 13PX;
        right: 30PX;
        display: inline-block;
        font-size: 14PX;
        color: #92969c;
    }

    .detail-icon {
        position: absolute;
        top: 14PX;
        right: 10PX;
        display: inline-block;
        font-size: 20PX;
        color: #92969c;
    }
</style>

<script type="text/javascript">
    import Api from '../../api';
    import {Indicator} from 'mint-ui';
    import emptyView from '../../components/emptyView/emptyView.vue';

    export default {
        data() {
            return {
                honors: []
            }
        },
        created() {
            Indicator.open();
            this.$http.get(Api.GET_HONORARY_INFO)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.honors = res.datas;
                    Indicator.close();
                });
        },
        components: {
            [Indicator.name]: Indicator,
            'v-empty-view': emptyView
        },
        methods: {
            toDetail: function (honor) {
                this.$router.push({path: '/honorDetail', query: honor});
            }
        }
    }
</script>