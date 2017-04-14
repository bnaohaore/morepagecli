/**
 * Created by hasee on 2017/3/19.
 */
import Vue from 'vue';
import indexxx from './set.vue';

/*console.log(getEntry('./src/html/!**!/!*.js'));*/
new Vue({
    el:'body',
    template: '<indexxx/>',
    render: h => h(indexxx)
});
