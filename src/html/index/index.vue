<template>
    <div>
        <div class="fiex-div">dfdsf</div>
        <span>我日哦</span>
        {{name}}
    </div>
</template>


<script>
    import config from '../../config.js'
    export default{
        name: 'index',
        data(){
            return {
                name:'我是index页面'
            }
        },
        components: {
            //模块
        },

        mounted(){


        },  //初始化方法
        methods: {

        }   //内部函数
    }
</script>


<style >
    *{
        margin: 0;
        padding: 0;

    }
    html,body{
        background: red;
    }
    ul,li{
        list-style: none;
    }
    .fiex-div{
        display: flex;
    }

</style>