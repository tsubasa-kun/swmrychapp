import index from './pages/index/index.vue';
import honorDetail from './pages/honorDetail/honorDetail.vue';
import honorApply from './pages/honorApply/honorApply.vue';
import reviewProgress from './pages/reviewProgress/reviewProgress.vue';
import applyInfo from './pages/applyInfo/applyInfo.vue';

export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/honorDetail',
            component: honorDetail
        },
        {
            path: '/honorApply',
            component: honorApply
        },
        {
            path: '/reviewProgress',
            component: reviewProgress
        },
        {
            path: '/applyInfo',
            component: applyInfo
        }
    ]
};