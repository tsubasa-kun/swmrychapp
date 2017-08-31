<template>
    <div>
        <v-empty-view v-if="honors.length <= 0"></v-empty-view>
        <div v-else class="content">
            <div v-for="honor in honors" class="content-item">
                <div class="title-div">
                    <span class="main-label">{{ honor.RYCHMC }}</span>
                </div>
                <div class="sub-div">
                    <span class="sub-label">申请时间</span>
                    <span class="sub-text">{{ honor.SQKSRQ }} - {{ honor.SQJSRQ }}</span>
                </div>
                <div class="ysqrs-div">
                    <span class="ysqrs-num">{{ honor.SQRS }}</span>
                    <span class="ysqrs-label">人已申请</span>
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
        width: 100%;
        background-color: white;
        padding: 10PX 0PX 10PX 10PX;
        border-bottom: solid 1PX #e8e8e8;
    }

    .title-div {
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
        display: inline-block;
        font-size: 12PX;
        color: #92969c;
    }

    .sub-text {
        display: inline-block;
        font-size: 12PX;
        color: #000;
        margin-left: 5PX;
    }

    .ysqrs-div {
        position: absolute;
        top: 26PX;
        right: 10PX;
    }

    .ysqrs-num {
        color: #ff571a;
    }

    .ysqrs-label {
        color: #000;
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
            SDK.setTitleText('荣誉称号待办');

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

        }
    }
</script>