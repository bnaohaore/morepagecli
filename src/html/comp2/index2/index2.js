/**
 * Created by hasee on 2018/8/15.
 */
import index from './index2.vue';

import Vue from 'vue';
import api from 'apists'
const apis =api;
console.log(apis);

new Vue({
    el:'#app',
    render: mod => mod(index)
});
