<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">荣誉称号一览</mt-tab-item>
            <mt-tab-item id="2">我的申请</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <honor-view></honor-view>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <my-apply></my-apply>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<style scoped>
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3PX solid #06c1ae;
        color: #06c1ae;
        margin-bottom: -3PX;
    }
</style>

<script type="text/javascript">
    import {Navbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';
    import honorView from '../honorView/honorView.vue';
    import myApply from '../myApply/myApply.vue';
    import Api from '../../api';

    export default {
        data(){
            return {
                selected: '1'
            }
        },
        components: {
            [Navbar.name]: Navbar,
            [TabItem.name]: TabItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            'honor-view': honorView,
            'my-apply': myApply
        },
        created() {
            SDK.setTitleText('荣誉称号');
            this.$http.get(Api.SET_DEFAULT_ROLE);
        }
    }
</script>