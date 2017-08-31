/**
 * Created by xiekun on 2017/06/21 0021.
 */
import {Toast} from 'mint-ui';
export default {
    components: {
        [Toast.name]: Toast
    },
    methods: {
        showTip: function (msg) {
            Toast({
                message: msg,
                position: 'bottom',
                duration: 2000
            });
        }
    }
}