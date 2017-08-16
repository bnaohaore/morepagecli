/**
 * Created by hasee on 2017/4/13.
 */
//这里引入每个页面都可能用到的插件以及公共样式
import 'mint-ui/lib/style.css'
import Vue from 'vue';
import { Button } from 'mint-ui'
import api from 'apists'
Vue.prototype.apis=api;
//345345
var modu={
    Vue:Vue,Button:Button
};
 export  {modu}

