import { modu } from '../../config.js'
import indexxx from './index.vue';

const Vue=modu.Vue;


Vue.component(modu.Button.name, modu.Button);

 new Vue({
    el:'#app',
     render: mod => mod(indexxx)

});

