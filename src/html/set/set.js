/**
 * Created by hasee on 2017/3/19.
 */


import { modu } from '../../config.js'
import indexxx from './set.vue';
import { Picker } from 'mint-ui';


const Vue=modu.Vue;
Vue.component(Picker.name, Picker);
Vue.component(modu.Button.name, modu.Button);
new Vue({
    el:'body',
    template: '<indexxx/>',
    render: h => h(indexxx)
});
