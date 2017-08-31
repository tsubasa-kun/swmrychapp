<template>
    <div>
        <v-empty-view v-if="honors.length <= 0"></v-empty-view>
        <div v-else class="content">
            <div v-for="honor in honors" class="content-item" @click="toProgress(honor.WID)">
                <span class="main-label">{{ honor.RYCHMC }}</span>
                <div>
                    <span class="sub-label">申请时间</span>
                    <span class="sub-label">{{ honor.SQSJ }}</span>
                </div>
                <span class="status-label pass" v-if="honor.SHZT === '99'">{{ honor.SHZT_DISPLAY }}</span>
                <span class="status-label refused" v-else-if="honor.SHZT.indexOf('-') === 0">{{ honor.SHZT_DISPLAY }}</span>
                <span class="status-label waiting" v-else>{{ honor.SHZT_DISPLAY }}</span>
                <i class="iconfont status-icon">&#xe79e;</i>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        margin-top: 20PX;
        background-color: white;
        border-top: solid 1PX #e8e8e8;
        border-bottom: solid 1PX #e8e8e8;
    }

    .content-item {
        position: relative;
        width: 100%;
        background-color: white;
        margin-left: 10PX;
        padding: 10PX 10PX 10PX 0PX;
        border-bottom: solid 1PX #e8e8e8;
    }

    .main-label {
        display: block;
        font-size: 20PX;
        color: #000;
        margin-bottom: 5PX;
    }

    .sub-label {
        display: inline-block;
        margin-right: 5PX;
        font-size: 12PX;
        color: #92969c;
    }

    .status-label {
        position: absolute;
        top: 22PX;
        right: 30PX;
        display: inline-block;
        font-size: 14PX;
        color: #92969c;
    }

    .status-icon {
        position: absolute;
        top: 23PX;
        right: 10PX;
        display: inline-block;
        font-size: 20PX;
        color: #92969c;
    }

    .pass {
        color: #06c1ae;
    }

    .waiting {
        color: #ffb200;
    }

    .refused {
        color: #ff571a;
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
            this.$http.get(Api.GET_STUDENT_APPLIED_HONORARY)
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
            toProgress: function (WID) {
                this.$router.push({path: '/reviewProgress', query: {WID: WID}});
            }
        }
    }
</script>