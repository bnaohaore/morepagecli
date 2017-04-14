<template>
    <div class="oiu">
        {{name}}
        <img src="../../images/logo_03.png">
        <img src="../../images/girl.jpg">
        <span class="iconfont  icon-yiwen"></span>
    </div>
</template>


<script>

    import config from '../../config.js'

    export default{
        name: 'set',
        components: {
            //模块
        },
        data(){
            return {
                name:'我是set，set，set情深'
            }
        },
        mounted(){

        }, //初始化方法
        methods: {}   //内部函数
    }
</script>


<style>
    .oiu{
        width: 200px;height: 200px;background: darkblue;
    }
</style>