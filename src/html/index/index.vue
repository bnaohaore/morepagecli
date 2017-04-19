<template>
    <div>
        <div class="fiex-div">dfdsf</div>
        <span>我日哦</span>
        {{name}}

        改变颜色
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
        改变大小
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>
        禁用按钮
        <mt-button disabled>disabled</mt-button>
        幽灵按钮
        <mt-button plain>plain</mt-button>
    </div>
</template>


<script>

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