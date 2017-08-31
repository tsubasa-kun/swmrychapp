<template>
    <div class="content">
        <div class="label-div">
            <span>主要事迹</span>
        </div>
        <div class="content-div">
            <span>{{ reason }}</span>
        </div>
    </div>
</template>

<style scoped>
    .content {
        width: 100%;
        height: 100%;
        background-color: white;
    }

    .label-div {
        padding: 10PX;
        border-bottom: solid 1PX #e8e8e8;
    }

    .label-div span {
        font-size: 13PX;
        color: #92969c;
    }

    .content-div {
        padding: 10PX;
    }

    .content-div span {
        font-size: 16PX;
        color: #000;
    }
</style>

<script type="text/javascript">
    export default {
        data() {
            return {
                reason: this.$route.query.SQLY
            }
        },
        created() {
            SDK.setTitleText('申请信息');
        }
    }
</script>