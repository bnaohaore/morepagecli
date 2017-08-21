/**
 * Created by hasee on 2017/8/11.
 */
import index from './home.vue';
import Vue from 'vue';


new Vue({
    el:'#app',
    render: mod => mod(index)
});
